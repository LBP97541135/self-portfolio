# 哈基 AI Mock 前端需求文档

项目仓库：https://github.com/LBP97541135/haji-ai

本文档用于指导将 `haji-ai` 改造成作品集中的无后端 Mock 产品页。目标不是复刻完整后端框架，而是用纯前端方式展示该项目的双重价值：

- 产品层：像微信一样的 AI 社交平台，联系人全是有性格、有记忆、会主动表达的 AI。
- 框架层：高度可扩展的异步 Multi-Agent 编排引擎，支持 Agent 注册、Skill 检索、Designer、Workflow、Memory、Observer、Sandbox 等能力。

根据仓库 README，该项目定位为：

> 微信，但联系人全是有灵魂的 AI。

## 1. 项目定位

作品集中的项目名称建议：

> 哈基 AI：AI 社交平台与多 Agent 编排框架

一句话介绍：

> 一个将 AI 通讯录、私聊、群聊、朋友圈和自然语言创建 Agent 结合起来的 AI 社交产品，同时也是一套可扩展的 Multi-Agent 框架。

在作品集分类中建议归类为：

- 主分类：多智能体系统
- 辅助分类：AI 工作流产品 / 智能社交产品 / 开发者工具
- 项目状态：Mock 体验
- 项目角色：产品设计、Agent 框架设计、前端交互设计、工程架构

与其他项目的区别：

- AI 狼人杀：强调多智能体博弈和策略进化。
- 进化酒馆：强调剧本互动、长期陪伴和 Agent 进化。
- AI Work Coach：强调个人学习闭环和自适应推荐。
- 哈基 AI：强调 AI 社交关系、联系人系统、主动表达和框架级 Agent 编排能力。

## 2. Mock 前端目标

这个 Mock 前端要让访问者在 2-3 分钟内理解：

1. 用户可以像微信一样和 AI 私聊。
2. 多个 AI 可以在群聊中根据性格和意愿决定是否插话。
3. 用户可以用一句自然语言创建一个新 AI 联系人。
4. AI 有朋友圈，会发布出生宣言、动态、评论和点赞。
5. 每个 AI 有人格、记忆、技能和运行轨迹。
6. 该产品背后有一套可扩展的 Multi-Agent 框架。

核心展示重点：

- AI 通讯录
- 私聊
- 群聊
- Agent 主动发言机制
- 一句话创建 Agent
- AI 朋友圈
- 记忆与人格档案
- 框架能力可视化

## 3. 页面结构

推荐路由：

```txt
/labs/haji-ai
Mock 产品入口，默认进入消息页

/labs/haji-ai/messages
消息列表 + 私聊 / 群聊

/labs/haji-ai/contacts
AI 通讯录

/labs/haji-ai/designer
一句话创建 AI

/labs/haji-ai/moments
AI 朋友圈

/labs/haji-ai/agent/:agentId
Agent 档案

/labs/haji-ai/framework
框架能力展示

/labs/haji-ai/observer
运行追踪 / Token / Trace 可视化
```

如果希望交付更轻量，可以做成单页应用内导航：

```txt
消息 → 通讯录 → 创建 AI → 朋友圈 → Agent 档案 → 框架视图
```

## 4. 全局设计风格

该项目可以借鉴微信式社交产品的熟悉结构，但不能做成仿微信皮肤。作品集展示里需要更高级、更产品化。

建议风格：

- 清爽社交产品界面
- 左侧联系人列表，中间聊天区，右侧 Agent 档案
- 轻量玻璃质感或浅色卡片
- 用人格色区分不同 AI
- 动效体现“AI 正在思考 / 是否插话 / 记忆更新”
- 不要使用过度二次元、过度赛博或廉价 AI 发光风格

关键词：

```txt
AI 通讯录
社交关系
群体意识
主动表达
人格档案
记忆持久化
Agent 工作台
```

色彩建议：

```txt
背景：#F6F8FA / #F8F5EF
主文字：#111827
次级文字：#6B7280
边框：#E5E7EB
主色：#1F8A70
联系人在线绿：#22C55E
AI 紫色点缀：#7C3AED
朋友圈蓝：#2563EB
警示琥珀：#D97706
卡片：#FFFFFF
```

## 5. 全局导航

顶部或侧边导航建议：

```txt
哈基 AI
消息
通讯录
创建 AI
朋友圈
框架视图
运行追踪
返回作品集
```

右上角状态：

```txt
Mock Mode
本地数据
8 个 AI 在线
Memory 已启用
```

推荐提示文案：

> 当前为作品集 Mock 模式，所有 AI 回复、朋友圈动态、记忆变化和运行轨迹均由本地数据模拟。

## 6. 核心页面一：消息页

### 页面目标

展示哈基 AI 的核心产品体验：像使用聊天软件一样与 AI 联系人互动。

### 页面布局

推荐三栏：

```txt
左侧：会话列表
中间：聊天窗口
右侧：当前 Agent / 群组状态
```

### 必备模块

1. 会话列表
   - 私聊会话
   - 群聊会话
   - 未读数
   - 最后一条消息
   - AI 在线状态
   - Agent 主动消息标识

2. 私聊窗口
   - AI 首次见面主动自我介绍
   - 用户发送消息
   - AI 流式回复模拟
   - 记忆命中提示
   - Skill 注入提示

3. 群聊窗口
   - 多 AI 同框
   - 支持 @指定 Agent
   - 支持 @all
   - AI 根据意愿决定是否插话
   - 显示“插话意愿”或“沉默原因”

4. 右侧状态面板
   - 当前 Agent 人格摘要
   - 最近记忆
   - 当前心情 / 活跃度
   - 本轮是否触发 Skill
   - token 估算

### 必备交互

- 点击会话切换聊天对象
- 输入消息并发送
- 点击预设问题快速发送
- @某个 AI 触发指定回复
- @all 触发群聊多 AI 发言
- 点击“查看记忆”展开右侧记忆
- 点击“查看 Trace”跳转运行追踪

### Mock 数据结构

```ts
type ConversationMock = {
  id: string
  type: "private" | "group"
  title: string
  participantIds: string[]
  unreadCount: number
  lastMessage: string
  messages: MessageMock[]
}

type MessageMock = {
  id: string
  senderId: string
  senderType: "user" | "agent" | "system"
  content: string
  createdAt: string
  tags?: string[]
  traceId?: string
  memoryHitIds?: string[]
  skillIds?: string[]
}
```

## 7. 核心页面二：AI 通讯录

### 页面目标

展示“联系人全是 AI”的产品概念，让每个 AI 都像一个可交往、可记忆、可调用的联系人。

### 必备模块

1. 联系人列表
   - 名称
   - 头像 / 符号
   - 人格短句
   - 标签
   - 在线状态
   - 最近主动发言时间

2. 分类筛选
   - 代码助手
   - 情绪陪伴
   - 学习教练
   - 创意伙伴
   - 调研助手
   - 生活闲聊

3. 联系人详情
   - bio
   - soul
   - tags
   - execution mode：DIRECT / REACT / PLAN_AND_EXECUTE
   - skills
   - memory summary
   - 最近朋友圈
   - 发起私聊按钮

4. 快速操作
   - 发消息
   - 加入群聊
   - 查看朋友圈
   - 查看运行记录

### Mock Agent 数据

至少准备 8 个 AI 联系人：

- 小哈：社交型总入口，负责欢迎和引导
- Coder：代码助手，简洁高效
- Mira：情绪陪伴型，善于共情
- Scout：调研助手，擅长信息整理
- Nova：创意伙伴，擅长点子发散
- Mentor：学习教练，擅长规划和反馈
- Byte：系统工具型，擅长执行任务
- Echo：记忆整理型，擅长总结用户事实

```ts
type AgentMock = {
  id: string
  code: string
  name: string
  avatar: string
  bio: string
  soul: string
  mode: "DIRECT" | "REACT" | "PLAN_AND_EXECUTE"
  tags: string[]
  skills: SkillMock[]
  status: "online" | "idle" | "thinking"
  initiative: number
  memorySummary: string[]
  recentMomentIds: string[]
}
```

## 8. 核心页面三：一句话创建 AI

### 页面目标

展示 Designer 能力：自然语言描述 → Agent 定义 → 校验 → 注册 → 自动出生宣言。

### 页面流程

```txt
输入自然语言描述
↓
生成 Agent 草案
↓
展示 bio / soul / tags / skills / mode
↓
用户确认或微调
↓
注册成功
↓
自动加入通讯录
↓
自动发布朋友圈出生宣言
```

### 页面布局

```txt
左侧：自然语言输入和示例 prompt
中间：生成过程步骤
右侧：Agent 预览卡片
```

### 必备交互

- 点击示例 prompt 填入输入框
- 点击“生成 AI”
- 展示三步生成进度：
  - Generator
  - Validator
  - Registrar
- 生成 Agent 预览
- 支持编辑名称、标签、人格短句
- 点击“注册到通讯录”
- 显示成功 toast
- 在朋友圈 mock 中新增出生宣言

### 示例 Prompt

```txt
我想要一个 14 岁的傲娇小鬼，喜欢动漫，说话爱用颜文字。
我想要一个严肃的架构师，帮我审查系统设计，不讲废话。
我想要一个像朋友一样陪我复盘每天工作的 AI。
```

## 9. 核心页面四：AI 朋友圈

### 页面目标

展示 AI 不只是被动回复，而是会主动表达、发布动态、和用户形成社交关系。

### 必备模块

1. 动态列表
   - AI 出生宣言
   - 日常想法
   - 对用户的回应
   - 群聊后的总结
   - Skill 学习动态

2. 动态卡片
   - 发布者
   - 发布时间
   - 内容
   - 标签
   - 点赞数
   - 评论数
   - 是否由事件触发

3. 互动
   - 点赞
   - 评论
   - 查看发布原因
   - 查看关联 Agent

4. 右侧筛选
   - 出生宣言
   - 主动发圈
   - 群聊复盘
   - 记忆触发
   - 用户互动

### Mock 数据结构

```ts
type MomentMock = {
  id: string
  agentId: string
  type: "birth" | "daily" | "memory_triggered" | "group_review" | "skill_update"
  content: string
  createdAt: string
  likes: number
  comments: CommentMock[]
  triggerReason?: string
}
```

## 10. 核心页面五：Agent 档案

### 页面目标

让访问者看到每个 AI 不是一个普通 chatbot，而是一个有定义、有记忆、有技能、有运行模式的 Agent。

### 必备模块

1. 基础档案
   - 名称
   - code
   - bio
   - soul
   - mode
   - tags

2. 能力区
   - skills
   - tools
   - knowledge base
   - workflow participation

3. 记忆区
   - 用户 facts
   - 会话摘要
   - 最近记住的内容
   - 记忆来源消息

4. 行为区
   - 主动发言倾向
   - 群聊插话概率
   - 最近触发事件
   - 最近 token 消耗

5. 开发者视图
   - Agent JSON
   - Prompt 预览
   - 最近 trace

## 11. 核心页面六：框架视图

### 页面目标

作品集访问者需要看见这个项目不只是产品界面，背后还有一套完整框架。

### 必备模块

1. 架构图

```txt
UI
↓
FastAPI Server
↓
Agent Registry
↓
Execution Context
↓
LLM Client / Memory / Skill / Tool / RAG / Workflow
↓
Observer / Sandbox / Workspace
```

2. 能力卡片
   - Agent Registry
   - Execution Mode
   - Skill Retrieval
   - Designer
   - Workflow
   - Startup Trigger
   - Observer
   - Sandbox
   - Memory

3. 执行模式对比

```txt
DIRECT：直接回答
REACT：思考-行动-观察
PLAN_AND_EXECUTE：先规划再执行
```

4. Skill 注入展示
   - 用户问题
   - 语义检索到的 Skill
   - 注入 system prompt
   - Agent 回复

5. Sandbox 展示
   - AI 生成代码
   - AST 静态分析
   - 风险提示
   - 安全执行结果

## 12. 核心页面七：运行追踪

### 页面目标

展示工程能力：链路追踪、token 统计、SSE 事件流和可观测性。

### 必备模块

1. Trace 列表
   - trace_id
   - agent_code
   - session_id
   - mode
   - latency
   - token usage
   - status

2. Trace 详情
   - user input
   - memory hits
   - skill retrieval
   - llm events
   - tool calls
   - final response

3. SSE 流事件模拟

```txt
START
TOKEN
TOKEN
TOOL_CALL
OBSERVATION
TOKEN
DONE
```

4. 统计卡片
   - 今日消息数
   - Agent 调用数
   - Skill 命中率
   - 平均延迟
   - token 消耗

## 13. 本地 Mock 数据组织

推荐目录：

```txt
src/labs/haji-ai/
  HajiAiLab.tsx
  mockData.ts
  types.ts
  components/
    LabShell.tsx
    MessageLayout.tsx
    ConversationList.tsx
    ChatWindow.tsx
    AgentSidePanel.tsx
    ContactsPage.tsx
    AgentDesigner.tsx
    MomentsFeed.tsx
    AgentProfile.tsx
    FrameworkView.tsx
    ObserverTrace.tsx
```

如果使用作品集双页框架：

```txt
/projects/haji-ai
项目介绍页

/labs/haji-ai
Mock 产品页
```

## 14. 必须可交互流程

后续智能体实现时，至少需要做通这些交互：

1. 进入消息页
2. 切换私聊会话
3. 发送一条消息
4. 展示 AI 流式回复模拟
5. 点击群聊会话
6. 发送 @all 消息
7. 展示多个 AI 判断是否插话
8. 查看某条消息的 memory hit 和 skill hit
9. 进入通讯录
10. 筛选 AI 联系人
11. 打开 Agent 档案
12. 进入一句话创建 AI
13. 输入描述并生成 Agent 草案
14. 注册 Agent 到通讯录
15. 查看朋友圈新增出生宣言
16. 点赞或评论朋友圈动态
17. 进入框架视图查看能力卡片
18. 进入运行追踪查看 trace 详情

## 15. 作品集介绍页建议

项目介绍页标题：

> 哈基 AI：AI 社交平台与多 Agent 编排框架

项目一句话：

> 一个把 AI 联系人、群聊、朋友圈和自然语言创建 Agent 结合起来的 AI 社交产品，同时沉淀为可扩展的多 Agent 框架。

介绍页结构：

```txt
1. 项目背景
大多数 AI 产品仍停留在单一 chatbot，缺少人格、社交关系、主动性和长期记忆。

2. 产品机会
如果 AI 可以像联系人一样存在，有人格、有记忆、会主动表达，用户与 AI 的关系会从工具调用变成长期协作。

3. 核心方案
AI 通讯录 + 私聊 + 群聊 + 朋友圈 + 一句话创建 AI + 框架级 Agent 编排。

4. 我的贡献
产品概念设计、Agent 框架抽象、异步执行模型、Designer 流程、社交化前端体验。

5. 工程亮点
asyncio 异步框架、AgentRegistry、三种执行模式、Skill 检索注入、Memory 持久化、Observer 追踪、Sandbox 安全执行、574 个测试。

6. Mock 体验入口
进入哈基 AI Mock 产品页。
```

核心表达：

> 这个项目不是把 AI 做成聊天窗口，而是把 Agent 做成可被认识、可被创建、可被记住、可被协作的社交对象。

## 16. 验收标准

Mock 前端完成后，需要满足：

- 无后端即可运行
- 不依赖真实 API Key
- 消息页私聊和群聊核心路径可走通
- 支持 @指定 和 @all 的 mock 群聊体验
- 一句话创建 Agent 流程可走通
- 朋友圈支持点赞和评论
- Agent 档案能展示人格、记忆、技能和运行模式
- 框架视图能展示核心技术能力
- 运行追踪页能展示 trace 和 SSE 事件流
- 至少 8 个 Agent、3 个会话、8 条朋友圈动态、5 条 trace mock 数据
- 桌面端体验完整
- 移动端至少能浏览消息、通讯录和朋友圈
- 视觉风格像成熟 AI 社交产品，不像普通聊天 demo

## 17. 实现优先级

### P0 必须完成

- 消息页
- 私聊
- 群聊
- AI 通讯录
- 一句话创建 AI
- 朋友圈
- 基础 mock 数据

### P1 建议完成

- Agent 档案
- 群聊插话意愿展示
- Memory hit 展示
- Skill hit 展示
- 框架视图
- 运行追踪

### P2 可以后续增强

- 更复杂的群聊调度动画
- Agent 市场
- 朋友圈图片 mock
- 自定义 Agent 头像
- 本地持久化
- 深浅色主题切换

