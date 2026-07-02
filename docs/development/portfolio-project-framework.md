# 个人作品集项目管理框架

本文档用于指导后续作品集项目搭建。目标不是把作品集做成简单的项目列表，而是设计成一个可持续扩展的项目系统：每个项目既能讲清楚产品思考，也能提供一个纯前端 Mock 产品体验。

## 1. 核心定位

作品集整体围绕这句话展开：

> 产品里最懂开发，开发里最懂产品。

对应到网站结构：

- 首页：建立个人气质和核心定位
- 项目介绍页：证明产品思考和系统设计能力
- Mock 产品页：证明工程交付和前端表达能力

最终目标是让访问者看到三件事：

- 我是谁
- 我怎么思考一个项目
- 我能把它做成什么样

## 2. 整体信息架构

建议采用以下路由结构：

```txt
/
首页：个人定位、精选项目、方法论、经历

/projects
项目总览：所有项目的筛选、分类、搜索、状态

/projects/:id
项目介绍页：案例研究，讲清楚为什么做、怎么做、结果如何

/labs/:id
项目 Mock 前端：纯前端可交互体验，模拟真实产品功能

/about
可选：更完整的个人经历、技能、荣誉
```

以 AI 狼人杀为例：

```txt
/projects/multiagent-werewolf
/labs/multiagent-werewolf
```

## 3. 项目分类体系

不要按短期技术名词分类，例如 MCP、Skill、Dify、LangChain。它们适合作为标签，不适合作为主分类。

推荐按产品形态和问题类型分类：

- 多智能体系统
- AI 工作流产品
- 行业解决方案
- 智能办公与组织协作
- 知识与检索系统
- 数据分析与评估系统
- 开发者工具
- 实验性 AI 产品

每个项目采用：

- 一个主分类
- 多个能力标签
- 一个成熟度状态

项目状态建议：

- 真实上线
- 比赛获奖
- 完整 Demo
- Mock 体验
- 规划中

## 4. 统一项目数据模型

所有项目都应该注册到统一配置中，避免页面越做越散。

推荐 TypeScript 数据结构：

```ts
type PortfolioProject = {
  id: string
  title: string
  subtitle: string
  category: string
  tags: string[]
  status: "真实上线" | "比赛获奖" | "完整 Demo" | "Mock 体验" | "规划中"
  year: string
  role: string[]

  summary: string
  problem: string
  solution: string
  contribution: string[]
  results: string[]
  reflection?: string

  introPath: string
  labPath: string

  cover?: string
  repo?: string
  demo?: string
}
```

AI 狼人杀示例：

```ts
{
  id: "multiagent-werewolf",
  title: "AI 狼人杀",
  subtitle: "多智能体博弈与自进化实验系统",
  category: "多智能体系统",
  tags: ["博弈推理", "信念矩阵", "投票意向", "赛后复盘"],
  status: "Mock 体验",
  year: "2026",
  role: ["产品设计", "核心开发", "交互设计"],

  summary: "通过狼人杀游戏验证多智能体推理、博弈协作和策略沉淀。",
  problem: "普通智能体演示缺少持续思考、身份判断和策略变化。",
  solution: "将对局拆成发言、信念更新、投票意向、行动选择和赛后复盘。",
  contribution: [
    "设计信念矩阵机制",
    "实现投票意向追踪",
    "设计自进化策略沉淀流程"
  ],
  results: [
    "支持多角色多轮对局",
    "每轮发言影响身份判断",
    "赛后可复盘关键决策链路"
  ],

  introPath: "/projects/multiagent-werewolf",
  labPath: "/labs/multiagent-werewolf",
  repo: "https://github.com/kissie-77/MultiAgent-Werewolf"
}
```

## 5. 项目介绍页模板

每个项目介绍页保持统一结构，形成专业感和可维护性。

```txt
1. Hero
项目名、一句话定位、角色、年份、分类、进入 Mock 按钮

2. Overview
项目背景、目标用户、核心问题

3. Product Thinking
我是怎么拆解业务、用户、流程的

4. Solution
产品方案、核心流程、关键模块

5. System Design
系统架构、数据流、Agent/工具/状态如何协作

6. My Contribution
我的具体贡献，避免写成团队成果

7. Result
数据、效果、奖项、用户反馈

8. Reflection
做完之后的反思和下一版优化方向
```

项目介绍页的目标不是堆功能，而是回答：

- 为什么这个项目值得做？
- 我如何定义问题？
- 我如何设计方案？
- 我具体做了什么？
- 最终产生了什么结果？

## 6. Mock 产品页模板

每个 Mock 产品页都应该像一个可用产品，而不是截图或静态介绍。

统一页面结构：

```txt
/labs/:id

顶部：项目名、模式、返回介绍页
左侧：功能导航 / 场景切换
中间：主要交互区
右侧：状态面板 / 数据面板 / 日志面板
底部或弹窗：关键解释、复盘、详情
```

Mock 产品页设计原则：

- 不接真实后端
- 所有数据来自本地 mockData
- 交互要完整，不能只是展示
- 关键流程必须可走通
- 页面要像产品，而不是技术 demo

## 7. AI 狼人杀 Mock 页设计

AI 狼人杀不应该做成普通聊天室，而应该做成一个多智能体观战和复盘系统。

推荐模块：

```txt
1. 对局大厅
选择人数、角色板子、模型阵容、开始模拟

2. 实时对局
白天/夜晚阶段、玩家发言、系统事件、当前行动

3. Agent 面板
每个玩家的公开信息、隐藏目标、当前怀疑对象

4. 信念矩阵
展示每个 Agent 对其他玩家身份的判断变化

5. 投票意向
展示每轮发言前后，投票对象如何变化

6. 赛后复盘
胜负结果、关键发言、影响力最高玩家、策略沉淀
```

狼人杀介绍页的核心表达：

> 不是让 Agent 说话，而是让每一次发言影响判断、投票和策略沉淀。

## 8. 推荐目录结构

如果使用 React/Vite，推荐如下：

```txt
src/
  app/
    routes.tsx

  data/
    projects.ts
    categories.ts

  pages/
    HomePage.tsx
    ProjectIndexPage.tsx
    ProjectDetailPage.tsx

  labs/
    multiagent-werewolf/
      WerewolfLab.tsx
      mockData.ts
      components/
        GameLobby.tsx
        GameTimeline.tsx
        AgentPanel.tsx
        BeliefMatrix.tsx
        VoteTracker.tsx
        ReviewPanel.tsx

    merchant-ticket-agent/
      MerchantTicketLab.tsx
      mockData.ts
      components/

  components/
    layout/
    project/
    ui/

  styles/
    tokens.css
    globals.css
```

核心原则：

- 项目元信息放在 `src/data/projects.ts`
- 每个项目的 Mock 体验放在 `src/labs/:projectId/`
- 公共视觉组件放在 `src/components/`
- 每个项目内部维护自己的 mock 数据和子组件

## 9. 项目总览页能力

后续项目数量变多后，项目总览页需要支持筛选和管理感。

建议筛选维度：

- 分类
- 年份
- 项目状态
- 我的角色
- 项目成熟度
- 关键词标签

角色筛选建议：

- 产品设计
- 前端开发
- 后端开发
- Agent 开发
- FDE
- 方案设计

成熟度筛选建议：

- 真实上线
- 比赛获奖
- 完整 Demo
- Mock 体验
- 规划中

## 10. 项目接入流程

每新增一个项目，按照以下流程接入：

```txt
1. 在 projects.ts 中注册项目元信息
2. 创建 /projects/:id 的介绍页内容
3. 创建 /labs/:id 的 Mock 产品页
4. 编写该项目的 mockData
5. 将项目加入首页精选或项目总览
6. 检查桌面端和移动端体验
```

每个项目都必须回答两个问题：

- 项目介绍页：这个项目为什么重要？
- Mock 产品页：这个项目如果真的交付，会是什么体验？

## 11. 设计原则

整体视觉保持克制、高级、有留白。

建议风格：

- 信息密度高，但不拥挤
- 交互明确，但不花哨
- 动效轻量，服务于状态变化
- 技术名词不抢主叙事
- 强调产品思考和交付结果

避免：

- 大面积 AI 渐变
- 过多发光效果
- 只展示技术栈，不讲问题
- 每个项目视觉风格完全不一致
- Mock 页只有静态截图，没有可操作流程

## 12. 最终目标

整个作品集应形成三层表达：

```txt
首页：我是谁
项目介绍页：我怎么思考
Mock 产品页：我能做出来
```

这套框架服务于最终个人定位：

> Agent Product Engineer / FDE  
> 产品里最懂开发，开发里最懂产品。

