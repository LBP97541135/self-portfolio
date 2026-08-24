const projects = [
  {
    id: "repomesh",
    title: "RepoMesh",
    tagline: "多仓库 Coding Agent 协作与交付平台",
    category: "Agent 基建",
    type: "GOAI 大赛 · Agent Infra 赛道 TOP 30 作品",
    period: "2026",
    priority: "featured",
    summary: "面向多人 Vibe Coding 的多仓库协作平台：Leader→Manager→Worker 层级式 Agent 逐层分派任务，在隔离 Worktree 内约束执行范围，用真实 Diff 与提交前多层测试门禁验证结果，把 Coding Agent 从「能改代码」做成「能安全交付」。",
    tags: ["多仓库协作", "层级式 Agent", "质量门禁", "隔离 Worktree", "Coding Agent Adapter"],
    result: "2026 GOAI 世界人工智能开源大赛 · Agent Infra 赛道 TOP 30 作品；真实双仓库跑通 Task → 改码 → 校验 → 测试 → Commit → 创建 PR 纵向切片",
    problem: "多人多仓库的 Vibe Coding 场景里，Coding Agent 容易越权改动、结果难以验证、跨仓库改动缺乏统一约束——「能生成代码」不等于「能安全交付」。",
    product: "以 Repository Profile 描述每个仓库的结构与规则，Leader→Manager→Worker 层级式 Agent 逐层分派任务；提供全自动 / 半自动 / 全监督三种协作模式，让人按风险选择介入程度；Coding Agent 适配层在独立 Worktree 中调用本地 Coding Agent 应用。",
    engineering: "核心是让 Agent 在「受约束」的前提下工作：每个 Worker 在固定 Base SHA 的隔离 Worktree 内执行，前置 allowed_paths 许可 + 执行后 Git Diff 路径校验双重门禁；提交前跑 Agent 生成测试 + 仓库历史测试 + 跨仓库集成测试 + Diff 校验，任一失败即阻断 Commit；跨进程定义幂等事件模型与乐观锁，防止并发覆盖。真实链路目前跑通到「创建 PR」。",
    role: "核心架构设计 / Agent Runtime 负责人（3 人团队）：负责层级式 Agent 分派、Runtime 跨进程契约与幂等事件、隔离 Worktree 执行与提交前质量门禁。",
    scores: { business: 78, depth: 95, product: 85, innovation: 90, contribution: 90, verifiable: 85 },
    modules: [
      { title: "层级式 Agent 分派", detail: "Leader→Manager→Worker 三层结构：Leader 拆解跨仓库目标，Manager 结合 Repository Profile 规划单仓库任务，Worker 在隔离环境内实际改码；层级间定义清晰的任务契约，支持全自动 / 半自动 / 全监督三种介入模式。", metric: "3 层 · 三种协作模式" },
      { title: "隔离 Worktree + 双重门禁", detail: "每个 Worker 在固定 Base SHA 的隔离 Git Worktree 内执行，前置 allowed_paths 许可限定可改范围，执行后再做 Git Diff 路径校验；幂等请求加乐观锁防止并发覆盖，保证多 Agent 并行改码互不污染。", metric: "allowed_paths + Diff 校验" },
      { title: "提交前质量门禁", detail: "Commit 前依次执行 Agent 生成测试、仓库历史测试、跨仓库集成测试与 Diff 校验，任一失败即阻断提交；以真实测试证据而非模型自述判断改动是否可交付。", metric: "四类校验 · 任一失败阻断" },
      { title: "Coding Agent 适配层", detail: "抽象 Coding Agent Adapter，在独立 Worktree 中调用本地 Coding Agent 应用，统管身份权限、Context 组织与跨进程通信；真实双仓库跑通 Task → Worktree → 改码 → 校验 → 测试 → Commit → 创建 PR 纵向切片。", metric: "真实双仓库跑通" },
    ],
    github: "https://github.com/LBP97541135/GOAI-infra-repomesh",
  },
  {
    id: "multiagent-werewolf",
    title: "AI 狼人杀",
    tagline: "多智能体博弈系统 · 自进化与评测框架设计",
    category: "多智能体",
    type: "字节 AI 全栈挑战赛 · 冠军",
    period: "2026",
    priority: "featured",
    summary: "把狼人杀做成多智能体博弈实验场——信念矩阵追踪每个 Agent 的阵营判断，成功策略自动沉淀为 Skill，Fleet 并发评测量化自进化收益。",
    tags: ["多智能体", "信念矩阵", "Skill 自进化", "Fleet 评测", "AgentScope"],
    result: "字节跳动 AI 全栈挑战赛 · 冠军；A/B 实验平均 MVP 过程评分最高提升 20.4%，20 轮迭代赛后综合得分由 60 提升至 80",
    problem: "普通多智能体演示往往停在对话层，缺少长期策略、私有信息边界、可解释复盘，且无法批量评测多 Agent 博弈质量。",
    product: "22 个角色覆盖狼人、好人、中立三大阵营，每个角色有独立 Prompt 版本和 Skill 体系；上帝视角可实时观察全局信念矩阵和策略演进，玩家视角模拟真实身份遮蔽和博弈感；复盘面板提供时间线、MVP 评分图表和投票摇摆矩阵，让每局博弈都可量化分析。",
    engineering: "核心挑战是让 Agent 真正参与博弈——而不只是生成对话。自建博弈引擎维护完整的游戏状态机（身份/行动/投票/胜负判断），每轮发言驱动 Agent 实时更新对每位玩家身份的信念估计和预投票倾向；Fleet 并发评测模式把主观游戏体验转化为可量化的 Skill 迭代收益，让自进化效果有数据说话。",
    role: "负责博弈模块（信念矩阵、预投票意向实时更新）、自进化模块（Skill 沉淀机制）与 Fleet 批量评测设计。",
    scores: { business: 75, depth: 95, product: 91, innovation: 95, contribution: 80, verifiable: 99 },
    modules: [
      { title: "信念矩阵与博弈推理", detail: "每轮白天发言后，Agent 实时更新对其他玩家身份可信度的一阶/二阶信念，并同步修正预投票意向，让每次发言都驱动真实策略变化；上帝视角可实时观察全局信念矩阵，玩家视角模拟身份遮蔽下的真实博弈感。", metric: "7 阶段完整博弈链路" },
      { title: "Skill 自进化机制", detail: "通过预投票意向的变化识别最具影响力的发言，结合 Agent 实时思考链，将发言策略和逻辑沉淀为角色专属 Skill，下一局自动调用；22 个角色各有独立 Prompt 版本和 Skill 体系，覆盖三大阵营的差异化博弈逻辑。", metric: "22 角色 · 三大阵营" },
      { title: "Fleet 批量评测", detail: "支持多局并行开跑，横向对比不同 Skill 配置下的胜率、发言影响力和 MVP 得分率变化；复盘面板展示投票摇摆矩阵和时间线，将主观博弈体验转化为可量化的自进化收益数据。", metric: "胜率 · MVP · 影响力三维度" },
    ],
    mock: "labs/multiagent-werewolf/dist/",
    doc: "docs/projects/multiagent-werewolf.html",
    github: "https://github.com/kissie-77/MultiAgent-Werewolf",
  },
  {
    id: "evo-murder-game",
    title: "进化酒馆",
    tagline: "AI 娱乐化商机验证 · 玩法产品从 0 到 1",
    category: "多智能体",
    type: "黑客松 · 最佳人气奖",
    period: "2026",
    priority: "featured",
    summary: "AI 剧本杀互动产品原型，把剧本、DM、角色陪玩、长期记忆和行为进化串成完整体验。",
    tags: ["剧本互动", "DM Agent", "长期记忆", "行为进化"],
    result: "evomap 黑客松最佳人气奖，完整前后端 + 数据库落地，验证商业化潜力",
    problem: "传统剧本杀依赖真人 DM 和玩家配合，单人体验弱、复玩价值有限，玩家经验也难以沉淀。",
    product: "3 类 Agent（DM 主持 / 角色陪玩 / 私人助理）分工协作，驱动 8 阶段完整游戏流程（开场→阅本→调查→推理→投票→揭幕→复盘）；证物系统支持 3 层信息深度解锁和证物组合推理；DM 具备 L1–L4 分级提示能力，掌控节奏但绝不剧透；Agent 跨局记住玩家风格，逐局进化为更懂你的游戏伙伴。",
    engineering: "工程核心难点有两个。一是「信息边界」：5 种角色（侦探/嫌疑人/证人/凶手/NPC）在 8 个游戏阶段各有不同的信息可见范围——凶手在调查阶段额外可见 murder_plan，证人始终看不到线索，私聊在不阻塞公共讨论的情况下并发进行。二是「跨局记忆」：Experience/Skill 系统将玩家行为沉淀为 draft 状态的 Skill，经 DM 审核生效后按优先级注入下局 Prompt，effectiveness_score 滑动平均追踪技能实际效果；三层 LLM 管道（初始生成 → 反剧透 critique → 精炼）则确保 Agent 发言不意外暴露关键剧情。",
    role: "负责产品结构拆解、证物推理链、复盘进化机制和展示前端搭建。",
    scores: { business: 88, depth: 92, product: 94, innovation: 85, contribution: 93, verifiable: 98 },
    modules: [
      { title: "DM Agent 全程主持", detail: "负责 8 阶段游戏流程的节奏掌控（开场→阅本→调查→推理→投票→揭幕→复盘）；具备 L1–L4 分级提示系统，L1 只提方向，L4 接近答案但绝不说出凶手名字；三层 LLM 管道（初始生成→反剧透审核→精炼输出）保证 Agent 发言不意外泄露关键剧情。", metric: "8 阶段 · L1–L4 分级提示" },
      { title: "证物推理链", detail: "证物具备 3 层信息深度（基础描述/详细信息/深层细节），需解锁条件才能查看；5 种角色的信息可见范围在 8 个阶段各不相同；支持证物组合推理（至少 2 件组合生成 combo）；Agent 发言后可自动触发出示证物和喊话，形成链式对话树。", metric: "3 层深度 · 角色可见矩阵" },
      { title: "Experience/Skill 进化记忆", detail: "每局复盘后将行为模式沉淀为 draft 状态的 Skill，经 DM 审核生效后按优先级注入下局 Prompt；effectiveness_score 通过滑动平均持续追踪技能实际效果，SkillUsageLog 记录每次注入的 token 消耗和阶段，让进化可量化可审计。", metric: "跨局 Skill 自动注入" },
    ],
    mock: "labs/evo-murder-game/",
    doc: "docs/projects/evo-murder-game.html",
    github: "https://github.com/LBP97541135/evo-murder-game",
  },
  {
    id: "haji-ai",
    title: "Haji AI",
    tagline: "AI Native 社交范式 · 自研 Multi-Agent 框架",
    category: "多智能体",
    type: "个人项目 · 独立开发",
    period: "2026",
    priority: "featured",
    summary: "自研 Python Multi-Agent 框架（15 个核心模块、574 个测试全通过），构建 AI 社交平台：Skill 向量语义检索、JSON 文件 Memory 持久化、AST 双阶段安全沙箱、意愿驱动群聊，让 8 个 AI 角色真正「活」在朋友圈里。",
    tags: ["自研框架", "Skill 向量检索", "Memory 持久化", "AST 沙箱", "意愿驱动"],
    result: "574 个测试全通过，覆盖 Agent 核心框架、群聊、朋友圈、记忆与运营面板完整闭环",
    problem: "AI 社交产品如果只有聊天窗口，很难表现角色关系、社区氛围和长期内容价值。",
    product: "把 AI 角色当成有关系、有记忆、有表达风格的社交节点，构建可浏览、可互动、可运营的朋友圈生态。",
    engineering: "选择从零搭建框架而非套用现有方案——现有框架无法同时满足「语义化 Skill 检索 + 持久记忆 + 代码安全执行」三个需求。框架极简依赖设计：核心只依赖 6 个包，无 numpy/langchain/faiss，向量余弦相似度纯 Python 手写；三种执行模式（DIRECT/REACT/PLAN_AND_EXECUTE）通过统一调度接口组合；AST 静态分析（14 个安全模块白名单、35 个危险模块黑名单）先行验证，通过后在约 50 个安全内置函数的受限沙箱中执行；Agent 支持 CRON/EVENT/WEBHOOK/CONDITION 四种触发机制，可在特定时刻或外部事件驱动下主动发朋友圈。",
    role: "独立完成全栈开发，从框架核心（agent / memory / workflow 模块）到前端产品体验全部自主实现。",
    scores: { business: 60, depth: 81, product: 90, innovation: 92, contribution: 100, verifiable: 90 },
    modules: [
      { title: "自研 Multi-Agent 框架", detail: "15 个核心模块，DIRECT/REACT/PLAN_AND_EXECUTE 三种执行模式统一调度；Skill 通过纯 Python 余弦相似度向量检索动态匹配（无 numpy/faiss 依赖），降级时自动切换关键词命中率匹配；QwenEmbedder 专为内部 MaaS 平台适配（4096 维，batch_size=32）。", metric: "574 个测试全通过" },
      { title: "Memory 持久化", detail: "对话记忆写入 JSON 文件（workspace/sessions/），启动时 glob 恢复全部 session，完整还原 tool_calls 等字段；群聊消息以 JSONL append-only 格式持久化，取末尾 100 行读取，写入原子性好；对话结束后异步提取有价值信息作为公开记忆，按 low/medium/high 三档风险分级处理。", metric: "重启不失忆" },
      { title: "AST 双阶段安全沙箱", detail: "代码执行前先经 AST 静态分析：14 个安全模块白名单、35 个危险模块黑名单（subprocess/os/sys/importlib 等），exec/eval/__import__ 调用一律拦截；通过验证后在约 50 个安全内置函数的受限沙箱中运行，daemon 线程执行并设超时上限防止阻塞。", metric: "静态分析 + 受限执行双保险" },
      { title: "意愿驱动群聊 + 主动触发", detail: "群聊中未被 @ 的 Agent 向 LLM 发送 YES/NO 决策 prompt，根据自身目标和话题热度主动决定是否插话；支持 CRON/EVENT/WEBHOOK/CONDITION 四种触发机制，Agent 可在特定时刻或外部事件下主动发朋友圈，纯 Python 手写 cron 解析器（无第三方调度库）。", metric: "4 种主动触发机制" },
    ],
    mock: "labs/haji-ai/",
    doc: "docs/projects/haji-ai.html",
    github: "https://github.com/LBP97541135/haji-ai",
  },
  {
    id: "ai-work-coach",
    title: "AI Work Coach",
    tagline: "个性化 AI 学习中心 · 用户成长闭环产品",
    category: "AI 产品",
    type: "个人项目 · 产品设计",
    period: "2026",
    priority: "featured",
    summary: "面向职场成长的 AI 教练工作台，帮助用户复盘任务、拆解问题、制定行动计划并追踪状态。",
    tags: ["工作复盘", "成长教练", "行动计划", "仪表盘"],
    result: "完整实现目标设定、任务追踪、教练对话、复盘分析与洞察看板五层产品功能，可交互演示",
    problem: "职场反馈通常碎片化，用户很难把一次次任务经历沉淀成持续成长路径。",
    product: "把日常工作输入转化为问题诊断、能力画像、行动建议和周期复盘，让成长变成可管理流程。",
    engineering: "核心设计难点有两个。一是「推荐可解释性」：题目推荐基于显式公式（薄弱项加成 +0.25、新内容加成 +0.1、近期重复惩罚 -0.3、已掌握惩罚 -0.2），洞察面板向用户展示「今天为什么推荐这个话题」，让 AI 决策透明可信。二是「画像动态收敛」：批改结果输出 profilePatch，以新旧证据 7:3 加权合并更新各维度分数（限幅 0–100），避免单次训练剧烈波动，保证画像稳定跟随真实水平。",
    role: "负责训练闭环、画像更新、推荐逻辑和职业成长产品表达。",
    scores: { business: 78, depth: 70, product: 97, innovation: 80, contribution: 100, verifiable: 95 },
    modules: [
      { title: "自适应每日训练", detail: "基于显式评分公式动态选题（薄弱项加成/新内容加成/重复惩罚/掌握惩罚），支持单选/多选/判断/文本/案例/架构/产品 7 种题型；AI 批改输出结构化报告，包含总分、逐题反馈、强项、薄弱点和「面试可表达语言」。", metric: "7 种题型 · 可解释选题" },
      { title: "任务追踪与历史复盘", detail: "可视化管理每日目标和周期训练记录，支持按主题（Agent/工程/产品/综合）筛选历史，把碎片化训练经历转化为带分数的结构化成长路径。", metric: null },
      { title: "能力画像与洞察面板", detail: "5 个维度的能力分以新旧证据 7:3 加权合并更新（限幅 0–100），保证画像稳定收敛；洞察面板展示推荐公式的具体计分分解，让用户理解「AI 为什么今天推荐这个话题」——可解释 AI 设计。", metric: "动态画像 · 推荐可解释" },
    ],
    mock: "labs/ai-work-coach/",
    doc: "docs/projects/ai-work-coach.html",
    github: "https://github.com/LBP97541135/ai-work-coach",
  },
  {
    id: "money-printer-turbo",
    title: "MoneyPrinterTurbo",
    tagline: "提示词工程 · 内容生产流水线自动化",
    category: "AI 产品",
    type: "开源定制",
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
    modules: [
      { title: "关键词扩写层", detail: "用户仅需输入主题，系统自动扩展为多维度关键词，覆盖内容角度、受众痛点和热门标签，桥接主题意图与素材检索之间的语义 gap。", metric: null },
      { title: "素材自动匹配", detail: "以扩写关键词为检索 query，批量匹配素材库，按相关度排序后进入视频合成队列，全程无需手动筛选。", metric: null },
      { title: "提示词工程优化", detail: "重新设计生成策略：先扩写关键词，再结合主题与关键词共同生成视频文案，解决原工具需大量手动配置的问题。", metric: "单主题输入→全链路自动化" },
    ],
    mock: "labs/money-printer-turbo/",
    doc: "docs/projects/money-printer-turbo.html",
    github: "https://github.com/LBP97541135/MoneyPrinterTurbo",
  },
  {
    id: "aigc-test-image",
    title: "测品图生图评测体系",
    tagline: "双层视觉评测体系 · AI 生图合规工程",
    category: "AI 产品",
    type: "真实经历",
    period: "2026",
    summary: "为小红书商家测品笔记的 AI 生图链路构建双层视觉评测体系，从 20,000 张图中筛选 6,700+ 标杆素材，将 AI 违规率从 11% 压降至 1.7%。",
    tags: ["视觉评测", "双模型架构", "标杆库建设", "AI 合规"],
    result: "AI 违规率 11% → 1.7%，标杆素材库收录 6,700+ 张",
    problem: "AI 生图在测品笔记场景中频繁触发平台违规，人脸与光影特征容易被检测识别，同时缺少高质量参考素材库支撑生图方向。",
    product: "建立双层评测体系：小模型做快速合格性过滤与粗分类，大模型对通过初筛的素材进行细粒度维度打分，以 6,700+ 标杆图构建高质量素材库。",
    engineering: "关键工程判断是「在哪里加维度」：AI 图片违规的主要触发点是人脸和光影处理，而原评测体系从未将其纳入打分维度，意味着生图方向本身就在向高风险区域倾斜。将这两个维度纳入评测后，生图链路从源头被引导向更安全的方向；双层架构则是成本与精度的平衡设计——小模型高速过滤明显不合格图，大模型只对候选进行细粒度多维打分。",
    role: "负责标杆素材库筛选体系设计与执行，构建双层视觉评测 pipeline，编写评测 prompt，将 AI 违规风险维度纳入评分框架。",
    scores: { business: 92, depth: 85, product: 91, innovation: 80, contribution: 80, verifiable: 80 },
    modules: [
      { title: "标杆素材库建设", detail: "从 20,000 张商家测品图中制定筛选标准（构图、人脸质量、光影、服装清晰度），建立 6,700+ 张高质量参考库，为生图提供方向锚点。", metric: "6,700+ 张入库" },
      { title: "小模型快速初筛", detail: "用现有视觉模型 + 精细 prompt 实现高速二分类（合格/不合格）和粗分类，过滤掉明显不达标的生图，大幅降低大模型调用成本。", metric: null },
      { title: "大模型细粒度打分", detail: "对通过初筛的图片进行多维度评分，核心创新是将人脸区域和光影质量纳入评测维度——这是 AI 检测系统的主要违规触发点，也是本方案的工程难点。", metric: "违规率 11% → 1.7%" },
    ],
  },
  {
    id: "work-order-agent",
    title: "商家工单助手",
    tagline: "企业工单自动化 · Human-in-the-Loop 全链路",
    category: "企业落地",
    type: "真实经历",
    period: "2026",
    summary: "面向小红书商家入驻工单的自动化处理系统，双层 Agent 架构实现两级分类路由，Human-in-the-Loop 机制保障写入安全，执行后数据库回查确认变更真实生效。",
    tags: ["工单自动化", "两级分类", "Human-in-the-Loop", "Darwin 框架"],
    result: "商家入驻类工单覆盖率超 50%，处理平均用时从 11h 缩短至 4h",
    problem: "商家入驻工单数量大、判断链路长，人工处理消耗高且响应速度慢；写入操作风险高，需要安全兜底机制。",
    product: "双层架构：第一层小模型按大类（商家入驻/账号资质/开放平台/转人工）快速路由；第二层 Agent 以 React 自主模式探索细分场景 Skill，执行对应工具调用。",
    engineering: "工单自动化最大的工程挑战是「安全兜底」——Agent 自主执行写入操作时，任何误判都会直接影响商家的实际业务状态。核心设计是在每次写入前通过内部 IM 推送包含工单信息和处理原因的确认卡片，由值班人员人工授权后才执行；执行后主动回查数据库验证变更是否真实生效，不以工具返回值为唯一凭证，全链路可追溯。",
    role: "从 0 到 1 完成项目一期搭建，负责两级分类设计、场景 Skill 编排、Hi 卡片人工确认机制与数据库回查校验。",
    scores: { business: 98, depth: 92, product: 88, innovation: 80, contribution: 95, verifiable: 80 },
    modules: [
      { title: "双层分类路由", detail: "第一层用小模型按大类（商家入驻/账号资质/开放平台/转人工）做快速路由；第二层 Agent 以 React 自主模式探索细分场景，动态调用对应 Skill 处理。", metric: "覆盖率 >50%" },
      { title: "Human-in-the-Loop 安全机制", detail: "所有写入操作执行前，通过内部 IM 向值班人员推送包含工单信息和处理原因的确认卡片，人工审核通过后才执行，杜绝误操作风险。", metric: null },
      { title: "数据库回查验证", detail: "操作完成后主动查询数据库，验证变更是否真实生效，不依赖工具返回值作为唯一凭证，保证系统可信度。", metric: "处理用时 11h → 4h" },
    ],
  },
  {
    id: "ship-agent",
    title: "船舶运货助手",
    tagline: "弱模型 × 任务拆分 · 受限场景工程策略",
    category: "企业落地",
    type: "真实经历",
    period: "2025",
    summary: "在生产环境仅能使用小模型的受限条件下，通过任务拆分将复杂运货场景分解为信息提取 / 路线规划 / 数字计算三个独立子任务，实现 98%+ 准确率与一周 1 万+ 调用量。",
    tags: ["任务拆分", "RAG 检索", "受限模型适配", "报告生成"],
    result: "一周调用 1w+，准确率 98%+，回复效率提升 70%",
    problem: "行业数据量大，任务包含规划、计算和报告输出，生产环境模型能力（DeepSeek V3-8b）存在边界，单次推理难以覆盖全流程。",
    product: "将复杂需求拆为信息提取 / 路线规划 / 数字处理三个子任务，降低单次推理难度，适配受限模型能力。",
    engineering: "生产环境的核心约束是模型能力边界：平台限制只能使用本地轻量模型，无法依赖强模型做端到端推理。工程判断是「降低每步难度」而非「换更强的工具」——将单次复杂请求拆分为信息提取 / 路线规划 / 数字处理三个独立子任务，让每个子任务难度降至轻量模型可稳定处理的范围；数字计算从 LLM 推理中完全剥离，交由代码工具处理，彻底消除幻觉对精确数字结果的影响。",
    role: "负责行业任务拆解设计、RAG 线路匹配、Python 数字计算工具编排与结构化报告输出方案。",
    scores: { business: 95, depth: 75, product: 90, innovation: 70, contribution: 95, verifiable: 60 },
    modules: [
      { title: "任务拆分策略", detail: "将单次复杂请求拆分为信息提取 / 路线规划 / 数字处理三个独立子任务，将每个子任务难度降至 DeepSeek V3-8b 可处理范围，不依赖强模型。", metric: "准确率 98%+" },
      { title: "RAG 线路匹配", detail: "用 Langflow 构建线路数据检索流，以起点 + 目的地为 query 向量检索最优航线，返回结构化路线参数供后续计算使用。", metric: null },
      { title: "Python 数字计算工具", detail: "将货运量、时间估算等精确计算从 LLM 推理中剥离，以 Python tool 独立处理，避免大模型幻觉影响数字结果准确性。", metric: "一周调用 1 万+" },
    ],
  },
  {
    id: "invoice-agent",
    title: "发票报销 Agent",
    tagline: "税务 API 集成 · 企业财务 Agent 多维核验",
    category: "企业落地",
    type: "真实经历",
    period: "2025",
    summary: "企业财务场景下的全链路发票核验系统，接入税务局 API 校验真伪，多维交叉核对发票信息，预录入 + 自动匹配确保每张发票切实真实，重复报销拦截率 100%。",
    tags: ["税务局 API", "多维核验", "发票自动化", "前台看板"],
    result: "重复报销拦截率 100%，发票全流程自动核验，前台看板实时可查",
    problem: "人工审核发票依赖经验，税务真伪核验繁琐，重复报销、虚假发票难以系统性拦截，财务人员操作成本高。",
    product: "提前录入待开票信息作为基准；发票到达后自动触发：税务局 API 真伪校验 → 发票信息核对 → 需报销额度核对 → 开票公司/时间核对 → 自动录入或异常告警；前台看板汇总全部状态，财务人员全程无需手动核查。",
    engineering: "核心工程难点是多表状态的一致性保障：发票全链路涉及预录入信息、核验记录、报销状态、财务台账四张表，任意节点写入失败都会造成状态不一致——在财务场景中这是不可接受的。设计了多维表联动结构确保操作原子性；接入税务局 API 从核验源头拦截假发票，而非依赖人工经验识别。",
    role: "独立完成全部开发，包括税务局接口集成、多维核验逻辑、多维表数据结构设计与前台看板搭建。",
    scores: { business: 90, depth: 82, product: 80, innovation: 70, contribution: 100, verifiable: 92 },
    modules: [
      { title: "税务局 API 真伪核验", detail: "接入国家税务局 API，发票到达后自动校验真实性，从源头拦截假发票，免去财务人工查验的重复劳动。", metric: "重复报销拦截 100%" },
      { title: "多维交叉核对", detail: "发票信息与预录入基准数据进行四维核对：开票公司 / 金额 / 时间 / 报销额度，全部通过才进入自动录入，任一异常触发告警。", metric: null },
      { title: "企微多维表联动", detail: "设计四表联动数据结构：预录入信息、发票记录、报销状态、财务台账，多表实时同步，前台看板实时汇总，财务人员全程无需手动核查。", metric: null },
    ],
  },
  {
    id: "material-agent",
    title: "物资管理 Agent",
    tagline: "自然语言驱动 · 企微官方市场上线产品",
    category: "企业落地",
    type: "真实经历",
    period: "2025",
    summary: "基于企微官方 API 独立开发的物资管理 Agent，上线企微官方市场，覆盖物资进出、存放、位置变更与危机告警全流程，效率提升 18 倍。",
    tags: ["物资管理", "企微官方市场", "多维表联动", "危机告警"],
    result: "上线企微官方市场，操作效率提升 18 倍，覆盖物资进出 / 存放 / 换位 / 告警完整链路",
    problem: "复杂的物资管理流程依赖专人操作多个系统，操作步骤繁琐、出错率高，异常情况难以及时告警。",
    product: "员工以自然语言描述需求 → Agent 多步推理拆解操作 → 自动完成多维表数据读写、位置变更与危机告警推送。",
    engineering: "完全基于企微官方 API 构建是有意为之的技术决策——目标是上架企微官方市场，这要求方案零私有依赖、可复制交付。核心工程难点是多表状态一致性：物资进出库、位置变更、库存阈值告警分散在多张表，任意操作都需要跨表同步，写入顺序错误或漏记会导致库存状态失真，在物资管理场景中直接引发业务错误。",
    role: "独立完成全部开发，从物资操作流程拆解、多维表数据结构设计到 Agent 推理 prompt 与企微市场上架。",
    scores: { business: 92, depth: 85, product: 85, innovation: 72, contribution: 100, verifiable: 92 },
    modules: [
      { title: "自然语言操作解析", detail: "员工用自然语言描述物资需求，Agent 多步推理拆解为具体操作指令，调用企微多维表 API 执行，无需培训，使用门槛极低。", metric: "效率提升 18 倍" },
      { title: "物资全周期管理", detail: "覆盖物资入库、出库、存放位置变更和库存阈值告警四类操作，多维表多表联动维护实时库存状态，防止漏记和重复操作。", metric: null },
      { title: "企微官方市场上架", detail: "完全基于企微官方 API 构建，通过企微官方应用审核并上线应用市场，具备商业化交付能力，证明方案可复制性。", metric: "上线企微官方市场" },
    ],
  },
  {
    id: "chart-mcp",
    title: "Chart MCP Server",
    tagline: "协议层手写实现 · 私有化 MCP 图表服务",
    category: "开发者工具",
    type: "开源项目",
    period: "2025",
    summary: "独立实现的 TypeScript MCP Server，基于 AntV 图表渲染，支持 25+ 图表类型与 stdio / SSE / Streamable 三种协议，私有化部署于云服务器，确保隐私数据全程不出域。",
    tags: ["MCP 协议", "TypeScript", "私有部署", "数据不出域"],
    result: "25+ 图表类型，私有化云端部署，敏感数据全程不离开私有环境",
    problem: "AI 应用需要图表能力，但很多需要可视化的数据（财务、客户、内部指标）属于隐私数据，不能传到外部服务。",
    product: "自建私有 MCP Server，AI 应用通过标准 MCP 协议调用即可获得图表，渲染在私有环境内完成，数据不经过任何第三方。",
    engineering: "不依赖现有 MCP SDK，从协议层手写完整 Server 实现——协议层、工具注册、请求路由与响应封装全部自主实现，清晰理解每一层的边界；支持 stdio、SSE、Streamable HTTP 三种传输协议适配不同部署场景；Docker 容器化后私有化部署，业务触发渲染的数据全程不离开私有环境。",
    role: "独立完成 MCP Server 设计与实现、AntV 渲染集成、三种协议适配、Docker 容器化与云服务器部署。",
    scores: { business: 75, depth: 88, product: 82, innovation: 88, contribution: 90, verifiable: 92 },
    modules: [
      { title: "三协议 MCP 手写实现", detail: "完整实现 stdio、SSE、Streamable HTTP 三种 MCP 传输协议，不依赖第三方 MCP SDK，协议层/工具注册/请求路由/响应封装全部自主实现。", metric: "25+ 图表类型" },
      { title: "AntV 渲染集成", detail: "对接 AntV 图表库，AI 应用通过标准 MCP 工具调用传参即可触发渲染，支持折线、柱状、饼图、散点、热力图等多种类型。", metric: null },
      { title: "私有化部署方案", detail: "Docker 容器化后部署至云服务器，敏感业务数据（财务、客户、内部指标）全程在私有环境内完成渲染，不经过任何第三方服务。", metric: "数据不出域" },
    ],
    github: "https://github.com/LBP97541135/mcp-server-chart",
  },
  {
    id: "her-catalyst",
    title: "HER 催化剂定向生成",
    tagline: "EGNN + 扩散模型 · AI for Materials Science",
    category: "AI 产品",
    type: "科研项目",
    period: "2025",
    summary: "用等变图神经网络（EGNN）与多任务引导扩散模型，定向生成兼具高催化活性、热力学稳定性和实验可合成性的新型二维析氢催化材料。",
    tags: ["EGNN", "扩散模型", "材料生成", "AI for Science"],
    result: "实现从随机噪声逐步恢复具有特定对称性的二维晶体结构，优化 |ΔG_H| 逼近 Sabatier 理想值",
    problem: "传统催化材料设计依赖实验试错，周期长、成本高，难以系统性探索材料空间。",
    product: "以生成模型替代经验试探，通过物理约束引导生成兼具活性、稳定性与可合成性的新型二维材料。",
    engineering: "材料生成的核心约束是物理合法性——生成的原子坐标必须满足晶体的对称性规则，否则生成物在现实中根本不存在。等变图神经网络通过维持旋转/平移等变性保证每步去噪都在物理可行空间内；多任务引导让扩散过程同时朝高催化活性、热力学稳定性、实验可合成性三个目标优化，而非逐一贪心满足——单目标优化往往导致其他指标同步崩溃。",
    role: "独立完成模型设计、EGNN 实现、扩散生成流程与材料性质优化目标设定。",
    scores: { business: 50, depth: 92, product: 62, innovation: 92, contribution: 90, verifiable: 95 },
    modules: [
      { title: "EGNN 物理不变性建模", detail: "用等变图神经网络维持晶体结构生成中的旋转/平移不变性，确保生成的原子坐标满足物理对称性约束，而非随机噪声输出。", metric: null },
      { title: "多任务引导扩散生成", detail: "在扩散过程中同时施加催化活性（|ΔG_H|）、热力学稳定性和实验可合成性三个优化目标，通过梯度引导平衡多目标冲突。", metric: "|ΔG_H| 逼近 Sabatier 理想值" },
      { title: "材料空间定向探索", detail: "从随机噪声逐步恢复具有特定对称性的二维晶体结构，替代传统实验试错路径，系统性搜索高性能 HER 催化材料候选。", metric: null },
    ],
    github: "https://github.com/LBP97541135/her-catalyst-diffusion",
  },
  {
    id: "community-agent",
    title: "社里办",
    tagline: "Multi-Agent 架构设计 · 低代码竞赛落地",
    category: "多智能体",
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
    modules: [
      { title: "Multi-Agent 调度架构", detail: "主 Agent 统一接收请求，根据意图路由至内部管理/团队建设/活动创新三个专属 Agent，重点设计跨 Agent 上下文传递机制，确保信息不丢失。", metric: "30+ 工作流" },
      { title: "工作流自动化", detail: "结合钉钉原生接口，将报批、通知、归档等传统社团管理流程封装为工作流，一条指令触发完整执行链。", metric: null },
      { title: "知识库沉淀与活动创新", detail: "建立 4 个分类知识库沉淀社团历史经验，结合 LLM 生成能力，在历史活动模板基础上输出创新方案，让新生代可以快速继承前人经验。", metric: "4 个知识库" },
    ],
  },
];

const scoreDimensions = [
  { key: "business", label: "业务价值", hint: "有无可量化的真实结果：数据、指标、规模" },
  { key: "depth", label: "技术深度", hint: "Agent 架构 / 工程方案的复杂度与设计质量" },
  { key: "product", label: "产品思维", hint: "是否真正解决了用户问题，而非只是技术演示" },
  { key: "innovation", label: "创新性", hint: "方案和场景的差异化与辨识度" },
  { key: "contribution", label: "独立贡献", hint: "本人实际承担了多少核心工作" },
  { key: "verifiable", label: "可验证度", hint: "是否有 demo、数据、代码可以直接验证" },
];

const personas = {
  "agent-dev": {
    label: "Agent 应用开发",
    en: "Agent Engineer",
    badges: ["Agent 应用开发工程师", "AI 全栈 / Agent Engineer"],
    headline: ["不是又一个 AI Demo", "是能跑通的 Agent 工程"],
    sub: "从自研 Multi-Agent 框架到多仓库 Coding Agent，我把 <span class=\"text-ink font-bold\">Context、Tool Use、Multi-Agent 编排</span> 落成能上线、可验证的系统。",
    stats: [
      { n: "冠军", tag: "竞赛奖项", label: "字节 AI 全栈挑战赛 · 多智能体" },
      { n: "TOP 30", tag: "竞赛排名", label: "GOAI 大赛 · Agent Infra 赛道" },
      { n: "574", tag: "工程质量", label: "自研 Agent 框架 · Pytest 用例全通过" },
    ],
    about: {
      title: "把 Agent 做成<br/>能上线的系统",
      intro: [
        "我关注的不是模型能不能聊天，而是 Agent 能不能在真实约束下稳定完成任务——<span class=\"text-ink\">Context 怎么组织、工具怎么调用、多个 Agent 怎么协作、失败怎么兜底</span>。",
        "从零自研 Multi-Agent 框架（574 测试全通过），到多仓库 Coding Agent 协作平台，我习惯把 Agent 能力落成 <span class=\"text-ink italic font-serif\">有契约、可验证、能交付的工程系统。</span>",
      ],
    },
    capabilities: [
      { title: "Agent 架构", desc: "Leader→Manager→Worker 层级式 Agent、Multi-Agent 编排、Human-in-the-Loop；从自研框架到多仓库 Coding Agent 协作平台的落地经验。" },
      { title: "Context & Tool Use", desc: "Context 组织、Tool Calling、Structured Output、MCP 协议；对工具入参与返回做 Schema 校验、失败重试与降级。" },
      { title: "检索与记忆", desc: "RAG 检索、纯 Python 向量语义匹配、JSON / JSONL Memory 持久化，重启不失忆。" },
      { title: "工作流与编排", desc: "Workflow 编排、Agent Loop、DIRECT / REACT / PLAN_AND_EXECUTE 三种执行模式统一调度。" },
      { title: "工程能力", desc: "Python / TypeScript / FastAPI、HTTP/RPC、SSE / WebSocket、SQL、Docker、Git、Pytest 全栈独立交付。" },
      { title: "评测与可观测", desc: "Evals 评测体系、Fleet 批量评测、结构化日志与运行告警，让每次迭代有数据说话。" },
    ],
    skills: [
      { label: "工程能力", items: "Python、TypeScript、FastAPI、HTTP/RPC、SSE / WebSocket、SQL、Docker、Git、Pytest" },
      { label: "Agent 开发", items: "Context、Tool Use、Structured Output、MCP、RAG、Workflow、Multi-Agent、Human-in-the-loop、Evals" },
      { label: "框架 & 平台", items: "AgentScope、FastGPT、Darwin、Langflow、Prompt Engineering" },
    ],
    thesisTitle: "关于 Agent 工程的<br/>核心主张",
    thesis: [
      { title: "契约优先", body: "多进程 Agent 系统里，先定跨进程契约与幂等事件模型，再谈能力扩展——否则并发一上来就乱。" },
      { title: "约束即安全", body: "让 Agent 在隔离 Worktree、allowed_paths 白名单内执行，用真实 Diff 与测试验证结果，而不是相信模型自述。" },
      { title: "可验证才算交付", body: "每个 Agent 能力都要有测试、有指标、有回放，能复现才叫做完——Demo 不算。我用核心指标衡量每个功能的真实贡献。" },
    ],
    featured: ["repomesh", "multiagent-werewolf", "haji-ai", "work-order-agent", "chart-mcp", "evo-murder-game"],
    experienceOrder: ["xiaohongshu", "huanjie", "yanhun", "hdu"],
  },

  "ai-pm": {
    label: "AI 技术产品经理",
    en: "AI Product Manager",
    badges: ["AI 技术产品经理", "AI Product Manager"],
    headline: ["懂技术边界", "更懂产品落地"],
    sub: "我从用户问题出发定义需求，也懂 Agent 的能力与边界——能把模糊的业务诉求，拆成 <span class=\"text-ink font-bold\">可执行、可验证、能上线</span> 的产品方案。",
    stats: [
      { n: "1万+", tag: "用户规模", label: "周年庆会员活动页月 UV" },
      { n: "11h→4h", tag: "效率提升", label: "商家工单端到端处理时长" },
      { n: "18×", tag: "落地交付", label: "物资管理效率 · 上架企微官方市场" },
    ],
    about: {
      title: "从用户问题<br/>定义 AI 产品",
      intro: [
        "我拒绝停留在 <span class=\"text-ink\">「AI Demo」</span>。在不确定的业务场景中，我先判断哪里真正需要智能体、失败成本有多高，再决定 AI 出现在哪一步。",
        "从炎魂游戏中台的会员活动，到小红书商家工单的 0→1 主推，我习惯把感性需求翻译成 <span class=\"text-ink italic font-serif\">角色、任务、工具链和可量化的验收标准。</span>",
      ],
    },
    capabilities: [
      { title: "需求定义", desc: "从用户问题出发定义需求，而非从技术找场景；擅长场景优先级排序与失败成本评估。" },
      { title: "方案设计", desc: "Multi-Agent 方案选型、工作流拆解、采集口径与交付标准定义，把模糊诉求收敛成可执行方案。" },
      { title: "数据驱动", desc: "埋点触达、可见人群管理、指标体系与 A/B 验证，用数据判断功能价值与迭代方向。" },
      { title: "跨团队推动", desc: "有从 0→1 推动项目落地的经验，覆盖需求-方案-上线全流程，直接对客沟通与验收。" },
      { title: "技术判断力", desc: "懂 Agent 能力边界与失败模式，能与工程深度对齐，避免把不确定性推给用户。" },
      { title: "跨行业落地", desc: "游戏 / 电商 / 制造 / 能源 / 航运多行业交付，快速理解业务并翻译成 AI 可用方案。" },
    ],
    skills: [
      { label: "产品能力", items: "需求分析、方案设计、埋点与指标体系、竞品调研、项目管理、验收标准定义" },
      { label: "AI 理解", items: "Multi-Agent、RAG、Tool Use、Prompt Engineering、Agent 能力与边界判断" },
      { label: "工具", items: "原型设计、SQL、埋点分析、企微多维表、FastGPT、Langflow" },
    ],
    thesisTitle: "关于 AI 产品的<br/>核心主张",
    thesis: [
      { title: "精准定位 AI 边界", body: "不是所有流程都需要智能体。我优先评估业务约束与失败成本，确保 AI 仅出现在能产生确定性收益的环节。" },
      { title: "拆解模糊为执行单元", body: "我将感性的需求转化为理性的角色、任务与工具链。通过设计反馈机制，让系统在自主行动与人工干预间达成平衡。" },
      { title: "以工程交付可验证的价值", body: "交付不仅仅是演示。我通过核心指标（如准确率、提效比、任务完成率）来衡量每一个 AI 功能的实际业务贡献。" },
    ],
    featured: ["work-order-agent", "ship-agent", "ai-work-coach", "evo-murder-game", "material-agent", "chart-mcp"],
    experienceOrder: ["yanhun", "xiaohongshu", "huanjie", "hdu"],
  },

  "agent-qa": {
    label: "Agent 测试 / 质量效能",
    en: "Agent QA / Eval",
    badges: ["Agent 质量效能", "Agent QA / Eval Engineer"],
    headline: ["Agent 不是测过就行", "要可评测、可观测"],
    sub: "我把 Agent 的质量做成体系：从提交前的 <span class=\"text-ink font-bold\">多层测试门禁</span>，到 PostGame 三阶段评测与全链路可观测，让每次迭代都有数据说话。",
    stats: [
      { n: "60→80", tag: "评测驱动", label: "狼人杀 20 轮迭代赛后综合得分" },
      { n: "98/100", tag: "回归验收", label: "船舶案例发布前回归通过" },
      { n: "11%→1.7%", tag: "质量压降", label: "AI 生图违规率 · 双层评测" },
    ],
    about: {
      title: "让 Agent 质量<br/>可评测可观测",
      intro: [
        "Agent 系统最难的不是跑通一次，而是证明它 <span class=\"text-ink\">稳定、可回归、可复盘</span>。我关注评测怎么建、门禁怎么卡、异常怎么定位。",
        "从狼人杀的 PostGame 三阶段评测与 Vote Swing 指标，到 RepoMesh 提交前的多层测试门禁，我习惯用 <span class=\"text-ink italic font-serif\">可量化、可观测的方式为 Agent 质量兜底。</span>",
      ],
    },
    capabilities: [
      { title: "评测体系", desc: "PostGame 三阶段评测、多维评分、场景化对局数据集，支撑 Prompt 改进与角色 Skill 提取，让策略可量化可回归。" },
      { title: "质量门禁", desc: "提交前 Agent 生成测试 + 仓库历史测试 + 跨仓库集成测试 + Diff 校验，任一失败阻断 Commit。" },
      { title: "可观测", desc: "结构化对局日志、POV 多视角回放、多类运行告警，形成从记录到问题定位与复盘的闭环。" },
      { title: "指标设计", desc: "独创 Vote Swing 量化单次发言影响、MVP 过程评分、AI 违规率等，把主观体验转成可量化信号。" },
      { title: "回归与验证", desc: "真实案例回归集、数据库回查校验、双层视觉评测 pipeline，不以工具返回值为唯一凭证。" },
      { title: "Agent 工程", desc: "Multi-Agent、Tool Use、MCP、隔离执行；懂被测系统内部，才能设计有效的评测与门禁。" },
    ],
    skills: [
      { label: "工程能力", items: "Python、TypeScript、FastAPI、HTTP/RPC、SSE / WebSocket、SQL、Docker、Git、Pytest" },
      { label: "Agent 开发", items: "Context、Tool Use、Evals、MCP、RAG、Multi-Agent、Human-in-the-loop、Workflow、Observability" },
      { label: "评测 & 可观测", items: "评分数据集、Fleet 批量评测、结构化日志、多视角回放、运行告警" },
    ],
    thesisTitle: "关于 Agent 质量的<br/>核心主张",
    thesis: [
      { title: "可量化才能优化", body: "把主观体验转成可量化指标——Vote Swing、过程评分、违规率——迭代才有方向，而不是凭感觉调 Prompt。" },
      { title: "门禁前置", body: "质量不是上线后补测，而是提交前就卡住：Agent 生成测试 + 历史测试 + 集成测试 + Diff 校验，任一失败阻断 Commit。" },
      { title: "可观测才能定位", body: "结构化日志、多视角回放、运行告警形成闭环，让问题从「出现」到「定位」全程可追溯。" },
    ],
    featured: ["multiagent-werewolf", "repomesh", "aigc-test-image", "haji-ai", "invoice-agent", "ship-agent"],
    experienceOrder: ["yanhun", "xiaohongshu", "huanjie", "hdu"],
  },
};

const PERSONA_ORDER = ["agent-dev", "ai-pm", "agent-qa"];

function resolveInitialPersona() {
  const fromUrl = new URLSearchParams(location.search).get("p");
  if (personas[fromUrl]) return fromUrl;
  const fromStore = localStorage.getItem("persona");
  if (personas[fromStore]) return fromStore;
  return "agent-dev";
}

let activePersona = resolveInitialPersona();

const experiences = [
  {
    id: "yanhun",
    time: "2026.07 - 2026.09",
    title: '炎魂网络科技 <span class="font-mono italic text-ink tracking-tight ml-2">产品经理</span>',
    metrics: ["会员活动页月 UV 1万+", "8 平台爬虫平台选型", "规则→发布后禁改约束"],
    description: "负责《忍者必须死 3》会员活动中台与内部 AI 效率工具的需求、方案与上线验收，主导周年庆会员抽奖后台 + 前台完整方案。",
    expandable: true,
    detail: "把活动类型、可见人群、活动时间、会员等级等业务规则固化为状态校验与发布后禁改约束，并定义埋点与上线验收口径，活动页月 UV 稳定超过 1 万；另调研算法组、市场组在 8 个平台的多类采集需求，完成 Agent 爬虫平台选型，把需求归纳为目标平台、采集对象、筛选条件与交付格式，设计「需求理解 → 流程预览 → 试采样验收」工作流。",
  },
  {
    id: "xiaohongshu",
    time: "2026.03 - 2026.06",
    title: '小红书 <span class="font-mono italic text-ink tracking-tight ml-2">产品工程师</span>',
    metrics: ["工单处理 11h→4h", "上线 3 天 96 张 · 50% 全自动", "生图违规 11%→1.7%"],
    description: "电商商家技术组全栈工程师，独立主导商家工单助手（Java + Darwin 两级 Agent）与测品双层视觉评测两条业务线。",
    expandable: true,
    detail: "以 PE（Product Engineer）身份横跨工程交付与业务判断，既写代码也推动需求落地。商家工单助手从 0 到 1：一级 Router Agent 做意图识别 / 实体抽取 / 场景路由，二级按商家入驻、开发平台、店铺资质封装领域 SOP、Skill 与 RPC Tool；调用前后校验 Schema，失败重试耗尽降级转人工，按置信度分流，上线 3 天处理约 96 张、50% 全自动闭环、20% 人工复核，处理时长 11h→4h。测品评测体系：从 20,000 张图筛选 6,700+ 标杆素材，双层视觉评测 pipeline 将 AI 违规率从 11% 压降至 1.7%。",
    projects: ["work-order-agent", "aigc-test-image"],
  },
  {
    id: "huanjie",
    time: "2025.11 - 2026.02",
    title: '珠海环界云计算 <span class="font-mono italic text-ink tracking-tight ml-2">AI 解决方案工程师</span>',
    metrics: ["每周 1万+ 生产请求", "物资效率 18× · 上架企微市场", "发票重复拦截 100%"],
    description: "独立对客交付，一人负责从需求调研、方案设计、工作流搭建到上线验收；服务制造、能源、金融、跨境等行业，并参与企业微信官方合作项目。",
    expandable: true,
    detail: "核心工作是个性化处理客户 POC 需求，直接对客沟通，将 AI 能力翻译成客户可用的业务方案。积累了跨行业 Agent 落地与完整客户交付方法论。",
    clients: [
      { name: "大连天亿", tag: "精密仪器制造" },
      { name: "连用科技", tag: "数据管理平台" },
      { name: "Renogy", tag: "美国太阳能品牌" },
      { name: "Phitomas", tag: "马来西亚 ERP" },
      { name: "Apifiny", tag: "加密资产交易" },
      { name: "企业微信", tag: "腾讯官方合作" },
    ],
    projects: ["invoice-agent", "material-agent", "ship-agent"],
  },
  {
    id: "hdu",
    time: "2023 - 2027",
    title: "杭州电子科技大学 · 自动化",
    description: "专业前 20%，学习自动控制、计算机网络、软件技术、Python、C 语言与机器学习。",
  },
];

const categories = ["全部", "Agent 基建", "多智能体", "AI 产品", "企业落地", "开发者工具"];
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
  { id: "nav-work", title: "作品 / 项目", icon: "💻", action: () => scrollToId("work") },
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
  const order = personas[activePersona].experienceOrder;
  const ordered = order
    ? order.map(id => experiences.find(e => e.id === id)).filter(Boolean)
    : experiences;
  timeline.innerHTML = ordered.map((item, idx) => {
    const isExpandable = item.expandable;

    const clientsHtml = item.clients ? `
      <div class="mt-6">
        <span class="text-[10px] font-bold tracking-[0.2em] text-muted uppercase font-mono block mb-3">服务客户</span>
        <div class="flex flex-wrap gap-2">
          ${item.clients.map(c => `
            <div class="flex items-center gap-2 px-3 py-1.5 bg-white border border-black/[0.05] rounded-full">
              <span class="text-xs font-bold text-ink">${c.name}</span>
              <span class="text-[10px] text-muted font-mono">${c.tag}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const relatedProjectsHtml = item.projects ? `
      <div class="mt-6">
        <span class="text-[10px] font-bold tracking-[0.2em] text-muted uppercase font-mono block mb-3">关联项目</span>
        <div class="flex flex-wrap gap-3">
          ${item.projects.map(pid => {
            const p = projects.find(p => p.id === pid);
            if (!p) return '';
            return `
              <button class="text-left px-4 py-3 bg-bgsoft hover:bg-white border border-black/[0.05] hover:border-accent/20 rounded-2xl transition-all duration-300 group/proj" data-open-project="${projects.indexOf(p)}">
                <div class="text-xs font-black text-ink group-hover/proj:text-accent transition-colors">${p.title}</div>
                <div class="text-[10px] font-mono text-muted mt-0.5">${p.tagline || p.type}</div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    ` : '';

    const expandContent = isExpandable ? `
      <div class="timeline-expand overflow-hidden transition-all duration-500 ease-out" style="max-height: 0; opacity: 0;">
        <div class="mt-6 pt-6 border-t border-black/[0.04]">
          <p class="text-base text-muted font-medium leading-relaxed">${item.detail || ''}</p>
          ${clientsHtml}
          ${relatedProjectsHtml}
        </div>
      </div>
    ` : '';

    const expandBtn = isExpandable ? `
      <button class="timeline-toggle mt-4 flex items-center gap-2 text-[10px] font-bold text-muted hover:text-accent transition-colors uppercase tracking-widest font-mono">
        <span class="toggle-label">展开详情</span>
        <svg class="toggle-icon w-3 h-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
    ` : '';

    const metricsHtml = item.metrics ? `
      <div class="evidence-chips mb-4">
        ${item.metrics.map(m => `<span class="ev-chip"><span class="ev-tick"></span>${m}</span>`).join('')}
      </div>
    ` : '';

    const isFirst = idx === 0;
    return `
      <article class="group relative pl-12 pb-16 last:pb-0 reveal">
        <div class="absolute left-0 top-0 bottom-0 w-px bg-black/[0.05] group-last:bg-transparent"></div>
        <div class="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full ${isFirst ? 'bg-accent ring-8 ring-white scale-125' : 'bg-accent ring-8 ring-white'} transition-all duration-500 group-hover:scale-150 group-hover:bg-ink"></div>
        <time class="block text-[10px] font-bold font-mono text-accent italic uppercase tracking-widest mb-4">${item.time}</time>
        <h3 class="text-2xl font-black text-ink mb-3 tracking-tighter flex items-baseline flex-wrap">${item.title}</h3>
        ${metricsHtml}
        <p class="text-muted text-lg font-medium leading-relaxed max-w-2xl">${item.description}</p>
        ${expandBtn}
        ${expandContent}
      </article>
    `;
  }).join('');

  // 展开/收起交互
  timeline.querySelectorAll('.timeline-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const article = btn.closest('article');
      const expand = article.querySelector('.timeline-expand');
      const label = btn.querySelector('.toggle-label');
      const icon = btn.querySelector('.toggle-icon');
      const isOpen = expand.style.maxHeight !== '0px' && expand.style.maxHeight !== '';

      if (isOpen) {
        expand.style.maxHeight = '0';
        expand.style.opacity = '0';
        label.textContent = '展开详情';
        icon.style.transform = 'rotate(0deg)';
      } else {
        expand.style.maxHeight = expand.scrollHeight + 'px';
        expand.style.opacity = '1';
        label.textContent = '收起';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // 关联项目点击
  timeline.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.openProject);
      openProject(idx);
    });
  });

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
  if (project.mock) actions.push(`<a class="px-5 py-2.5 bg-accent text-white rounded-full text-xs font-bold hover:scale-105 transition-transform" href="${project.mock}" target="_blank" rel="noreferrer" data-stop="1">在线体验</a>`);
  if (project.doc) actions.push(`<a class="px-5 py-2.5 bg-bgsoft text-ink rounded-full text-xs font-bold hover:bg-black/[0.05] transition-all" href="${project.doc}" target="_blank" rel="noreferrer" data-stop="1">项目介绍</a>`);
  if (project.github) actions.push(`<a class="px-5 py-2.5 bg-bgsoft text-ink rounded-full text-xs font-bold hover:bg-black/[0.05] transition-all flex items-center gap-1.5" href="${project.github}" target="_blank" rel="noreferrer" data-stop="1"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub</a>`);
  return actions.length ? `<div class="flex gap-3 mt-6">${actions.join("")}</div>` : "";
}

function evidenceChips(project) {
  const chips = [];
  const t = project.type || "";
  if (/冠军|第一|TOP|最高奖|一等|二等|人气奖|卓越/.test(t)) chips.push({ text: t, award: true });
  if (project.github) chips.push({ text: "开源代码" });
  if (project.mock) chips.push({ text: "在线 Demo" });
  (project.tags || []).forEach((tag) => {
    if (chips.length < 3 && !chips.some((c) => c.text === tag)) chips.push({ text: tag });
  });
  return `
    <div class="evidence-chips mt-4 mb-6">
      ${chips.slice(0, 3).map((c) => `<span class="ev-chip${c.award ? " ev-chip-award" : ""}">${c.text}</span>`).join("")}
    </div>
  `;
}

function projectCard(project, modifier = "") {
  return `
    <article class="project-item reveal group cursor-pointer bg-white/40 backdrop-blur-sm p-7 rounded-3xl hover:bg-white shadow-sm hover:shadow-ambient-hover transition-all duration-500 border border-black/[0.03] hover:border-black/[0.08]" data-index="${projects.indexOf(project)}" tabindex="0" role="button">
      <div class="flex flex-col h-full justify-between relative z-10">
        <div>
          <div class="flex items-center justify-between mb-5">
            <span class="text-[10px] font-bold tracking-[0.3em] text-accent uppercase font-mono">${project.category}</span>
            <span class="text-[10px] font-mono text-muted/50">${project.period}</span>
          </div>
          <h3 class="text-2xl font-black text-ink mb-1 flex items-center gap-3 group-hover:text-accent transition-colors duration-500 tracking-tighter group-hover:translate-x-1 transition-transform">
            ${project.title}
            <svg class="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
          </h3>
          ${project.tagline ? `<p class="font-mono text-[10px] text-accent/70 tracking-wide mb-3">${project.tagline}</p>` : '<div class="mb-3"></div>'}
          <p class="text-muted text-sm font-medium leading-relaxed line-clamp-2 group-hover:text-ink transition-colors mb-2">${project.summary}</p>
          ${evidenceChips(project)}
        </div>
        <div class="pt-5 border-t border-black/[0.04] group-hover:border-accent/20 transition-colors">
          <p class="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-1 font-mono">Key Outcome</p>
          <p class="text-sm text-ink font-bold tracking-tight group-hover:text-accent transition-colors leading-snug">${project.result}</p>
        </div>
      </div>
    </article>
  `;
}

function personaFeaturedIds() {
  return (personas[activePersona] && personas[activePersona].featured) || [];
}

function renderFeatured() {
  if (!featuredGrid) return;
  let list = personaFeaturedIds()
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);
  if (activeCategory !== "全部") list = list.filter((p) => p.category === activeCategory);
  featuredGrid.innerHTML = list
    .map((project, idx) => projectCard(project, "featured-card").replace("reveal", `reveal stagger-${idx + 1}`))
    .join("");
  observeReveals();
}

function renderProjects() {
  const featuredSet = new Set(personaFeaturedIds());
  let list = projects.filter((p) => !featuredSet.has(p.id));
  if (activeCategory !== "全部") list = list.filter((p) => p.category === activeCategory);
  projectGrid.innerHTML = list
    .map((project, idx) => projectCard(project).replace("reveal", `reveal stagger-${(idx % 5) + 1}`))
    .join("");
  observeReveals();
}

function openProject(index) {
  const project = projects[index];

  const modulesHtml = project.modules ? `
    <div class="mt-10">
      <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-6 flex items-center gap-3">
        <span class="w-8 h-px bg-accent/20"></span> 功能模块拆解
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${project.modules.map((m, i) => `
          <div class="module-card bg-bgsoft rounded-2xl p-6 border border-black/[0.04] hover:border-accent/20 transition-colors">
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-sm font-black text-ink leading-tight">${m.title}</span>
              <span class="text-[9px] font-bold font-mono text-accent/60 flex-shrink-0">0${i+1}</span>
            </div>
            <p class="text-xs text-muted font-medium leading-relaxed">${m.detail}</p>
            ${m.metric ? `<div class="mt-3 pt-3 border-t border-black/[0.05]"><span class="text-xs font-bold text-accent font-mono">${m.metric}</span></div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  const actionsHtml = (() => {
    const a = [];
    if (project.mock) a.push(`<a class="px-5 py-2.5 bg-accent text-white rounded-full text-xs font-bold hover:scale-105 transition-transform" href="${project.mock}" target="_blank" rel="noreferrer">在线体验 →</a>`);
    if (project.doc) a.push(`<a class="px-5 py-2.5 bg-bgsoft text-ink rounded-full text-xs font-bold hover:bg-black/[0.06] transition-all" href="${project.doc}" target="_blank" rel="noreferrer">项目介绍</a>`);
    if (project.github) a.push(`<a class="px-5 py-2.5 bg-bgsoft text-ink rounded-full text-xs font-bold hover:bg-black/[0.06] transition-all flex items-center gap-1.5" href="${project.github}" target="_blank" rel="noreferrer"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub</a>`);
    return a.length ? `<div class="flex flex-wrap gap-3">${a.join('')}</div>` : '';
  })();

  dialogContent.innerHTML = `
    <div class="bg-white">
      <div class="p-8 md:p-14 max-w-4xl mx-auto">

        <!-- Header -->
        <header class="mb-10 pb-8 border-b border-black/[0.05]">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="text-[10px] font-mono text-accent uppercase tracking-widest">${project.period}</span>
            <span class="w-1 h-1 rounded-full bg-black/15"></span>
            <span class="text-[10px] font-mono text-muted uppercase tracking-widest">${project.type}</span>
            <span class="w-1 h-1 rounded-full bg-black/15"></span>
            <span class="text-[10px] font-mono text-muted uppercase tracking-widest">${project.category}</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-ink leading-tight mb-2">${project.title}</h2>
          ${project.tagline ? `<p class="font-mono text-xs text-accent tracking-widest mb-4">${project.tagline}</p>` : ''}
          <p class="text-lg font-medium text-muted leading-relaxed mb-5">${project.summary}</p>
          <div class="flex flex-wrap gap-2">
            ${project.tags.map(tag => `<span class="px-3 py-1 bg-bgsoft border border-black/[0.05] rounded-full text-[10px] font-bold text-ink">${tag}</span>`).join('')}
          </div>
        </header>

        <!-- 背景 -->
        <section class="mb-10">
          <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-4 flex items-center gap-3">
            <span class="w-8 h-px bg-accent/20"></span> 背景与问题
          </h4>
          <p class="text-base text-ink leading-relaxed font-medium">${project.problem}</p>
        </section>

        <!-- 工作内容 -->
        <section class="mb-2">
          <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-4 flex items-center gap-3">
            <span class="w-8 h-px bg-accent/20"></span> 工作内容
          </h4>
          <p class="text-base text-ink leading-relaxed font-medium mb-1">${project.product}</p>
          <p class="text-sm text-muted font-medium leading-relaxed">${project.engineering}</p>
        </section>

        <!-- 功能模块 -->
        ${modulesHtml}

        <!-- 产出 -->
        <section class="mt-10 pt-8 border-t border-black/[0.05]">
          <h4 class="text-[10px] font-bold tracking-[0.4em] text-accent uppercase font-mono mb-6 flex items-center gap-3">
            <span class="w-8 h-px bg-accent/20"></span> 产出与结果
          </h4>
          <div class="bg-accent/5 border border-accent/15 rounded-2xl p-6 mb-6">
            <p class="text-xl font-black text-ink tracking-tight leading-snug">${project.result}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <span class="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">我的角色</span>
              <p class="text-sm font-medium text-ink">${project.role}</p>
            </div>
            <div>
              ${actionsHtml}
            </div>
          </div>
        </section>

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
  renderFeatured();
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
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.05 },
);

function observeReveals() {
  document.querySelectorAll(".reveal, .reveal-group").forEach((item) => observer.observe(item));
}

// ---------- Persona system ----------

function renderPersonaSwitch() {
  const el = document.querySelector("#personaSwitch");
  if (!el) return;
  el.innerHTML = PERSONA_ORDER.map((id) => {
    const p = personas[id];
    const active = id === activePersona;
    return `
      <button type="button" data-persona-btn="${id}" class="persona-tab${active ? " is-active" : ""}" aria-pressed="${active}">
        <span class="persona-tab-label">${p.label}</span>
        <span class="persona-tab-en">${p.en}</span>
      </button>
    `;
  }).join("");
}

function renderHero() {
  const p = personas[activePersona];
  const badges = document.querySelector("#heroBadges");
  if (badges) {
    badges.innerHTML = p.badges
      .map((b, i) =>
        i === 0
          ? `<span class="px-3 py-1 bg-accent text-white text-[9px] font-bold tracking-widest uppercase font-mono rounded italic">${b}</span>`
          : `<span class="px-3 py-1 bg-bgsoft text-muted text-[9px] font-bold tracking-widest uppercase font-mono rounded border border-black/[0.05] italic">${b}</span>`
      )
      .join("");
  }
  const hl = document.querySelector("#heroHeadline");
  if (hl) {
    hl.innerHTML = `
      <span class="font-serif italic text-muted/50 group-hover:text-accent transition-all duration-700 inline-block tracking-wider">${p.headline[0]}</span>
      <span class="tracking-tight">${p.headline[1]}</span>
    `;
  }
  const sub = document.querySelector("#heroSub");
  if (sub) sub.innerHTML = p.sub;
}

function renderStats() {
  const el = document.querySelector("#statList");
  if (!el) return;
  el.innerHTML = personas[activePersona].stats
    .map(
      (s, i) => `
      <div class="stat-row group reveal stagger-${i + 1} ${i > 0 ? "pt-8 md:pt-10 border-t border-black/[0.06]" : ""}">
        <div class="flex items-center gap-2 mb-3">
          <span class="stat-tick block w-3 h-px bg-accent transition-all duration-500 group-hover:w-6"></span>
          <span class="text-[10px] font-black tracking-[0.28em] text-accent uppercase font-mono">${s.tag || ""}</span>
        </div>
        <strong class="block text-4xl md:text-5xl font-black text-ink mb-2 tracking-tighter tabular-nums group-hover:text-accent transition-colors duration-500">${s.n}</strong>
        <p class="text-xs font-medium text-muted leading-snug tracking-wide">${s.label}</p>
      </div>
    `
    )
    .join("");
}

function renderAbout() {
  const p = personas[activePersona];
  const title = document.querySelector("#aboutTitle");
  if (title) title.innerHTML = p.about.title;
  const intro = document.querySelector("#aboutIntro");
  if (intro) intro.innerHTML = p.about.intro.map((t) => `<p>${t}</p>`).join("");
  const grid = document.querySelector("#capabilityGrid");
  if (grid) {
    grid.innerHTML = p.capabilities
      .map(
        (c, i) => `
        <li class="capability-card group relative overflow-hidden px-5 py-4 rounded-2xl bg-white border border-black/[0.05] cursor-default transition-all duration-300 hover:border-accent/20 hover:shadow-ambient">
          <div class="flex items-center justify-between">
            <span class="text-sm font-black text-ink">${c.title}</span>
            <span class="text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">0${i + 1}</span>
          </div>
          <p class="capability-desc text-xs text-muted font-medium leading-relaxed">${c.desc}</p>
        </li>
      `
      )
      .join("");
  }
  const skills = document.querySelector("#skillMatrix");
  if (skills) {
    skills.innerHTML = p.skills
      .map(
        (s) => `
        <div class="skill-row">
          <span class="skill-key">${s.label}</span>
          <span class="skill-vals">${s.items}</span>
        </div>
      `
      )
      .join("");
  }
  bindCapabilityCards();
}

function renderThesis() {
  const p = personas[activePersona];
  const title = document.querySelector("#thesisTitle");
  if (title) title.innerHTML = p.thesisTitle;
  const el = document.querySelector("#thesisGrid");
  if (!el) return;
  el.innerHTML = p.thesis
    .map((t, i) => {
      const wide = i === 2;
      return `
        <article class="p-8 rounded-3xl shadow-ambient hover:shadow-ambient-hover transition-all duration-500 border ${
          wide ? "sm:col-span-2 bg-accent/5 border-accent/10" : "bg-white border-black/[0.02]"
        }">
          <h3 class="text-xl font-bold mb-4 ${wide ? "text-accent" : "text-ink"}">0${i + 1} / ${t.title}</h3>
          <p class="text-muted leading-relaxed font-medium ${wide ? "text-lg" : ""}">${t.body}</p>
        </article>
      `;
    })
    .join("");
}

function bindCapabilityCards() {
  document.querySelectorAll(".capability-card").forEach((card) => {
    if (card.dataset.bound === "1") return;
    const desc = card.querySelector(".capability-desc");
    if (!desc) return;
    card.dataset.bound = "1";
    desc.style.maxHeight = "0";
    desc.style.overflow = "hidden";
    desc.style.opacity = "0";
    desc.style.marginTop = "0";
    desc.style.transition =
      "max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, margin-top 0.35s ease";

    const open = () => {
      desc.style.maxHeight = desc.scrollHeight + "px";
      desc.style.opacity = "1";
      desc.style.marginTop = "0.75rem";
    };
    const close = () => {
      desc.style.maxHeight = "0";
      desc.style.opacity = "0";
      desc.style.marginTop = "0";
    };

    if (window.matchMedia("(hover: none)").matches) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        const isOpen = desc.style.maxHeight !== "0px" && desc.style.maxHeight !== "";
        isOpen ? close() : open();
      });
    } else {
      card.addEventListener("mouseenter", open);
      card.addEventListener("mouseleave", close);
    }
  });
}

function setPersona(id) {
  if (!personas[id]) return;
  activePersona = id;
  localStorage.setItem("persona", id);
  document.documentElement.dataset.persona = id;
  try {
    const url = new URL(location.href);
    url.searchParams.set("p", id);
    history.replaceState(null, "", url);
  } catch (e) {
    /* ignore (e.g. file:// deep-link) */
  }
  activeCategory = "全部";
  renderPersonaSwitch();
  renderHero();
  renderStats();
  renderAbout();
  renderThesis();
  renderTimeline();
  renderFilters();
  renderFeatured();
  renderProjects();
  observeReveals();
}

document.querySelector("#personaSwitch")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-persona-btn]");
  if (!btn) return;
  setPersona(btn.dataset.personaBtn);
});

// Initial Render
document.documentElement.dataset.persona = activePersona;
renderPersonaSwitch();
renderHero();
renderStats();
renderAbout();
renderThesis();
renderTimeline();
renderFilters();
renderFeatured();
renderProjects();
observeReveals();

// WeChat copy
function copyWechat() {
  navigator.clipboard.writeText('Bluish_Stardust').then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  });
}
