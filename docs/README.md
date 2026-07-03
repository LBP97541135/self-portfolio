# Docs

本目录用于管理个人作品集的项目介绍、开发规范和长期维护规则。

## 目录结构

```txt
docs/
  projects/
    ai-work-coach.md
    ai-work-coach.html
    evo-murder-game.md
    evo-murder-game.html
    haji-ai.md
    haji-ai.html
    money-printer-turbo.md
    money-printer-turbo.html
    multiagent-werewolf.md
    multiagent-werewolf.html

  development/
    portfolio-project-framework.md
    portfolio-project-framework.html

  requirements/
    legacy mock requirement drafts
```

## 分类说明

- `projects/`：正式项目介绍页，面向访问者、面试官和作品集浏览者，讲清楚项目目标、功能、亮点、流程图、我的角色和展示入口。
- `development/`：通用开发规范、项目接入流程、目录约定、数据模型等长期规则。
- `requirements/`：历史 mock 改造需求草稿，保留用于追溯，不再作为主页主入口。

## 生成方式

项目介绍页由 Markdown 生成静态 HTML：

```txt
node scripts/build-docs.js
```

生成后的 HTML 内嵌样式、正文、流程图和鼠标柔光动效，不依赖运行时 fetch Markdown，因此可以稳定部署到 GitHub Pages。

## 页面约定

每个项目建议保留两类入口：

```txt
/labs/{project-id}/
Mock 产品体验页

/docs/projects/{project-id}.html
项目介绍页
```
