# AI Work Coach Mock 前端需求文档

项目仓库：https://github.com/LBP97541135/ai-work-coach

本文档用于指导将 `ai-work-coach` 改造成作品集中的无后端 Mock 产品页。目标不是复刻完整后端，而是用纯前端方式展示该项目的产品闭环、自适应学习逻辑、画像更新机制和个人成长产品设计能力。

参考仓库中的 `PROJECT_REPORT.md`，该项目定位为面向个人使用的自适应职业学习 Agent，核心闭环为：

```txt
每日训练生成 → 用户作答 → AI 批改 → 画像更新 → 自适应内容推荐
```

聚焦方向：

- AI Agent 技术
- 软件架构与工程知识
- 产品经理能力

## 1. 项目定位

作品集中的项目名称建议：

> AI Work Coach：自适应职业学习 Agent

一句话介绍：

> 一个面向个人成长的 AI 学习教练，通过每日训练、智能批改和学习画像更新，帮助用户持续提升 Agent、工程和产品能力。

在作品集分类中建议归类为：

- 主分类：AI 工作流产品
- 辅助分类：智能办公与组织协作 / 个人成长工具 / 数据分析与评估系统
- 项目状态：Mock 体验
- 项目角色：产品设计、前端开发、Agent 系统设计、学习流程设计

与其他项目的区别：

- AI 狼人杀强调多智能体博弈。
- 进化酒馆强调陪伴式 Agent 和互动叙事。
- AI Work Coach 强调个人成长闭环、学习画像、自适应内容推荐和长期行为数据。

## 2. Mock 前端目标

这个 Mock 前端要让访问者在 2-3 分钟内理解：

1. 用户每天如何获得一份定制训练
2. 用户如何完成不同题型的作答
3. AI 如何批改并给出结构化反馈
4. 系统如何更新学习画像
5. 下一次训练如何基于画像自适应生成
6. 这个项目如何体现产品思维和工程稳定性

核心展示重点：

- 今日训练工作流
- 多题型作答体验
- AI 批改报告
- 学习画像可视化
- 自适应推荐逻辑
- 历史训练和趋势分析
- 设置与内容偏好控制

## 3. 页面结构

推荐路由：

```txt
/labs/ai-work-coach
Mock 产品入口，默认进入今日训练

/labs/ai-work-coach/today
今日训练

/labs/ai-work-coach/profile
学习画像

/labs/ai-work-coach/history
训练历史

/labs/ai-work-coach/insights
成长洞察

/labs/ai-work-coach/settings
训练设置
```

如果希望交付更轻量，可以做成单页应用内导航：

```txt
今日训练 → 批改报告 → 学习画像 → 历史记录 → 设置
```

## 4. 全局设计风格

该项目应采用克制、清爽、偏生产力工具的视觉风格。不要做成 AI 炫技页，也不要像在线考试系统。

建议风格：

- 类 Linear / Notion / Height 的冷静效率工具感
- 浅色背景，少量高亮色
- 强信息层级，清楚的状态变化
- 卡片少而精准，不要堆满仪表盘
- 动效用于反馈流程推进，不做装饰性炫光

关键词：

```txt
个人成长
每日训练
学习画像
职业教练
自适应推荐
结构化反馈
```

色彩建议：

```txt
背景：#F7F8FA / #FBFAF7
主文字：#111827
次级文字：#6B7280
边框：#E5E7EB
主色：#2563EB
成长绿色：#16A34A
提醒琥珀：#D97706
弱化红色：#DC6B5D
卡片：#FFFFFF
```

视觉注意：

- “建议补强”不要做成刺眼红色。
- 用户成长数据要积极表达，避免制造挫败感。
- 页面应该像私人教练工作台，不像学校考试后台。

## 5. 全局导航

顶部或左侧导航建议：

```txt
AI Work Coach
今日训练
学习画像
历史记录
成长洞察
设置
返回作品集
```

右上角状态：

```txt
Mock Mode
本地数据
Asia/Shanghai
连续学习 7 天
```

推荐提示文案：

> 当前为作品集 Mock 模式，训练内容、批改结果、学习画像和推荐策略均由本地数据模拟。

## 6. 核心页面一：今日训练

### 页面目标

完整展示每日训练从生成、作答、提交到批改的闭环。

### 页面状态

至少模拟以下状态：

```txt
empty
generating
ready
drafting
submitting
graded
error
```

对应中文：

```txt
未生成 → 生成中 → 可作答 → 草稿中 → 提交中 → 已批改 → 异常
```

### 页面布局

推荐三栏或两栏：

```txt
顶部：日期、训练主题、难度、预计用时、状态
左侧：题目导航、完成进度、草稿状态
中间：题目作答区
右侧：今日目标、能力标签、提示区
```

### 必备模块

1. 今日训练概览
   - 日期
   - 类别：Agent / Engineering / Product / Mixed
   - 难度：basic / intermediate / advanced
   - 预计用时
   - 生成依据：根据最近画像推荐

2. 题目列表
   - 单选题
   - 多选题
   - 判断题
   - 文本题
   - 案例分析题

3. 作答编辑器
   - 支持选择题
   - 支持判断题 false 作为有效答案
   - 支持文本题输入
   - 支持草稿保存状态
   - 支持提交确认

4. 训练辅助
   - 题目意图
   - 相关知识点
   - 可选提示
   - 面试迁移视角

5. 提交与反馈
   - 未完成题目提醒
   - 提交确认弹窗
   - 提交后进入批改报告

### Mock 题目要求

至少准备 1 份完整今日训练，包含 6-8 道题：

- 2 道单选
- 1 道多选
- 1 道判断
- 2 道文本题
- 1 道案例题

题目方向建议：

- Agent 工具调用边界
- RAG 失效原因分析
- 软件架构中的重试与幂等
- 产品需求拆解
- AI 产品评估指标

## 7. 核心页面二：批改报告

### 页面目标

展示 AI 批改不是简单打分，而是将答案转成可行动的能力反馈。

### 必备模块

1. 总分概览
   - 总分
   - 正确率
   - 完成时长
   - 难度匹配度

2. 分题反馈
   每道题包含：
   - 用户答案
   - 参考答案
   - 得分
   - 批改说明
   - 改进建议
   - 关联能力标签

3. 强项总结
   - 已掌握主题
   - 表达清晰点
   - 可迁移能力

4. 建议补强
   - 不使用“薄弱点”作为主文案
   - 用温和表达：建议补强、下一步练习、可提升方向

5. 面试话术
   - 将本次训练内容转成面试可表达语言
   - 体现职业学习产品价值

### 批改 Mock 数据结构

```ts
type GradingMock = {
  lessonId: string
  totalScore: number
  maxScore: number
  durationMinutes: number
  strengths: string[]
  improvementSuggestions: string[]
  interviewTalkingPoints: string[]
  questionFeedback: QuestionFeedbackMock[]
  profilePatch: ProfilePatchMock
}
```

## 8. 核心页面三：学习画像

### 页面目标

展示系统如何长期理解用户，而不是只批改单次作业。

### 必备模块

1. 能力雷达
   - Agent 系统设计
   - 工程稳定性
   - 产品拆解
   - 表达结构化
   - 方案评估

2. 主题掌握度
   - 每个 topic 0-100 分
   - 显示趋势
   - 区分已掌握、稳定提升、建议补强

3. 最近学习情况
   - 连续学习天数
   - 最近打开训练时间
   - 最近提交时间
   - 草稿活跃度
   - 完成率

4. 记忆标签
   - knownTopics
   - weakTopics 建议改名为 improvementTopics
   - avoidedTopics
   - preferredDifficulty

5. 下一步推荐
   - 推荐主题
   - 推荐难度
   - 推荐理由
   - 建议训练类型

### 画像 Mock 数据结构

```ts
type LearningProfileMock = {
  userId: string
  streakDays: number
  preferredCategories: string[]
  preferredDifficulty: "basic" | "intermediate" | "advanced"
  topicScores: Record<string, number>
  knownTopics: TopicMemoryMock[]
  improvementTopics: TopicMemoryMock[]
  avoidedTopics: string[]
  behavior: {
    lastOpenedAt: string
    lastDraftUpdatedAt: string
    lastSubmittedAt: string
    recentOpenDates: string[]
    recentSubmitDates: string[]
    lastLessonStatus: "not_started" | "drafting" | "submitted" | "graded"
  }
}
```

## 9. 核心页面四：历史记录

### 页面目标

展示用户学习过程和长期成长轨迹。

### 必备模块

1. 历史列表
   - 日期
   - 类别
   - 难度
   - 分数
   - 状态
   - 训练主题

2. 筛选
   - 类别
   - 难度
   - 状态
   - 日期范围

3. 趋势图
   - 近 14 天得分趋势
   - 完成率
   - 各类别训练分布

4. 详情抽屉
   - 展示该次训练题目和批改摘要
   - 展示对画像产生的影响

## 10. 核心页面五：成长洞察

### 页面目标

把后端算法逻辑前端可视化，让访问者看懂“自适应”不是一句空话。

### 必备模块

1. 今日推荐为什么生成
   - 权重加成
   - 建议补强加成
   - 新近资料加成
   - 重复惩罚
   - 掌握惩罚

2. 选题算法可视化

```txt
主题分数 = 权重 + 建议补强加成 + 新近加成 - 重复惩罚 - 掌握惩罚
```

3. 难度选择说明
   - topicScores 均值 >= 85：advanced
   - topicScores 均值 >= 60：intermediate
   - topicScores 均值 < 60：basic

4. 画像更新说明
   - 新证据权重 0.7
   - 旧证据权重 0.3
   - topicScores 限幅 0-100

5. 行为信号
   - 打开但未作答
   - 保存草稿
   - 提交训练
   - 连续学习

这个页面是作品集里很有价值的部分，因为它能展示你不仅会做界面，也能把算法和产品机制讲清楚。

## 11. 核心页面六：设置

### 页面目标

展示用户如何控制学习方向和生成策略。

### 必备模块

1. 训练方向权重
   - Agent 技术
   - 工程知识
   - 产品能力
   - 综合训练

2. 难度策略
   - 自动
   - 基础
   - 进阶
   - 高级

3. 训练时间
   - 每日生成时间
   - 时区：Asia/Shanghai
   - 是否开启定时生成

4. AI Provider 展示
   - Mock Provider
   - OpenAI Provider
   - 当前 Mock 前端只展示，不真实调用

5. 资料源设置
   - 静态资料源
   - 新近资料开关
   - 分类来源

## 12. 本地 Mock 数据组织

推荐目录：

```txt
src/labs/ai-work-coach/
  AiWorkCoachLab.tsx
  mockData.ts
  types.ts
  components/
    LabShell.tsx
    TodayTraining.tsx
    LessonOverview.tsx
    QuestionNavigator.tsx
    AnswerEditor.tsx
    GradingReport.tsx
    ProfileDashboard.tsx
    HistoryList.tsx
    GrowthInsights.tsx
    SettingsPanel.tsx
```

如果使用作品集双页框架：

```txt
/projects/ai-work-coach
项目介绍页

/labs/ai-work-coach
Mock 产品页
```

## 13. 必须可交互流程

后续智能体实现时，至少需要做通这些交互：

1. 进入今日训练页
2. 点击“生成今日训练”
3. 展示生成中状态
4. 展示训练题目
5. 完成选择题、判断题、文本题作答
6. 自动显示草稿已保存
7. 点击提交并确认
8. 展示批改中状态
9. 展示批改报告
10. 查看分题反馈
11. 查看画像更新影响
12. 跳转学习画像页
13. 查看下一步推荐
14. 在历史记录中筛选训练
15. 在成长洞察页查看自适应算法解释
16. 在设置页调整训练方向权重

## 14. 作品集介绍页建议

项目介绍页标题：

> AI Work Coach：自适应职业学习 Agent

项目一句话：

> 一个面向个人成长的 AI 学习教练，通过每日训练、智能批改和学习画像，让职业学习从一次性问答变成持续迭代的成长系统。

介绍页结构：

```txt
1. 项目背景
职业学习往往碎片化，缺少持续训练、反馈和画像沉淀。

2. 产品机会
如果 AI 能每天生成训练、批改答案并更新画像，学习系统就能根据用户变化自适应。

3. 核心方案
每日训练 + 作答编辑器 + AI 批改 + 学习画像 + 历史趋势 + 自适应推荐。

4. 我的贡献
产品闭环设计、学习画像建模、自适应选题机制、前端状态机、Mock/OpenAI Provider 抽象。

5. 工程亮点
前后端分离、本地 JSON 存储、原子写入、Asia/Shanghai 统一日期、运行时 schema 校验、36 个测试用例。

6. Mock 体验入口
进入 AI Work Coach Mock 产品页。
```

核心表达：

> 这个项目不是做一个答题工具，而是把“职业成长”设计成可追踪、可反馈、可自适应的长期产品闭环。

## 15. 验收标准

Mock 前端完成后，需要满足：

- 无后端即可运行
- 不依赖真实 API Key
- 今日训练到批改报告的核心路径可完整走通
- 支持至少 4 种题型
- 判断题 false 必须能正常作为有效答案
- 画像页能展示 topicScores、建议补强和行为信号
- 成长洞察页能解释自适应选题逻辑
- 历史记录可筛选
- 设置页可调整偏好并影响 mock 推荐展示
- 所有按钮和状态有可见反馈
- 桌面端体验完整
- 移动端至少能正常浏览核心内容
- 视觉风格应像个人效率工具，不像考试系统

## 16. 实现优先级

### P0 必须完成

- 今日训练页
- 作答编辑器
- 提交确认
- 批改报告
- 学习画像
- 基础 mock 数据

### P1 建议完成

- 历史记录
- 成长洞察
- 设置页
- 算法解释可视化
- 草稿保存反馈

### P2 可以后续增强

- 更复杂的趋势图
- 本地存档
- 导出学习报告
- 首次使用引导
- 更丰富的题库
- 深浅色主题切换

