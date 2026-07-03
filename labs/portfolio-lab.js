(function () {
  const currentScript = document.currentScript;
  const home = currentScript?.dataset.home || "../../index.html";
  const doc = currentScript?.dataset.doc || "";
  const title = currentScript?.dataset.title || "Portfolio Lab";

  const bar = document.createElement("div");
  bar.className = "portfolio-lab-bar";
  bar.setAttribute("aria-label", "Portfolio lab navigation");
  bar.innerHTML = [
    `<strong>${title}</strong>`,
    "<span>Mock Mode · 无后端数据</span>",
    `<a href="${home}">返回作品集</a>`,
    doc ? `<a href="${doc}">项目介绍</a>` : "",
  ].join("");

  document.body.appendChild(bar);
})();
