const projects = [
  {
    id: "multiagent-werewolf",
    title: "AI 狼人杀",
    tagline: "多智能体博弈系统 · 自进化与评测框架设计",
    category: "多智能体系统",
    type: "字节挑战赛 · 赛道第一",
    period: "2026",
    priority: "featured",
    summary: "把狼人杀做成多智能体博弈实验场，AgentScope 底座 + 自建 GameEngine，实现一阶/二阶信念追踪、Skill 自进化与 Fleet 批量评测。",
    tags: ["多智能体", "信念矩阵", "Skill 自进化", "Fleet 评测", "AgentScope"],
    result: "字节跳动 AI 全栈挑战赛「多智能体协作与博弈」赛道第一，卓越项目奖，奖金 2 万",
    problem: "普通多智能体演示往往停在对话层，缺少长期策略、私有信息边界、可解释复盘，且无法批量评测多 Agent 博弈质量。",
    product: "用狼人杀的身份、夜间行动、投票和阵营目标，设计一套可观察、可复盘、可批量测评的 Agent 博弈产品体验。",
    engineering: "AgentScope 作为 Agent 执行底座 + 自建 GameEngine；信念系统实现一阶/二阶信念追踪；Prompt/Skill 沉淀到对应身份；Fleet 模式支持同时开多局批量评测；FastAPI + React/Three.js + SSE 实时直播。",
    role: "负责博弈模块（信念矩阵、预投票意向实时更新）、自进化模块（Skill 沉淀机制）与 Fleet 批量评测设计。",
    scores: { business: 75, depth: 95, product: 91, innovation: 95, contribution: 80, verifiable: 99 },
    mock: "labs/multiagent-werewolf/dist/",
    doc: "docs/projects/multiagent-werewolf.html",
    github: "https://github.com/kissie-77/MultiAgent-Werewolf",
  },
  {
    id: "evo-murder-game",
    title: "进化酒馆",
    tagline: "AI 娱乐化商机验证 · 玩法产品从 0 到 1",
    category: "AI 叙事产品",
    type: "黑客松 · 最佳人气奖",
    period: "2026",
    priority: "featured",
    summary: "AI 剧本杀互动产品原型，把剧本、DM、角色陪玩、长期记忆和行为进化串成完整体验。",
    tags: ["剧本互动", "DM Agent", "长期记忆", "行为进化"],
    result: "evomap 黑客松最佳人气奖，完整前后端 + 数据库落地，验证商业化潜力",
    problem: "传统剧本杀依赖真人 DM 和玩家配合，单人体验弱、复玩价值有限，玩家经验也难以沉淀。",
    product: "让 Agent 在一次次剧本互动中记住用户、理解偏好，并逐渐进化成更懂你的游戏伙伴。",
    engineering: "后端 Python + FastAPI + SQLite，完整实现剧本管理、角色状态、对话记录与 Gene/Capsule 进化数据持久化；前端完成剧本库、游戏舞台、证物推理、复盘进化和个人助理六层产品结构的端到端体验。",
    role: "负责产品结构拆解、证物推理链、复盘进化机制和静态 Mock 前端搭建。",
    scores: { business: 88, depth: 92, product: 94, innovation: 85, contribution: 93, verifiable: 98 },
    mock: "labs/evo-murder-game/",
    doc: "docs/projects/evo-murder-game.html",
    github: "https://github.com/LBP97541135/evo-murder-game",
  },
  {
    id: "haji-ai",
    title: "Haji AI",
    tagline: "AI Native 社交范式 · 自研 Multi-Agent 框架",
    category: "AI 社交生态",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "自研 Python Multi-Agent 框架 + AI 社交平台，实现 Skill 向量检索、Memory 持久化、AST 沙箱安全执行与意愿驱动群聊，让 AI 角色真正「活」在朋友圈里。",
    tags: ["自研框架", "Skill 向量检索", "Memory 持久化", "AST 沙箱", "意愿驱动"],
    result: "574 个测试全通过，覆盖 Agent 核心框架、群聊、朋友圈、记忆与运营面板完整闭环",
    problem: "AI 社交产品如果只有聊天窗口，很难表现角色关系、社区氛围和长期内容价值。",
    product: "把 AI 角色当成有关系、有记忆、有表达风格的社交节点，构建可浏览、可互动、可运营的朋友圈生态。",
    engineering: "Python 3.11+ + FastAPI 全异步后端，React (TypeScript + Tailwind) 前端；自研 haiji 框架实现三种 Agent 执行模式、Skill 向量相似度语义动态检索、Memory 持久化（重启不失忆）；AST 静态分析 + 受限沙箱确保代码安全执行；自然语言 → Agent 定义自动化创建；群聊支持意愿驱动发言，Agent 可主动发朋友圈。",
    role: "独立完成全栈开发，从框架核心（agent / memory / workflow 模块）到前端产品体验全部自主实现。",
    scores: { business: 60, depth: 81, product: 90, innovation: 92, contribution: 100, verifiable: 90 },
    mock: "labs/haji-ai/",
    doc: "docs/projects/haji-ai.html",
    github: "https://github.com/LBP97541135/haji-ai",
  },
  {
    id: "ai-work-coach",
    title: "AI Work Coach",
    tagline: "个性化 AI 学习中心 · 用户成长闭环产品",
    category: "AI 工作流产品",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "面向职场成长的 AI 教练工作台，帮助用户复盘任务、拆解问题、制定行动计划并追踪状态。",
    tags: ["工作复盘", "成长教练", "行动计划", "仪表盘"],
    result: "已完成 mock 数据和页面美化，覆盖目标、复盘、教练建议、任务追踪与洞察看板",
    problem: "职场反馈通常碎片化，用户很难把一次次任务经历沉淀成持续成长路径。",
    product: "把日常工作输入转化为问题诊断、能力画像、行动建议和周期复盘，让成长变成可管理流程。",
    engineering: "TypeScript 全栈（apps/web 前端 + services/api 后端 + data 数据层），完整实现教练对话、任务追踪、复盘分析与洞察看板；每一个产品决策都以用户体验为核心驱动。",
    role: "负责训练闭环、画像更新、推荐逻辑和职业成长产品表达。",
    scores: { business: 78, depth: 70, product: 97, innovation: 80, contribution: 100, verifiable: 95 },
    mock: "labs/ai-work-coach/",
    doc: "docs/projects/ai-work-coach.html",
    github: "https://github.com/LBP97541135/ai-work-coach",
  },
  {
    id: "money-printer-turbo",
    title: "MoneyPrinterTurbo",
    tagline: "提示词工程 · 内容生产流水线自动化",
    category: "AI 内容生产",
    type: "Mock 已完成",
    period: "2026",
    priority: "featured",
    summary: "基于开源 MoneyPrinterTurbo 的本地化深度定制，用户只需输入一个主题，系统自动完成关键词扩写、素材检索与视频文案生成，将复杂的短视频生产流水线压缩为一步输入。",
    tags: ["提示词工程", "关键词扩写", "内容流水线", "开源定制"],
    result: "用户仅需一个主题，自动完成关键词扩写 → 素材匹配 → 文案生成全链路",
    problem: "短视频生产链路长，创作者需要在脚本、素材、配音、字幕和发布配置之间频繁切换，原始工具需要大量手动配置。",
    product: "把复杂的多步骤配置压缩为单一主题输入，用关键词扩写层桥接用户意图与素材检索，降低创作门槛。",
    engineering: "基于开源 MoneyPrinterTurbo 本地部署，重新设计提示词策略：主题 → 关键词扩写（用于素材搜索）→ 结合主题与关键词生成视频文案，将原本分散的多步骤配置整合为单一输入的自动化流水线。",
    role: "负责视频生产流水线抽象、候选评分、生成控制台和成片资产展示。",
    scores: { business: 80, depth: 65, product: 82, innovation: 76, contribution: 60, verifiable: 88 },
    mock: "labs/money-printer-turbo/",
    doc: "docs/projects/money-printer-turbo.html",
    github: "https://github.com/LBP97541135/MoneyPrinterTurbo",
  },
  {
    id: "aigc-test-image",
    title: "测品图生图评测体系",
    tagline: "双层视觉评测体系 · AI 生图合规工程",
    category: "AI 内容生产",
    type: "真实经历",
    period: "2026",
    summary: "为小红书商家测品笔记的 AI 生图链路构建双层视觉评测体系，从 20,000 张图中筛选 6,700+ 标杆素材，将 AI 违规率从 11% 压降至 1.7%。",
    tags: ["视觉评测", "双模型架构", "标杆库建设", "AI 合规"],
    result: "AI 违规率 11% → 1.7%，标杆素材库收录 6,700+ 张",
    problem: "AI 生图在测品笔记场景中频繁触发平台违规，人脸与光影特征容易被检测识别，同时缺少高质量参考素材库支撑生图方向。",
    product: "建立双层评测体系：小模型做快速合格性过滤与粗分类，大模型对通过初筛的素材进行细粒度维度打分，以 6,700+ 标杆图构建高质量素材库。",
    engineering: "小模型（现有视觉模型 + 精细 prompt）承担高速初筛，大模型负责多维细节评分；将人脸区域与光影质量纳入关键评测维度，从评测源头降低 AI 违规风险；生图链路基于 SeedDream 改图与 Redfire 上色。",
    role: "负责标杆素材库筛选体系设计与执行，构建双层视觉评测 pipeline，编写评测 prompt，将 AI 违规风险维度纳入评分框架。",
    scores: { business: 92, depth: 85, product: 91, innovation: 80, contribution: 80, verifiable: 80 },
  },
  {
    id: "work-order-agent",
    title: "商家工单助手",
    tagline: "企业工单自动化 · Human-in-the-Loop 全链路",
    category: "业务智能体",
    type: "真实经历",
    period: "2026",
    summary: "面向小红书商家入驻工单的自动化处理系统，Java + Darwin 框架搭建双层 Agent，实现两级分类、Human-in-the-Loop 授权与数据库回查验证。",
    tags: ["工单自动化", "两级分类", "Human-in-the-Loop", "Darwin 框架"],
    result: "商家入驻类工单覆盖率超 50%，处理平均用时从 11h 缩短至 4h",
    problem: "商家入驻工单数量大、判断链路长，人工处理消耗高且响应速度慢；写入操作风险高，需要安全兜底机制。",
    product: "双层架构：第一层小模型按大类（商家入驻/账号资质/开放平台/转人工）快速路由；第二层 Agent 以 React 自主模式探索细分场景 Skill，执行对应工具调用。",
    engineering: "Java + Darwin 框架（小红书内部），React 自主模式；写入操作前通过内部 IM（Hi）向值班人员发送包含工单信息与处理原因的卡片，确认后执行；操作完成后主动查询数据库验证变更真实生效。",
    role: "从 0 到 1 完成项目一期搭建，负责两级分类设计、场景 Skill 编排、Hi 卡片人工确认机制与数据库回查校验。",
    scores: { business: 98, depth: 92, product: 88, innovation: 80, contribution: 95, verifiable: 80 },
  },
  {
    id: "ship-agent",
    title: "船舶运货助手",
    tagline: "弱模型 × 任务拆分 · 受限场景工程策略",
    category: "行业解决方案",
    type: "真实经历",
    period: "2025",
    summary: "在生产环境模型（DeepSeek V3-8b）受限条件下，通过任务拆分完成船舶运货路线规划、数据计算与结构化报告生成。",
    tags: ["任务拆分", "RAG 检索", "受限模型适配", "报告生成"],
    result: "一周调用 1w+，准确率 98%+，回复效率提升 70%",
    problem: "行业数据量大，任务包含规划、计算和报告输出，生产环境模型能力（DeepSeek V3-8b）存在边界，单次推理难以覆盖全流程。",
    product: "将复杂需求拆为信息提取 / 路线规划 / 数字处理三个子任务，降低单次推理难度，适配受限模型能力。",
    engineering: "生产环境限制使用 DeepSeek V3-8b 本地小模型，无法依赖强模型能力；核心工程判断是将任务拆分为信息提取 / 路线规划 / 数字处理三个独立子任务，让每个子任务的推理难度降至小模型可处理范围；Langflow + RAG 完成线路匹配，Python tool 处理数字计算，最终在受限条件下实现 98%+ 准确率并支持特殊地点处理。",
    role: "负责行业任务拆解设计、RAG 线路匹配、Python 数字计算工具编排与结构化报告输出方案。",
    scores: { business: 95, depth: 75, product: 90, innovation: 70, contribution: 95, verifiable: 60 },
  },
  {
    id: "invoice-agent",
    title: "发票报销 Agent",
    tagline: "税务 API 集成 · 企业财务 Agent 多维核验",
    category: "业务智能体",
    type: "真实经历",
    period: "2025",
    summary: "企业财务场景下的全链路发票核验系统，接入税务局 API 校验真伪，多维交叉核对发票信息，预录入 + 自动匹配确保每张发票切实真实，重复报销拦截率 100%。",
    tags: ["税务局 API", "多维核验", "发票自动化", "前台看板"],
    result: "重复报销拦截率 100%，发票全流程自动核验，前台看板实时可查",
    problem: "人工审核发票依赖经验，税务真伪核验繁琐，重复报销、虚假发票难以系统性拦截，财务人员操作成本高。",
    product: "提前录入待开票信息作为基准；发票到达后自动触发：税务局 API 真伪校验 → 发票信息核对 → 需报销额度核对 → 开票公司/时间核对 → 自动录入或异常告警；前台看板汇总全部状态，财务人员全程无需手动核查。",
    engineering: "FastGPT + OCR + Python + WeCom API，接入税务局 API 进行发票真伪校验；核心工程难点在于企微多维表之间的数据关联设计（预录入信息、发票记录、报销状态、财务台账多表联动），以及多条件交叉核验逻辑的准确性保障。",
    role: "独立完成全部开发，包括税务局接口集成、多维核验逻辑、多维表数据结构设计与前台看板搭建。",
    scores: { business: 90, depth: 82, product: 80, innovation: 70, contribution: 100, verifiable: 92 },
  },
  {
    id: "material-agent",
    title: "物资管理 Agent",
    tagline: "自然语言驱动 · 企微官方市场上线产品",
    category: "业务智能体",
    type: "真实经历",
    period: "2025",
    summary: "基于企微官方 API 独立开发的物资管理 Agent，上线企微官方市场，覆盖物资进出、存放、位置变更与危机告警全流程，效率提升 18 倍。",
    tags: ["物资管理", "企微官方市场", "多维表联动", "危机告警"],
    result: "上线企微官方市场，操作效率提升 18 倍，覆盖物资进出 / 存放 / 换位 / 告警完整链路",
    problem: "复杂的物资管理流程依赖专人操作多个系统，操作步骤繁琐、出错率高，异常情况难以及时告警。",
    product: "员工以自然语言描述需求 → Agent 多步推理拆解操作 → 自动完成多维表数据读写、位置变更与危机告警推送。",
    engineering: "完全基于企微官方 API 构建，FastGPT + SmartSheet + WeCom API；核心工程难点在于多维表之间的数据关联设计，覆盖物资进出、存放位置、换位记录与库存阈值告警的多表联动。",
    role: "独立完成全部开发，从物资操作流程拆解、多维表数据结构设计到 Agent 推理 prompt 与企微市场上架。",
    scores: { business: 92, depth: 85, product: 85, innovation: 72, contribution: 100, verifiable: 92 },
  },
  {
    id: "chart-mcp",
    title: "Chart MCP Server",
    tagline: "协议层手写实现 · 私有化 MCP 图表服务",
    category: "开源工具",
    type: "开源项目",
    period: "2025",
    summary: "独立实现的 TypeScript MCP Server，基于 AntV 图表渲染，支持 25+ 图表类型与 stdio / SSE / Streamable 三种协议，私有化部署于云服务器，确保隐私数据全程不出域。",
    tags: ["MCP 协议", "TypeScript", "私有部署", "数据不出域"],
    result: "25+ 图表类型，私有化云端部署，敏感数据全程不离开私有环境",
    problem: "AI 应用需要图表能力，但很多需要可视化的数据（财务、客户、内部指标）属于隐私数据，不能传到外部服务。",
    product: "自建私有 MCP Server，AI 应用通过标准 MCP 协议调用即可获得图表，渲染在私有环境内完成，数据不经过任何第三方。",
    engineering: "TypeScript 独立实现完整 MCP Server，支持 stdio / SSE / Streamable 三种传输协议；图表渲染层使用 AntV 包，MCP 协议层、工具注册、请求路由与响应封装全部自主实现；Docker 容器化后部署于云服务器，对外提供私有图表服务。",
    role: "独立完成 MCP Server 设计与实现、AntV 渲染集成、三种协议适配、Docker 容器化与云服务器部署。",
    scores: { business: 75, depth: 88, product: 82, innovation: 88, contribution: 90, verifiable: 92 },
    github: "https://github.com/LBP97541135/mcp-server-chart",
  },
  {
    id: "her-catalyst",
    title: "HER 催化剂定向生成",
    tagline: "EGNN + 扩散模型 · AI for Materials Science",
    category: "AI 科研",
    type: "科研项目",
    period: "2025",
    summary: "用等变图神经网络（EGNN）与多任务引导扩散模型，定向生成兼具高催化活性、热力学稳定性和实验可合成性的新型二维析氢催化材料。",
    tags: ["EGNN", "扩散模型", "材料生成", "AI for Science"],
    result: "实现从随机噪声逐步恢复具有特定对称性的二维晶体结构，优化 |ΔG_H| 逼近 Sabatier 理想值",
    problem: "传统催化材料设计依赖实验试错，周期长、成本高，难以系统性探索材料空间。",
    product: "以生成模型替代经验试探，通过物理约束引导生成兼具活性、稳定性与可合成性的新型二维材料。",
    engineering: "EGNN 维持晶体结构生成中的物理不变性，多任务引导优化同时约束多个材料性质目标，PyTorch + torch-geometric + pymatgen + ase 完整实现。",
    role: "独立完成模型设计、EGNN 实现、扩散生成流程与材料性质优化目标设定。",
    scores: { business: 50, depth: 92, product: 62, innovation: 92, contribution: 90, verifiable: 95 },
    github: "https://github.com/LBP97541135/her-catalyst-diffusion",
  },
  {
    id: "community-agent",
    title: "社里办",
    tagline: "Multi-Agent 架构设计 · 低代码竞赛落地",
    category: "AI 产品设计",
    type: "竞赛项目",
    period: "2025",
    summary: "基于钉钉 DEAP 低代码平台的高校社团 Multi-Agent 系统，深度结合社团业务搭建 30+ 工作流、4 个知识库、4 个 Agent，设计 Agent 间信息传递机制，实现内部管理、团队建设和活动创新全流程覆盖。",
    tags: ["Multi-Agent", "低代码", "知识库", "钉钉", "组织管理"],
    result: "浙江省人工智能竞赛二等奖（浙江省前 15%）",
    problem: "学生社团办公效率低、组织认同感不足，历史经验难以传承。",
    product: "由主 Agent 统一调配多个业务 Agent，把流程自动化、知识检索和活动创新串起来，覆盖社团全周期场景。",
    engineering: "在钉钉 DEAP 平台上设计 Multi-Agent 架构：30+ 工作流覆盖社团核心业务，4 个知识库分类沉淀社团经验，4 个 Agent 各司其职，重点设计 Agent 间上下文传递机制，确保跨 Agent 任务信息不丢失。",
    role: "负责 AI 产品方案设计、Multi-Agent 架构设计、工作流拆解、知识库建设与 Agent 提示词编写。",
    scores: { business: 88, depth: 78, product: 90, innovation: 78, contribution: 88, verifiable: 95 },
  },
  {
    id: "boss-assistant",
];

const scoreDimensions = [
  { key: "business", label: "业务价值", hint: "有无可量化的真实结果：数据、指标、规模" },
  { key: "depth", label: "技术深度", hint: "Agent 架构 / 工程方案的复杂度与设计质量" },
  { key: "product", label: "产品思维", hint: "是否真正解决了用户问题，而非只是技术演示" },
  { key: "innovation", label: "创新性", hint: "方案和场景的差异化与辨识度" },
  { key: "contribution", label: "独立贡献", hint: "本人实际承担了多少核心工作" },
  { key: "verifiable", label: "可验证度", hint: "是否有 demo、数据、代码可以直接验证" },
];

const experiences = [
  {
    time: "2026.03 - 2026.05",
    title: '小红书 <span class="font-mono italic text-ink tracking-tight ml-2">产品工程师</span> <span class="text-base text-muted font-bold ml-1">(实习)</span>',
    description:
      "参与商家技术组双线工作：主导测品笔记生图评测体系，从 20,000 张图中构建 6,700+ 标杆素材库，将 AI 违规率从 11% 压降至 1.7%；同步从 0 搭建商家工单自动化处理系统（Java + Darwin 框架），商家入驻类工单覆盖率超 50%，处理时间 11h → 4h。",
  },
  {
    time: "2025.11 - 2026.02",
    title: '珠海环界云计算 <span class="font-mono italic text-ink tracking-tight ml-2">AI 解决方案工程师</span>',
    description: "为客户定制 Agent 解决方案，落地 12+ 企业项目，覆盖制造、金融、物流等行业。代表成果：物资管理 Agent 效率提升 18 倍，发票报销 Agent 重复拦截率 100%。",
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
  if (project.github) actions.push(`<a class="px-5 py-2.5 bg-bgsoft text-ink rounded-full text-xs font-bold hover:bg-black/[0.05] transition-all flex items-center gap-1.5" href="${project.github}" target="_blank" rel="noreferrer" data-stop="1"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub</a>`);
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
          <h3 class="text-3xl font-black text-ink mb-2 flex items-center gap-3 group-hover:text-accent transition-colors duration-500 tracking-tighter group-hover:translate-x-2 transition-transform">
            ${project.title}
            <svg class="w-6 h-6 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
          </h3>
          ${project.tagline ? `<p class="font-mono text-xs text-accent/70 tracking-wide mb-4">${project.tagline}</p>` : '<div class="mb-4"></div>'}
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
            <h2 class="text-6xl font-black tracking-tighter text-ink leading-tight mb-3">${project.title}</h2>
            ${project.tagline ? `<p class="font-mono text-sm text-accent tracking-widest mb-6">${project.tagline}</p>` : ''}
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
