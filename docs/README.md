# Docs

本目录用于管理作品集项目的规划、开发规范和各项目 Mock 前端需求。

## 目录结构

```txt
docs/
  development/
    portfolio-project-framework.md

  requirements/
    ai-work-coach-mock-requirements.md
    evo-murder-game-mock-requirements.md
    haji-ai-mock-requirements.md
    money-printer-turbo-mock-requirements.md
```

## 分类说明

- `development/`：放通用开发规范、项目接入流程、目录约定、数据模型等长期规则。
- `requirements/`：放单个项目的 Mock 前端需求文档，用于交给后续智能体或开发工具实现。

新增项目时，优先在 `requirements/` 下创建：

```txt
{project-id}-mock-requirements.md
```

如果某条规则会影响所有项目，则放入 `development/`。

