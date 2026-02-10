/**
 * AI-Assisted App Development Bootcamp - Static docs
 * Sidebar: hamburger menu, current page highlight
 */
(function () {
  "use strict";

  function getCurrentPage() {
    var body = document.body;
    return body && body.getAttribute("data-current-page") ? body.getAttribute("data-current-page") : "";
  }

  function getPageFromHref(href) {
    if (!href) return "";
    try {
      var path = href.split("#")[0].replace(/\/$/, "");
      var parts = path.split("/");
      var file = parts[parts.length - 1];
      if (file === "" || file === "index.html") return "index";
      if (file.endsWith(".html")) return file.slice(0, -5);
      return file;
    } catch (e) {
      return "";
    }
  }

  function isCurrentPageLink(link, currentPage) {
    var page = getPageFromHref(link.getAttribute("href"));
    return page === currentPage;
  }

  function initSidebar() {
    var currentPage = getCurrentPage();
    document.querySelectorAll(".sidebar nav a").forEach(function (link) {
      if (isCurrentPageLink(link, currentPage)) {
        link.classList.add("current");
      }
    });
  }

  function initHamburger() {
    var hamburger = document.querySelector(".hamburger");
    var overlay = document.querySelector(".sidebar-overlay");
    var sidebarLinks = document.querySelectorAll(".sidebar nav a");

    function open() {
      document.body.classList.add("sidebar-open");
      if (hamburger) hamburger.setAttribute("aria-expanded", "true");
      if (overlay) overlay.setAttribute("aria-hidden", "false");
    }

    function close() {
      document.body.classList.remove("sidebar-open");
      if (hamburger) hamburger.setAttribute("aria-expanded", "false");
      if (overlay) overlay.setAttribute("aria-hidden", "true");
    }

    if (hamburger) {
      hamburger.addEventListener("click", function () {
        if (document.body.classList.contains("sidebar-open")) {
          close();
        } else {
          open();
        }
      });
    }

    if (overlay) {
      overlay.addEventListener("click", close);
    }

    sidebarLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        close();
      });
    });
  }

  function initCopyPromptButton() {
    var btn = document.querySelector(".copy-prompt-btn");
    var codeEl = document.getElementById("composer-prompt-text");
    if (!btn || !codeEl) return;
    btn.addEventListener("click", function () {
      var text = codeEl.textContent;
      navigator.clipboard.writeText(text).then(
        function () {
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
          }, 2000);
        },
        function () {
          btn.textContent = "Copy failed";
          setTimeout(function () {
            btn.textContent = "Copy";
          }, 2000);
        }
      );
    });
  }

  function init() {
    initSidebar();
    initHamburger();
    initCopyPromptButton();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
