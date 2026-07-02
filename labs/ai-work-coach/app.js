const data = window.WORK_COACH_MOCK;

const state = {
  route: "today",
  status: "empty",
  activeQuestion: data.lesson.questions[0].id,
  answers: {},
  settings: structuredClone(data.settings),
  graded: false,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.hidden = false;
  setTimeout(() => node.hidden = true, 2200);
}

function setRoute(route) {
  state.route = route;
  $$(".nav button").forEach((button) => button.classList.toggle("active", button.dataset.route === route));
  $("#pageTitle").textContent = { today: "今日训练", profile: "学习画像", history: "历史记录", insights: "成长洞察", settings: "设置" }[route];
  location.hash = route;
  render();
}

function updateStatus() {
  const label = { empty: "未生成", generating: "生成中", ready: "可作答", drafting: "草稿中", submitting: "提交中", graded: "已批改", error: "异常" }[state.status];
  $("#lessonStatus").textContent = label;
}

function render() {
  updateStatus();
  if (state.route === "today") renderToday();
  if (state.route === "profile") renderProfile();
  if (state.route === "history") renderHistory();
  if (state.route === "insights") renderInsights();
  if (state.route === "settings") renderSettings();
}

function renderToday() {
  $("#view").innerHTML = `
    <div class="grid today-grid">
      <aside class="panel">
        <div class="panel-head"><div><p class="eyebrow">Lesson</p><h3>${data.lesson.date}</h3></div><span class="pill">${data.lesson.difficulty}</span></div>
        <div class="question-list" id="questionList"></div>
      </aside>
      <section class="panel">
        <div class="panel-head">
          <div><p class="eyebrow">${data.lesson.category}</p><h2>${data.lesson.title}</h2><p>${data.lesson.reason}</p></div>
          <div class="action-row">
            <button class="ghost" id="generateBtn">生成今日训练</button>
            <button class="primary" id="submitBtn">提交批改</button>
          </div>
        </div>
        <div class="answer-box" id="answerBox"></div>
      </section>
      <aside class="panel soft">
        <p class="eyebrow">Today Goals</p>
        <h3>训练目标</h3>
        <div class="tag-row">${data.lesson.goals.map((g) => `<span class="tag">${escapeHtml(g)}</span>`).join("")}</div>
        <hr />
        <h3>辅助提示</h3>
        <div class="hint" id="coachHint">先完成选择题，再用简答题把工程边界讲成产品语言。草稿会自动保存。</div>
        <p class="saved" id="savedHint">草稿已保存</p>
      </aside>
    </div>
    <div id="reportMount"></div>
  `;
  bindToday();
  renderQuestionList();
  renderActiveQuestion();
  if (state.graded) renderReport();
}

function bindToday() {
  $("#generateBtn").addEventListener("click", () => {
    state.status = "generating";
    updateStatus();
    toast("正在根据学习画像生成训练");
    setTimeout(() => {
      state.status = "ready";
      renderToday();
      toast("今日训练已生成");
    }, 700);
  });
  $("#submitBtn").addEventListener("click", () => submitLesson());
}

function renderQuestionList() {
  $("#questionList").innerHTML = data.lesson.questions.map((q, index) => `
    <button class="question-tab ${q.id === state.activeQuestion ? "active" : ""} ${isAnswered(q) ? "done" : ""}" data-q="${q.id}">
      <strong>${index + 1}. ${escapeHtml(q.title)}</strong><br />
      <span>${escapeHtml(typeLabel(q.type))}</span>
    </button>
  `).join("");
  $$(".question-tab").forEach((button) => button.addEventListener("click", () => {
    state.activeQuestion = button.dataset.q;
    renderToday();
  }));
}

function renderActiveQuestion() {
  const q = data.lesson.questions.find((item) => item.id === state.activeQuestion);
  $("#answerBox").innerHTML = `
    <div>
      <p class="eyebrow">${escapeHtml(typeLabel(q.type))} · ${escapeHtml(q.intent)}</p>
      <h2>${escapeHtml(q.title)}</h2>
      <p>${escapeHtml(q.prompt)}</p>
    </div>
    <div>${renderInput(q)}</div>
    <div class="hint">相关知识点：${q.topics.map(escapeHtml).join(" / ")}</div>
  `;
  bindAnswer(q);
}

function renderInput(q) {
  const value = state.answers[q.id];
  if (q.type === "single") {
    return q.options.map((option) => `<label class="option"><input type="radio" name="${q.id}" value="${escapeHtml(option)}" ${value === option ? "checked" : ""} /> ${escapeHtml(option)}</label>`).join("");
  }
  if (q.type === "multiple") {
    const selected = Array.isArray(value) ? value : [];
    return q.options.map((option) => `<label class="option"><input type="checkbox" value="${escapeHtml(option)}" ${selected.includes(option) ? "checked" : ""} /> ${escapeHtml(option)}</label>`).join("");
  }
  if (q.type === "boolean") {
    return `<label class="option"><input type="radio" name="${q.id}" value="true" ${value === true ? "checked" : ""} /> 正确</label><label class="option"><input type="radio" name="${q.id}" value="false" ${value === false ? "checked" : ""} /> 错误</label>`;
  }
  return `<textarea id="textAnswer" placeholder="写下你的结构化回答">${escapeHtml(value || "")}</textarea>`;
}

function bindAnswer(q) {
  if (["single", "boolean"].includes(q.type)) {
    $$("input[type='radio']").forEach((input) => input.addEventListener("change", () => {
      state.answers[q.id] = q.type === "boolean" ? input.value === "true" : input.value;
      markDraft();
    }));
  } else if (q.type === "multiple") {
    $$("input[type='checkbox']").forEach((input) => input.addEventListener("change", () => {
      state.answers[q.id] = $$("input[type='checkbox']:checked").map((item) => item.value);
      markDraft();
    }));
  } else {
    $("#textAnswer").addEventListener("input", (event) => {
      state.answers[q.id] = event.target.value;
      markDraft();
    });
  }
}

function markDraft() {
  state.status = "drafting";
  updateStatus();
  $("#savedHint")?.classList.add("show");
  setTimeout(() => $("#savedHint")?.classList.remove("show"), 900);
  renderQuestionList();
}

function isAnswered(q) {
  const v = state.answers[q.id];
  if (q.type === "boolean") return typeof v === "boolean";
  if (Array.isArray(v)) return v.length > 0;
  return typeof v === "string" && v.trim().length > 0;
}

function submitLesson() {
  const missing = data.lesson.questions.filter((q) => !isAnswered(q));
  if (missing.length) {
    toast(`还有 ${missing.length} 道题未完成`);
    return;
  }
  if (!confirm("确认提交今日训练并生成 AI 批改报告？")) return;
  state.status = "submitting";
  updateStatus();
  toast("AI 正在批改并更新学习画像");
  setTimeout(() => {
    state.status = "graded";
    state.graded = true;
    updateStatus();
    renderToday();
    toast("批改完成，画像已更新");
  }, 900);
}

function renderReport() {
  $("#reportMount").innerHTML = `
    <section class="panel" style="margin-top:16px">
      <div class="report-hero">
        <div class="score"><strong>${data.grading.totalScore}</strong></div>
        <div>
          <p class="eyebrow">Grading Report</p>
          <h2>AI 批改报告</h2>
          <div class="metric-row">
            <div class="metric"><strong>${data.grading.accuracy}</strong><span>正确率</span></div>
            <div class="metric"><strong>${data.grading.durationMinutes}m</strong><span>完成时长</span></div>
            <div class="metric"><strong>${data.grading.difficultyFit}</strong><span>难度匹配</span></div>
          </div>
        </div>
      </div>
      <div class="grid two-grid" style="margin-top:18px">
        <div class="feedback-list">
          ${data.lesson.questions.map((q, i) => `<div class="feedback"><strong>${i + 1}. ${escapeHtml(q.title)}</strong><p>你的答案：${escapeHtml(formatAnswer(state.answers[q.id]))}</p><p>建议：${escapeHtml(feedbackFor(q))}</p><span class="tag">${q.topics.map(escapeHtml).join(" / ")}</span></div>`).join("")}
        </div>
        <div>
          <div class="panel soft"><h3>强项总结</h3><ul>${data.grading.strengths.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul><h3>建议补强</h3><ul>${data.grading.improvements.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul></div>
          <div class="panel" style="margin-top:12px"><h3>面试可表达语言</h3>${data.grading.talkingPoints.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div>
        </div>
      </div>
    </section>
  `;
}

function feedbackFor(q) {
  if (q.type === "case") return "你能从行为信号推导机制调整，下一步可以补充 A/B 验证和指标定义。";
  if (q.type === "text") return "结构清晰，建议进一步加入权衡和反例。";
  return "答案方向正确，注意把原则落到可执行流程。";
}

function formatAnswer(value) {
  if (Array.isArray(value)) return value.join("、");
  if (typeof value === "boolean") return value ? "正确" : "错误";
  return value || "未作答";
}

function typeLabel(type) {
  return { single: "单选题", multiple: "多选题", boolean: "判断题", text: "文本题", case: "案例题" }[type];
}

function renderProfile() {
  $("#view").innerHTML = `
    <div class="grid two-grid">
      <section class="panel"><p class="eyebrow">Learning Profile</p><h2>能力雷达与主题掌握</h2>${data.profile.topicScores.map(([name, score, trend]) => `<div class="bar-row"><strong>${escapeHtml(name)}</strong><div class="bar"><span style="width:${score}%"></span></div><span>${score} ${trend}</span></div>`).join("")}</section>
      <aside class="panel soft"><h3>下一步推荐</h3><p><strong>${escapeHtml(data.profile.recommendation.topic)}</strong></p><p>${escapeHtml(data.profile.recommendation.reason)}</p><div class="tag-row"><span class="tag">${escapeHtml(data.profile.recommendation.difficulty)}</span><span class="tag">${escapeHtml(data.profile.recommendation.type)}</span></div></aside>
      <section class="panel"><h3>记忆标签</h3><p>已掌握：${data.profile.memories.known.map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join(" ")}</p><p>建议补强：${data.profile.memories.improvement.map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join(" ")}</p><p>减少出现：${data.profile.memories.avoided.map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join(" ")}</p></section>
      <section class="panel"><h3>画像更新影响</h3>${data.grading.profilePatch.map((p) => `<div class="bar-row"><strong>${escapeHtml(p.topic)}</strong><div class="bar"><span style="width:${p.after}%"></span></div><span>${p.before} -> ${p.after}</span></div>`).join("")}</section>
    </div>
  `;
}

function renderHistory() {
  $("#view").innerHTML = `<section class="panel"><div class="panel-head"><div><p class="eyebrow">Training History</p><h2>历史记录</h2></div><select id="historyFilter"><option>全部</option><option>Agent</option><option>Product</option><option>Engineering</option><option>Mixed</option></select></div><div id="historyList"></div></section>`;
  const draw = () => {
    const filter = $("#historyFilter").value;
    const rows = data.history.filter((r) => filter === "全部" || r[1] === filter);
    $("#historyList").innerHTML = rows.map((r) => `<div class="history-row"><span>${r[0]}</span><span>${r[1]}</span><strong>${escapeHtml(r[2])}</strong><span>${r[3]}</span><span>${r[4]}</span></div>`).join("");
  };
  $("#historyFilter").addEventListener("change", draw);
  draw();
}

function renderInsights() {
  $("#view").innerHTML = `
    <div class="grid two-grid">
      <section class="panel"><p class="eyebrow">Adaptive Logic</p><h2>今日推荐为什么生成</h2>${data.insights.map((item) => `<div class="insight-row"><strong>${escapeHtml(item.label)}</strong><span>${item.value > 0 ? "+" : ""}${item.value}</span><p>${escapeHtml(item.desc)}</p></div>`).join("")}</section>
      <aside class="panel soft"><h3>选题公式</h3><p>主题分数 = 权重 + 建议补强加成 + 新近资料加成 - 重复惩罚 - 掌握惩罚</p><h3>画像更新</h3><p>新证据权重 0.7，旧证据权重 0.3，topicScores 限幅 0-100。</p></aside>
    </div>
  `;
}

function renderSettings() {
  $("#view").innerHTML = `
    <div class="grid two-grid">
      <section class="panel"><p class="eyebrow">Preferences</p><h2>训练方向权重</h2>${state.settings.weights.map(([name, value], index) => `<div class="setting-row"><strong>${escapeHtml(name)}</strong><input type="range" min="0" max="60" value="${value}" data-weight="${index}" /><span>${value}%</span></div>`).join("")}</section>
      <aside class="panel soft"><h3>生成策略</h3><p>Provider：${escapeHtml(state.settings.provider)}</p><p>时区：${escapeHtml(state.settings.timezone)}</p><p>每日生成：${escapeHtml(state.settings.generateAt)}</p><div class="setting-row"><strong>定时生成</strong><span>开启</span><span class="toggle"></span></div></aside>
    </div>
  `;
  $$("input[type='range']").forEach((input) => input.addEventListener("input", () => {
    const row = input.closest(".setting-row");
    row.querySelector("span").textContent = `${input.value}%`;
    $("#profileSignal").textContent = "画像推荐：已根据设置重新加权";
  }));
}

$$(".nav button, .brand").forEach((node) => node.addEventListener("click", (event) => {
  event.preventDefault();
  setRoute(node.dataset.route || "today");
}));
window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "") || "today";
  if (route !== state.route) setRoute(route);
});
setRoute(location.hash.replace("#", "") || "today");
