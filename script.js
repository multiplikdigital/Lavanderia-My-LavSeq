document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 20 ? "0 8px 30px rgba(5, 59, 102, .08)" : "none";
}, { passive: true });
