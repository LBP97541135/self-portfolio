# 吕祎晗个人作品集

一个纯前端个人作品集网站，定位为 `Agent Product Engineer / FDE`。网站使用本地 mock 数据展示 AI 产品、智能体工作流和工程化项目，并为每个重点项目提供两类入口：

- `labs/{project-id}/`：可直接体验的 mock 产品页
- `docs/projects/{project-id}.html`：项目介绍页，说明目标、功能、亮点、核心流程和个人角色

## 本地预览

推荐使用仓库内置静态服务，避免 Markdown、中文和嵌套路由在不同服务器下出现兼容问题。

```bash
node scripts/serve-static.js
```

打开 `http://127.0.0.1:5177/`。

## 文档生成

项目介绍页由 `docs/projects/*.md` 生成静态 HTML。修改项目介绍 Markdown 后，执行：

```bash
node scripts/build-docs.js
```

生成后的 HTML 会内嵌页面样式、流程图和鼠标柔光动效，适合直接部署到 GitHub Pages。

## 部署

该项目是静态站点，可直接部署到 GitHub Pages。部署前建议确认：

- 首页项目入口指向 `docs/projects/*.html` 和 `labs/*/`
- `labs/multiagent-werewolf/dist/` 已重新构建并提交
- 修改过项目介绍 Markdown 后已重新执行 `node scripts/build-docs.js`
