# MoneyPrinterTurbo Mock 前端需求文档

项目仓库：https://github.com/LBP97541135/MoneyPrinterTurbo

本文档用于指导将 `MoneyPrinterTurbo` 改造成作品集中的无后端 Mock 产品页。目标不是复刻完整的视频生成后端，而是用纯前端方式展示该项目的产品形态、AI 内容生产流水线、多媒体配置能力和创作者工具体验。

根据仓库 README，该项目的核心能力是：用户只需提供视频主题或关键词，即可自动生成视频文案、视频素材、视频字幕、视频背景音乐，并合成高清短视频。项目支持 Web 界面和 API，支持横屏/竖屏、批量生成、多语音合成、字幕样式配置、背景音乐、多模型接入等能力。

## 1. 项目定位

作品集中的项目名称建议：

> MoneyPrinterTurbo：AI 短视频自动生成工作台

一句话介绍：

> 一个面向创作者的 AI 短视频生成工具，从主题输入到文案、素材、配音、字幕、音乐和成片预览，模拟完整内容生产流水线。

在作品集分类中建议归类为：

- 主分类：AI 工作流产品
- 辅助分类：创作者工具 / 多媒体生成系统 / 自动化生产流水线
- 项目状态：Mock 体验
- 项目角色：产品设计、前端交互设计、AI 工作流编排、创作者工具设计

与其他项目的区别：

- AI Work Coach 强调学习闭环。
- 哈基 AI 强调 AI 社交关系和多 Agent 框架。
- MoneyPrinterTurbo 强调从一个主题到一条可发布短视频的自动化生产链路。

## 2. Mock 前端目标

这个 Mock 前端要让访问者在 2-3 分钟内理解：

1. 用户输入主题后如何生成短视频方案。
2. 系统如何拆解为文案、素材、配音、字幕、音乐和合成步骤。
3. 用户如何调整视频尺寸、时长、语言、声音、字幕和音乐。
4. 批量生成时如何比较多个候选成片。
5. 系统如何展示生成进度、任务日志和最终视频预览。
6. 这个项目如何体现 AI 工作流编排和创作者产品设计能力。

核心展示重点：

- 主题输入
- 视频生成向导
- 文案生成与编辑
- 素材匹配
- 配音选择与试听
- 字幕样式配置
- 背景音乐配置
- 生成进度流水线
- 成片预览
- 批量候选对比

## 3. 页面结构

推荐路由：

```txt
/labs/money-printer-turbo
Mock 产品入口，默认进入生成工作台

/labs/money-printer-turbo/studio
视频生成工作台

/labs/money-printer-turbo/tasks
任务中心

/labs/money-printer-turbo/gallery
成片库

/labs/money-printer-turbo/settings
模型与素材配置

/labs/money-printer-turbo/api
API 能力展示
```

如果希望交付更轻量，可以做成单页应用内导航：

```txt
生成工作台 → 任务中心 → 成片库 → 模型配置 → API 展示
```

## 4. 全局设计风格

该项目应呈现成熟创作者工具风格，不要做成普通 AI 表单页。

建议风格：

- 专业创作台 / 视频剪辑软件 / SaaS 工具结合
- 左侧参数配置，中间工作流状态，右侧视频预览
- 深浅均可，推荐深色创作台更有沉浸感
- 适当使用进度动效、时间线、素材卡片
- 不要过度霓虹、赛博或夸张 AI 光效

关键词：

```txt
创作者工作台
AI 视频流水线
素材编排
字幕设计
批量生成
成片对比
发布准备
```

色彩建议：

```txt
背景：#101114 / #15171C
面板：#1B1D23
卡片：#22252D
主文字：#F5F7FA
次级文字：#9CA3AF
边框：rgba(255,255,255,0.10)
主色：#5B8CFF
成功绿：#22C55E
生成中蓝：#38BDF8
警示琥珀：#F59E0B
字幕黄：#FACC15
```

也可以采用浅色 SaaS 风格：

```txt
背景：#F6F7F9
卡片：#FFFFFF
主色：#2563EB
辅助紫：#7C3AED
```

## 5. 全局导航

顶部或侧边导航建议：

```txt
MoneyPrinterTurbo
生成工作台
任务中心
成片库
模型配置
API 展示
返回作品集
```

右上角状态：

```txt
Mock Mode
本地数据
队列空闲
1080p Ready
```

推荐提示文案：

> 当前为作品集 Mock 模式，文案、素材、配音、字幕、音乐和视频结果均由本地数据模拟。

## 6. 核心页面一：视频生成工作台

### 页面目标

展示从主题输入到视频生成的完整创作流程。

### 页面布局

推荐三栏：

```txt
左侧：生成参数
中间：工作流步骤 / 文案 / 素材 / 字幕
右侧：视频预览 / 候选版本
```

### 必备模块

1. 主题输入
   - 视频主题
   - 关键词
   - 目标受众
   - 风格选择：科普 / 鸡汤 / 商业 / 搞笑 / 故事 / 带货
   - 语言：中文 / 英文

2. 视频参数
   - 画幅：竖屏 9:16 / 横屏 16:9
   - 分辨率：1080x1920 / 1920x1080
   - 视频长度：短 / 中 / 长
   - 每个片段时长：2s / 3s / 5s
   - 批量生成数量：1 / 2 / 3 / 5

3. AI 文案
   - 自动生成文案
   - 支持手动编辑
   - 分镜拆分
   - 每段对应素材关键词
   - 字数和预计时长估算

4. 素材匹配
   - 每个分镜匹配素材
   - 素材来源：公开视频库 / 本地素材 / Mock 素材
   - 可替换素材
   - 显示版权状态：可商用 / 未确认 / 本地

5. 配音配置
   - 声音选择
   - 性别 / 语速 / 情绪
   - 试听按钮
   - 声音来源：Edge / Azure / OpenAI TTS / Mock Voice

6. 字幕配置
   - 字体
   - 字号
   - 颜色
   - 描边
   - 位置
   - 是否生成字幕
   - subtitle provider：edge / whisper / none

7. 背景音乐
   - 随机音乐
   - 指定音乐
   - 音量
   - 情绪：轻松 / 激励 / 悬疑 / 温暖

8. 生成按钮
   - 生成视频
   - 保存草稿
   - 重置参数

## 7. 核心页面二：生成流水线

### 页面目标

让访问者看到系统不是一次性“生成”，而是完整多步骤生产流程。

### 流水线步骤

```txt
主题解析
文案生成
分镜拆分
素材检索
配音生成
字幕生成
音乐匹配
视频合成
质量检查
完成
```

### 必备交互

- 点击“生成视频”后进入生成中状态
- 每个步骤依次变为 processing / done
- 展示当前步骤耗时
- 展示日志
- 支持“查看详情”
- 支持“模拟失败并重试”
- 完成后自动展示视频候选

### 状态定义

```ts
type PipelineStepStatus = "pending" | "processing" | "done" | "warning" | "failed"

type PipelineStepMock = {
  id: string
  name: string
  status: PipelineStepStatus
  durationMs?: number
  message: string
  detail?: string
}
```

## 8. 核心页面三：视频预览与候选对比

### 页面目标

展示生成结果不是单一输出，而是可以比较多个版本并选择最佳成片。

### 必备模块

1. 视频预览区
   - 竖屏或横屏容器
   - mock 视频封面
   - 播放 / 暂停
   - 当前时间
   - 字幕覆盖层
   - 背景音乐状态

2. 候选版本
   - Candidate A / B / C
   - 标题
   - 风格
   - 时长
   - 素材匹配度
   - 文案完整度
   - 字幕质量
   - CTA：设为最终版

3. 质量评分
   - 文案吸引力
   - 素材相关度
   - 配音自然度
   - 字幕可读性
   - 节奏匹配度

4. 导出准备
   - 下载视频
   - 下载字幕
   - 导出项目配置
   - 复制发布文案

注意：Mock 版本不需要真的生成视频，可以使用本地封面、伪播放时间轴、字幕层和候选卡片模拟成片体验。

## 9. 核心页面四：任务中心

### 页面目标

展示批量生成能力和任务队列管理。

### 必备模块

1. 任务列表
   - 任务 ID
   - 视频主题
   - 状态
   - 生成数量
   - 创建时间
   - 总耗时
   - 当前进度

2. 状态筛选
   - 全部
   - 生成中
   - 已完成
   - 失败
   - 草稿

3. 任务详情
   - 参数快照
   - 流水线日志
   - 候选结果
   - 错误原因和重试建议

4. 批量操作
   - 重新生成
   - 复制任务
   - 删除任务
   - 加入成片库

## 10. 核心页面五：成片库

### 页面目标

展示生成后的内容资产管理能力。

### 必备模块

1. 成片网格
   - 封面
   - 标题
   - 画幅
   - 时长
   - 创建时间
   - 使用模型
   - 标签

2. 筛选
   - 画幅
   - 风格
   - 语言
   - 创建时间
   - 发布状态

3. 成片详情
   - 视频预览
   - 文案
   - 字幕
   - 素材来源
   - 音频配置
   - 导出按钮

4. 发布准备
   - 标题建议
   - 简介文案
   - 平台标签
   - YouTube / 抖音 / 小红书适配提示

## 11. 核心页面六：模型与素材配置

### 页面目标

展示该项目支持多模型、多素材源、多语音和字幕服务的工程扩展性。

### 必备模块

1. LLM Provider
   - OpenAI
   - Moonshot
   - Azure
   - 通义千问
   - Google Gemini
   - Ollama
   - DeepSeek
   - Mock Provider

2. 素材源
   - Pexels
   - Pixabay
   - 本地素材
   - Mock Library

3. TTS Provider
   - Edge
   - Azure
   - OpenAI TTS
   - Mock Voice

4. 字幕 Provider
   - edge
   - whisper
   - none

5. 系统依赖展示
   - FFmpeg
   - ImageMagick
   - Whisper 模型
   - 字体资源
   - 背景音乐资源

注意：Mock 前端只展示配置状态，不需要真实保存 API Key。

## 12. 核心页面七：API 能力展示

### 页面目标

展示项目不只是 Web 工具，也提供 API 能力，体现工程完整性。

### 必备模块

1. API 概览
   - 创建任务
   - 查询任务
   - 获取视频结果
   - 获取配置选项

2. 请求示例

```json
{
  "video_subject": "为什么年轻人需要建立长期主义",
  "video_language": "zh-CN",
  "video_aspect": "9:16",
  "video_count": 3,
  "voice_name": "zh-CN-XiaoyiNeural",
  "subtitle_enabled": true
}
```

3. 响应示例

```json
{
  "task_id": "task_20260702_001",
  "status": "processing",
  "pipeline": ["script", "materials", "voice", "subtitle", "compose"]
}
```

4. Webhook / 回调状态
   - pending
   - processing
   - completed
   - failed

## 13. Mock 数据结构

推荐核心类型：

```ts
type VideoProjectMock = {
  id: string
  subject: string
  keywords: string[]
  audience: string
  style: string
  language: "zh-CN" | "en-US"
  aspect: "9:16" | "16:9"
  resolution: "1080x1920" | "1920x1080"
  segmentDuration: number
  batchCount: number
  script: ScriptSegmentMock[]
  voice: VoiceConfigMock
  subtitle: SubtitleConfigMock
  music: MusicConfigMock
  pipeline: PipelineStepMock[]
  candidates: VideoCandidateMock[]
}

type ScriptSegmentMock = {
  id: string
  text: string
  duration: number
  keywords: string[]
  materialId: string
}

type VideoCandidateMock = {
  id: string
  title: string
  duration: number
  aspect: "9:16" | "16:9"
  cover: string
  score: {
    script: number
    material: number
    voice: number
    subtitle: number
    rhythm: number
  }
}
```

## 14. 本地 Mock 数据组织

推荐目录：

```txt
src/labs/money-printer-turbo/
  MoneyPrinterTurboLab.tsx
  mockData.ts
  types.ts
  components/
    LabShell.tsx
    StudioPage.tsx
    PromptPanel.tsx
    VideoConfigPanel.tsx
    ScriptEditor.tsx
    MaterialBoard.tsx
    VoiceSelector.tsx
    SubtitleDesigner.tsx
    MusicPanel.tsx
    PipelineProgress.tsx
    VideoPreview.tsx
    CandidateCompare.tsx
    TaskCenter.tsx
    GalleryPage.tsx
    ProviderSettings.tsx
    ApiShowcase.tsx
```

如果使用作品集双页框架：

```txt
/projects/money-printer-turbo
项目介绍页

/labs/money-printer-turbo
Mock 产品页
```

## 15. 必须可交互流程

后续智能体实现时，至少需要做通这些交互：

1. 输入视频主题
2. 选择画幅、语言、风格、批量数量
3. 点击“生成文案”
4. 展示文案分镜
5. 编辑某一段文案
6. 替换某一段素材
7. 选择配音并点击试听
8. 调整字幕颜色、字号和位置
9. 选择背景音乐并调整音量
10. 点击“生成视频”
11. 展示流水线进度
12. 完成后展示 2-3 个候选视频
13. 切换候选并预览字幕层
14. 将某个候选设为最终版
15. 在任务中心查看任务记录
16. 在成片库查看最终视频
17. 在模型配置页切换 Mock Provider
18. 在 API 展示页查看请求和响应示例

## 16. 作品集介绍页建议

项目介绍页标题：

> MoneyPrinterTurbo：AI 短视频自动生成工作台

项目一句话：

> 一个从主题到成片的 AI 短视频生产系统，将文案生成、素材匹配、配音、字幕、音乐和视频合成编排成完整工作流。

介绍页结构：

```txt
1. 项目背景
短视频创作链路长，涉及选题、文案、素材、配音、字幕、音乐和剪辑，对个人创作者门槛较高。

2. 产品机会
如果将内容生产拆成可配置的自动化流水线，用户只需输入主题即可快速得到可发布视频草稿。

3. 核心方案
主题输入 + 文案生成 + 素材匹配 + 配音配置 + 字幕设计 + 背景音乐 + 视频合成 + 候选对比。

4. 我的贡献
创作者工作流拆解、生成参数设计、Mock 产品体验设计、多媒体流水线可视化、任务和成片管理设计。

5. 工程亮点
MVC 架构、Web 与 API 双入口、多模型接入、多语音合成、字幕生成、FFmpeg/ImageMagick 多媒体合成链路、批量生成能力。

6. Mock 体验入口
进入 MoneyPrinterTurbo Mock 产品页。
```

核心表达：

> 这个项目不是一个简单的视频生成按钮，而是把短视频生产拆成可配置、可追踪、可比较、可复用的创作者工作流。

## 17. 验收标准

Mock 前端完成后，需要满足：

- 无后端即可运行
- 不依赖真实 API Key
- 从主题输入到候选视频展示的核心路径可完整走通
- 支持横屏/竖屏切换
- 支持至少 2 种语言和 4 种视频风格
- 支持文案编辑、素材替换、配音选择、字幕样式和背景音乐配置
- 生成流水线有可见状态和日志
- 至少展示 3 个候选视频结果
- 任务中心可查看历史任务
- 成片库可查看最终视频配置
- 模型配置页展示多 Provider 能力
- API 展示页能体现工程完整性
- 桌面端体验完整
- 移动端至少能浏览工作台和成片库核心内容
- 视觉风格像成熟创作者工具，不像普通表单 demo

## 18. 实现优先级

### P0 必须完成

- 生成工作台
- 主题输入
- 视频参数配置
- 文案分镜
- 生成流水线
- 视频预览
- 候选对比
- 基础 mock 数据

### P1 建议完成

- 素材替换
- 配音试听
- 字幕设计器
- 背景音乐配置
- 任务中心
- 成片库

### P2 可以后续增强

- API 能力展示
- Provider 配置
- 发布文案生成
- 平台适配建议
- 本地保存草稿
- 更真实的视频播放模拟

