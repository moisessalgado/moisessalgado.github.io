const yearTarget = document.getElementById("year");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

reveals.forEach((el, index) => {
  // Small stagger effect without JS animation libraries.
  el.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
  observer.observe(el);
});

const langLinks = document.querySelectorAll(".lang-switch a");
langLinks.forEach((link) => {
  link.addEventListener("click", () => {
    localStorage.setItem("preferredLang", link.lang || link.textContent.toLowerCase());
  });
});
