const projects = [
  {
    id: "multiagent-werewolf",
    title: "AI 狼人杀",
    category: "多智能体系统",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "把狼人杀做成多智能体博弈实验场，展示角色 Agent、信息隔离、实时对局、信念矩阵与赛后复盘。",
    tags: ["多智能体", "博弈推理", "信念矩阵", "复盘评测"],
    result: "已接入作品集 mock，支持大厅、角色、模型、实时对局和复盘链路",
    problem: "普通多智能体演示往往停在对话层，缺少长期策略、私有信息边界和可解释复盘。",
    product: "用狼人杀的身份、夜间行动、投票和阵营目标，设计一套可观察、可复盘的 Agent 博弈产品体验。",
    engineering: "保留原有 React 前端，替换 API 与 SSE 为本地 mock 数据，前端完整展示启动对局、事件流、战局状态和 post-game 报告。",
    mock: "labs/multiagent-werewolf/dist/",
    doc: "docs/projects/multiagent-werewolf.html",
  },
  {
    id: "evo-murder-game",
    title: "进化酒馆",
    category: "AI 叙事产品",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "AI 剧本杀互动产品原型，把剧本、DM、角色陪玩、长期记忆和行为进化串成完整体验。",
    tags: ["剧本互动", "DM Agent", "长期记忆", "行为进化"],
    result: "已完成六层产品结构 mock：剧本库、Agent 阵容、游戏舞台、证物推理、复盘进化和个人助理",
    problem: "传统剧本杀依赖真人 DM 和玩家配合，单人体验弱、复玩价值有限，玩家经验也难以沉淀。",
    product: "让 Agent 在一次次剧本互动中记住用户、理解偏好，并逐渐进化成更懂你的游戏伙伴。",
    engineering: "用本地 mock 数据模拟剧本、角色、证物、对话、复盘与 Gene/Capsule 沉淀，前端完成端到端产品展示。",
    mock: "labs/evo-murder-game/",
    doc: "docs/projects/evo-murder-game.html",
  },
  {
    id: "haji-ai",
    title: "Haji AI",
    category: "AI 社交生态",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "全 AI 生态朋友圈，让多个 AI 角色围绕动态、评论、私信、群聊和关系网络自然互动。",
    tags: ["AI 朋友圈", "角色关系", "内容流", "社交模拟"],
    result: "已保留原前端并扩展完整生态：消息流、AI 角色、动态、关系、任务、记忆与运营面板",
    problem: "AI 社交产品如果只有聊天窗口，很难表现角色关系、社区氛围和长期内容价值。",
    product: "把 AI 角色当成有关系、有记忆、有表达风格的社交节点，构建可浏览、可互动、可运营的朋友圈生态。",
    engineering: "纯前端 mock 多视图状态，覆盖 feed、profile、chat、network、memory、ops 等核心模块。",
    mock: "labs/haji-ai/",
    doc: "docs/projects/haji-ai.html",
  },
  {
    id: "ai-work-coach",
    title: "AI Work Coach",
    category: "AI 工作流产品",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "面向职场成长的 AI 教练工作台，帮助用户复盘任务、拆解问题、制定行动计划并追踪状态。",
    tags: ["工作复盘", "成长教练", "行动计划", "仪表盘"],
    result: "已完成 mock 数据和页面美化，覆盖目标、复盘、教练建议、任务追踪与洞察看板",
    problem: "职场反馈通常碎片化，用户很难把一次次任务经历沉淀成持续成长路径。",
    product: "把日常工作输入转化为问题诊断、能力画像、行动建议和周期复盘，让成长变成可管理流程。",
    engineering: "以前端 mock 驱动多模块页面，模拟教练洞察、任务状态、对话建议和复盘报告。",
    mock: "labs/ai-work-coach/",
    doc: "docs/projects/ai-work-coach.html",
  },
  {
    id: "money-printer-turbo",
    title: "MoneyPrinterTurbo",
    category: "AI 内容生产",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "AI 短视频自动生成工作台，从主题策划、脚本、素材、配音、字幕到发布配置形成生产流水线。",
    tags: ["短视频生成", "内容流水线", "素材编排", "创作者工具"],
    result: "已完成纯前端 mock，展示从选题到成片的多步骤生成体验和任务状态",
    problem: "短视频生产链路长，创作者需要在脚本、素材、配音、字幕和发布配置之间频繁切换。",
    product: "把内容生产拆成可视化流水线，让用户理解每一步输入、生成结果、风险状态和可调整参数。",
    engineering: "使用 mock 数据模拟任务队列、生成进度、素材池、成片预览和配置面板。",
    mock: "labs/money-printer-turbo/",
    doc: "docs/projects/money-printer-turbo.html",
  },
  {
    id: "work-order-agent",
    title: "商家工单助手",
    category: "业务智能体",
    type: "真实经历",
    period: "2026",
    summary: "面向商家入驻工单的自动化处理系统，把人工判断、路由分发和接口调用沉淀为稳定流程。",
    tags: ["工单自动化", "流程编排", "接口调用", "安全校验"],
    result: "覆盖率 50%+，平均处理用时从 11h 缩短至 4h",
    problem: "商家入驻工单数量大、判断链路长，人工处理消耗高且响应速度慢。",
    product: "将工单处理拆成信息提取、路由分发、场景处理和结果校验，让系统先判断再行动。",
    engineering: "搭建双层智能体架构，引入场景化工具调用，并在写入动作前加入校验机制。",
  },
  {
    id: "ship-agent",
    title: "船舶运货助手",
    category: "行业解决方案",
    type: "真实经历",
    period: "2025",
    summary: "面向船舶运货场景，完成路线安排、船只情况整理与报告生成，让复杂任务可被拆解执行。",
    tags: ["路线规划", "知识检索", "数据计算", "报告生成"],
    result: "一周调用 1w+，准确率 98%+，回复效率提升 70%",
    problem: "行业数据量大，任务包含规划、计算和报告输出，生产环境模型能力存在边界。",
    product: "将复杂需求拆为信息提取、路线规划和数字处理三个子任务，降低单次推理难度。",
    engineering: "通过知识检索完成线路匹配，使用 Python 工具进行数字计算，最终生成结构化报告。",
  },
  {
    id: "community-agent",
    title: "社里办",
    category: "AI 产品设计",
    type: "竞赛项目",
    period: "2025",
    summary: "基于钉钉 AI 助理的学生社团系统，围绕内部管理、团队建设和活动创新设计协同流程。",
    tags: ["协同办公", "组织管理", "知识库", "多角色协作"],
    result: "浙江省人工智能竞赛二等奖",
    problem: "学生社团办公效率低、组织认同感不足，历史经验难以传承。",
    product: "由主智能体统一调配多个业务场景，把流程自动化、个性化记忆和活动创新串起来。",
    engineering: "结合钉钉原生能力、知识库和生成能力，完成面向组织场景的 AI 助理系统。",
  },
  {
    id: "requirement-workbench",
    title: "AI 需求分析工作台",
    category: "产品工作流",
    type: "预留项目",
    period: "Next",
    summary: "帮助产品同学从访谈、反馈和业务目标中提炼需求，生成用户故事、优先级和验证指标。",
    tags: ["需求分析", "用户故事", "优先级", "指标设计"],
    result: "预留案例，后续补充完整项目材料",
    problem: "早期需求信息分散，产品判断容易停留在主观描述。",
    product: "把原始材料转成问题清单、用户旅程、功能边界和验收指标。",
    engineering: "以本地 mock 数据模拟多来源输入，前端完成流程看板、结论卡片和版本对比。",
  },
  {
    id: "knowledge-qa",
    title: "企业知识问答中台",
    category: "知识系统",
    type: "预留项目",
    period: "Next",
    summary: "面向企业内部资料检索和问答，强调来源引用、权限边界和答案可追溯。",
    tags: ["知识检索", "权限边界", "可追溯", "企业问答"],
    result: "预留案例，后续补充完整项目材料",
    problem: "企业文档分散，员工查找资料成本高，普通问答缺少可信来源。",
    product: "答案必须绑定资料来源、更新时间和适用范围，降低误用风险。",
    engineering: "前端模拟检索结果、引用片段和置信度，为后续接入真实检索服务预留结构。",
  },
];

const experiences = [
  {
    time: "2026.03 - 2026.05",
    title: "小红书 · 产品工程师",
    description:
      "参与商家技术组智能体开发，从 0 到 1 搭建商家工单助手，把工单处理从人工流程推进到自动化协作。",
  },
  {
    time: "2025.11 - 2026.02",
    title: "珠海环界云计算 · AI 解决方案工程师",
    description: "面向客户场景设计智能体方案，结合知识检索、工具编排与流程拆解完成生产环境落地。",
  },
  {
    time: "2023 - 2027",
    title: "杭州电子科技大学 · 自动化",
    description: "专业前 20%，学习自动控制、计算机网络、软件技术、Python、C 语言与机器学习。",
  },
];

const capabilities = [
  { value: "10+", label: "项目案例", detail: "真实经历、mock 产品和预留案例统一管理" },
  { value: "5", label: "已完成 mock", detail: "狼人杀、剧本杀、Haji AI、Work Coach、MoneyPrinterTurbo" },
  { value: "2", label: "能力交叉", detail: "产品定义与工程交付同时呈现" },
];

const categories = ["全部", ...new Set(projects.map((project) => project.category))];
let activeCategory = "全部";

const filterBar = document.querySelector("#filterBar");
const projectGrid = document.querySelector("#projectGrid");
const featuredGrid = document.querySelector("#featuredGrid");
const portfolioStats = document.querySelector("#portfolioStats");
const timeline = document.querySelector("#timeline");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");
const cursorLight = document.querySelector(".cursor-light");

function arrowIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function renderTimeline() {
  timeline.innerHTML = experiences
    .map(
      (item) => `
        <article class="timeline-item">
          <time class="timeline-time">${item.time}</time>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderStats() {
  if (!portfolioStats) return;
  portfolioStats.innerHTML = capabilities
    .map(
      (item) => `
        <article>
          <strong>${item.value}</strong>
          <span>${item.label}</span>
          <p>${item.detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  filterBar.innerHTML = categories
    .map((category) => {
      const count = category === "全部" ? projects.length : projects.filter((project) => project.category === category).length;
      return `<button class="filter-button ${category === activeCategory ? "active" : ""}" data-category="${category}">
        <span>${category}</span><em>${count}</em>
      </button>`;
    })
    .join("");
}

function projectActions(project) {
  const actions = [];
  if (project.mock) actions.push(`<a class="project-action" href="${project.mock}" target="_blank" rel="noreferrer" data-stop="1">Mock 体验</a>`);
  if (project.doc) actions.push(`<a class="project-action ghost" href="${project.doc}" target="_blank" rel="noreferrer" data-stop="1">项目介绍</a>`);
  return actions.length ? `<div class="project-actions">${actions.join("")}</div>` : "";
}

function projectProof(project) {
  const proof = [
    project.product ? ["产品判断", "把模糊场景拆成可体验流程"] : null,
    project.engineering ? ["工程实现", project.mock ? "纯前端 mock 还原完整链路" : "系统设计与工具编排落地"] : null,
    project.result ? ["结果展示", project.priority === "featured" ? "可进入页面直接验证" : "用指标和案例说明价值"] : null,
  ].filter(Boolean);

  return `<div class="proof-list">${proof
    .map(([label, value]) => `<span><em>${label}</em>${value}</span>`)
    .join("")}</div>`;
}

function projectCard(project, modifier = "") {
  return `
    <article class="project-item ${modifier}" data-index="${projects.indexOf(project)}" tabindex="0" role="button" aria-label="查看${project.title}案例">
      <div>
        <p class="project-meta">${project.period} · ${project.category} · ${project.type}</p>
        <h3 class="project-title">${project.title}${arrowIcon()}</h3>
        <p>${project.summary}</p>
        ${projectProof(project)}
        <div class="tag-list">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-side">
        <p class="project-result">${project.result}</p>
        ${projectActions(project)}
      </div>
    </article>
  `;
}

function renderFeatured() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = projects
    .filter((project) => project.priority === "featured")
    .slice(0, 5)
    .map((project) => projectCard(project, "featured-card"))
    .join("");
}

function renderProjects() {
  const visibleProjects =
    activeCategory === "全部"
      ? projects.filter((project) => project.priority !== "featured")
      : projects.filter((project) => project.category === activeCategory);

  projectGrid.innerHTML = visibleProjects.map((project) => projectCard(project)).join("");
}

function openProject(index) {
  const project = projects[index];
  dialogContent.innerHTML = `
    <div class="dialog-body">
      <p class="eyebrow">${project.period} · ${project.category} · ${project.type}</p>
      <h2>${project.title}</h2>
      <p>${project.summary}</p>
      <div class="tag-list">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="detail-grid">
        <section>
          <h3>业务问题</h3>
          <p>${project.problem}</p>
        </section>
        <section>
          <h3>产品设计</h3>
          <p>${project.product}</p>
        </section>
        <section>
          <h3>工程实现</h3>
          <p>${project.engineering}</p>
        </section>
        <section>
          <h3>结果</h3>
          <p>${project.result}</p>
        </section>
      </div>
      ${projectActions(project)}
    </div>
  `;
  dialog.showModal();
}

function handleProjectOpen(event) {
  if (event.target.closest("[data-stop='1']")) return;
  const item = event.target.closest(".project-item");
  if (!item) return;
  openProject(Number(item.dataset.index));
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderProjects();
});

projectGrid.addEventListener("click", handleProjectOpen);
featuredGrid?.addEventListener("click", handleProjectOpen);

[projectGrid, featuredGrid].forEach((grid) => {
  grid?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.target.closest("[data-stop='1']")) return;
    const item = event.target.closest(".project-item");
    if (!item) return;
    event.preventDefault();
    openProject(Number(item.dataset.index));
  });
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

window.addEventListener("mousemove", (event) => {
  cursorLight.style.transform = `translate3d(${event.clientX - 280}px, ${event.clientY - 280}px, 0)`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

renderStats();
renderTimeline();
renderFeatured();
renderFilters();
renderProjects();
