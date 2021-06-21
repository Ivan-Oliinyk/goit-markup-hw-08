(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]'),
        mobileMenuRef = document.querySelector('[data-menu]'),
        mobileLogoRef = document.querySelector('[data-logo]');

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    mobileLogoRef.classList.toggle("is-open");
    
    document.body.classList.toggle("modal-open");
  });
})();
