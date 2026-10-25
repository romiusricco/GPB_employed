document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const closeBtn = document.querySelector(".header__nav-close");
  const navOverlay = document.querySelector(".header__nav-overlay");
  const navLinks = document.querySelectorAll(".header__nav-link");
  const body = document.body;
  const mouseButton = document.querySelector(".hero__mouse-button");

  const openMenu = () => {
    navOverlay.classList.add("is-open");
    burger.classList.add("is-open");
    body.classList.add("body-menu-open");
    burger.setAttribute("aria-expanded", "true");
    navOverlay.removeAttribute("aria-hidden");
    navOverlay.removeAttribute("inert");
    setTimeout(() => closeBtn?.focus(), 50);
  };

  const closeMenu = () => {
    burger.focus();
    navOverlay.classList.remove("is-open");
    burger.classList.remove("is-open");
    body.classList.remove("body-menu-open");
    burger.setAttribute("aria-expanded", "false");
    navOverlay.setAttribute("aria-hidden", "true");
    navOverlay.setAttribute("inert", "");
  };

  burger?.addEventListener("click", () =>
    navOverlay.classList.contains("is-open") ? closeMenu() : openMenu(),
  );
  closeBtn?.addEventListener("click", closeMenu);
  navLinks.forEach((l) => l.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navOverlay.classList.contains("is-open"))
      closeMenu();
  });

  mouseButton?.addEventListener("click", () => {
    document
      .querySelector(".job-motivation")
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
