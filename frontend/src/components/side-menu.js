const menuItems = [
  { name: "Model 1", href: "model-one" },
  { name: "model-2", href: "model-two" },
  { name: "model-3", href: "model-three" },
];

export function renderSideMenu() {
  return `
    <div class="side-menu">
      <ul>
        ${menuItems
          .map((item) => `<li><a href="${item.href}">${item.name}</a></li>`)
          .join("")}
      </ul>
    </div>
  `;
}
