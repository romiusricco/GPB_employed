document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navOverlay = document.querySelector(".header__nav-overlay");
  const closeBtn = document.querySelector(".header__nav-close");
  const navLinks = document.querySelectorAll(".header__nav-link");
  const body = document.body;

  const openMenu = () => {
    navOverlay.classList.add("is-open");
    burger.classList.add("is-open");
    body.classList.add("body-menu-open");

    burger.setAttribute("aria-expanded", "true");
    navOverlay.removeAttribute("aria-hidden");
    navOverlay.removeAttribute("inert");

    setTimeout(() => closeBtn.focus(), 50);
  };

  const closeMenu = () => {
    burger.focus();

    navOverlay.classList.remove("is-open");
    burger.classList.remove("is-open"); // <-- ДОБАВЛЕНО: убираем класс с бургера
    body.classList.remove("body-menu-open");

    burger.setAttribute("aria-expanded", "false");
    navOverlay.setAttribute("aria-hidden", "true");
    navOverlay.setAttribute("inert", "");
  };

  if (burger) {
    burger.addEventListener("click", () => {
      const isOpen = navOverlay.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navOverlay.classList.contains("is-open")) {
      closeMenu();
    }
  });
});
