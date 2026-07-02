const data = window.EVO_MOCK;

const state = {
  view: "library",
  selectedScriptId: data.scripts[0].id,
  phaseIndex: 0,
  selectedAgentId: data.agents[0].id,
  discovered: new Set(["ev-1", "ev-2"]),
};

const titleMap = {
  library: "剧本库",
  stage: "游戏舞台",
  agents: "Agent 阵容",
  review: "复盘进化",
  profile: "个人助手",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.hidden = false;
  node.classList.add("show");
  window.setTimeout(() => {
    node.classList.remove("show");
    node.hidden = true;
  }, 2200);
}

function selectedScript() {
  return data.scripts.find((script) => script.id === state.selectedScriptId) || data.scripts[0];
}

function switchView(view) {
  const nextView = titleMap[view] ? view : "library";
  state.view = nextView;
  $$(".view").forEach((node) => node.classList.toggle("active", node.id === `view-${nextView}`));
  $$(".side-nav button").forEach((node) => node.classList.toggle("active", node.dataset.view === nextView));
  $("#pageTitle").textContent = titleMap[nextView];
  location.hash = nextView;
  render();
}

function renderScripts() {
  const query = $("#scriptSearch").value.trim().toLowerCase();
  const genre = $("#genreFilter").value;
  const difficulty = $("#difficultyFilter").value;
  const scripts = data.scripts.filter((script) => {
    const text = `${script.title} ${script.subtitle} ${script.description} ${script.tags.join(" ")}`.toLowerCase();
    return (!query || text.includes(query)) && (genre === "all" || script.genre === genre) && (difficulty === "all" || script.difficulty === difficulty);
  });

  $("#scriptGrid").innerHTML = scripts
    .map(
      (script) => `
        <article class="script-card">
          <div class="meta-row">
            <span class="tag">${script.genre}</span>
            <span class="tag">${script.difficulty}</span>
            <span class="tag">${script.rating.toFixed(1)}</span>
          </div>
          <h3>${script.title}</h3>
          <p class="eyebrow">${script.subtitle}</p>
          <p>${script.description}</p>
          <div class="tag-row">${script.tags.map((tag) => `<span class="status-tag">${tag}</span>`).join("")}</div>
          <div class="meta-row">
            <span>${script.players}</span>
            <span>${script.duration}</span>
          </div>
          <button class="primary-btn" data-script="${script.id}">选择剧本</button>
        </article>
      `,
    )
    .join("");

  $$("#scriptGrid [data-script]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedScriptId = button.dataset.script;
      state.phaseIndex = 0;
      $("#sessionPhase").textContent = `已选择：${selectedScript().title}`;
      toast(`已载入《${selectedScript().title}》`);
      switchView("stage");
    });
  });
}

function renderPhaseTrack() {
  $("#phaseTrack").innerHTML = data.phases
    .map((phase, index) => `<div class="phase-step ${index === state.phaseIndex ? "active" : ""}">${phase.label}</div>`)
    .join("");
}

function renderStage() {
  const phase = data.phases[state.phaseIndex];
  const script = selectedScript();
  $("#stageTitle").textContent = `《${script.title}》 · ${phase.title}`;
  $("#storyTitle").textContent = phase.title;
  $("#storyText").textContent = phase.text;
  $("#sessionPhase").textContent = phase.label;
  renderPhaseTrack();

  const messages = [
    ...data.dialogues,
    ...(state.phaseIndex >= 3 ? [{ speaker: "沈禾", role: "角色", text: "如果你们真的看过名单，就该知道那三分钟不是误差。" }] : []),
    ...(state.phaseIndex >= 4
      ? [{ speaker: "Echo", role: "复盘 Agent", text: "当前推理链条：名单时间异常 -> 钥匙近期使用 -> 录音地点伪装。" }]
      : []),
  ];

  $("#dialogueList").innerHTML = messages
    .map(
      (message) => `
        <div class="message">
          <strong>${message.speaker}</strong>
          <span> · ${message.role}</span>
          <p>${message.text}</p>
        </div>
      `,
    )
    .join("");

  $("#evidenceCount").textContent = `${state.discovered.size} / ${data.evidences.length}`;
  $("#evidenceList").innerHTML = data.evidences
    .map(
      (item) => `
        <button class="evidence-card" data-evidence="${item.id}">
          <span class="tag">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${state.discovered.has(item.id) || item.status === "公开" ? item.status : "未发现"}</p>
        </button>
      `,
    )
    .join("");

  $$(".evidence-card").forEach((card) => {
    card.addEventListener("click", () => openEvidence(card.dataset.evidence));
  });
}

function openEvidence(id) {
  const item = data.evidences.find((evidence) => evidence.id === id);
  if (!item) return;
  const visible = state.discovered.has(item.id) || item.status === "公开";
  $("#dialogBody").innerHTML = `
    <p class="eyebrow">${item.type} · ${visible ? item.status : "隐藏证物"}</p>
    <h2>${item.title}</h2>
    <p>${visible ? item.detail : "当前阶段尚未解锁。推进剧情或向角色出示相关证物后可发现。"}</p>
    <button class="primary-btn" id="presentEvidence">出示给沈禾</button>
  `;
  $("#evidenceDialog").showModal();
  $("#presentEvidence").addEventListener("click", () => {
    state.discovered.add(item.id);
    $("#evidenceDialog").close();
    toast("角色反应已记录，证物状态已更新");
    renderStage();
  });
}

function renderAgents() {
  $("#agentList").innerHTML = data.agents
    .map(
      (agent) => `
        <button class="agent-card ${agent.id === state.selectedAgentId ? "active" : ""}" data-agent="${agent.id}">
          <img src="${agent.image}" alt="${agent.name}" />
          <span>
            <h3>${agent.name}</h3>
            <p>${agent.type} · ${agent.tags.slice(0, 2).join(" / ")}</p>
          </span>
        </button>
      `,
    )
    .join("");

  $$(".agent-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedAgentId = card.dataset.agent;
      renderAgents();
    });
  });

  const agent = data.agents.find((item) => item.id === state.selectedAgentId) || data.agents[0];
  $("#agentDetail").innerHTML = `
    <div class="agent-detail-grid">
      <img class="agent-portrait" src="${agent.image}" alt="${agent.name}" />
      <div>
        <p class="eyebrow">${agent.type} Agent</p>
        <h2>${agent.name}</h2>
        <p>${agent.description}</p>
        <div class="tag-row">${agent.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
    <hr />
    ${Object.entries(agent.stats)
      .map(
        ([key, value]) => `
          <div class="stat-bar">
            <span>${statLabel(key)}</span>
            <div class="stat-line"><span style="width:${value}%"></span></div>
            <strong>${value}</strong>
          </div>
        `,
      )
      .join("")}
    <div class="story-box">
      <h3>记忆摘要</h3>
      <p>${agent.memory}</p>
    </div>
  `;
}

function statLabel(key) {
  return {
    reasoning: "推理",
    empathy: "共情",
    initiative: "主动",
    memory: "记忆",
  }[key] || key;
}

function renderReview() {
  $("#reviewScore").textContent = data.review.score;
  $("#reviewSummary").textContent = data.review.summary;
  $("#reviewTimeline").innerHTML = data.review.moments
    .map(([time, text]) => `<div class="timeline-item"><time>${time}</time><p>${text}</p></div>`)
    .join("");
  renderCapsules();
}

function renderCapsules(extra = false) {
  const capsules = extra
    ? [...data.review.capsules, { title: "新 Capsule：反证优先", text: "当一个嫌疑人的证据链过于顺滑时，先寻找能推翻它的反证。" }]
    : data.review.capsules;
  $("#capsuleGrid").innerHTML = capsules.map((item) => `<article class="capsule-card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");
}

function renderProfile() {
  $("#traitList").innerHTML = data.profile.traits.map(([label, value]) => `<div class="trait-item"><strong>${label}</strong><span>${value}</span></div>`).join("");
  $("#recommendCard").innerHTML = `<h3>${data.profile.recommendation.title}</h3><p>${data.profile.recommendation.text}</p><button class="primary-btn" data-action="start-recommend">应用推荐</button>`;
  if (!$("#assistantChat").dataset.ready) {
    $("#assistantChat").innerHTML = `
      <div class="message"><strong>Echo</strong><p>你适合先带一个控场型 DM，再带一个情绪洞察型 Agent。这样不会太早剧透，也能捕捉角色反应。</p></div>
    `;
    $("#assistantChat").dataset.ready = "true";
  }
}

function render() {
  renderScripts();
  renderStage();
  renderAgents();
  renderReview();
  renderProfile();
}

function bindEvents() {
  $$(".side-nav button, .brand").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      switchView(node.dataset.view || "library");
    });
  });
  $("#scriptSearch").addEventListener("input", renderScripts);
  $("#genreFilter").addEventListener("change", renderScripts);
  $("#difficultyFilter").addEventListener("change", renderScripts);
  $("[data-action='start-featured']").addEventListener("click", () => {
    state.selectedScriptId = "rust-avenue";
    state.phaseIndex = 0;
    toast("已载入推荐剧本《锈铁大道》");
    switchView("stage");
  });
  $("#nextPhaseBtn").addEventListener("click", () => {
    state.phaseIndex = Math.min(state.phaseIndex + 1, data.phases.length - 1);
    if (state.phaseIndex >= 3) state.discovered.add("ev-3");
    renderStage();
  });
  $("#askDmBtn").addEventListener("click", () => toast("L1 提示：先比较名单时间和录音背景音。"));
  $("#quickQuestionBtn").addEventListener("click", () => {
    data.dialogues.push({ speaker: "你", role: "玩家", text: "这三分钟为什么重要？" });
    data.dialogues.push({ speaker: "雾港主理人", role: "推理 Agent", text: "它可能证明事故记录被改写，也可能证明有人提前进入了现场。" });
    renderStage();
  });
  $("#generateCapsuleBtn").addEventListener("click", () => {
    renderCapsules(true);
    toast("已生成新的 memory capsule");
  });
  $("#assistantSend").addEventListener("click", sendAssistantMessage);
  $("#assistantInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendAssistantMessage();
  });
  $("#dialogClose").addEventListener("click", () => $("#evidenceDialog").close());
}

function sendAssistantMessage() {
  const input = $("#assistantInput");
  if (!input.value.trim()) return;
  $("#assistantChat").insertAdjacentHTML("beforeend", `<div class="message"><strong>你</strong><p>${escapeHtml(input.value)}</p></div>`);
  $("#assistantChat").insertAdjacentHTML(
    "beforeend",
    `<div class="message"><strong>Echo</strong><p>建议选择《镜面游行》，搭配铁幕裁判负责规则边界，鸦青负责破局，Echo 负责复盘沉淀。</p></div>`,
  );
  input.value = "";
  $("#assistantChat").scrollTop = $("#assistantChat").scrollHeight;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

bindEvents();
render();
switchView(location.hash?.replace("#", "") || "library");
