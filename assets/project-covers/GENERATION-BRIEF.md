# 项目封面生图清单

> 用途：在 GPT 网页版生成缺失的项目封面。  
> 放置目录：`assets/project-covers/`  
> 建议尺寸：16:9 横图，优先 `1536 × 1024` 或更宽；接入网站时会统一裁切为 16:9。  
> 重要边界：这些图片是**概念封面**，不是产品截图、测试结果或公司内部后台。

## 统一视觉规范

所有图片共用以下基础要求：

```text
用途：个人作品集中的项目概念封面
风格：安静、专业、克制的编辑式科技视觉；真实材质与清晰空间关系；信息密度中等；适合白色极简作品集
构图：16:9 横向构图，主体居中或略偏一侧，四周保留裁切空间；缩小到项目卡尺寸后仍可辨认
色彩：白、浅灰和炭黑为基础，每个项目使用一种低饱和强调色；避免紫蓝渐变占满画面
文字：不要生成任何文字、数字、Logo、品牌名、按钮文案或水印
限制：不要伪装成真实后台截图；不要出现真实公司名称、真实客户数据、接口地址、工单号或敏感字段
避免：发光球体、渐变光球、霓虹赛博朋克、装饰性粒子、虚假数据大屏、密集悬浮 UI、股票图库风格
```

## P0：岗位精选项目

### 1. 商家工单助手

最终文件名：`work-order-agent-generated.png`

```text
Use case: stylized-concept
Asset type: 个人作品集项目封面
Primary request: 表现一个企业商家工单被 AI Agent 安全处理的过程。画面由三个清晰区域组成：左侧是进入系统的抽象工单纸张，中间是负责识别与路由的 AI 决策核心，右侧是三个可控出口——自动处理、人工复核、转人工。工具执行前存在明显但克制的人工确认节点，执行后有结果回查信号。
Style/medium: 高级编辑式 3D 信息场景，真实纸张、磨砂玻璃和金属材质，安静的企业软件气质，不是数据大屏
Composition/framing: 16:9 横图，流程从左向右，核心节点清楚，缩略图尺寸仍能看懂三段关系
Lighting/mood: 柔和工作室光，可信、理性、稳定
Color palette: 白、浅灰、炭黑，辅以低饱和橙色和少量绿色确认信号
Constraints: no text, no numbers, no logos, no watermark, no real company UI, no customer data
Avoid: chatbot bubble collage, generic robot, neon cyberpunk, fake dashboard screenshot
```

### 2. 船舶运货助手

最终文件名：`ship-agent-generated.png`

```text
Use case: stylized-concept
Asset type: 个人作品集项目封面
Primary request: 表现船舶运输 Agent 将复杂需求拆成三个确定步骤：信息抽取、历史航线检索、载重与费用计算，最后生成结构化报告。主体是一张现代航运工作台：航线地图、货物积木和精确计算器形成清晰链路，远处可见克制的货轮和港口，但重点是决策流程而不是风景。
Style/medium: 高级编辑式 3D 产品概念图，实体化的数据卡、航线和货物模型，专业航运软件气质
Composition/framing: 16:9 横图，从左侧需求卡到中间航线，再到右侧计算与报告，结构清楚
Lighting/mood: 冷静、精确、可靠，清晨港口的自然光
Color palette: 冷白、海蓝、石墨灰，少量安全橙作为路线和确认提示
Constraints: no text, no numbers, no logos, no watermark, no real customer route data
Avoid: dramatic storm, cinematic warship, generic logistics stock photo, fake dashboard screenshot
```

### 3. 测品图生图评测体系

最终文件名：`aigc-eval-generated.png`

```text
Use case: stylized-concept
Asset type: 个人作品集项目封面
Primary request: 表现 AI 图片质量评测的双层流程。大量候选商品图片首先经过快速筛选网格，少量候选再进入更精细的多维评审台，最终沉淀为整齐的高质量标杆素材库。需要能看出“初筛、精评、标杆库”三层关系，但不要出现真实人物脸部或真实平台界面。
Style/medium: 高级编辑式 3D 信息场景，类似专业摄影选片台与质量实验室的结合
Composition/framing: 16:9 横图，左侧多图输入，中间双层筛选装置，右侧整齐标杆库
Lighting/mood: 明亮、严谨、精确，柔和摄影棚灯光
Color palette: 白、浅灰、炭黑，低饱和玫瑰色与青绿色作为质量状态区分
Constraints: no text, no numbers, no logos, no watermark, no real faces, no real company UI
Avoid: beauty advertising, fashion magazine cover, generic AI face, neon scanner effect, fake dashboard screenshot
```

## P1：Playground 项目

这些项目当前已有系统流程占位封面，不影响网站使用。时间允许时再生成。

### 4. Chart MCP

最终文件名：`chart-mcp-generated.png`

```text
一个私有环境中的图表生成服务：AI 请求进入封闭服务器，服务器生成多种图表卡片，所有数据始终停留在透明但封闭的安全边界内。编辑式 3D 科技视觉，白灰蓝配色，无文字、无 Logo、无真实数据、无虚假后台。
```

### 5. 发票报销 Agent

最终文件名：`invoice-agent-generated.png`

```text
发票纸张依次经过真伪核验、重复检查和财务台账归档三个实体化节点，异常项被清楚但克制地分流。专业企业软件概念图，白灰石墨配少量红绿状态色，无文字、无 Logo、无真实公司或发票数据。
```

### 6. 物资管理 Agent

最终文件名：`material-agent-generated.png`

```text
自然语言请求驱动物资入库、出库、位置变更和库存告警。画面使用仓库货架、可移动物资盒和清晰状态节点，强调流程与空间，不做仓储宣传照。编辑式 3D，白灰绿配少量安全橙，无文字、无 Logo。
```

### 7. HER 催化剂定向生成

最终文件名：`her-catalyst-generated.png`

```text
二维原子晶格从噪声中逐步形成稳定结构，三个克制的物理目标共同引导生成方向。科学可视化与编辑式 3D 结合，深灰、银白、青绿配色，无文字、无实验成功率、无水印。
```

### 8. 社里办

最终文件名：`community-agent-generated.png`

```text
一个校园社团的主 Agent 将请求分派给内部管理、团队建设、活动创新三个协作节点，并连接知识库与工作流。年轻但专业的编辑式 3D 场景，白灰绿蓝配色，无文字、无学校 Logo、无卡通机器人。
```

## 生成后的交付方式

1. 不需要重命名为中文，使用上面的英文文件名。
2. 将原始图片放入：

```text
C:\Users\YH-00661M\Documents\Codex\2026-08-19\hr\github-projects\self-portfolio\assets\project-covers\
```

3. 不要覆盖当前真实项目截图。
4. 生成完成后告知 Codex：

```text
生图已放入 assets/project-covers，请检查、裁切并接入。
```

5. Codex 接入前需要检查：主体完整、无乱码文字、无水印、缩略图可辨认、没有伪造真实系统证据。
