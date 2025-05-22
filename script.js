document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sections = document.getElementById("sections");
  const contactBtn = document.getElementById("contact-btn");

  hamburger.addEventListener("click", () => {
    sections.classList.toggle("show");
    contactBtn.classList.toggle("show");
  });
});
