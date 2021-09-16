const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removepanels();
    panel.classList.add("active");
  });
});

function removepanels() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
