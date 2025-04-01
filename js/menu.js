document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const trigger = document.querySelector(".overlay-trigger"); // Элемент, на который наводимся

  trigger.addEventListener("mouseenter", () => {
    overlay.classList.add("active");
  });

  overlay.addEventListener("mouseleave", () => {
    overlay.classList.remove("active");
  });
});
