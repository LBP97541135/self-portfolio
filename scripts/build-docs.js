const fs = require("fs");
const path = require("path");

const root = process.cwd();
const css = fs.readFileSync(path.join(root, "docs/doc-page.css"), "utf8");

const pages = [
  { md: "docs/projects/ai-work-coach.md", out: "docs/projects/ai-work-coach.html", home: "../../index.html", type: "Project Case" },
  { md: "docs/projects/evo-murder-game.md", out: "docs/projects/evo-murder-game.html", home: "../../index.html", type: "Project Case" },
  { md: "docs/projects/haji-ai.md", out: "docs/projects/haji-ai.html", home: "../../index.html", type: "Project Case" },
  { md: "docs/projects/money-printer-turbo.md", out: "docs/projects/money-printer-turbo.html", home: "../../index.html", type: "Project Case" },
  { md: "docs/projects/multiagent-werewolf.md", out: "docs/projects/multiagent-werewolf.html", home: "../../index.html", type: "Project Case" },
  { md: "docs/README.md", out: "docs/README.html", home: "../index.html", type: "Docs Index" },
  {
    md: "docs/development/portfolio-project-framework.md",
    out: "docs/development/portfolio-project-framework.html",
    home: "../../index.html",
    type: "Development Standard",
  },
];

const projectSignals = {
  "ai-work-coach.md": [
    ["Product", "把个人成长拆成每日训练、批改、画像和推荐闭环"],
    ["Engineering", "用前端 mock 还原训练、反馈、画像和洞察状态"],
    ["Proof", "展示从一次作答到下一次推荐的完整体验"],
  ],
  "evo-murder-game.md": [
    ["Product", "把剧本、DM、证物、陪玩和长期记忆组织成叙事产品"],
    ["Engineering", "用本地数据模拟游戏舞台、角色行为和复盘进化"],
    ["Proof", "保留原有前端体验并补足完整功能展示"],
  ],
  "haji-ai.md": [
    ["Product", "把 AI 从聊天对象升级为有关系、有动态的社交节点"],
    ["Engineering", "覆盖消息、朋友圈、角色创建、关系网络和运行追踪"],
    ["Proof", "展示全 AI 生态朋友圈的最终产品形态"],
  ],
  "money-printer-turbo.md": [
    ["Product", "把短视频生产拆成可视化流水线和任务队列"],
    ["Engineering", "模拟脚本、素材、配音、字幕、成片和配置状态"],
    ["Proof", "展示从选题到成片预览的多步骤生成链路"],
  ],
  "multiagent-werewolf.md": [
    ["Product", "用狼人杀验证多智能体在复杂规则下的推理与协作"],
    ["Engineering", "保留 React 前端并替换为本地 mock API 与事件流"],
    ["Proof", "可进入对局、观测信念矩阵并查看赛后复盘"],
  ],
};

const ui = {
  name: "\u5415\u794e\u6657",
  project: "\u9879\u76ee",
  method: "\u65b9\u6cd5",
  contact: "\u8054\u7cfb",
  back: "\u8fd4\u56de\u4f5c\u54c1\u96c6",
  raw: "\u67e5\u770b\u539f\u6587",
  toc: "\u76ee\u5f55",
  top: "\u6587\u6863\u9876\u90e8",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function linkFor(rawPath, currentDir) {
  if (/^https?:\/\//.test(rawPath) || rawPath.startsWith("/") || rawPath.startsWith(".")) return rawPath;
  return `${"../".repeat(currentDir.split("/").filter(Boolean).length)}${rawPath}`;
}

function inlineMarkdown(value, currentDir) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, (_, raw) => {
      const text = raw.trim();
      if (/^(labs|docs|index\.html|\.{1,2}\/|https?:\/\/)/.test(text)) {
        return `<a class="entry-link" href="${escapeHtml(linkFor(text, currentDir))}">${escapeHtml(text)}</a>`;
      }
      return `<code>${escapeHtml(raw)}</code>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="text-link" href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function slugify(value, index) {
  return value.toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, "-").replace(/^-|-$/g, "") || `section-${index}`;
}

function renderMermaid(source) {
  const nodes = new Map();
  const ids = [];
  for (const line of source.split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("flowchart")) continue;
    for (const part of line.replace(/--\|[^|]+\|/g, "-->").split("-->")) {
      const match = part.trim().match(/^([A-Za-z0-9_]+)(?:\{([^}]+)\}|\[([^\]]+)\])?/);
      if (!match) continue;
      const id = match[1];
      const label = match[2] || match[3] || id;
      if (!nodes.has(id)) {
        nodes.set(id, label);
        ids.push(id);
      }
    }
  }
  if (!ids.length) return `<div class="flow-panel"><pre><code>${escapeHtml(source)}</code></pre></div>`;
  return `<div class="visual-flow" aria-label="flow diagram">${ids
    .map((id, index) => `<div class="flow-step"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(nodes.get(id))}</strong></div>`)
    .join('<div class="flow-arrow" aria-hidden="true"></div>')}</div>`;
}

function renderMarkdown(markdown, currentDir) {
  const lines = markdown.replace(/^\uFEFF/, "").split(/\r?\n/);
  const html = [];
  const headings = [];
  let paragraph = [];
  let list = null;
  let quote = [];
  let code = null;
  let headingIndex = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "), currentDir)}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    html.push(`<${list.type}>${list.items.map((item) => `<li>${inlineMarkdown(item, currentDir)}</li>`).join("")}</${list.type}>`);
    list = null;
  };
  const flushQuote = () => {
    if (!quote.length) return;
    html.push(`<blockquote><p>${inlineMarkdown(quote.join(" "), currentDir)}</p></blockquote>`);
    quote = [];
  };
  const flushCode = () => {
    if (!code) return;
    html.push(code.lang === "mermaid" ? renderMermaid(code.lines.join("\n")) : `<pre><code>${escapeHtml(code.lines.join("\n"))}</code></pre>`);
    code = null;
  };

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
      code = { lang: fence[1] || "", lines: [] };
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
      headings.push({ id, level, text });
      html.push(`<h${level} id="${id}">${inlineMarkdown(text, currentDir)}</h${level}>`);
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
    const quoteLine = line.match(/^>\s?(.*)$/);
    if (quoteLine) {
      flushParagraph();
      flushList();
      quote.push(quoteLine[1]);
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

function renderProjectSignals(fileName) {
  const signals = projectSignals[fileName];
  if (!signals) return "";
  return `<div class="doc-signal-grid" aria-label="project proof points">${signals
    .map(([label, value]) => `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`)
    .join("")}</div>`;
}

for (const page of pages) {
  const markdown = fs.readFileSync(path.join(root, page.md), "utf8").replace(/^\uFEFF/, "");
  const currentDir = path.posix.dirname(page.out.replaceAll("\\", "/"));
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || "Project Document";
  const lead = markdown.split(/\r?\n/).find((line) => line.trim() && !line.startsWith("#") && !line.startsWith(">") && !line.startsWith("```")) || "";
  const rendered = renderMarkdown(markdown, currentDir);
  const tocItems = rendered.headings.filter((heading) => heading.level === 2 || heading.level === 3).slice(0, 18);
  const toc = tocItems.length
    ? `<div class="doc-toc-title">${ui.toc}</div>${tocItems.map((heading) => `<a href="#${heading.id}" class="toc-level-${heading.level}">${escapeHtml(heading.text)}</a>`).join("")}`
    : `<div class="doc-toc-title">${ui.toc}</div><a href="#top">${ui.top}</a>`;

  fs.mkdirSync(path.dirname(path.join(root, page.out)), { recursive: true });
  fs.writeFileSync(
    path.join(root, page.out),
    `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} | ${ui.name}</title>
    <style>${css}</style>
  </head>
  <body>
    <div class="cursor-light" aria-hidden="true"></div>
    <header class="site-header">
      <a class="brand" href="${page.home}#top">${ui.name}</a>
      <nav class="nav-links" aria-label="main navigation">
        <a href="${page.home}#work">${ui.project}</a>
        <a href="${page.home}#method">${ui.method}</a>
        <a href="${page.home}#contact">${ui.contact}</a>
      </nav>
    </header>
    <main id="top" class="doc-shell">
      <section class="doc-hero">
        <div>
          <p class="eyebrow">Portfolio Document</p>
          <h1 id="docTitle">${escapeHtml(title)}</h1>
          <p class="doc-lead">${escapeHtml(lead)}</p>
          <div class="doc-actions">
            <a class="text-link" href="${page.home}">${ui.back}</a>
            <a class="text-link muted" href="${path.posix.basename(page.md)}" target="_blank" rel="noreferrer">${ui.raw}</a>
          </div>
          ${renderProjectSignals(path.posix.basename(page.md))}
        </div>
        <aside class="doc-meta">
          <div><span>Type</span><strong>${escapeHtml(page.type)}</strong></div>
          <div><span>Source</span><strong>${escapeHtml(path.posix.basename(page.md))}</strong></div>
        </aside>
      </section>
      <section class="doc-layout">
        <aside class="doc-toc">${toc}</aside>
        <article class="doc-content doc-card">${rendered.html}</article>
      </section>
    </main>
    <script>
      const cursorLight = document.querySelector('.cursor-light');
      if (cursorLight) window.addEventListener('mousemove', (event) => {
        cursorLight.style.transform = 'translate3d(' + (event.clientX - 280) + 'px, ' + (event.clientY - 280) + 'px, 0)';
      });
    </script>
  </body>
</html>`,
    "utf8",
  );
}

console.log(`Built ${pages.length} document pages.`);
