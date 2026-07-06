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
    role: "负责作品集化改造、Mock 数据设计、Demo 入口梳理和多视角展示闭环。",
    scores: { completeness: 96, innovation: 92, development: 94, productization: 91, complexity: 95, showcase: 96 },
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
    summary: "AI 剧本杀互动产品原型，把剧本、DM、角色陪玩、长期记忆 and 行为进化串成完整体验。",
    tags: ["剧本互动", "DM Agent", "长期记忆", "行为进化"],
    result: "已完成六层产品结构 mock：剧本库、Agent 阵容、游戏舞台、证物推理、复盘进化和个人助理",
    problem: "传统剧本杀依赖真人 DM 和玩家配合，单人体验弱、复玩价值有限，玩家经验也难以沉淀。",
    product: "让 Agent 在一次次剧本互动中记住用户、理解偏好，并逐渐进化成更懂你的游戏伙伴。",
    engineering: "用本地 mock 数据模拟剧本、角色、证物、对话、复盘与 Gene/Capsule 沉淀，前端完成端到端产品展示。",
    role: "负责产品结构拆解、证物推理链、复盘进化机制和静态 Mock 前端搭建。",
    scores: { completeness: 91, innovation: 90, development: 84, productization: 88, complexity: 86, showcase: 92 },
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
    role: "负责全 AI 社交生态定义、朋友圈/群聊/创建 AI 的产品闭环和前端效果增强。",
    scores: { completeness: 88, innovation: 93, development: 82, productization: 90, complexity: 84, showcase: 91 },
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
    role: "负责训练闭环、画像更新、推荐逻辑和职业成长产品表达。",
    scores: { completeness: 84, innovation: 82, development: 76, productization: 89, complexity: 75, showcase: 86 },
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
    role: "负责视频生产流水线抽象、候选评分、生成控制台和成片资产展示。",
    scores: { completeness: 86, innovation: 80, development: 82, productization: 87, complexity: 80, showcase: 88 },
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
    role: "参与从 0 到 1 搭建工单智能体，负责流程拆解、工具调用边界和落地验证。",
    scores: { completeness: 88, innovation: 84, development: 90, productization: 94, complexity: 89, showcase: 82 },
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
    role: "负责行业任务拆解、检索与计算工具组合、结构化报告输出方案。",
    scores: { completeness: 82, innovation: 78, development: 84, productization: 88, complexity: 84, showcase: 76 },
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
    engineering: "结合钉钉原生能力、知识库 and 生成能力，完成面向组织场景的 AI 助理系统。",
    role: "负责 AI 产品方案设计、场景拆解、协同流程 and 竞赛表达。",
    scores: { completeness: 78, innovation: 82, development: 72, productization: 80, complexity: 74, showcase: 75 },
  },
  {
    id: "requirement-workbench",
    title: "AI 需求分析工作台",
    category: "产品工作流",
    type: "预留项目",
    period: "Next",
    summary: "帮助产品同学从访谈、反馈 and 业务目标中提炼需求，生成用户故事、优先级 and 验证指标。",
    tags: ["需求分析", "用户故事", "优先级", "指标设计"],
    result: "预留案例，后续补充完整项目材料",
    problem: "早期需求信息分散，产品判断容易停留在主观描述。",
    product: "把原始材料转成问题清单、用户旅程、功能边界 and 验收指标。",
    engineering: "以本地 mock 数据模拟多来源输入，前端完成流程看板、结论卡片 and 版本对比。",
    role: "预留为产品工作流案例，后续补充需求材料解析 and 前端交互。",
    scores: { completeness: 42, innovation: 76, development: 45, productization: 70, complexity: 58, showcase: 48 },
  },
  {
    id: "knowledge-qa",
    title: "企业知识问答中台",
    category: "知识系统",
    type: "预留项目",
    period: "Next",
    summary: "面向企业内部资料检索 and 问答，强调来源引用、权限边界 and 答案可追溯。",
    tags: ["知识检索", "权限边界", "可追溯", "企业问答"],
    result: "预留案例，后续补充完整项目材料",
    problem: "企业文档分散，员工查找资料成本高，普通问答缺少可信来源。",
    product: "答案必须绑定资料来源、更新时间 and 适用范围，降低误用风险。",
    engineering: "前端模拟检索结果、引用片段 and 置信度，为后续接入真实检索服务预留结构。",
    role: "预留为知识系统案例，后续补充 RAG、权限 and 引用追溯演示。",
    scores: { completeness: 40, innovation: 74, development: 44, productization: 72, complexity: 62, showcase: 46 },
  },
];

const scoreDimensions = [
  { key: "completeness", label: "完整度", hint: "是否形成可理解、可体验的闭环" },
  { key: "innovation", label: "创新性", hint: "想法和场景是否有辨识度" },
  { key: "development", label: "开发量", hint: "前端、状态、数据和工程工作量" },
  { key: "productization", label: "产品化", hint: "是否像真实产品而非一次性 Demo" },
  { key: "complexity", label: "复杂度", hint: "系统、流程和边界处理难度" },
  { key: "showcase", label: "展示性", hint: "面试官能否快速看懂和点开验证" },
];

const experiences = [
  {
    time: "2026.03 - 2026.05",
    title: '小红书 <span class="font-mono italic text-ink tracking-tight ml-2">PE / FDE</span> <span class="text-base text-muted font-bold ml-1">(实习)</span>',
    description:
      "参与商家技术组智能体开发，从 0 到 1 搭建商家工单助手，把工单处理从人工流程推进到自动化协作。",
  },
  {
    time: "2025.11 - 2026.02",
    title: '珠海环界云计算 <span class="font-mono italic text-ink tracking-tight ml-2">AI</span> 解决方案工程师',
    description: "面向客户场景 design 智能体方案，结合知识检索、工具编排与流程拆解完成生产环境落地。",
  },
  {
    time: "2023 - 2027",
    title: "杭州电子科技大学 · 自动化",
    description: "专业前 20%，学习自动控制、计算机网络、软件技术、Python、C 语言与机器学习。",
  },
];

const capabilities = [
  { value: "5个", label: "完整闭环项目", detail: "已完成可直接体验的 Mock 产品原型，证明产品闭环能力" },
  { value: "10+", label: "企业级 POC", detail: "覆盖商家工单、行业规划、社交生态等多场景 Agent 落地" },
  { value: "60%+", label: "业务流程提效", detail: "真实经历验证：将人工处理用时从 11h 缩短至 4h" },
];

const categories = ["全部", ...new Set(projects.map((project) => project.category))];
let activeCategory = "全部";

const filterBar = document.querySelector("#filterBar");
const projectGrid = document.querySelector("#projectGrid");
const featuredGrid = document.querySelector("#featuredGrid");
const timeline = document.querySelector("#timeline");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");
const cursorLight = document.querySelector(".cursor-light");

const cmdPalette = document.querySelector("#cmdPalette");
const cmdInput = document.querySelector("#cmdInput");
const cmdResults = document.querySelector("#cmdResults");

let cmdIndex = -1;
let filteredCommands = [];

const navigationCommands = [
  { id: "nav-about", title: "Profile / 关于我", icon: "👤", action: () => scrollToId("about") },
  { id: "nav-experience", title: "History / 经历", icon: "📜", action: () => scrollToId("experience") },
  { id: "nav-work", title: "Systems / 项目系统", icon: "💻", action: () => scrollToId("work") },
  { id: "nav-method", title: "Thesis / 方法论", icon: "🧠", action: () => scrollToId("method") },
  { id: "nav-contact", title: "Connect / 开始交流", icon: "✉️", action: () => scrollToId("contact") },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  cmdPalette.close();
}

function updateCmdResults() {
  const query = cmdInput.value.toLowerCase();
  const projectCommands = projects.map((p, idx) => ({
    id: `project-${idx}`,
    title: `Project: ${p.title}`,
    icon: "🚀",
    action: () => {
      openProject(idx);
      cmdPalette.close();
    }
  }));

  filteredCommands = [...navigationCommands, ...projectCommands].filter(cmd => 
    cmd.title.toLowerCase().includes(query)
  );

  cmdResults.innerHTML = filteredCommands.map((cmd, idx) => `
    <div class="cmd-item flex items-center justify-between px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${idx === cmdIndex ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'hover:bg-black/[0.03] text-ink'}" data-index="${idx}">
      <div class="flex items-center gap-4">
        <span class="text-lg">${cmd.icon}</span>
        <span class="text-sm font-bold tracking-tight">${cmd.title}</span>
      </div>
      <svg class="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    </div>
  `).join("");

  if (filteredCommands.length === 0) {
    cmdResults.innerHTML = `<div class="px-6 py-12 text-center text-muted/40 font-bold uppercase tracking-widest text-[10px]">No results found</div>`;
  }
}

window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    cmdPalette.showModal();
    document.body.style.overflow = "hidden";
    cmdInput.focus();
    cmdIndex = 0;
    updateCmdResults();
  }
});

cmdInput.addEventListener("input", () => {
  cmdIndex = 0;
  updateCmdResults();
});

cmdInput.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    cmdIndex = (cmdIndex + 1) % filteredCommands.length;
    updateCmdResults();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    cmdIndex = (cmdIndex - 1 + filteredCommands.length) % filteredCommands.length;
    updateCmdResults();
  } else if (e.key === "Enter" && cmdIndex >= 0) {
    filteredCommands[cmdIndex].action();
  }
});

cmdResults.addEventListener("click", (e) => {
  const item = e.target.closest(".cmd-item");
  if (item) {
    filteredCommands[item.dataset.index].action();
  }
});

function scoreAverage(project) {
  if (!project.scores) return 0;
  const values = Object.values(project.scores);
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function topScoreDimension(project) {
  if (!project.scores) return null;
  return scoreDimensions
    .map((dimension) => ({ ...dimension, value: project.scores[dimension.key] || 0 }))
    .sort((a, b) => b.value - a.value)[0];
}

function renderTimeline() {
  timeline.innerHTML = experiences
    .map(
      (item) => `
        <article class="group relative pl-12 pb-16 last:pb-0 reveal">
          <div class="absolute left-0 top-0 bottom-0 w-px bg-black/[0.05] group-last:bg-transparent"></div>
          <div class="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-8 ring-white transition-all duration-500 group-hover:scale-150 group-hover:bg-ink"></div>
          <time class="block text-[10px] font-bold font-mono text-accent italic uppercase tracking-widest mb-4">${item.time}</time>
          <h3 class="text-2xl font-black text-ink mb-4 tracking-tighter flex items-baseline flex-wrap">${item.title}</h3>
          <p class="text-muted text-lg font-medium leading-relaxed max-w-2xl">${item.description}</p>
        </article>
      `,
    )
    .join("");
  observeReveals();
}

function renderFilters() {
  filterBar.innerHTML = categories
    .map((category) => {
      const isActive = category === activeCategory;
      return `<button class="px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-500 ${
        isActive 
        ? "bg-ink text-white shadow-xl shadow-ink/10 scale-105" 
        : "bg-white border border-black/[0.05] text-muted hover:border-accent/30 hover:text-accent"
      }" data-category="${category}">
        ${category}
      </button>`;
    })
    .join("");
}

function projectActions(project) {
  const actions = [];
  if (project.mock) actions.push(`<a class="px-5 py-2.5 bg-accent text-white rounded-full text-xs font-bold hover:scale-105 transition-transform" href="${project.mock}" target="_blank" rel="noreferrer" data-stop="1">体验 Mock</a>`);
  if (project.doc) actions.push(`<a class="px-5 py-2.5 bg-bgsoft text-ink rounded-full text-xs font-bold hover:bg-black/[0.05] transition-all" href="${project.doc}" target="_blank" rel="noreferrer" data-stop="1">项目介绍</a>`);
  return actions.length ? `<div class="flex gap-3 mt-6">${actions.join("")}</div>` : "";
}

function projectCard(project, modifier = "") {
  return `
    <article class="project-item reveal group cursor-pointer bg-white/40 backdrop-blur-sm p-10 rounded-[40px] hover:bg-white shadow-sm hover:shadow-ambient-hover transition-all duration-700 hover:scale-[1.02] border border-black/[0.03] hover-shine" data-index="${projects.indexOf(project)}" tabindex="0" role="button">
      <div class="flex flex-col h-full justify-between relative z-10">
        <div>
          <div class="flex items-center justify-between mb-8">
            <span class="text-[10px] font-bold tracking-[0.3em] text-accent uppercase font-mono">${project.category}</span>
            <span class="text-[10px] font-mono text-muted/50">${project.period}</span>
          </div>
          <h3 class="text-3xl font-black text-ink mb-4 flex items-center gap-3 group-hover:text-accent transition-colors duration-500 tracking-tighter group-hover:translate-x-2 transition-transform">
            ${project.title}
            <svg class="w-6 h-6 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
          </h3>
          <p class="text-muted text-base font-medium leading-relaxed mb-8 line-clamp-3 group-hover:text-ink transition-colors">${project.summary}</p>
          <div class="flex flex-wrap gap-2 mb-10">
            ${project.tags.slice(0, 3).map(tag => `<span class="px-4 py-1.5 bg-black/5 rounded-full text-[10px] font-bold text-muted/80 uppercase tracking-wider group-hover:bg-accent/10 group-hover:text-accent transition-all">${tag}</span>`).join('')}
          </div>
        </div>
        <div>
          <div class="pt-8 border-t border-black/[0.03] group-hover:border-accent/20 transition-colors">
            <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-2 font-mono">Key Outcome</p>
            <p class="text-lg text-ink font-bold tracking-tight group-hover:text-accent transition-colors">${project.result}</p>
          </div>
          <div class="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-700 ease-in-out">
            ${projectActions(project)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = projects
    .filter((project) => project.priority === "featured")
    .slice(0, 2)
    .map((project, idx) => {
      const card = projectCard(project, "featured-card");
      return card.replace('reveal', `reveal stagger-${idx + 1}`);
    })
    .join("");
  observeReveals();
}

function renderProjects() {
  const visibleProjects =
    activeCategory === "全部"
      ? projects.filter((project) => project.priority !== "featured")
      : projects.filter((project) => project.category === activeCategory);

  projectGrid.innerHTML = visibleProjects.map((project, idx) => {
    const card = projectCard(project);
    return card.replace('reveal', `reveal stagger-${(idx % 5) + 1}`);
  }).join("");
  observeReveals();
}

function openProject(index) {
  const project = projects[index];
  const topDim = topScoreDimension(project);
  
  dialogContent.innerHTML = `
    <div class="flex flex-col md:flex-row h-[85vh] overflow-hidden">
      <!-- Left Sidebar: Technical Specs -->
      <div class="md:w-80 bg-bgsoft p-10 border-r border-black/[0.03] flex flex-col justify-between overflow-y-auto no-scrollbar">
        <div>
          <div class="mb-12">
            <span class="text-[10px] font-bold tracking-[0.3em] text-accent uppercase font-mono block mb-4">Project ID</span>
            <code class="text-xs font-mono bg-white px-3 py-1.5 rounded border border-black/[0.05] text-ink">${project.id.toUpperCase()}</code>
          </div>
          
          <div class="space-y-8">
            <div>
              <span class="text-[10px] font-bold tracking-[0.3em] text-muted uppercase font-mono block mb-4">Core Dimensions</span>
              <div class="space-y-4">
                ${scoreDimensions.map(d => `
                  <div class="group/score">
                    <div class="flex justify-between text-[10px] font-bold mb-1.5">
                      <span class="text-muted group-hover/score:text-accent transition-colors">${d.label}</span>
                      <span class="text-ink font-mono">${project.scores?.[d.key] || 0}%</span>
                    </div>
                    <div class="h-1 bg-black/[0.05] rounded-full overflow-hidden">
                      <div class="h-full bg-accent transition-all duration-1000 ease-out" style="width: 0%" data-width="${project.scores?.[d.key] || 0}%"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div>
              <span class="text-[10px] font-bold tracking-[0.3em] text-muted uppercase font-mono block mb-4">Tech Stack</span>
              <div class="flex flex-wrap gap-2">
                ${project.tags.map(tag => `<span class="px-2.5 py-1 bg-white border border-black/[0.05] rounded text-[10px] font-bold text-ink">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="pt-10 border-t border-black/[0.05]">
          <div class="flex items-center gap-3 text-accent mb-4">
            <div class="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span class="text-[10px] font-bold tracking-widest uppercase font-mono">System Active</span>
          </div>
          ${projectActions(project)}
        </div>
      </div>

      <!-- Main Content: System Report -->
      <div class="flex-1 p-12 md:p-20 overflow-y-auto no-scrollbar bg-white relative">
        <div class="max-w-3xl">
          <header class="mb-20">
            <div class="flex items-center gap-4 mb-6">
              <span class="text-xs font-mono text-accent">Report / ${project.period}</span>
              <span class="w-1 h-1 rounded-full bg-black/10"></span>
              <span class="text-xs font-mono text-muted uppercase tracking-widest">${project.category}</span>
            </div>
            <h2 class="text-6xl font-black tracking-tighter text-ink leading-tight mb-8">${project.title}</h2>
            <p class="text-2xl font-medium text-muted leading-relaxed tracking-tight">${project.summary}</p>
          </header>

          <section class="space-y-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="reveal stagger-1">
                <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-6 flex items-center gap-3">
                  <span class="w-8 h-px bg-accent/20"></span> Problem
                </h4>
                <p class="text-lg text-ink leading-relaxed font-medium">${project.problem}</p>
              </div>
              <div class="reveal stagger-2">
                <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-6 flex items-center gap-3">
                  <span class="w-8 h-px bg-accent/20"></span> Solution
                </h4>
                <p class="text-lg text-ink leading-relaxed font-medium">${project.product}</p>
              </div>
            </div>

            <div class="bg-bgsoft rounded-[40px] p-12 reveal stagger-3 border border-black/[0.03]">
              <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-8 flex items-center gap-3">
                <span class="w-8 h-px bg-accent/20"></span> Engineering Thesis
              </h4>
              <p class="text-xl text-ink leading-relaxed font-medium mb-10">${project.engineering}</p>
              <div class="grid grid-cols-2 gap-8 border-t border-black/[0.05] pt-10">
                <div>
                  <span class="text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">My Role</span>
                  <p class="text-sm font-bold text-ink">${project.role}</p>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-muted uppercase tracking-widest block mb-2">Primary Result</span>
                  <p class="text-sm font-bold text-accent">${project.result}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
  dialog.showModal();
  document.body.style.overflow = "hidden";

  // Animate progress bars
  setTimeout(() => {
    dialogContent.querySelectorAll('[data-width]').forEach(el => {
      el.style.width = el.dataset.width;
    });
    observeReveals();
  }, 100);
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

dialogClose.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
});

cmdPalette.addEventListener("click", (e) => {
  if (e.target === cmdPalette) cmdPalette.close();
});

cmdPalette.addEventListener("close", () => {
  document.body.style.overflow = "";
});

// Custom Cursor and Scroll Progress
window.addEventListener("mousemove", (e) => {
  if (!cursorLight) return;
  const x = e.clientX;
  const y = e.clientY;
  
  // Use requestAnimationFrame for smoother performance
  requestAnimationFrame(() => {
    cursorLight.style.transform = `translate3d(${x - 500}px, ${y - 500}px, 0)`;
    cursorLight.style.opacity = "1";
  });
});

window.addEventListener("scroll", () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressBar = document.querySelector("#scrollProgress");
  if (progressBar) progressBar.style.width = scrolled + "%";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // 允许动效在滑出视口后重置，从而实现多次触发
        entry.target.classList.remove("active");
      }
    });
  },
  { 
    threshold: 0.15,
    rootMargin: "-50px 0px -50px 0px" // 稍微增加边距，防止在边缘频繁闪烁
  },
);

function observeReveals() {
  document.querySelectorAll(".reveal, .reveal-group").forEach((item) => observer.observe(item));
}

// Initial Render
renderTimeline();
renderFeatured();
renderFilters();
renderProjects();
observeReveals();
