import { renderSideMenu } from "./components/side-menu";

const hamburgerIcon = document.getElementById("hamburger");
const sideMenuContainer = document.getElementById("side-menu-container");

hamburgerIcon.addEventListener("click", () => {
  const isActive = sideMenuContainer.classList.toggle("active");
  document.body.classList.toggle("menu-open", isActive);
  if (isActive) {
    sideMenuContainer.innerHTML = renderSideMenu();
    hamburgerIcon.textContent = "✖";
  } else {
    sideMenuContainer.innerHTML = "";
    hamburgerIcon.textContent = "☰";
  }
});
