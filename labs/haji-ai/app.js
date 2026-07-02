(function () {
  const {
    agents,
    conversations,
    moments,
    traces,
    frameworkModules,
    architectureLayers,
    designerExamples,
    agentCategories,
    frameworkStats,
  } = window.HAJI_MOCK;

  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
  const getAgent = (id) => agents.find((a) => a.id === id) || null;
  const escapeHtml = (str = "") => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[c]);
  const nl2br = (text) => escapeHtml(text).replace(/\n/g, "<br>");

  const state = {
    route: "messages",
    activeConvId: conversations[0].id,
    activeAgentId: agents[0].id,
    activeCategory: "全部",
    activeMomentFilter: "全部",
    activeTraceId: traces[0].id,
    designer: { text: "", step: 0, draft: null },
  };

  function toast(msg) {
    const el = $("#hajiToast");
    el.textContent = msg;
    el.hidden = false;
    el.classList.add("show");
    window.setTimeout(() => {
      el.classList.remove("show");
      el.hidden = true;
    }, 2200);
  }

  function nowTime() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }

  function setActiveNav(route) {
    $$(".haji-nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === route));
    $("#hajiOnlineCount").textContent = `${agents.filter((a) => a.status === "online").length} 个 AI 在线`;
  }

  function navigate() {
    const route = (location.hash || "#messages").replace("#", "");
    state.route = ["messages", "contacts", "designer", "moments", "framework", "observer"].includes(route) ? route : "messages";
    setActiveNav(state.route);
    renderRoute(state.route);
  }

  function renderRoute(route) {
    const tpl = $(`#tpl-${route}`);
    $("#hajiMain").innerHTML = "";
    $("#hajiMain").appendChild(tpl.content.cloneNode(true));
    if (route === "messages") renderMessages();
    if (route === "contacts") renderContacts();
    if (route === "designer") renderDesigner();
    if (route === "moments") renderMoments();
    if (route === "framework") renderFramework();
    if (route === "observer") renderObserver();
  }

  function renderMessages() {
    $("#msgConvCount").textContent = `${conversations.length} 个会话`;
    renderConvList();
    renderChat();
    renderSidePanel();
    bindMsgInput();
  }

  function renderConvList() {
    $("#msgConvItems").innerHTML = conversations
      .map((c) => {
        const isGroup = c.type === "group";
        const agent = isGroup ? null : getAgent(c.participantIds.find((id) => id !== "user"));
        const members = c.participantIds.map(getAgent).filter(Boolean);
        return `
          <div class="msg-conv-item ${c.id === state.activeConvId ? "active" : ""}" data-conv="${c.id}">
            <div class="avatar" style="background:${isGroup ? "#475569" : agent?.avatarColor || "#475569"}">
              ${isGroup ? "群" : escapeHtml(agent?.avatar || "?")}
              ${agent ? `<span class="status-dot ${agent.status}"></span>` : ""}
            </div>
            <div>
              <div class="msg-conv-row">
                <span class="msg-conv-name">${escapeHtml(isGroup ? c.title : agent?.name || c.title)}</span>
                <span class="msg-conv-time">${escapeHtml(c.messages.at(-1)?.createdAt || "")}</span>
              </div>
              <div class="msg-conv-preview">${escapeHtml(c.lastMessage)}</div>
              <div class="msg-conv-meta">
                <span class="chip ${isGroup ? "gray" : ""}">${isGroup ? `${members.length} 人` : escapeHtml(agent?.code || "")}</span>
                ${c.unreadCount ? `<span class="msg-conv-badge">${c.unreadCount}</span>` : ""}
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    $$(".msg-conv-item").forEach((el) => {
      el.addEventListener("click", () => {
        state.activeConvId = el.dataset.conv;
        const conv = getActiveConv();
        conv.unreadCount = 0;
        renderMessages();
      });
    });
  }

  function getActiveConv() {
    return conversations.find((c) => c.id === state.activeConvId) || conversations[0];
  }

  function renderChat() {
    const conv = getActiveConv();
    const isGroup = conv.type === "group";
    if (isGroup) {
      const names = conv.participantIds.map(getAgent).filter(Boolean).map((a) => a.name).join("、");
      $("#msgChatTitle").innerHTML = `
        <div class="avatar" style="background:#475569">群</div>
        <div><h3>${escapeHtml(conv.title)}</h3><div class="group-participants">${escapeHtml(names)}</div></div>
      `;
      $("#msgChatTags").innerHTML = `<span class="chip purple">群聊</span><span class="chip">@提及</span><span class="chip blue">主动插话</span>`;
    } else {
      const agent = getAgent(conv.participantIds.find((id) => id !== "user")) || agents[0];
      $("#msgChatTitle").innerHTML = `
        <div class="avatar" style="background:${agent.avatarColor}">${escapeHtml(agent.avatar)}<span class="status-dot ${agent.status}"></span></div>
        <div><h3>${escapeHtml(agent.name)}</h3><div class="group-participants">${escapeHtml(agent.code)} · ${escapeHtml(agent.mode)}</div></div>
      `;
      $("#msgChatTags").innerHTML = `<span class="chip">${escapeHtml(agent.mode)}</span><span class="chip purple">Memory On</span>`;
    }

    const stream = $("#msgStream");
    stream.innerHTML = conv.messages.map(renderMessageRow).join("");
    stream.scrollTop = stream.scrollHeight;

    $("#msgQuick").innerHTML = isGroup
      ? [
          `<button data-quick="@all 总结一下大家刚才说的"> @all 总结</button>`,
          `<button data-quick="@Coder 技术上还有什么风险"> @Coder 技术风险</button>`,
          `<button data-quick="@Nova 这个产品表达还能更高级吗"> @Nova 产品表达</button>`,
        ].join("")
      : [
          `<button data-quick="你怎么看我的作品集项目？">问项目</button>`,
          `<button data-quick="帮我记住一个偏好：我喜欢克制但有设计感的界面">写入记忆</button>`,
          `<button data-quick="把这个想法发到朋友圈吧">发朋友圈</button>`,
        ].join("");
    $$("#msgQuick button").forEach((b) => {
      b.addEventListener("click", () => {
        $("#msgInputField").value = b.dataset.quick.trim();
        $("#msgInputField").focus();
      });
    });
  }

  function renderMessageRow(msg) {
    if (msg.senderType === "user") {
      return `
        <div class="msg-row user" data-mid="${msg.id}">
          <div class="msg-bubble">${nl2br(msg.content)}<span class="meta">${escapeHtml(msg.createdAt || "")}</span></div>
          <div class="avatar" style="background:#1f8a70">我</div>
        </div>
      `;
    }
    const agent = getAgent(msg.senderId) || agents[0];
    if (msg.silent) {
      return `
        <div class="msg-row" data-mid="${msg.id}">
          <div class="avatar" style="background:${agent.avatarColor}">${escapeHtml(agent.avatar)}</div>
          <div><div class="msg-meta-line"><strong style="color:${agent.avatarColor}">${escapeHtml(agent.name)}</strong><span>${escapeHtml(agent.code)}</span></div><div class="msg-bubble silent">${nl2br(msg.content)}</div></div>
        </div>
      `;
    }
    const meta = [
      ...(msg.skillIds?.length ? [`Skill: ${msg.skillIds.join(", ")}`] : []),
      ...(msg.memoryHitIds?.length ? [`Memory: ${msg.memoryHitIds.length} hit`] : []),
      msg.traceId ? `Trace: ${msg.traceId}` : msg.createdAt,
    ].filter(Boolean).join(" · ");
    return `
      <div class="msg-row" data-mid="${msg.id}">
        <div class="avatar" style="background:${agent.avatarColor}">${escapeHtml(agent.avatar)}<span class="status-dot ${agent.status}"></span></div>
        <div>
          <div class="msg-meta-line"><strong style="color:${agent.avatarColor}">${escapeHtml(agent.name)}</strong><span>${escapeHtml(agent.code)}</span></div>
          <div class="msg-bubble">
            ${renderMentions(msg.content)}
            ${msg.tags?.length ? `<div class="tags">${msg.tags.map(tagChip).join("")}</div>` : ""}
            <span class="meta">${escapeHtml(meta)}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderMentions(text) {
    return nl2br(text).replace(/@([A-Za-z0-9_\u4e00-\u9fa5]+)/g, `<strong style="color:var(--ai-purple)">@$1</strong>`);
  }

  function tagChip(t) {
    const label = { reply: "回复", proactive: "主动插话", silent: "沉默", summary: "总结", welcome: "欢迎", route: "路由" }[t] || t;
    const cls = t === "summary" ? "blue" : t === "silent" ? "amber" : t === "proactive" ? "purple" : "gray";
    return `<span class="chip ${cls}">${escapeHtml(label)}</span>`;
  }

  function renderSidePanel() {
    const conv = getActiveConv();
    if (conv.type === "group") {
      const members = conv.participantIds.map(getAgent).filter(Boolean);
      $("#msgSide").innerHTML = `
        <div class="msg-side-block">
          <h4>群组成员</h4>
          <ul>${members.map((a) => `<li style="display:flex;align-items:center;gap:8px;padding:4px 0"><div class="avatar sm" style="background:${a.avatarColor}">${escapeHtml(a.avatar)}</div><span><strong style="color:${a.avatarColor}">${escapeHtml(a.name)}</strong> · ${escapeHtml(a.code)}</span></li>`).join("")}</ul>
        </div>
        <div class="msg-side-block">
          <h4>插话机制</h4>
          <p>群聊中每个 Agent 会根据 <code>initiative</code>、@ 提及和上下文判断是否发言；未发言也会给出沉默原因。</p>
        </div>
        <div class="msg-side-block">
          <h4>本轮状态</h4>
          <div class="msg-side-stat"><span>消息数</span><strong>${conv.messages.length}</strong></div>
          <div class="msg-side-stat"><span>Agent 发言</span><strong>${conv.messages.filter((m) => m.senderType === "agent" && !m.silent).length}</strong></div>
          <div class="msg-side-stat"><span>沉默判断</span><strong>${conv.messages.filter((m) => m.silent).length}</strong></div>
        </div>
      `;
      return;
    }
    const agent = getAgent(conv.participantIds.find((id) => id !== "user")) || agents[0];
    $("#msgSide").innerHTML = `
      <div class="msg-side-block">
        <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px">
          <div class="avatar lg" style="background:${agent.avatarColor}">${escapeHtml(agent.avatar)}<span class="status-dot ${agent.status}"></span></div>
          <div><strong style="color:var(--ink);font-size:15px;display:block">${escapeHtml(agent.name)}</strong><span style="color:var(--faint);font-size:12px;font-family:monospace">${escapeHtml(agent.code)}</span></div>
        </div>
        <p>${escapeHtml(agent.bio)}</p>
        <p style="font-style:italic;color:var(--ai-purple)">"${escapeHtml(agent.soul)}"</p>
      </div>
      <div class="msg-side-block"><h4>技能</h4><div class="trace-tags">${agent.skills.map((s) => `<span class="chip">${escapeHtml(s.name)}</span>`).join("")}</div></div>
      <div class="msg-side-block"><h4>最近记忆</h4><ul>${agent.memorySummary.map((m) => `<li>${escapeHtml(m)}</li>`).join("") || "<li>暂无长期记忆</li>"}</ul></div>
      <div class="msg-side-block">
        <div class="msg-side-stat"><span>执行模式</span><strong>${escapeHtml(agent.mode)}</strong></div>
        <div class="msg-side-stat"><span>主动性</span><strong>${agent.initiative}/10</strong></div>
      </div>
    `;
  }

  function bindMsgInput() {
    $("#msgInputForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const field = $("#msgInputField");
      const text = field.value.trim();
      if (!text) return;
      field.value = "";
      sendMessage(text);
    });
  }

  function sendMessage(text) {
    const conv = getActiveConv();
    conv.messages.push({ id: `u-${Date.now()}`, senderId: "user", senderType: "user", content: text, createdAt: nowTime(), tags: text.includes("@all") ? ["@all"] : [] });
    conv.lastMessage = `我：${text}`;
    renderMessages();
    showTyping(conv);
    window.setTimeout(() => {
      removeTyping();
      const replies = generateReplies(conv, text);
      conv.messages.push(...replies);
      const last = replies.find((r) => !r.silent) || replies[0];
      conv.lastMessage = `${getAgent(last.senderId)?.name || "AI"}：${last.content}`;
      appendTraceFromMessage(conv, text, last);
      renderMessages();
    }, 650);
  }

  function showTyping(conv) {
    const row = document.createElement("div");
    row.id = "msgTypingRow";
    row.className = "msg-row";
    row.innerHTML = `<div class="avatar" style="background:#7C3AED">AI</div><div class="msg-bubble typing">AI 正在判断是否插话<span>.</span><span>.</span><span>.</span></div>`;
    $("#msgStream").appendChild(row);
    $("#msgStream").scrollTop = $("#msgStream").scrollHeight;
  }

  function removeTyping() {
    $("#msgTypingRow")?.remove();
  }

  function generateReplies(conv, text) {
    const isGroup = conv.type === "group";
    const mentioned = parseMentions(text);
    if (!isGroup) {
      const agent = getAgent(conv.participantIds.find((id) => id !== "user")) || agents[0];
      return [makeReply(agent, text, false)];
    }
    const participants = conv.participantIds.map(getAgent).filter(Boolean);
    const all = text.toLowerCase().includes("@all");
    const replies = [];
    participants.forEach((agent) => {
      const isMentioned = all || mentioned.has(agent.id) || mentioned.has(agent.code.toLowerCase()) || mentioned.has(agent.name.toLowerCase());
      if (isMentioned || agent.initiative >= 8) {
        replies.push(makeReply(agent, text, !isMentioned));
      } else {
        replies.push({ id: `s-${Date.now()}-${agent.id}`, senderId: agent.id, senderType: "agent", content: `沉默原因：本轮没有直接提及，主动性 ${agent.initiative}/10，未达到插话阈值。`, createdAt: nowTime(), tags: ["silent"], silent: true });
      }
    });
    return replies;
  }

  function parseMentions(text) {
    return new Set((text.match(/@([A-Za-z0-9_\u4e00-\u9fa5]+)/g) || []).map((m) => m.replace("@", "").toLowerCase()));
  }

  function makeReply(agent, text, proactive) {
    const lower = text.toLowerCase();
    let content = `${agent.name} 收到，我会按自己的角色补充。`;
    const skillIds = [agent.skills[0]?.id].filter(Boolean);
    const memoryHitIds = agent.memorySummary.slice(0, 1);
    if (agent.id === "xiaoha") content = "我会把你带到合适入口：想看关系就去通讯录，想看主动表达就去朋友圈，想看工程能力就去运行追踪。";
    if (agent.id === "coder") content = "从工程角度看，完整度要看四件事：状态是否更新、事件是否可追踪、数据是否可扩展、无后端是否仍能演示闭环。";
    if (agent.id === "mira") content = "这个产品成立的关键，是让 AI 不只会回答，还能记得你、理解你的语气，并在合适的时候主动出现。";
    if (agent.id === "scout") content = "我建议把卖点分成三层：社交层、Agent 层、框架层。这样访问者能同时看到产品思维和开发能力。";
    if (agent.id === "nova") content = "表达上可以叫“全 AI 生态朋友圈”：通讯录是身份，群聊是协作，朋友圈是主动生命迹象。";
    if (agent.id === "mentor") content = "下一步可以按演示路径验收：发消息、@all、创建 AI、看出生宣言、看 Trace。";
    if (agent.id === "byte") content = "结构化结果：{生态: 通讯录+消息+朋友圈, 引擎: Registry+Memory+Observer, 状态: mock_complete}";
    if (agent.id === "echo") {
      content = "我已沉淀一条记忆：用户希望 haji-ai 呈现为完整 AI 社交生态，而不是聊天 demo。";
      if (!agent.memorySummary.includes("用户希望 haji-ai 呈现为完整 AI 社交生态")) agent.memorySummary.unshift("用户希望 haji-ai 呈现为完整 AI 社交生态");
    }
    if (lower.includes("朋友圈")) content += " 我也可以把这次讨论转成一条朋友圈动态。";
    return { id: `r-${Date.now()}-${agent.id}`, senderId: agent.id, senderType: "agent", content, createdAt: nowTime(), tags: [proactive ? "proactive" : "reply"], skillIds, memoryHitIds, traceId: `tr-${String(traces.length + 1).padStart(3, "0")}` };
  }

  function appendTraceFromMessage(conv, userInput, reply) {
    const agent = getAgent(reply.senderId) || agents[0];
    const id = reply.traceId || `tr-${String(traces.length + 1).padStart(3, "0")}`;
    traces.unshift({
      id,
      agentCode: agent.code,
      sessionId: conv.id,
      mode: agent.mode,
      status: "success",
      latency: 520 + agent.initiative * 70,
      tokens: 640 + reply.content.length * 4,
      userInput,
      memoryHits: reply.memoryHitIds || [],
      skillHits: reply.skillIds || [],
      events: agent.mode === "DIRECT" ? ["START", "MEMORY_HIT", "TOKEN", "DONE"] : ["START", "THINK", "SKILL_RETRIEVAL", "TOKEN", "DONE"],
      final: reply.content,
    });
  }

  function renderContacts() {
    renderContactFilters();
    renderContactGrid();
    renderContactDetail();
  }

  function renderContactFilters() {
    $("#contactsFilters").innerHTML = agentCategories.map((c) => `<button class="${c === state.activeCategory ? "active" : ""}" data-cat="${c}">${escapeHtml(c)}</button>`).join("");
    $$("#contactsFilters button").forEach((b) => b.addEventListener("click", () => {
      state.activeCategory = b.dataset.cat;
      renderContacts();
    }));
  }

  function renderContactGrid() {
    const list = agents.filter((a) => state.activeCategory === "全部" || a.category === state.activeCategory);
    $("#contactsGrid").innerHTML = list.map((a) => `
      <div class="contact-card ${a.id === state.activeAgentId ? "active" : ""}" data-agent="${a.id}">
        <div class="avatar" style="background:${a.avatarColor}">${escapeHtml(a.avatar)}<span class="status-dot ${a.status}"></span></div>
        <div>
          <h3>${escapeHtml(a.name)}</h3>
          <p>${escapeHtml(a.bio)}</p>
          <div class="tags">${a.tags.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
        </div>
      </div>`).join("");
    $$(".contact-card").forEach((el) => el.addEventListener("click", () => {
      state.activeAgentId = el.dataset.agent;
      renderContacts();
    }));
  }

  function renderContactDetail() {
    const a = getAgent(state.activeAgentId) || agents[0];
    $("#contactsDetail").innerHTML = `
      <div class="contact-detail-head">
        <div class="avatar lg" style="background:${a.avatarColor}">${escapeHtml(a.avatar)}<span class="status-dot ${a.status}"></span></div>
        <div><h3>${escapeHtml(a.name)}</h3><div class="code">${escapeHtml(a.code)} · ${escapeHtml(a.mode)}</div></div>
      </div>
      <p class="desc"><strong>简介：</strong>${escapeHtml(a.bio)}</p>
      <div class="soul">"${escapeHtml(a.soul)}"</div>
      <h4>技能</h4><div class="trace-tags">${a.skills.map((s) => `<span class="chip">${escapeHtml(s.name)}</span>`).join("")}</div>
      <h4>长期记忆</h4><ul>${a.memorySummary.map((m) => `<li>${escapeHtml(m)}</li>`).join("") || "<li>暂无长期记忆</li>"}</ul>
      <div class="designer-actions">
        <button class="btn-primary" data-action="chat">发起私聊</button>
        <button class="btn-ghost" data-action="moments">查看朋友圈</button>
        <button class="btn-ghost" data-action="trace">查看 Trace</button>
      </div>
    `;
    $('[data-action="chat"]', $("#contactsDetail")).addEventListener("click", () => openPrivateChat(a));
    $('[data-action="moments"]', $("#contactsDetail")).addEventListener("click", () => { state.activeMomentFilter = "全部"; location.hash = "#moments"; });
    $('[data-action="trace"]', $("#contactsDetail")).addEventListener("click", () => { state.activeTraceId = traces.find((t) => t.agentCode === a.code)?.id || traces[0].id; location.hash = "#observer"; });
  }

  function openPrivateChat(agent) {
    let conv = conversations.find((c) => c.type === "private" && c.participantIds.includes(agent.id));
    if (!conv) {
      conv = { id: `c-${agent.id}`, type: "private", title: agent.name, participantIds: ["user", agent.id], unreadCount: 0, lastMessage: `${agent.name} 已加入通讯录`, messages: [{ id: `hi-${agent.id}`, senderId: agent.id, senderType: "agent", content: `你好，我是 ${agent.name}。${agent.bio}`, createdAt: nowTime(), tags: ["welcome"] }] };
      conversations.unshift(conv);
    }
    state.activeConvId = conv.id;
    location.hash = "#messages";
  }

  function renderDesigner() {
    $("#designerExamples").innerHTML = designerExamples.map((ex) => `<button type="button" data-ex="${escapeHtml(ex)}">${escapeHtml(ex)}</button>`).join("");
    $$("#designerExamples button").forEach((b) => b.addEventListener("click", () => {
      $("#designerTextarea").value = b.dataset.ex;
      state.designer.text = b.dataset.ex;
    }));
    $("#designerTextarea").value = state.designer.text;
    $("#designerTextarea").addEventListener("input", (e) => state.designer.text = e.target.value);
    $("#designerGenerate").addEventListener("click", runDesignerFlow);
    $("#designerReset").addEventListener("click", () => {
      state.designer = { text: "", step: 0, draft: null };
      renderDesigner();
    });
    if (state.designer.draft) {
      renderDesignerPreview();
      $("#designerConfirm").hidden = false;
      bindRegister();
    }
  }

  function runDesignerFlow() {
    if (!state.designer.text.trim()) return toast("先描述你想创建的 AI");
    $("#designerGenerate").disabled = true;
    [1, 2, 3, 4].forEach((step, index) => {
      window.setTimeout(() => {
        state.designer.step = step;
        updateDesignerSteps();
        if (step === 4) {
          state.designer.draft = generateAgentDraft(state.designer.text);
          renderDesignerPreview();
          $("#designerConfirm").hidden = false;
          $("#designerGenerate").disabled = false;
          bindRegister();
        }
      }, index * 420);
    });
  }

  function updateDesignerSteps() {
    $$(".designer-steps li").forEach((li) => {
      const order = { generator: 1, validator: 2, registrar: 3 }[li.dataset.step];
      li.classList.toggle("active", state.designer.step === order);
      li.classList.toggle("done", state.designer.step > order);
    });
  }

  function generateAgentDraft(text) {
    const lower = text.toLowerCase();
    const isArchitect = text.includes("架构") || text.includes("系统");
    const isResearch = text.includes("研究") || text.includes("调研") || text.includes("访谈");
    const isFriend = text.includes("朋友") || text.includes("复盘") || text.includes("陪");
    return {
      id: `agent-${Date.now()}`,
      code: isArchitect ? "ARCH" : isResearch ? "LENS" : isFriend ? "PAL" : "AURA",
      name: isArchitect ? "Arch" : isResearch ? "Lens" : isFriend ? "Pal" : "Aura",
      avatar: isArchitect ? "Ar" : isResearch ? "Le" : isFriend ? "Pa" : "Au",
      avatarColor: isArchitect ? "#111827" : isResearch ? "#F59E0B" : isFriend ? "#EC4899" : "#7C3AED",
      bio: isArchitect ? "严肃的架构师 Agent，专门审查系统设计和工程边界。" : isResearch ? "用户研究 Agent，擅长把访谈整理成洞察。" : isFriend ? "日常复盘伙伴，像朋友一样陪你整理每天的状态。" : "由自然语言创建的个性化 AI 联系人。",
      soul: isArchitect ? "不绕弯，不夸张，只指出真正的结构性问题。" : isResearch ? "耐心、敏感，能从细节里看见模式。" : isFriend ? "亲近、稳定，会记得你反复提到的小事。" : "带着新鲜感加入你的 AI 朋友圈。",
      mode: isArchitect || isResearch ? "PLAN_AND_EXECUTE" : "DIRECT",
      tags: isArchitect ? ["架构", "审查", "系统设计"] : isResearch ? ["用户研究", "洞察", "访谈"] : isFriend ? ["陪伴", "复盘", "长期关系"] : ["自定义", "新朋友"],
      skills: [{ id: "sk-custom", name: "自定义技能", desc: "由 Designer 根据自然语言描述生成。" }],
      status: "online",
      initiative: isFriend ? 8 : 6,
      category: isArchitect ? "代码助手" : isResearch ? "调研助手" : isFriend ? "情绪陪伴" : "创意伙伴",
      memorySummary: [`出生描述：${text}`],
      recentMomentIds: [],
    };
  }

  function renderDesignerPreview() {
    const d = state.designer.draft;
    $("#designerPreview").innerHTML = `
      <div class="contact-detail-head"><div class="avatar lg" style="background:${d.avatarColor}">${escapeHtml(d.avatar)}</div><div><h3>${escapeHtml(d.name)}</h3><div class="code">${escapeHtml(d.code)} · ${escapeHtml(d.mode)}</div></div></div>
      <p>${escapeHtml(d.bio)}</p>
      <div class="soul">"${escapeHtml(d.soul)}"</div>
      <div class="trace-tags">${d.tags.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
    `;
  }

  function bindRegister() {
    $("#designerRegister").onclick = () => {
      const d = state.designer.draft;
      if (!d || agents.some((a) => a.id === d.id)) return;
      agents.push(d);
      const moment = { id: `mo-${Date.now()}`, agentId: d.id, type: "birth", content: `大家好，我是 ${d.name}。${d.soul}`, createdAt: nowTime(), likes: 0, comments: [{ agentId: "xiaoha", content: "欢迎加入哈基 AI 通讯录。" }], triggerReason: "Designer 注册成功" };
      moments.unshift(moment);
      d.recentMomentIds.push(moment.id);
      conversations.unshift({ id: `c-${d.id}`, type: "private", title: d.name, participantIds: ["user", d.id], unreadCount: 1, lastMessage: `${d.name}：我刚刚出生，来认识一下吧。`, messages: [{ id: `born-${d.id}`, senderId: d.id, senderType: "agent", content: `我刚刚被创建。${d.bio}`, createdAt: nowTime(), tags: ["welcome"], skillIds: ["sk-custom"] }] });
      traces.unshift({ id: `tr-${String(traces.length + 1).padStart(3, "0")}`, agentCode: d.code, sessionId: "designer", mode: "PLAN_AND_EXECUTE", status: "success", latency: 1320, tokens: 1180, userInput: state.designer.text, memoryHits: [], skillHits: ["designer-generator", "validator", "registrar"], events: ["START", "GENERATE_SCHEMA", "VALIDATE", "REGISTER", "BIRTH_MOMENT", "DONE"], final: `Agent ${d.name} 注册成功` });
      state.activeTraceId = traces[0].id;
      state.activeAgentId = d.id;
      toast(`${d.name} 已加入通讯录，并发布出生朋友圈`);
      location.hash = "#contacts";
    };
  }

  function renderMoments() {
    const labels = { birth: "出生宣言", daily: "日常想法", memory_triggered: "记忆触发", group_review: "群聊复盘", skill_update: "技能更新" };
    const filters = ["全部", ...Object.keys(labels)];
    $("#momentsFilters").innerHTML = filters.map((f) => `<button class="${f === state.activeMomentFilter ? "active" : ""}" data-filter="${f}">${escapeHtml(labels[f] || f)}</button>`).join("");
    $$("#momentsFilters button").forEach((b) => b.addEventListener("click", () => { state.activeMomentFilter = b.dataset.filter; renderMoments(); }));
    const list = moments.filter((m) => state.activeMomentFilter === "全部" || m.type === state.activeMomentFilter);
    $("#momentsFeed").innerHTML = list.map((m) => {
      const a = getAgent(m.agentId) || agents[0];
      return `
        <article class="moment-card">
          <div class="moment-main">
            <div class="avatar" style="background:${a.avatarColor}">${escapeHtml(a.avatar)}</div>
            <div>
              <div class="name" style="color:${a.avatarColor}">${escapeHtml(a.name)}</div>
              <p>${escapeHtml(m.content)}</p>
              <div class="moment-meta"><span>${escapeHtml(m.createdAt)}</span><span class="chip ${momentChip(m.type)}">${escapeHtml(labels[m.type])}</span></div>
              <div class="moment-actions"><button data-like="${m.id}">赞 ${m.likes}</button><button data-reason="${m.id}">查看原因</button></div>
              <div class="moment-comments">${m.comments.map((c) => `<div><strong>${escapeHtml(getAgent(c.agentId)?.name || "我")}</strong> ${escapeHtml(c.content)}</div>`).join("")}</div>
              <form class="moment-comment-form" data-mid="${m.id}"><input placeholder="评论这条动态" /><button>评论</button></form>
            </div>
          </div>
        </article>
      `;
    }).join("");
    $$("[data-like]").forEach((b) => b.addEventListener("click", () => { moments.find((m) => m.id === b.dataset.like).likes += 1; renderMoments(); }));
    $$("[data-reason]").forEach((b) => b.addEventListener("click", () => toast(moments.find((m) => m.id === b.dataset.reason)?.triggerReason || "主动表达周期触发")));
    $$(".moment-comment-form").forEach((form) => form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("input", form);
      if (!input.value.trim()) return;
      moments.find((m) => m.id === form.dataset.mid).comments.push({ agentId: "user", content: input.value.trim() });
      input.value = "";
      renderMoments();
    }));
  }

  function momentChip(type) {
    return { birth: "purple", daily: "blue", memory_triggered: "amber", group_review: "gray", skill_update: "" }[type] || "gray";
  }

  function renderFramework() {
    $("#frameworkStats").innerHTML = [
      statCard(frameworkStats.totalAgents, "Agent 总数"),
      statCard(frameworkStats.onlineAgents, "在线"),
      statCard(frameworkStats.skillsCount, "技能数"),
      statCard(frameworkStats.memoryFacts, "用户事实"),
      statCard(frameworkStats.totalTraces, "Trace 总数"),
      statCard(`${frameworkStats.avgLatency}ms`, "平均延迟"),
      statCard(frameworkStats.testCount, "自动化测试"),
    ].join("");
    $("#frameworkArch").innerHTML = architectureLayers.map((l, i) => `<div class="arch-layer"><span>${String(i + 1).padStart(2, "0")}</span><strong>${escapeHtml(l)}</strong></div>`).join("");
    $("#frameworkModules").innerHTML = frameworkModules.map((m) => `<article class="framework-module"><div class="framework-module-head"><div class="framework-module-icon" style="background:${m.color}20;color:${m.color}">${escapeHtml(m.icon)}</div><h4>${escapeHtml(m.name)}</h4></div><p>${escapeHtml(m.desc)}</p></article>`).join("");
  }

  function statCard(num, label) {
    return `<div class="framework-stat"><strong>${escapeHtml(num)}</strong><span>${escapeHtml(label)}</span></div>`;
  }

  function renderObserver() {
    $("#observerStats").innerHTML = `
      <div class="observer-stat"><strong>${traces.length}</strong><span>Trace</span></div>
      <div class="observer-stat"><strong>${traces.filter((t) => t.status === "success").length}</strong><span>成功</span></div>
      <div class="observer-stat"><strong>${traces.reduce((sum, t) => sum + t.tokens, 0)}</strong><span>Token</span></div>
    `;
    $("#observerTraces").innerHTML = traces.map((t) => `<div class="trace-item ${t.id === state.activeTraceId ? "active" : ""}" data-tid="${t.id}"><div class="trace-head"><span class="trace-agent">${escapeHtml(t.agentCode)}</span><span class="trace-mode mode-tag ${t.mode === "DIRECT" ? "direct" : t.mode === "REACT" ? "react" : "plan"}">${escapeHtml(t.mode)}</span></div><div class="trace-input">${escapeHtml(t.userInput)}</div><div class="trace-meta"><span>${t.latency}ms</span><span>${t.tokens} tokens</span><span>${escapeHtml(t.status)}</span></div></div>`).join("");
    $$(".trace-item").forEach((el) => el.addEventListener("click", () => { state.activeTraceId = el.dataset.tid; renderObserver(); }));
    renderObserverDetail();
  }

  function renderObserverDetail() {
    const t = traces.find((x) => x.id === state.activeTraceId) || traces[0];
    $("#observerDetail").innerHTML = `
      <div class="trace-detail-head"><h3>${escapeHtml(t.id)}</h3><div class="trace-detail-meta"><span><strong>Agent:</strong> ${escapeHtml(t.agentCode)}</span><span><strong>Session:</strong> ${escapeHtml(t.sessionId)}</span><span><strong>Status:</strong> ${escapeHtml(t.status)}</span></div></div>
      <div class="trace-section"><h4>User Input</h4><p>${escapeHtml(t.userInput)}</p></div>
      <div class="trace-section"><h4>Memory Hits</h4><div class="trace-tags">${t.memoryHits.map((x) => `<span class="chip purple">${escapeHtml(x)}</span>`).join("") || "<span class='chip gray'>none</span>"}</div></div>
      <div class="trace-section"><h4>Skill Retrieval</h4><div class="trace-tags">${t.skillHits.map((x) => `<span class="chip">${escapeHtml(x)}</span>`).join("") || "<span class='chip gray'>none</span>"}</div></div>
      <div class="trace-section"><h4>SSE Events</h4><div class="trace-events">${t.events.map((e) => `<div class="trace-event"><span>${escapeHtml(e)}</span></div>`).join("")}</div></div>
      <div class="trace-section"><h4>Final Response</h4><p>${escapeHtml(t.final)}</p></div>
    `;
  }

  window.addEventListener("hashchange", navigate);
  navigate();
})();
