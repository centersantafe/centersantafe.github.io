// Behavior for the data-driven top nav (_includes/nav.html + _data/top-nav.yml).
// - Hamburger toggler opens/closes the collapsible region on small screens.
// - Clicking a dropdown toggle opens/closes its menu.
// - Clicking elsewhere (or pressing Escape) closes any open dropdown.
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  // --- Hamburger: toggle the whole collapsible region on mobile.
  const toggler = nav.querySelector(".site-nav-toggler");
  if (toggler) {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();
      const isOpen = nav.classList.toggle("open");
      toggler.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // --- Dropdowns: clicking the toggle opens its parent <li>.
  const dropdownToggles = nav.querySelectorAll(".site-nav-dropdown-toggle");
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = toggle.closest(".has-dropdown");
      if (!parent) return;

      const willOpen = !parent.classList.contains("open");

      // Close any sibling dropdowns first.
      nav.querySelectorAll(".has-dropdown.open").forEach(function (open) {
        if (open !== parent) {
          open.classList.remove("open");
          const t = open.querySelector(".site-nav-dropdown-toggle");
          if (t) t.setAttribute("aria-expanded", "false");
        }
      });

      parent.classList.toggle("open", willOpen);
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  // --- Click outside any dropdown closes them all.
  document.addEventListener("click", function (e) {
    if (nav.contains(e.target)) return;
    nav.querySelectorAll(".has-dropdown.open").forEach(function (open) {
      open.classList.remove("open");
      const t = open.querySelector(".site-nav-dropdown-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  });

  // --- Escape key closes dropdowns (and collapses mobile menu).
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    nav.querySelectorAll(".has-dropdown.open").forEach(function (open) {
      open.classList.remove("open");
      const t = open.querySelector(".site-nav-dropdown-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      if (toggler) toggler.setAttribute("aria-expanded", "false");
    }
  });
});
