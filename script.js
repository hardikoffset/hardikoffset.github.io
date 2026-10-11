/* Hardik Offset website — vanilla JavaScript. No backend, cookies or trackers. */
(() => {
  "use strict";
  const number = "919227230230";
  const menuButton = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const quoteForm = document.getElementById("quoteForm");
  const printType = document.getElementById("printType");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  function closeMenu() {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    mobileNav.hidden = true;
  }

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      mobileNav.hidden = isOpen;
    });
    mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 840) closeMenu();
    });
  }

  document.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-service") || "Other print enquiry";
      if (printType) printType.value = value;
      document.getElementById("enquiry")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      // Focus without scrolling a second time, to help keyboard users.
      window.setTimeout(() => printType?.focus({ preventScroll: true }), 500);
    });
  });

  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;
      const name = document.getElementById("customerName").value.trim();
      const item = printType.value;
      const quantity = document.getElementById("printQuantity").value.trim();
      const notes = document.getElementById("projectNotes").value.trim();
      const lines = [
        "Hello Hardik Offset! I have a printing enquiry.",
        ...(name ? [`Name: ${name}`] : []),
        `Print requirement: ${item}`,
        ...(quantity ? [`Approx. quantity: ${quantity}`] : []),
        ...(notes ? [`Project details: ${notes}`] : []),
        "Please let me know the options, pricing and turnaround time."
      ];
      const url = `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
      // User-initiated navigation opens WhatsApp, where the user chooses whether to send.
      window.location.assign(url);
    });
  }
})();