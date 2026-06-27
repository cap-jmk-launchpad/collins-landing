(function () {
  var BEATS = [
    {
      id: "00",
      slug: "intro",
      type: "title",
      title: "Collins",
      caption: "Digital marketing and automation for brands that want clarity",
      durationMs: 4000,
    },
    {
      id: "01",
      slug: "discover",
      type: "method",
      step: "01",
      title: "Discover",
      caption: "Start with a 30-minute strategy call. Tell us where momentum is stuck.",
      poster: "assets/hero-method-01-discover.png",
      durationMs: 6400,
    },
    {
      id: "02",
      slug: "strategy",
      type: "method",
      step: "02",
      title: "Map the sprint",
      caption: "Week one maps SEO, paid, content, and automation to your KPIs.",
      poster: "assets/hero-method-02-strategy.png",
      durationMs: 6400,
    },
    {
      id: "03",
      slug: "scope",
      type: "method",
      step: "03",
      title: "Scope with clarity",
      caption: "Transparent line items, senior access, and reporting cadence locked in.",
      poster: "assets/hero-method-03-scope.png",
      durationMs: 6400,
    },
    {
      id: "04",
      slug: "ship",
      type: "method",
      step: "04",
      title: "Ship campaigns",
      caption: "Content, paid media, and nurture launch from one shared playbook.",
      poster: "assets/hero-method-04-ship.png",
      durationMs: 6400,
    },
    {
      id: "05",
      slug: "automate",
      type: "method",
      step: "05",
      title: "Automate and connect",
      caption: "CRM and workflows wired to the same growth plan.",
      poster: "assets/hero-method-05-automate.png",
      durationMs: 6400,
    },
    {
      id: "06",
      slug: "measure",
      type: "method",
      step: "06",
      title: "Measure and compound",
      caption: "Revenue tied reporting and quarterly channel tuning.",
      poster: "assets/hero-method-06-measure.png",
      durationMs: 7000,
    },
    {
      id: "07",
      slug: "outro",
      type: "title",
      title: "Unify. Automate. Amplify.",
      caption: "Your growth agency.",
      durationMs: 4600,
    },
  ];

  var stage = document.getElementById("reel-stage");
  var params = new URLSearchParams(window.location.search);
  var autoplay = params.get("autoplay") === "1" || params.get("autoplay") === "true";
  var recordMode = params.get("record") === "1" || params.get("record") === "true";
  var activeIndex = -1;
  var timer = null;

  window.__REEL_BEATS__ = BEATS;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function titleMarkup(beat) {
    var headline = beat.title;
    var accent = "";
    if (beat.slug === "intro") {
      headline = '<span class="accent">Collins</span>';
    } else if (beat.slug === "outro") {
      headline =
        '<span class="accent">Unify.</span> Automate. <span class="accent">Amplify.</span>';
    }

    return (
      '<div class="reel-title-card">' +
      (beat.slug === "intro"
        ? '<div class="reel-logo-mark" aria-hidden="true">C</div>'
        : "") +
      '<h1 class="reel-headline">' +
      headline +
      "</h1>" +
      '<p class="reel-subline">' +
      escapeHtml(beat.caption) +
      "</p>" +
      '<div class="reel-rule" aria-hidden="true"></div>' +
      "</div>"
    );
  }

  function methodMarkup(beat) {
    return (
      '<div class="reel-method">' +
      '<div class="reel-method-image-wrap">' +
      '<img class="reel-method-image" src="' +
      escapeHtml(beat.poster) +
      '" alt="" />' +
      "</div>" +
      '<div class="reel-method-copy">' +
      '<div class="reel-method-card">' +
      '<p class="reel-step-label">Step ' +
      escapeHtml(beat.step) +
      " of 6</p>" +
      '<h2 class="reel-method-title">' +
      escapeHtml(beat.title) +
      "</h2>" +
      '<p class="reel-method-caption">' +
      escapeHtml(beat.caption) +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function buildStage() {
    BEATS.forEach(function (beat, index) {
      var el = document.createElement("section");
      el.className = "reel-beat";
      el.setAttribute("data-index", String(index));
      el.setAttribute("data-beat-id", beat.id);
      el.innerHTML = beat.type === "method" ? methodMarkup(beat) : titleMarkup(beat);
      stage.appendChild(el);
    });
  }

  function dispatchBeat(index) {
    window.dispatchEvent(
      new CustomEvent("reel-beat", {
        detail: { index: index, beat: BEATS[index], elapsedMs: totalElapsedMs(index) },
      })
    );
  }

  function totalElapsedMs(index) {
    var elapsed = 0;
    for (var i = 0; i < index; i++) {
      elapsed += BEATS[i].durationMs;
    }
    return elapsed;
  }

  function showBeat(index) {
    if (index === activeIndex) return;
    var prev = activeIndex >= 0 ? stage.children[activeIndex] : null;
    var next = stage.children[index];
    if (!next) return;

    if (prev) {
      prev.classList.remove("is-active");
      prev.classList.add("is-exiting");
      window.setTimeout(function () {
        prev.classList.remove("is-exiting");
      }, 760);
    }

    /* Staging: restart CSS animations on each beat (VideoZero follow-through) */
    next.classList.remove("is-active");
    void next.offsetWidth;
    next.classList.add("is-active");
    activeIndex = index;
    dispatchBeat(index);
  }

  function runTimeline() {
    var index = 0;
    showBeat(index);

    function scheduleNext() {
      var beat = BEATS[index];
      timer = window.setTimeout(function () {
        index += 1;
        if (index >= BEATS.length) {
          window.dispatchEvent(new CustomEvent("reel-complete"));
          return;
        }
        showBeat(index);
        scheduleNext();
      }, beat.durationMs);
    }

    scheduleNext();
  }

  buildStage();

  window.__REEL_SHOW_BEAT__ = function (index) {
    clearTimeout(timer);
    showBeat(index);
    return BEATS[index] || null;
  };

  window.__REEL_READY__ = true;

  if (autoplay && !recordMode) {
    window.addEventListener("load", function () {
      window.setTimeout(runTimeline, 400);
    });
  } else {
    showBeat(0);
  }

  window.__REEL_TOTAL_MS__ = BEATS.reduce(function (sum, beat) {
    return sum + beat.durationMs;
  }, 0);
})();
