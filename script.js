(function () {
  document.getElementById("year").textContent = String(new Date().getFullYear());

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced) {
    var revealEls = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    document.querySelectorAll(".hero .reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (!prefersReduced) {
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      if (Number.isNaN(target)) return;

      var duration = 1200;
      var start = performance.now();

      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }
})();
