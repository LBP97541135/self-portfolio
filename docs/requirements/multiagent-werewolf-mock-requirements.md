# MultiAgent Werewolf Mock 前端需求文档

项目仓库：https://github.com/kissie-77/MultiAgent-Werewolf

本文档用于指导将 `MultiAgent-Werewolf` 改造成作品集中的无后端 Mock 产品页。目标不是复刻完整 Python 后端和 LLM 对战引擎，而是用纯前端方式展示该项目的核心产品形态、智能体博弈机制、信念矩阵、投票意向追踪、实时事件流和赛后自进化能力。

根据仓库 README，该项目定位为基于多 Agent 协作框架的狼人杀智能体博弈系统。每个 Agent 根据角色拥有独立目标、策略和行动空间，在信息隔离约束下进行推理、发言与决策。项目支持 20+ 角色系统、多层记忆、信念矩阵、投票意向追踪、Web 全栈、SSE 实时直播、结构化日志、多模型评测和 Prompt/Skill 自进化。

## 1. 项目定位

作品集中的项目名称建议：

> AI 狼人杀：多 Agent 博弈与自进化系统

一句话介绍：

> 一个用狼人杀验证多智能体推理、信念更新、投票博弈和策略自进化的实验性 AI 产品。

在作品集分类中建议归类为：

- 主分类：多智能体系统
- 辅助分类：实验性 AI 产品 / 数据分析与评估系统 / Agent 评测平台
- 项目状态：Mock 体验
- 项目角色：产品设计、核心开发、多 Agent 机制设计、前端交互设计

与其他项目的区别：

- 进化酒馆强调陪玩 Agent、剧本互动和长期记忆进化。
- 哈基 AI 强调 AI 社交关系和多 Agent 编排框架。
- AI Work Coach 强调个人学习闭环。
- AI 狼人杀强调多智能体在信息不完全场景下的推理、博弈、说服和策略演化。

## 2. Mock 前端目标

这个 Mock 前端要让访问者在 2-3 分钟内理解：

1. 这不是一个普通狼人杀游戏，而是一个多 Agent 博弈实验平台。
2. Agent 会根据角色目标、发言、行动和历史信息动态更新判断。
3. 信念矩阵能够展示每个 Agent 对其他玩家身份的判断变化。
4. 投票意向追踪能够展示发言如何影响投票选择。
5. 结构化事件流能够还原整局游戏过程。
6. 赛后复盘能够分析关键发言、阵营胜负、影响力和策略沉淀。
7. Prompt/Skill 自进化能够把有效策略沉淀到后续对局。

核心展示重点：

- 对局配置
- 实时观战
- Agent 状态
- 信念矩阵
- 投票意向
- 夜晚行动
- 白天发言
- 结构化事件流
- 赛后复盘
- 策略/Skill 自进化
- 多模型评测

## 3. 页面结构

推荐路由：

```txt
/labs/multiagent-werewolf
Mock 产品入口，默认进入对局大厅

/labs/multiagent-werewolf/lobby
对局大厅

/labs/multiagent-werewolf/live/:gameId
实时对局观战台

/labs/multiagent-werewolf/agents
Agent 状态与角色面板

/labs/multiagent-werewolf/beliefs
信念矩阵与投票意向

/labs/multiagent-werewolf/review/:gameId
赛后复盘

/labs/multiagent-werewolf/evaluation
多模型评测与自进化报告
```

如果希望交付更轻量，可以做成单页应用内导航：

```txt
对局大厅 → 实时观战 → 信念矩阵 → 投票意向 → 赛后复盘 → 自进化报告
```

## 4. 全局设计风格

该项目要避免做成普通狼人杀网页游戏，也不要做成过度黑红恐怖风。它应该像一个“多 Agent 实验室 + 观战控制台”。

建议风格：

- 深色实验台
- 局内状态高密度展示
- 卡片和矩阵有清晰层级
- 少量发光用于状态，不做大面积赛博效果
- 动效服务于事件流、阶段切换和信念变化
- 图表比装饰更重要

关键词：

```txt
多智能体观战台
信念矩阵
投票意向
结构化事件流
身份推理
策略复盘
自进化实验室
```

色彩建议：

```txt
背景：#0F1117 / #141821
面板：#1A1F2B
卡片：#202637
主文字：#F5F7FA
次级文字：#9CA3AF
边框：rgba(255,255,255,0.10)
村民阵营：#60A5FA
狼人阵营：#EF4444
神职阵营：#FACC15
中立/未知：#A78BFA
信念高置信：#22C55E
风险提示：#F97316
```

## 5. 全局导航

顶部或侧边导航建议：

```txt
AI 狼人杀
对局大厅
实时观战
Agent 状态
信念矩阵
投票意向
赛后复盘
评测报告
返回作品集
```

右上角状态：

```txt
Mock Mode
本地事件流
6P Demo
SSE Replay
```

推荐提示文案：

> 当前为作品集 Mock 模式，对局事件、Agent 发言、信念变化、投票意向和赛后复盘均由本地数据模拟。

## 6. 核心页面一：对局大厅

### 页面目标

展示系统可以配置不同规模、角色板子、模型阵容和对局模式。

### 必备模块

1. 对局模板
   - 6 人标准局
   - 9 人警徽流
   - 12 人进阶局
   - 16 人混合局
   - 自定义板子

2. 角色配置
   - 狼人
   - 村民
   - 预言家
   - 女巫
   - 猎人
   - 守卫
   - 警长
   - 其他扩展角色

3. Agent 阵容
   - 玩家座位
   - Agent 名称
   - 使用模型
   - 风格标签
   - 是否人类座位

4. 对局模式
   - 纯 Agent 局
   - 人机对战
   - 观战模式
   - 批量评测

5. 开始模拟
   - 点击后进入实时观战
   - Mock 版本加载固定事件流

### Mock 数据要求

至少准备 3 套对局模板：

- 6P DeepSeek Demo
- 9P Badge Flow
- Mixed Model Arena

```ts
type GameTemplateMock = {
  id: string
  title: string
  playerCount: number
  roles: RoleConfigMock[]
  mode: "agent_only" | "human_vs_agent" | "spectate" | "evaluation"
  description: string
  recommended: boolean
}
```

## 7. 核心页面二：实时对局观战台

### 页面目标

展示整局游戏的阶段推进、Agent 发言、系统事件、夜晚行动和白天投票。

### 页面布局

推荐三栏：

```txt
左侧：阶段时间线 / 玩家座位 / 阵营状态
中间：实时事件流 / 发言区 / 主要行动
右侧：当前 Agent 状态 / 信念变化 / 投票意向
```

### 游戏阶段

```txt
setup → night → dawn → speech → debate → vote → exile → game_over → review
准备 → 夜晚 → 天亮 → 发言 → 讨论 → 投票 → 放逐 → 结束 → 复盘
```

### 必备模块

1. 阶段时间线
   - 当前阶段高亮
   - 第几天/第几夜
   - 阶段剩余时间 mock
   - 下一阶段按钮

2. 玩家座位图
   - 座位号
   - Agent 名称
   - 存活/死亡
   - 公开身份
   - 隐藏身份仅在复盘模式显示

3. 实时事件流
   - 系统事件
   - Agent 发言
   - 夜晚行动
   - 投票事件
   - 技能触发
   - 信念更新

4. 发言卡片
   - 发言者
   - 当前阶段
   - 发言内容
   - 推理摘要
   - 指向对象
   - 影响力评分

5. 控制栏
   - 播放 / 暂停事件流
   - 快进到关键事件
   - 展示原始 JSON
   - 切换观战/复盘模式

### 必备交互

- 点击“播放事件流”
- 事件逐条出现
- 点击玩家座位查看详情
- 点击发言卡片查看影响分析
- 点击阶段条跳转到对应阶段
- 切换“公开视角 / 上帝视角”

## 8. 核心页面三：Agent 状态面板

### 页面目标

展示每个 Agent 不是普通机器人，而是有角色目标、记忆、策略和行动空间的智能体。

### 必备模块

1. Agent 卡片
   - 座位号
   - 名称
   - 模型
   - 角色
   - 阵营
   - 生存状态
   - 当前目标
   - 风格标签

2. 记忆摘要
   - 工作记忆
   - 情景记忆
   - 语义记忆
   - 程序记忆

3. 当前推理
   - 最怀疑对象
   - 最信任对象
   - 自身风险感知
   - 下一步计划

4. 行动空间
   - 发言
   - 投票
   - 查验
   - 毒杀
   - 救人
   - 自爆
   - 竞选警长

### Mock 数据结构

```ts
type WerewolfAgentMock = {
  id: string
  seat: number
  name: string
  model: string
  role: string
  camp: "wolves" | "villagers" | "gods"
  alive: boolean
  publicStatus: string
  hiddenGoal: string
  styleTags: string[]
  memories: {
    working: string[]
    episodic: string[]
    semantic: string[]
    procedural: string[]
  }
  reasoning: {
    suspect: number
    trust: number
    riskLevel: number
    nextPlan: string
  }
}
```

## 9. 核心页面四：信念矩阵

### 页面目标

这是项目最重要的展示点之一。要让访问者看见每个 Agent 如何判断其他玩家身份，以及判断如何随事件变化。

### 必备模块

1. 一阶信念矩阵
   - 行：观察者 Agent
   - 列：被判断玩家
   - 单元格：身份概率或阵营概率
   - 颜色表达置信度

2. 二阶信念视图
   - “A 认为 B 怎么看 C”
   - 可以用详情抽屉展示，不必全量矩阵铺开

3. 信念变化时间线
   - 关键事件前后对比
   - 某次发言导致的置信度变化
   - 某次投票导致的阵营判断变化

4. 信号检测
   - 异常发言
   - 投票跳变
   - 过度跟票
   - 身份暴露风险

### 必备交互

- 切换第 N 天 / 第 N 夜
- 切换观察者 Agent
- 点击矩阵单元格查看判断依据
- 点击“前后对比”查看信念变化
- 切换身份概率 / 阵营概率

### Mock 数据结构

```ts
type BeliefMatrixMock = {
  tick: number
  phase: string
  observerSeat: number
  targetSeat: number
  probabilities: {
    werewolf: number
    villager: number
    seer: number
    witch: number
    hunter: number
  }
  confidence: number
  evidence: string[]
  deltaFromPrevious: number
}
```

## 10. 核心页面五：投票意向追踪

### 页面目标

展示发言如何改变投票意向，让“说服”变成可视化数据。

### 必备模块

1. 当前投票意向
   - 每个 Agent 当前倾向投谁
   - 置信度
   - 理由

2. 意向变化 Sankey / 流向图
   - 发言前
   - 发言后
   - 投票前最终状态

3. 说服分析
   - 哪个发言影响最大
   - 哪个 Agent 最容易被说服
   - 哪个玩家制造了最大阵营收益

4. 投票结果
   - 实际投票
   - 意向与实际是否一致
   - 放逐结果

### 必备交互

- 选择第几轮投票
- 选择某个发言查看影响
- 点击 Agent 查看其意向变化原因
- 切换“按玩家”或“按阵营”视图

### Mock 数据结构

```ts
type VoteIntentMock = {
  day: number
  beforeSpeech: Record<number, number>
  afterSpeech: Record<number, number>
  finalVote: Record<number, number>
  reasons: Record<number, string>
  influenceScores: {
    speakerSeat: number
    affectedSeats: number[]
    score: number
    summary: string
  }[]
}
```

## 11. 核心页面六：赛后复盘

### 页面目标

将整局对战从“事件记录”提升为“可解释的多 Agent 实验报告”。

### 必备模块

1. 对局结果
   - 胜利阵营
   - 存活玩家
   - 真正身份
   - MVP
   - 关键转折

2. 时间线复盘
   - 夜晚关键行动
   - 白天关键发言
   - 投票转折
   - 身份暴露点
   - 误判来源

3. Agent 表现评分
   - 推理准确度
   - 说服力
   - 隐藏身份能力
   - 阵营贡献
   - 决策稳定性

4. 关键发言分析
   - 发言内容
   - 影响了谁
   - 改变了哪些信念
   - 改变了哪些投票意向

5. JSONL 事件查看
   - 展示结构化事件
   - 支持按类型筛选
   - 支持复制事件

## 12. 核心页面七：自进化报告

### 页面目标

展示该项目的长期价值：不是只跑一局，而是从对局中沉淀 Prompt/Skill 策略。

### 必备模块

1. 策略沉淀
   - 新增 Skill
   - 更新 Prompt
   - 强化某身份策略
   - 记录失败经验

2. A/B 实验
   - baseline
   - evolved prompt
   - win rate
   - wolf benefit
   - MVP rate

3. 角色策略库
   - 狼人发言技巧
   - 预言家报验策略
   - 女巫用药策略
   - 村民站边策略

4. 下一局推荐
   - 哪些 Agent 应该使用新策略
   - 哪些角色需要继续训练
   - 哪些 Prompt 需要降权

### Mock 数据结构

```ts
type EvolutionReportMock = {
  gameId: string
  extractedSkills: {
    id: string
    role: string
    title: string
    trigger: string
    content: string
    sourceEventId: string
  }[]
  experiments: {
    name: string
    baseline: number
    evolved: number
    lift: number
    metric: string
  }[]
  nextRecommendations: string[]
}
```

## 13. 多模型评测页面

### 页面目标

展示该项目可以作为 Agent 评测平台，而不仅是单局游戏。

### 必备模块

1. 模型阵容
   - 模型名
   - 服务商
   - 座位
   - 角色

2. 评测指标
   - 胜率
   - 平均存活轮次
   - 推理准确率
   - 投票命中率
   - 发言影响力
   - token 成本

3. 批量对局
   - 运行局数
   - 并发数
   - 失败率
   - 平均耗时

4. 模型对比
   - 表格
   - 雷达图
   - 趋势图

## 14. 本地 Mock 数据组织

推荐目录：

```txt
src/labs/multiagent-werewolf/
  MultiAgentWerewolfLab.tsx
  mockData.ts
  types.ts
  components/
    LabShell.tsx
    GameLobby.tsx
    GameTemplateSelector.tsx
    LiveSpectator.tsx
    PhaseTimeline.tsx
    SeatMap.tsx
    EventStream.tsx
    SpeechCard.tsx
    AgentStatePanel.tsx
    BeliefMatrix.tsx
    VoteIntentTracker.tsx
    ReviewReport.tsx
    EvolutionReport.tsx
    ModelEvaluation.tsx
```

如果使用作品集双页框架：

```txt
/projects/multiagent-werewolf
项目介绍页

/labs/multiagent-werewolf
Mock 产品页
```

## 15. 必须可交互流程

后续智能体实现时，至少需要做通这些交互：

1. 进入对局大厅
2. 选择 6P Demo 对局模板
3. 查看角色和 Agent 阵容
4. 点击开始模拟
5. 进入实时观战台
6. 播放事件流
7. 切换阶段时间线
8. 点击某个玩家查看 Agent 状态
9. 切换公开视角 / 上帝视角
10. 打开信念矩阵
11. 点击矩阵单元格查看判断依据
12. 查看某次发言前后的信念变化
13. 打开投票意向追踪
14. 查看发言如何影响投票意向
15. 进入赛后复盘
16. 查看胜负结果、MVP 和关键转折
17. 查看自进化报告
18. 查看新增 Skill 或 Prompt 更新
19. 打开多模型评测页
20. 查看模型对比和批量评测指标

## 16. 作品集介绍页建议

项目介绍页标题：

> AI 狼人杀：多 Agent 博弈与自进化系统

项目一句话：

> 一个通过狼人杀游戏验证多智能体在信息不完全环境下推理、说服、投票和策略演化能力的实验系统。

介绍页结构：

```txt
1. 项目背景
普通 Agent Demo 往往只能展示单轮问答，难以验证长期推理、信息隔离、角色目标和策略演化。

2. 产品机会
狼人杀天然包含不完全信息、阵营博弈、发言说服、身份隐藏和投票决策，适合检验多 Agent 能力。

3. 核心方案
GameEngine + Agent 执行底座 + 多层记忆 + 信念矩阵 + 投票意向追踪 + 结构化日志 + 赛后复盘。

4. 我的贡献
博弈模块设计、信念矩阵机制、投票意向追踪、自进化策略沉淀、观战与复盘体验设计。

5. 工程亮点
20+ 角色系统、多层记忆、SSE 实时直播、JSONL 事件流、fleet 并行多局、多模型评测、Prompt/Skill 自进化。

6. Mock 体验入口
进入 AI 狼人杀 Mock 产品页。
```

核心表达：

> 这个项目不是让 Agent 轮流发言，而是让每一次发言都影响判断、投票和后续策略沉淀。

## 17. 验收标准

Mock 前端完成后，需要满足：

- 无后端即可运行
- 不依赖真实 API Key
- 对局大厅到赛后复盘的核心路径可完整走通
- 至少包含 1 条完整 6P 对局事件流
- 至少包含 6 个 Agent、6 个角色、3 个阶段、20 条事件
- 信念矩阵可交互查看判断依据
- 投票意向追踪可展示前后变化
- 赛后复盘可展示关键发言和 MVP
- 自进化报告可展示新增 Skill 或 Prompt 更新
- 多模型评测页可展示 mock 指标
- 桌面端体验完整
- 移动端至少能浏览对局大厅、事件流和复盘
- 视觉风格像多 Agent 实验台，不像普通狼人杀小游戏

## 18. 实现优先级

### P0 必须完成

- 对局大厅
- 实时观战台
- 阶段时间线
- 玩家座位图
- 事件流
- Agent 状态面板
- 信念矩阵
- 投票意向追踪
- 基础 mock 数据

### P1 建议完成

- 赛后复盘
- 关键发言分析
- 上帝视角切换
- JSONL 事件查看
- 自进化报告
- 多模型评测

### P2 可以后续增强

- 更复杂的矩阵动画
- Sankey 投票流向图
- 音效和 BGM
- 多局批量对比
- 自定义板子
- 人类玩家输入模拟

