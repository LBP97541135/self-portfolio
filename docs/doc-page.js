const page = document.querySelector("[data-doc-page]");
const content = document.querySelector("#docContent");
const toc = document.querySelector("#docToc");
const titleNode = document.querySelector("#docTitle");
const leadNode = document.querySelector("#docLead");
const categoryNode = document.querySelector("#docCategory");
const sourceNode = document.querySelector("#docSource");
const backLink = document.querySelector("#backLink");
const rawLink = document.querySelector("#rawLink");
const cursorLight = document.querySelector(".cursor-light");

const mdPath = page?.dataset.md;
const docType = page?.dataset.type ?? "Project Document";
const homePath = page?.dataset.home ?? "../index.html";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="text-link" href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function resolveLink(path) {
  if (!path || path === "当前页面") return "";
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith("/")) return path;
  const depth = window.location.pathname.split("/").filter(Boolean).length - 1;
  const prefix = depth > 0 ? "../".repeat(depth) : "";
  return `${prefix}${path}`;
}

function linkifyEntries(value) {
  return value.replace(/<code>([^<]+)<\/code>/g, (match, rawPath) => {
    const path = rawPath.trim();
    if (!/^(labs|docs|index\.html|\.{1,2}\/|https?:\/\/)/.test(path)) return match;
    const href = resolveLink(path);
    if (!href) return match;
    return `<a class="entry-link" href="${href}">${escapeHtml(path)}</a>`;
  });
}

function slugify(value, index) {
  const slug = value
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");
  return slug || `section-${index}`;
}

function parseMermaidFlow(source) {
  const nodeMap = new Map();
  const edges = [];

  function parseNode(part) {
    const match = part.trim().match(/^([A-Za-z0-9_]+)(?:\{([^}]+)\}|\[([^\]]+)\])?/);
    if (!match) return null;
    const id = match[1];
    const label = match[2] || match[3] || id;
    if (!nodeMap.has(id)) nodeMap.set(id, label);
    return id;
  }

  source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("flowchart"))
    .forEach((line) => {
      const cleanLine = line.replace(/--\|[^|]+\|/g, "-->");
      const parts = cleanLine.split("-->").map((part) => part.trim()).filter(Boolean);
      if (parts.length < 2) return;
      const ids = parts.map(parseNode).filter(Boolean);
      for (let index = 0; index < ids.length - 1; index += 1) {
        edges.push([ids[index], ids[index + 1]]);
      }
    });

  return { nodes: [...nodeMap.entries()].map(([id, label]) => ({ id, label })), edges };
}

function renderFlowDiagram(source) {
  const graph = parseMermaidFlow(source);
  if (!graph.nodes.length) {
    return `<div class="flow-panel"><pre><code>${escapeHtml(source)}</code></pre></div>`;
  }

  const outgoing = new Map(graph.nodes.map((node) => [node.id, []]));
  const incoming = new Map(graph.nodes.map((node) => [node.id, 0]));
  graph.edges.forEach(([from, to]) => {
    outgoing.get(from)?.push(to);
    incoming.set(to, (incoming.get(to) ?? 0) + 1);
  });

  const start = graph.nodes.find((node) => (incoming.get(node.id) ?? 0) === 0)?.id ?? graph.nodes[0].id;
  const ordered = [];
  const seen = new Set();

  function visit(id) {
    if (!id || seen.has(id)) return;
    seen.add(id);
    const node = graph.nodes.find((item) => item.id === id);
    if (node) ordered.push(node);
    outgoing.get(id)?.forEach(visit);
  }

  visit(start);
  graph.nodes.forEach((node) => {
    if (!seen.has(node.id)) ordered.push(node);
  });

  return `
    <div class="visual-flow" aria-label="流程图">
      ${ordered
        .map(
          (node, index) => `
            <div class="flow-step">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${escapeHtml(node.label)}</strong>
            </div>
          `,
        )
        .join('<div class="flow-arrow" aria-hidden="true"></div>')}
    </div>
  `;
}

function renderBlocks(markdown) {
  const lines = markdown.replace(/^\uFEFF/, "").split(/\r?\n/);
  const html = [];
  const headings = [];
  let paragraph = [];
  let list = null;
  let quote = [];
  let code = null;
  let headingIndex = 0;

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${linkifyEntries(inlineMarkdown(paragraph.join(" ")))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!list) return;
    html.push(`<${list.type}>${list.items.map((item) => `<li>${linkifyEntries(inlineMarkdown(item))}</li>`).join("")}</${list.type}>`);
    list = null;
  }

  function flushQuote() {
    if (!quote.length) return;
    html.push(`<blockquote><p>${linkifyEntries(inlineMarkdown(quote.join(" ")))}</p></blockquote>`);
    quote = [];
  }

  function flushCode() {
    if (!code) return;
    const raw = code.lines.join("\n");
    if (code.lang === "mermaid") {
      html.push(renderFlowDiagram(raw));
    } else {
      html.push(`<pre><code>${escapeHtml(raw)}</code></pre>`);
    }
    code = null;
  }

  for (const line of lines) {
    const fence = line.match(/^```(\w+)?/);
    if (fence && code) {
      flushCode();
      continue;
    }
    if (fence) {
      flushParagraph();
      flushList();
      flushQuote();
      code = { lang: fence[1] ?? "", lines: [] };
      continue;
    }
    if (code) {
      code.lines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      headingIndex += 1;
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(text, headingIndex);
      headings.push({ id, text, level });
      html.push(`<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>`);
      continue;
    }

    const quoteLine = line.match(/^>\s?(.*)$/);
    if (quoteLine) {
      flushParagraph();
      flushList();
      quote.push(quoteLine[1]);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      flushQuote();
      const type = ordered ? "ol" : "ul";
      if (!list || list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((unordered || ordered)[1]);
      continue;
    }

    paragraph.push(line.trim());
  }

  flushCode();
  flushParagraph();
  flushList();
  flushQuote();

  return { html: html.join("\n"), headings };
}

function pickLead(markdown) {
  const lines = markdown.replace(/^\uFEFF/, "").split(/\r?\n/);
  return (
    lines.find((line) => line.trim() && !line.startsWith("#") && !line.startsWith(">") && !line.startsWith("```")) ??
    "项目文档已转换为作品集风格页面，便于展示问题、方案、结构和交付结果。"
  );
}

async function boot() {
  if (!mdPath) {
    content.innerHTML = '<p class="error">缺少文档路径。</p>';
    return;
  }

  backLink.href = homePath;
  rawLink.href = mdPath;
  categoryNode.textContent = docType;
  sourceNode.textContent = mdPath.replace(/^\.\//, "");

  const response = await fetch(mdPath);
  if (!response.ok) {
    content.innerHTML = `<p class="error">文档加载失败：${response.status}</p>`;
    return;
  }

  const markdown = await response.text();
  const firstHeading = markdown.replace(/^\uFEFF/, "").match(/^#\s+(.+)$/m)?.[1]?.trim() ?? "项目文档";
  const lead = pickLead(markdown);
  const rendered = renderBlocks(markdown);

  document.title = `${firstHeading} | 吕祎晗`;
  titleNode.textContent = firstHeading;
  leadNode.textContent = lead.replace(/^项目仓库：/, "来源项目：");
  content.innerHTML = rendered.html;

  const usefulHeadings = rendered.headings.filter((heading) => heading.level === 2 || heading.level === 3).slice(0, 18);
  toc.innerHTML = usefulHeadings.length
    ? `<div class="doc-toc-title">目录</div>${usefulHeadings
        .map((heading) => `<a href="#${heading.id}" class="toc-level-${heading.level}">${escapeHtml(heading.text)}</a>`)
        .join("")}`
    : '<div class="doc-toc-title">目录</div><a href="#top">文档顶部</a>';
}

boot().catch((error) => {
  content.innerHTML = `<p class="error">文档渲染失败：${escapeHtml(error.message)}</p>`;
});

if (cursorLight) {
  window.addEventListener("mousemove", (event) => {
    cursorLight.style.transform = `translate3d(${event.clientX - 280}px, ${event.clientY - 280}px, 0)`;
  });
}
