const data = window.MPT_MOCK;

const state = {
  route: "studio",
  project: structuredClone(data.project),
  pipeline: structuredClone(data.pipeline),
  activeCandidate: "a",
  finalCandidate: null,
  running: false,
  selectedMaterial: 0,
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const esc = (v = "") => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[c]);

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  setTimeout(() => el.hidden = true, 2200);
}

function setRoute(route) {
  state.route = ["studio", "tasks", "gallery", "settings", "api"].includes(route) ? route : "studio";
  $$(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.route === state.route));
  $("#pageTitle").textContent = { studio: "生成工作台", tasks: "任务中心", gallery: "成片库", settings: "模型配置", api: "API 展示" }[state.route];
  location.hash = state.route;
  render();
}

function render() {
  $("#taskStatus").textContent = state.running ? "生成中" : state.finalCandidate ? "已完成" : "草稿";
  $("#finalChoice").textContent = state.finalCandidate ? `最终版：Candidate ${state.finalCandidate.toUpperCase()}` : "最终版未选择";
  if (state.route === "studio") renderStudio();
  if (state.route === "tasks") renderTasks();
  if (state.route === "gallery") renderGallery();
  if (state.route === "settings") renderSettings();
  if (state.route === "api") renderApi();
}

function renderStudio() {
  $("#view").innerHTML = `
    <div class="studio-grid">
      <aside class="panel">${renderControls()}</aside>
      <section class="panel">
        <div class="panel-head">
          <div><p class="eyebrow">Workflow</p><h2>从主题到成片的生产流水线</h2></div>
          <div class="row"><button class="ghost" id="generateScript">生成文案</button><button class="primary" id="generateVideo">生成视频</button></div>
        </div>
        <div class="script-list" id="scriptList"></div>
        <h3 style="margin-top:16px">生成流水线</h3>
        <div class="pipeline" id="pipeline"></div>
      </section>
      <aside class="panel">
        <p class="eyebrow">Preview</p>
        ${renderPreview()}
        <h3>候选对比</h3>
        <div class="candidate-list" id="candidateList"></div>
      </aside>
    </div>
  `;
  bindControls();
  renderScript();
  renderPipeline();
  renderCandidates();
}

function renderControls() {
  const p = state.project;
  return `
    <p class="eyebrow">Prompt Panel</p><h2>生成参数</h2>
    <div class="field"><label>视频主题</label><textarea id="subject">${esc(p.subject)}</textarea></div>
    <div class="field"><label>关键词</label><input id="keywords" value="${esc(p.keywords.join(", "))}" /></div>
    <div class="field"><label>目标受众</label><input id="audience" value="${esc(p.audience)}" /></div>
    <div class="two">
      <div class="field"><label>风格</label><select id="style">${["科普","鸡汤","商业","搞笑","故事","带货"].map((x) => `<option ${x===p.style?"selected":""}>${x}</option>`).join("")}</select></div>
      <div class="field"><label>语言</label><select id="language"><option ${p.language==="zh-CN"?"selected":""}>zh-CN</option><option ${p.language==="en-US"?"selected":""}>en-US</option></select></div>
    </div>
    <div class="two">
      <div class="field"><label>画幅</label><select id="aspect"><option ${p.aspect==="9:16"?"selected":""}>9:16</option><option ${p.aspect==="16:9"?"selected":""}>16:9</option></select></div>
      <div class="field"><label>批量数</label><select id="batchCount">${[1,2,3,5].map((n) => `<option ${n===p.batchCount?"selected":""}>${n}</option>`).join("")}</select></div>
    </div>
    <div class="field"><label>配音</label><select id="voice">${["zh-CN-XiaoyiNeural","zh-CN-YunxiNeural","en-US-JennyNeural"].map((x) => `<option ${x===p.voice.name?"selected":""}>${x}</option>`).join("")}</select></div>
    <div class="two">
      <div class="field"><label>字幕颜色</label><input id="subtitleColor" type="color" value="${p.subtitle.color}" /></div>
      <div class="field"><label>字号</label><input id="subtitleSize" type="number" value="${p.subtitle.size}" /></div>
    </div>
    <div class="two">
      <button class="ghost" id="testVoice">试听配音</button>
      <button class="ghost" id="saveDraft">保存草稿</button>
    </div>
  `;
}

function bindControls() {
  ["subject","keywords","audience","style","language","aspect","batchCount","voice","subtitleColor","subtitleSize"].forEach((id) => {
    $(`#${id}`).addEventListener("change", syncControls);
  });
  $("#saveDraft").addEventListener("click", () => toast("草稿已保存到本地 mock 状态"));
  $("#testVoice").addEventListener("click", () => toast(`试听：${state.project.voice.name}，语速 ${state.project.voice.speed}`));
  $("#generateScript").addEventListener("click", () => {
    syncControls();
    toast("已根据主题重新生成分镜文案");
    state.project.script[0].text = `如果你正在关注“${state.project.subject}”，先别急着追热点，先看清它背后的长期价值。`;
    renderStudio();
  });
  $("#generateVideo").addEventListener("click", runPipeline);
}

function syncControls() {
  state.project.subject = $("#subject").value;
  state.project.keywords = $("#keywords").value.split(",").map((x) => x.trim()).filter(Boolean);
  state.project.audience = $("#audience").value;
  state.project.style = $("#style").value;
  state.project.language = $("#language").value;
  state.project.aspect = $("#aspect").value;
  state.project.resolution = state.project.aspect === "9:16" ? "1080x1920" : "1920x1080";
  state.project.batchCount = Number($("#batchCount").value);
  state.project.voice.name = $("#voice").value;
  state.project.subtitle.color = $("#subtitleColor").value;
  state.project.subtitle.size = Number($("#subtitleSize").value);
  render();
}

function renderScript() {
  $("#scriptList").innerHTML = state.project.script.map((seg, i) => {
    const material = data.materials.find((m) => m.id === seg.materialId) || data.materials[0];
    return `<article class="segment">
      <div class="panel-head"><div><strong>分镜 ${i + 1}</strong><p>${seg.duration}s · ${seg.keywords.join(" / ")}</p></div><button class="ghost replace-material" data-seg="${seg.id}">替换素材</button></div>
      <textarea data-script="${seg.id}">${esc(seg.text)}</textarea>
      <div class="material-thumb" style="--mat:${material.color}">${esc(material.title)} · ${esc(material.license)}</div>
    </article>`;
  }).join("");
  $$("[data-script]").forEach((ta) => ta.addEventListener("input", () => {
    const seg = state.project.script.find((s) => s.id === ta.dataset.script);
    seg.text = ta.value;
    toast("文案改动已同步到字幕层");
  }));
  $$(".replace-material").forEach((btn) => btn.addEventListener("click", () => {
    const seg = state.project.script.find((s) => s.id === btn.dataset.seg);
    state.selectedMaterial = (state.selectedMaterial + 1) % data.materials.length;
    seg.materialId = data.materials[state.selectedMaterial].id;
    renderStudio();
    toast("已替换该分镜素材");
  }));
}

function renderPipeline() {
  $("#pipeline").innerHTML = state.pipeline.map((step) => `<div class="step ${step.status}">
    <span class="dot"></span><div><strong>${esc(step.name)}</strong><br /><small>${esc(step.message)}</small></div><small>${step.durationMs ? step.durationMs + "ms" : ""}</small>
  </div>`).join("");
}

function runPipeline() {
  if (state.running) return;
  state.running = true;
  state.finalCandidate = null;
  state.pipeline = structuredClone(data.pipeline);
  renderStudio();
  let i = 0;
  const tick = () => {
    if (i > 0) {
      state.pipeline[i - 1].status = i === 5 ? "warning" : "done";
      state.pipeline[i - 1].durationMs = 320 + i * 90;
      if (i === 5) state.pipeline[i - 1].message = "素材匹配度 88%，已保留备选素材";
    }
    if (i < state.pipeline.length) {
      state.pipeline[i].status = "processing";
      render();
      i += 1;
      setTimeout(tick, 420);
    } else {
      state.running = false;
      toast("视频生成完成，已得到 3 个候选版本");
      render();
    }
  };
  tick();
}

function renderPreview() {
  const active = data.candidates.find((c) => c.id === state.activeCandidate) || data.candidates[0];
  const subtitle = state.project.script[0].text.slice(0, 34);
  return `<div class="preview-phone" style="${state.project.aspect === "16:9" ? "aspect-ratio:16/9;width:100%;" : ""}">
    <div class="preview-screen">
      <div class="mock-scene"></div>
      <div class="subtitle" style="color:${state.project.subtitle.color};font-size:${Math.max(18, state.project.subtitle.size / 2)}px">${esc(subtitle)}</div>
      <div class="playhead"><span></span></div>
    </div>
  </div>
  <div class="chips"><span class="chip">${esc(active.title)}</span><span class="chip">${active.duration}s</span><span class="chip">${esc(state.project.resolution)}</span></div>`;
}

function renderCandidates() {
  $("#candidateList").innerHTML = data.candidates.map((c) => `<article class="candidate ${c.id === state.activeCandidate ? "active" : ""}" data-candidate="${c.id}">
    <div class="panel-head"><div><strong>${esc(c.title)}</strong><p>${esc(c.style)} · ${c.duration}s · ${esc(c.aspect)}</p></div><button class="ghost set-final" data-final="${c.id}">设为最终版</button></div>
    ${Object.entries(c.score).map(([k,v]) => `<div class="score-row"><span>${scoreLabel(k)}</span><div class="bar"><span style="width:${v}%"></span></div><span>${v}</span></div>`).join("")}
  </article>`).join("");
  $$(".candidate").forEach((card) => card.addEventListener("click", (e) => {
    if (e.target.closest(".set-final")) return;
    state.activeCandidate = card.dataset.candidate;
    renderStudio();
  }));
  $$(".set-final").forEach((btn) => btn.addEventListener("click", () => {
    state.finalCandidate = btn.dataset.final;
    toast(`Candidate ${state.finalCandidate.toUpperCase()} 已设为最终版`);
    render();
  }));
}

function scoreLabel(k) {
  return { script: "文案", material: "素材", voice: "配音", subtitle: "字幕", rhythm: "节奏" }[k] || k;
}

function renderTasks() {
  $("#view").innerHTML = `<section class="panel"><div class="panel-head"><div><p class="eyebrow">Task Center</p><h2>任务中心</h2></div><select id="taskFilter"><option>全部</option><option>已完成</option><option>生成中</option><option>草稿</option></select></div><div class="task-list" id="taskList"></div></section>`;
  const draw = () => {
    const filter = $("#taskFilter").value;
    const rows = data.tasks.filter((t) => filter === "全部" || t[2] === filter);
    $("#taskList").innerHTML = rows.map((t) => `<div class="task"><strong>${t[0]}</strong><span>${esc(t[1])}</span><span>${t[2]}</span><span>${t[3]} 个</span><span>${t[5]}</span><div class="progress"><span style="width:${t[6]}%"></span></div></div>`).join("");
  };
  $("#taskFilter").addEventListener("change", draw);
  draw();
}

function renderGallery() {
  $("#view").innerHTML = `<section class="panel"><div class="panel-head"><div><p class="eyebrow">Gallery</p><h2>成片库</h2></div><button class="ghost">复制发布文案</button></div><div class="gallery-grid">${data.gallery.map((v) => `<article class="video-card"><div class="cover"></div><h3>${esc(v.title)}</h3><p>${v.aspect} · ${v.duration} · ${v.createdAt}</p><p>${esc(v.model)}</p><div class="chips">${v.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></article>`).join("")}</div></section>`;
}

function renderSettings() {
  $("#view").innerHTML = `<div class="provider-grid">${Object.entries(data.providers).map(([group, items]) => `<section class="panel provider-card"><p class="eyebrow">${esc(group)}</p><h2>${providerLabel(group)}</h2><div class="chips">${items.map((x, i) => `<span class="chip" style="${i===0?"color:var(--green)":""}">${esc(x)}</span>`).join("")}</div></section>`).join("")}</div>`;
}

function providerLabel(k) {
  return { llm: "LLM Provider", material: "素材源", tts: "TTS Provider", subtitle: "字幕 Provider", deps: "系统依赖" }[k] || k;
}

function renderApi() {
  const req = { video_subject: state.project.subject, video_language: state.project.language, video_aspect: state.project.aspect, video_count: state.project.batchCount, voice_name: state.project.voice.name, subtitle_enabled: state.project.subtitle.enabled };
  const res = { task_id: state.project.id, status: state.finalCandidate ? "completed" : "processing", pipeline: ["script", "materials", "voice", "subtitle", "compose"] };
  $("#view").innerHTML = `<div class="studio-grid" style="grid-template-columns:1fr 1fr"><section class="panel"><p class="eyebrow">POST /api/v1/videos</p><h2>创建任务请求</h2><pre>${esc(JSON.stringify(req, null, 2))}</pre></section><section class="panel"><p class="eyebrow">Response</p><h2>任务响应</h2><pre>${esc(JSON.stringify(res, null, 2))}</pre></section></div>`;
}

$$(".nav button, .brand").forEach((node) => node.addEventListener("click", (event) => {
  event.preventDefault();
  setRoute(node.dataset.route || "studio");
}));
window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "") || "studio";
  if (route !== state.route) setRoute(route);
});
setRoute(location.hash.replace("#", "") || "studio");
