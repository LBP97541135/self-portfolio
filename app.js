(() => {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) throw new Error("Portfolio content failed to load.");

  const { candidate, projects, experiences, personas, personaOrder } = content;
  const projectMap = new Map(projects.map((project) => [project.id, project]));

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const elements = {
    roleTrigger: $("#roleTrigger"),
    roleMenu: $("#roleMenu"),
    activeRoleLabel: $("#activeRoleLabel"),
    activeRoleCount: $("#activeRoleCount"),
    resumeAction: $("#resumeAction"),
    heroResume: $("#heroResume"),
    candidateMeta: $("#candidateMeta"),
    candidateName: $("#candidateName"),
    candidateEnglishName: $("#candidateEnglishName"),
    heroRole: $("#heroRole"),
    heroHeadline: $("#heroHeadline"),
    heroSummary: $("#heroSummary"),
    heroNote: $("#heroNote"),
    companyLine: $("#companyLine"),
    primaryCta: $("#primaryCta"),
    proofBoard: $("#proofBoard"),
    selectedTitle: $("#selectedTitle"),
    selectedIntro: $("#selectedIntro"),
    selectedGrid: $("#selectedGrid"),
    personalStatement: $("#personalStatement"),
    principleList: $("#principleList"),
    experienceList: $("#experienceList"),
    capabilityTitle: $("#capabilityTitle"),
    capabilityGrid: $("#capabilityGrid"),
    skillMatrix: $("#skillMatrix"),
    playgroundGrid: $("#playgroundGrid"),
    showMoreProjects: $("#showMoreProjects"),
    contactTitle: $("#contactTitle"),
    wechatAction: $("#wechatAction"),
    wechatPanel: $("#wechatPanel"),
    copyWechat: $("#copyWechat"),
    toast: $("#toast"),
    searchAction: $("#searchAction"),
    commandDialog: $("#commandDialog"),
    commandInput: $("#commandInput"),
    commandResults: $("#commandResults"),
    shortcutHint: $("#shortcutHint"),
    projectDialog: $("#projectDialog"),
    dialogClose: $("#dialogClose"),
    dialogContent: $("#dialogContent"),
    scrollProgress: $("#scrollProgress"),
    contactResume: $("#contactResume"),
    contactResumeLabel: $("#contactResumeLabel"),
    personaHintAction: $("#personaHintAction"),
    playFilters: $("#playFilters"),
    backTop: $("#backTop"),
  };

  function resolvePersona() {
    const fromUrl = new URLSearchParams(location.search).get("p");
    if (personas[fromUrl]) return fromUrl;
    const stored = localStorage.getItem("portfolio-persona");
    return personas[stored] ? stored : "agent-dev";
  }

  let activePersona = resolvePersona();
  let playgroundExpanded = false;
  let playgroundFilter = "all";
  let currentSection = "top";
  let commandIndex = 0;
  let visibleCommands = [];

  function persona() {
    return personas[activePersona];
  }

  function projectRole(project) {
    return project.roleByPersona?.[activePersona] || project.role;
  }

  function projectUrl(project) {
    return `project.html?id=${encodeURIComponent(project.id)}&p=${encodeURIComponent(activePersona)}`;
  }

  function coverMarkup(project, className) {
    if (project.cover?.type === "image") {
      return `
        <div class="${className}">
          <img src="${escapeHtml(project.cover.src)}" alt="${escapeHtml(project.title)} 项目视觉" loading="lazy" />
        </div>
      `;
    }

    const rawParts = (project.cover?.label || project.title).split(" / ").filter(Boolean);
    const parts = rawParts.length <= 3 ? rawParts : [rawParts[0], rawParts[1], rawParts.slice(2).join(" + ")];
    while (parts.length < 3) parts.push("AGENT");
    return `
      <div class="${className}">
        <div class="system-cover" data-tone="${escapeHtml(project.cover?.tone || "indigo")}">
          ${parts.slice(0, 3).map((part) => `<span>${escapeHtml(part)}</span>`).join("")}
          <b>${escapeHtml(project.category)}</b>
        </div>
      </div>
    `;
  }

  function renderRoleMenu() {
    elements.roleMenu.innerHTML = personaOrder
      .map((id, index) => {
        const item = personas[id];
        const active = id === activePersona;
        const descriptors = {
          "agent-dev": "运行机制 · Tool Use · Multi-Agent",
          "ai-pm": "用户问题 · MVP · 业务验证",
          "agent-qa": "Trace · Eval · 质量闭环",
        };
        return `
          <button class="role-option${active ? " is-active" : ""}" type="button" data-persona="${id}" aria-pressed="${active}">
            <span>0${index + 1}</span>
            <span><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(descriptors[id])}</small></span>
            <i>${active ? "●" : "○"}</i>
          </button>
        `;
      })
      .join("");
  }

  function renderHero() {
    const view = persona();
    const position = personaOrder.indexOf(activePersona) + 1;
    elements.activeRoleLabel.textContent = view.label;
    elements.activeRoleCount.textContent = `0${position} / 03`;
    elements.candidateMeta.textContent = candidate.meta;
    elements.candidateName.textContent = candidate.name;
    elements.candidateEnglishName.textContent = candidate.englishName;
    elements.heroRole.textContent = view.role;
    elements.heroHeadline.textContent = view.headline;
    elements.heroSummary.textContent = view.summary;
    elements.heroNote.textContent = view.heroNote;
    elements.companyLine.innerHTML = view.companyLine.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    elements.primaryCta.textContent = view.primaryCta;
    elements.resumeAction.href = view.resume;
    elements.heroResume.href = view.resume;
    elements.contactResume.href = view.resume;
    elements.contactResumeLabel.textContent = `下载${view.short}简历`;
    elements.heroResume.firstChild.textContent = `下载${view.short}简历 `;
    elements.proofBoard.innerHTML = view.proofs
      .map(
        (proof) => `
          <div class="proof-item">
            <small>${escapeHtml(proof.label)}</small>
            <strong>${escapeHtml(proof.value)}</strong>
            <span>${escapeHtml(proof.note)}</span>
          </div>
        `,
      )
      .join("");
    document.title = `${candidate.name}｜${view.role}作品集`;
  }

  function selectedCard(project, index, total) {
    const modifier = index === 0 ? " is-lead" : total % 2 === 0 && index === total - 1 ? " is-wide" : "";
    return `
      <article class="case-card reveal-once${modifier}">
        <a href="${projectUrl(project)}" aria-label="查看 ${escapeHtml(project.title)} 完整案例">
          <div class="case-media-wrap">
            ${coverMarkup(project, "case-media")}
            <span class="card-annotation">${escapeHtml(project.note || "")}</span>
          </div>
          <div class="case-content">
            <div class="case-topline"><span>${escapeHtml(project.category)}</span><span>${escapeHtml(project.year)}</span></div>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="case-tagline">${escapeHtml(project.tagline)}</p>
            <p class="case-question">${escapeHtml(project.question)}</p>
            <p class="case-role">${escapeHtml(projectRole(project))}</p>
            <p class="case-proof">${escapeHtml(project.proof)}</p>
          </div>
        </a>
      </article>
    `;
  }

  function renderSelected() {
    const view = persona();
    elements.selectedTitle.textContent = view.projectTitle;
    elements.selectedIntro.textContent = view.projectIntro;
    elements.selectedGrid.innerHTML = view.selected
      .map((id) => projectMap.get(id))
      .filter(Boolean)
      .map((project, index, list) => selectedCard(project, index, list.length))
      .join("");
  }

  function renderStatement() {
    elements.personalStatement.textContent = candidate.statement;
    elements.principleList.innerHTML = candidate.principles.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  }

  function renderExperience() {
    const view = persona();
    elements.experienceList.innerHTML = view.experienceOrder
      .map((id) => ({ id, ...experiences[id] }))
      .map((item) => {
        const related = item.related
          .map((projectId) => projectMap.get(projectId))
          .filter(Boolean)
          .map((project) => `<a href="${projectUrl(project)}">${escapeHtml(project.title)}</a>`)
          .join(" · ");
        return `
          <article class="experience-item reveal-once">
            <div class="experience-meta">
              <time>${escapeHtml(item.time)}</time>
              <strong>${escapeHtml(item.company)}</strong>
              <span>${escapeHtml(item.role)}</span>
            </div>
            <p class="experience-focus">${escapeHtml(item.focus[activePersona])}</p>
            <div class="experience-evidence">
              <div class="metric-line">${item.metrics.map((metric) => `<span>${escapeHtml(metric)}</span>`).join("")}</div>
              <div class="related-line">关联案例：${related}</div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderCapabilities() {
    const view = persona();
    elements.capabilityTitle.textContent = view.capabilityTitle;
    elements.capabilityGrid.innerHTML = view.capabilities
      .map((capability, index) => {
        const projectLinks = capability.projects
          .map((id) => projectMap.get(id))
          .filter(Boolean)
          .map((project) => `<a href="${projectUrl(project)}">${escapeHtml(project.title)}</a>`)
          .join("");
        return `
          <article class="capability-card reveal-once" tabindex="0">
            <span>0${index + 1}</span>
            <h3>${escapeHtml(capability.title)}</h3>
            <p>${escapeHtml(capability.summary)}</p>
            <div class="capability-detail">
              <h3>${escapeHtml(capability.title)}</h3>
              <p>${escapeHtml(capability.detail)}</p>
              <div class="capability-projects">${projectLinks}</div>
            </div>
          </article>
        `;
      })
      .join("");

    elements.skillMatrix.innerHTML = view.skills
      .map(
        ([label, items]) => `
          <div class="skill-row">
            <strong>${escapeHtml(label)}</strong>
            <span>${escapeHtml(items)}</span>
          </div>
        `,
      )
      .join("");
  }

  function projectLinkMarkup(project) {
    const links = [];
    links.push(`<button type="button" data-project-quick="${escapeHtml(project.id)}">看看我做成了什么</button>`);
    if (project.links?.demo) links.push(`<a href="${escapeHtml(project.links.demo)}" target="_blank" rel="noreferrer">Demo ↗</a>`);
    if (project.links?.github) links.push(`<a href="${escapeHtml(project.links.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>`);
    return links.join("");
  }

  function renderPlayground() {
    const selectedSet = new Set(persona().selected);
    const list = projects.filter((project) => !selectedSet.has(project.id));
    const initialLimit = 6;
    const categories = [...new Set(list.map((project) => project.category))];
    if (playgroundFilter !== "all" && !categories.includes(playgroundFilter)) playgroundFilter = "all";
    elements.playFilters.innerHTML = ["all", ...categories]
      .map(
        (category) => `
          <button type="button" data-play-filter="${escapeHtml(category)}"${playgroundFilter === category ? ' class="is-active"' : ""}>${category === "all" ? "全部" : escapeHtml(category)}</button>
        `,
      )
      .join("");
    elements.playgroundGrid.innerHTML = list
      .map((project, index) => {
        const beyondLimit = !playgroundExpanded && index >= initialLimit;
        const filtered = playgroundFilter !== "all" && project.category !== playgroundFilter;
        return `
          <article class="play-card reveal-once${beyondLimit || filtered ? " is-hidden" : ""}" data-project-card="${escapeHtml(project.id)}">
            ${coverMarkup(project, "play-media")}
            <div class="play-content">
              <div class="play-topline"><span>${escapeHtml(project.category)}</span><span>${escapeHtml(project.year)}</span></div>
              <h3>${escapeHtml(project.title)}</h3>
              <p class="play-question">${escapeHtml(project.question)}</p>
              <div class="play-links">${projectLinkMarkup(project)}</div>
            </div>
          </article>
        `;
      })
      .join("");
    elements.showMoreProjects.hidden = playgroundFilter !== "all" || list.length <= initialLimit;
    elements.showMoreProjects.textContent = playgroundExpanded ? "收起探索作品" : `查看全部探索作品（${list.length}）`;
  }

  function renderContact() {
    elements.contactTitle.textContent = persona().contactTitle;
  }

  function renderAll() {
    document.documentElement.dataset.persona = activePersona;
    renderRoleMenu();
    renderHero();
    renderSelected();
    renderStatement();
    renderExperience();
    renderCapabilities();
    renderPlayground();
    renderContact();
    observeReveals();
  }

  function setPersona(id) {
    if (!personas[id] || id === activePersona) {
      closeRoleMenu();
      return;
    }
    const anchor = currentSection;
    activePersona = id;
    playgroundExpanded = false;
    playgroundFilter = "all";
    localStorage.setItem("portfolio-persona", id);
    const url = new URL(location.href);
    url.searchParams.set("p", id);
    history.replaceState(null, "", url);
    document.body.classList.add("is-switching");
    renderAll();
    closeRoleMenu();
    setTimeout(() => {
      document.body.classList.remove("is-switching");
      if (anchor !== "top") document.getElementById(anchor)?.scrollIntoView({ block: "start" });
      showToast(`已切换至${persona().label}视角`);
    }, 50);
  }

  function openRoleMenu() {
    elements.roleMenu.hidden = false;
    elements.roleTrigger.setAttribute("aria-expanded", "true");
  }

  function closeRoleMenu() {
    elements.roleMenu.hidden = true;
    elements.roleTrigger.setAttribute("aria-expanded", "false");
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 1900);
  }

  function openQuickProject(projectId) {
    const project = projectMap.get(projectId);
    if (!project) return;
    const actionLinks = [
      `<a href="${projectUrl(project)}">完整项目故事</a>`,
      project.links?.demo ? `<a href="${escapeHtml(project.links.demo)}" target="_blank" rel="noreferrer">在线体验 ↗</a>` : "",
      project.links?.github ? `<a href="${escapeHtml(project.links.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>` : "",
    ]
      .filter(Boolean)
      .join("");
    elements.dialogContent.innerHTML = `
      <div class="dialog-body">
        <div class="dialog-meta">${escapeHtml(project.category)} · ${escapeHtml(project.year)}</div>
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.tagline)}</p>
        <p class="dialog-question">${escapeHtml(project.question)}</p>
        <p>${escapeHtml(project.summary)}</p>
        <p class="dialog-proof">${escapeHtml(project.proof)}</p>
        <p><strong>我的角色：</strong>${escapeHtml(projectRole(project))}</p>
        <div class="dialog-actions">${actionLinks}</div>
      </div>
    `;
    elements.projectDialog.showModal();
  }

  function commandCatalog() {
    const sectionCommands = [
      ["页面", "返回首页", () => document.getElementById("top")?.scrollIntoView()],
      ["页面", "查看精选案例", () => document.getElementById("selected")?.scrollIntoView()],
      ["页面", "查看实践经历", () => document.getElementById("experience")?.scrollIntoView()],
      ["页面", "查看能力地图", () => document.getElementById("capabilities")?.scrollIntoView()],
      ["页面", "进入个人实验场", () => document.getElementById("playground")?.scrollIntoView()],
      ["操作", "下载当前岗位简历", () => elements.resumeAction.click()],
      ["操作", "打开 GitHub", () => window.open(candidate.github, "_blank", "noopener")],
      ["操作", "发送邮件", () => { location.href = `mailto:${candidate.email}`; }],
    ].map(([type, title, action]) => ({ type, title, action }));

    const personaCommands = personaOrder.map((id) => ({
      type: "岗位视角",
      title: personas[id].label,
      action: () => setPersona(id),
    }));

    const projectCommands = projects.map((project) => ({
      type: "项目",
      title: project.title,
      action: () => { location.href = projectUrl(project); },
    }));

    return [...sectionCommands, ...personaCommands, ...projectCommands];
  }

  function renderCommandResults() {
    const query = elements.commandInput.value.trim().toLowerCase();
    visibleCommands = commandCatalog().filter((command) =>
      `${command.type} ${command.title}`.toLowerCase().includes(query),
    );
    if (commandIndex >= visibleCommands.length) commandIndex = Math.max(0, visibleCommands.length - 1);
    elements.commandResults.innerHTML = visibleCommands.length
      ? visibleCommands
          .map(
            (command, index) => `
              <button class="command-item${index === commandIndex ? " is-active" : ""}" type="button" data-command-index="${index}">
                <small>${escapeHtml(command.type)}</small>
                <strong>${escapeHtml(command.title)}</strong>
                <span>↗</span>
              </button>
            `,
          )
          .join("")
      : `<div class="command-empty">没有找到匹配内容</div>`;
  }

  function openCommandDialog() {
    commandIndex = 0;
    elements.commandInput.value = "";
    renderCommandResults();
    elements.commandDialog.showModal();
    requestAnimationFrame(() => elements.commandInput.focus());
  }

  function runCommand(index) {
    const command = visibleCommands[index];
    if (!command) return;
    elements.commandDialog.close();
    command.action();
  }

  const revealObserver =
    typeof IntersectionObserver === "undefined"
      ? null
      : new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.08 },
        );

  function observeReveals() {
    if (!revealObserver) {
      $$(".reveal-once").forEach((element) => element.classList.add("is-visible"));
      return;
    }
    $$(".reveal-once:not([data-reveal-bound])").forEach((element) => {
      element.dataset.revealBound = "1";
      revealObserver.observe(element);
    });
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      currentSection = visible.target.dataset.observe || visible.target.id || "top";
      $$(".chapter-rail a").forEach((link) => {
        link.classList.toggle("is-active", link.dataset.section === currentSection);
      });
    },
    { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.4] },
  );

  $$('[data-observe]').forEach((section) => sectionObserver.observe(section));

  elements.roleTrigger.addEventListener("click", () => {
    elements.roleMenu.hidden ? openRoleMenu() : closeRoleMenu();
  });

  elements.personaHintAction.addEventListener("click", (event) => {
    event.stopPropagation();
    openRoleMenu();
  });

  elements.roleMenu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-persona]");
    if (option) setPersona(option.dataset.persona);
  });

  document.addEventListener("click", (event) => {
    if (!elements.roleMenu.hidden && !event.target.closest(".role-console")) closeRoleMenu();
  });

  elements.showMoreProjects.addEventListener("click", () => {
    playgroundExpanded = !playgroundExpanded;
    renderPlayground();
    observeReveals();
  });

  elements.playFilters.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-play-filter]");
    if (!chip) return;
    playgroundFilter = chip.dataset.playFilter;
    renderPlayground();
    observeReveals();
  });

  elements.backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.playgroundGrid.addEventListener("click", (event) => {
    const quick = event.target.closest("[data-project-quick]");
    if (quick) {
      openQuickProject(quick.dataset.projectQuick);
      return;
    }
    const card = event.target.closest("[data-project-card]");
    if (card && !event.target.closest("a")) openQuickProject(card.dataset.projectCard);
  });

  elements.dialogClose.addEventListener("click", () => elements.projectDialog.close());
  elements.projectDialog.addEventListener("click", (event) => {
    if (event.target === elements.projectDialog) elements.projectDialog.close();
  });

  elements.wechatAction.addEventListener("click", () => {
    elements.wechatPanel.hidden = !elements.wechatPanel.hidden;
    elements.wechatAction.querySelector("span").textContent = elements.wechatPanel.hidden ? "展开二维码" : "收起二维码";
  });

  elements.copyWechat.addEventListener("click", async () => {
    await navigator.clipboard.writeText(candidate.wechat);
    showToast("微信号已复制");
  });

  elements.searchAction.addEventListener("click", openCommandDialog);
  elements.commandInput.addEventListener("input", () => {
    commandIndex = 0;
    renderCommandResults();
  });
  elements.commandResults.addEventListener("click", (event) => {
    const item = event.target.closest("[data-command-index]");
    if (item) runCommand(Number(item.dataset.commandIndex));
  });
  elements.commandInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      commandIndex = visibleCommands.length ? (commandIndex + 1) % visibleCommands.length : 0;
      renderCommandResults();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      commandIndex = visibleCommands.length ? (commandIndex - 1 + visibleCommands.length) % visibleCommands.length : 0;
      renderCommandResults();
    } else if (event.key === "Enter") {
      event.preventDefault();
      runCommand(commandIndex);
    }
  });

  window.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openCommandDialog();
    }
    if (event.key === "Escape") closeRoleMenu();
  });

  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      elements.scrollProgress.style.width = `${Math.min(100, percent)}%`;
      elements.backTop.hidden = window.scrollY < window.innerHeight * 1.2;
    },
    { passive: true },
  );

  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
  elements.shortcutHint.textContent = isMac ? "⌘ K" : "Ctrl + K";

  renderAll();
})();
