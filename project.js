(() => {
  const content = window.PORTFOLIO_CONTENT;
  const params = new URLSearchParams(location.search);
  const projectId = params.get("id");
  const personaId = content.personas[params.get("p")] ? params.get("p") : "agent-dev";
  const project = content.projects.find((item) => item.id === projectId);
  const view = content.personas[personaId];

  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  document.documentElement.dataset.persona = personaId;
  const backUrl = `./index.html?p=${encodeURIComponent(personaId)}#selected`;
  $("#caseBack").href = backUrl;
  $("#caseFooterBack").href = backUrl;
  $("#caseRoleView").textContent = `当前视角：${view.label}`;

  if (!project) {
    $("#caseNotFound").hidden = false;
    return;
  }

  function role() {
    return project.roleByPersona?.[personaId] || project.role;
  }

  function coverMarkup() {
    if (project.cover?.type === "image") {
      return `<img src="${escapeHtml(project.cover.src)}" alt="${escapeHtml(project.title)} 项目视觉" />`;
    }
    const raw = (project.cover?.label || project.title).split(" / ").filter(Boolean);
    const parts = raw.length <= 3 ? raw : [raw[0], raw[1], raw.slice(2).join(" + ")];
    while (parts.length < 3) parts.push("AGENT");
    return `
      <div class="system-cover" data-tone="${escapeHtml(project.cover?.tone || "indigo")}">
        ${parts.slice(0, 3).map((part) => `<span>${escapeHtml(part)}</span>`).join("")}
        <b>${escapeHtml(project.category)}</b>
      </div>
    `;
  }

  function linksMarkup() {
    const links = [];
    if (project.links?.demo) links.push(`<a class="primary-action" href="${escapeHtml(project.links.demo)}" target="_blank" rel="noreferrer">在线体验 ↗</a>`);
    if (project.links?.github) links.push(`<a class="secondary-action" href="${escapeHtml(project.links.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>`);
    if (project.links?.team) links.push(`<a class="secondary-action" href="${escapeHtml(project.links.team)}" target="_blank" rel="noreferrer">团队合并仓 ↗</a>`);
    if (project.links?.doc) links.push(`<a class="text-action" href="${escapeHtml(project.links.doc)}" target="_blank" rel="noreferrer">旧版项目说明 ↗</a>`);
    return links.join("");
  }

  function listMarkup(items, ordered = false) {
    const list = items?.length ? items : ["该部分仍在补充，将以项目代码与可公开事实为准。"];
    return list.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  document.title = `${project.title}｜项目案例｜吕祎晗`;
  $("#caseMain").hidden = false;
  $("#caseKicker").textContent = `${project.category} · ${project.year}`;
  $("#caseTitle").textContent = project.title;
  $("#caseTagline").textContent = project.tagline;
  $("#caseQuestion").textContent = project.question;
  $("#caseNote").textContent = project.note || "";
  $("#caseRole").textContent = role();
  $("#caseProof").textContent = project.proof;
  $("#caseActions").innerHTML = linksMarkup();
  $("#caseHeaderActions").innerHTML = project.links?.github
    ? `<a href="${escapeHtml(project.links.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>`
    : "";
  $("#caseHeroMedia").innerHTML = coverMarkup();
  $("#caseSummary").textContent = project.summary;
  $("#caseTags").innerHTML = project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
  const gallery = project.screens || [];
  if (gallery.length) {
    $("#caseGallery").innerHTML = gallery
      .map((screen, index) => {
        const item = typeof screen === "string"
          ? { src: screen, caption: `Fig. ${String(index + 1).padStart(2, "0")}｜${project.title} 项目画面` }
          : screen;
        return `<figure><img src="${escapeHtml(item.src)}" alt="${escapeHtml(project.title)} 项目画面 ${index + 1}" loading="lazy" /><figcaption>${escapeHtml(item.caption || "")}</figcaption></figure>`;
      })
      .join("");
  } else {
    $("#case-gallery").hidden = true;
    $("#caseGalleryLink").hidden = true;
  }
  $("#caseProblem").textContent = project.problem;
  $("#caseDecisions").innerHTML = listMarkup(project.decisions, true);
  $("#caseArchitecture").innerHTML = listMarkup(project.architecture);
  $("#caseContribution").innerHTML = listMarkup(project.contribution);
  $("#caseValidation").innerHTML = listMarkup(project.validation);
  $("#caseBoundary").innerHTML = listMarkup(project.boundary);

  const projectHref = (item) => `project.html?id=${encodeURIComponent(item.id)}&p=${encodeURIComponent(personaId)}`;
  const projectIndex = content.projects.findIndex((item) => item.id === project.id);
  const prevProject = projectIndex > 0 ? content.projects[projectIndex - 1] : null;
  const nextProject = projectIndex < content.projects.length - 1 ? content.projects[projectIndex + 1] : null;
  const pagerMarkup = [
    prevProject ? `<a href="${projectHref(prevProject)}"><small>← 上一个案例</small><strong>${escapeHtml(prevProject.title)}</strong></a>` : "",
    nextProject ? `<a class="is-next" href="${projectHref(nextProject)}"><small>下一个案例 →</small><strong>${escapeHtml(nextProject.title)}</strong></a>` : "",
  ]
    .filter(Boolean)
    .join("");
  const pager = $("#casePager");
  if (pagerMarkup) {
    pager.innerHTML = pagerMarkup;
  } else {
    pager.hidden = true;
  }

  const flowTerms = project.cover?.label?.split(" / ").filter(Boolean) || project.tags.slice(0, 3);
  $("#caseFlow").innerHTML = flowTerms
    .slice(0, 4)
    .map((term, index) => `<span>${escapeHtml(term)}</span>${index < Math.min(3, flowTerms.length - 1) ? "<i>→</i>" : ""}`)
    .join("");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal-once").forEach((element) => observer.observe(element));

  const tocLinks = Array.from(document.querySelectorAll(".case-toc a"));
  const sections = tocLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      tocLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
    },
    { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
  );
  sections.forEach((section) => tocObserver.observe(section));
})();
