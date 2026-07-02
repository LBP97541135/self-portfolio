const projects = [
  {
    title: "商家工单助手",
    category: "业务智能体",
    period: "2026",
    summary: "面向商家入驻工单的自动化处理系统，把人工判断、路由分发和接口调用沉淀为稳定流程。",
    tags: ["工单自动化", "流程编排", "接口调用", "安全校验"],
    result: "覆盖率 50%+，平均处理用时从 11h 缩短至 4h",
    problem: "商家入驻工单数量大、判断链路长，人工处理消耗高且响应速度慢。",
    product: "将工单处理拆成信息提取、路由分发、场景处理和结果校验，让系统先判断再行动。",
    engineering: "搭建双层智能体架构，引入场景化工具调用，并在写入动作前加入校验机制。",
  },
  {
    title: "船舶运货助手",
    category: "行业解决方案",
    period: "2025",
    summary: "面向船舶运货场景，完成路线安排、船只情况整理与报告生成，让复杂任务可被拆解执行。",
    tags: ["路线规划", "知识检索", "数据计算", "报告生成"],
    result: "一周调用 1w+，准确率 98%+，回复效率提升 70%",
    problem: "行业数据量大，任务包含规划、计算和报告输出，生产环境模型能力有限。",
    product: "将复杂需求拆为信息提取、路线规划和数字处理三个子任务，降低单次推理难度。",
    engineering: "通过知识检索完成线路匹配，使用 Python 工具进行数字计算，最终生成结构化报告。",
  },
  {
    title: "AI 狼人杀",
    category: "多智能体系统",
    period: "2026",
    summary: "通过狼人杀游戏构建多智能体博弈与自进化机制，让角色在对局中形成策略沉淀。",
    tags: ["多智能体", "博弈推理", "自进化", "策略沉淀"],
    result: "字节跳动 AI 全栈开发挑战赛项目",
    problem: "普通多智能体演示缺少持续思考和策略变化，难以体现真实博弈。",
    product: "让每个角色拥有信念矩阵和预投票意向，发言会影响后续判断与策略。",
    engineering: "根据发言影响力沉淀可复用技巧，在后续对局中作为能力经验继续调用。",
    mock: "labs/multiagent-werewolf/dist/",
  },
  {
    title: "社里办",
    category: "AI 产品设计",
    period: "2025",
    summary: "基于钉钉 AI 助理的学生社团系统，围绕内部管理、团队建设和活动创新设计协同流程。",
    tags: ["协同办公", "组织管理", "知识库", "多角色协作"],
    result: "浙江省人工智能竞赛二等奖",
    problem: "学生社团办公效率低、组织认同感不足，历史经验难以传承。",
    product: "由主智能体统一调配多个业务场景，把流程自动化、个性化记忆和活动创新串起来。",
    engineering: "结合钉钉原生能力、知识库和生成能力，完成面向组织场景的 AI 助理系统。",
  },
  {
    title: "AI 需求分析工作台",
    category: "产品工作流",
    period: "Mock",
    summary: "帮助产品同学从访谈、反馈和业务目标中提炼需求，生成用户故事、优先级和验证指标。",
    tags: ["需求分析", "用户故事", "优先级", "指标设计"],
    result: "预留案例，后续补充完整项目材料",
    problem: "早期需求信息分散，产品判断容易停留在主观描述。",
    product: "把原始材料转成问题清单、用户旅程、功能边界和验收指标。",
    engineering: "以本地 mock 数据模拟多来源输入，前端完成流程看板、结论卡片和版本对比。",
  },
  {
    title: "企业知识问答中台",
    category: "知识系统",
    period: "Mock",
    summary: "面向企业内部资料检索和问答，强调来源引用、权限边界和答案可追溯。",
    tags: ["知识检索", "权限边界", "可追溯", "企业问答"],
    result: "预留案例，后续补充完整项目材料",
    problem: "企业文档分散，员工查找资料成本高，普通问答缺少可信来源。",
    product: "答案必须绑定资料来源、更新时间和适用范围，降低误用风险。",
    engineering: "前端模拟检索结果、引用片段和置信度，为后续接入真实检索服务预留结构。",
  },
  {
    title: "进化酒馆",
    category: "AI 工作流产品",
    period: "Mock",
    summary: "把剧本杀互动、陪玩 Agent、DM Agent、长期记忆和行为进化结合起来的 AI 互动叙事产品原型。",
    tags: ["多智能体", "剧本互动", "长期记忆", "自进化"],
    result: "剧本库 + Agent 阵容 + 游戏舞台 + 证物推理 + 复盘进化 + 个人助手 六层结构 mock",
    problem: "传统剧本杀依赖真人 DM 和玩家配合，单人体验弱、复玩价值有限，玩家经验也无法沉淀。",
    product: "让 Agent 在一次次剧本互动中记住用户、理解偏好，并逐渐进化成更懂你的游戏伙伴。",
    engineering: "本地 mock 6 个剧本、8 类 Agent、4 级 DM 提示、复盘 → Gene/Capsule 沉淀的端到端流程。",
  },
];

const experiences = [
  {
    time: "2026.03 - 2026.05",
    title: "小红书 · 产品工程师",
    description:
      "参与商家技术组智能体开发，从 0 到 1 搭建商家工单助手一期，推动工单处理从人工流程走向自动化协作。",
  },
  {
    time: "2025.11 - 2026.02",
    title: "珠海环界云计算 · AI 解决方案工程师",
    description: "面向客户场景设计智能体方案，结合知识检索、工具编排与流程拆解完成生产环境落地。",
  },
  {
    time: "2023 - 2027",
    title: "杭州电子科技大学 · 自动化",
    description: "专业前 20%，学习自动控制、计算机网络、软件技术、Python、C 语言与机器学习。",
  },
];

const categories = ["全部", ...new Set(projects.map((project) => project.category))];
let activeCategory = "全部";

const filterBar = document.querySelector("#filterBar");
const projectGrid = document.querySelector("#projectGrid");
const timeline = document.querySelector("#timeline");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");
const cursorLight = document.querySelector(".cursor-light");

function arrowIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function renderTimeline() {
  timeline.innerHTML = experiences
    .map(
      (item) => `
        <article class="timeline-item">
          <time class="timeline-time">${item.time}</time>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  filterBar.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-button ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`,
    )
    .join("");
}

function renderProjects() {
  const visibleProjects =
    activeCategory === "全部" ? projects : projects.filter((project) => project.category === activeCategory);

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-item" data-index="${projects.indexOf(project)}" tabindex="0" role="button" aria-label="查看${project.title}案例">
          <div>
            <p class="project-meta">${project.period} · ${project.category}</p>
            <h3 class="project-title">${project.title}${arrowIcon()}</h3>
            <p>${project.summary}</p>
            <div class="tag-list">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
          <div class="project-side">
            <p class="project-result">${project.result}</p>
            ${project.mock ? `<a class="project-mock-link" href="${project.mock}" target="_blank" rel="noreferrer" data-stop="1">Mock 体验 →</a>` : ""}
          </div>
        </article>
      `,
    )
    .join("");
}

function openProject(index) {
  const project = projects[index];
  dialogContent.innerHTML = `
    <div class="dialog-body">
      <p class="eyebrow">${project.period} · ${project.category}</p>
      <h2>${project.title}</h2>
      <p>${project.summary}</p>
      <div class="tag-list">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="detail-grid">
        <section>
          <h3>业务问题</h3>
          <p>${project.problem}</p>
        </section>
        <section>
          <h3>产品设计</h3>
          <p>${project.product}</p>
        </section>
        <section>
          <h3>工程实现</h3>
          <p>${project.engineering}</p>
        </section>
        <section>
          <h3>结果</h3>
          <p>${project.result}</p>
        </section>
      </div>
      ${project.mock ? `<a class="dialog-mock-link" href="${project.mock}" target="_blank" rel="noreferrer">进入 Mock 体验 →</a>` : ""}
    </div>
  `;
  dialog.showModal();
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderProjects();
});

projectGrid.addEventListener("click", (event) => {
  // Mock 体验链接：自己打开新页面，阻止触发项目详情弹窗
  if (event.target.closest("[data-stop='1']")) return;
  const item = event.target.closest(".project-item");
  if (!item) return;
  openProject(Number(item.dataset.index));
});

projectGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest("[data-stop='1']")) return;
  const item = event.target.closest(".project-item");
  if (!item) return;
  event.preventDefault();
  openProject(Number(item.dataset.index));
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

window.addEventListener("mousemove", (event) => {
  cursorLight.style.transform = `translate3d(${event.clientX - 280}px, ${event.clientY - 280}px, 0)`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

renderTimeline();
renderFilters();
renderProjects();
