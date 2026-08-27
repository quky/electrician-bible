document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      closeMenu();
    }
  });
});