document.addEventListener("DOMContentLoaded", () => {
  const acc = document.querySelectorAll(".accordion");
  acc.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
});