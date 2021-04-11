export default function activeTab(path) {
  let currentTab = path.split("/")[1];
  if (currentTab === "newest") currentTab = "new";
  if (currentTab === "news") currentTab = "top";
  const allElements = document.querySelectorAll(".header-link");
  allElements.forEach((item) => {
    if (item.textContent === currentTab) item.style.color = "white";
    else item.style.color = "black";
  });
}
