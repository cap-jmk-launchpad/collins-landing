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

  var FALLBACK_BEATS = [
    {
      id: "01",
      title: "Collins agency",
      caption: "Digital marketing & automation for brands that want clarity, not bloat",
      poster: "assets/collins-demo-01-hero.png",
      segment: "assets/segments/collins-demo-01-hero.webm",
      durationSec: 6,
    },
    {
      id: "02",
      title: "Full-funnel services",
      caption: "Strategy, content, paid media, and automation under one senior team",
      poster: "assets/collins-demo-02-services.png",
      segment: "assets/segments/collins-demo-02-services.webm",
      durationSec: 7,
    },
    {
      id: "03",
      title: "How we work",
      caption: "A guided walkthrough of our approach — step by step",
      poster: "assets/collins-demo-03-demo.png",
      segment: "assets/segments/collins-demo-03-demo.webm",
      durationSec: 6,
    },
    {
      id: "04",
      title: "Client results",
      caption: "Outcomes from retainers and campaign partnerships we stand behind",
      poster: "assets/collins-demo-04-results.png",
      segment: "assets/segments/collins-demo-04-results.webm",
      durationSec: 7,
    },
    {
      id: "05",
      title: "Working together",
      caption: "Engagement models, timelines, and what to expect from a Collins partnership",
      poster: "assets/collins-demo-05-faq.png",
      segment: "assets/segments/collins-demo-05-faq.webm",
      durationSec: 6,
    },
    {
      id: "06",
      title: "Book a strategy call",
      caption: "Tell us where growth is stuck — we will map the next 90 days with you",
      poster: "assets/collins-demo-06-contact.png",
      segment: "assets/segments/collins-demo-06-contact.webm",
      durationSec: 6,
    },
    {
      id: "07",
      title: "Collins",
      caption: "Unify · Automate · Amplify — your growth agency",
      poster: "assets/collins-demo-07-endcard.png",
      segment: "assets/segments/collins-demo-07-endcard.webm",
      durationSec: 4,
    },
  ];

  function normalizeBeats(rawBeats) {
    return rawBeats.map(function (beat) {
      return {
        title: beat.title,
        caption: beat.caption,
        poster: beat.poster.indexOf("assets/") === 0 ? beat.poster : "assets/" + beat.poster,
        segment: beat.segment
          ? beat.segment.indexOf("assets/") === 0
            ? beat.segment
            : "assets/" + beat.segment
          : null,
        durationSec: beat.durationSec || 6,
      };
    });
  }

  function createPlayer(options) {
    var video = document.getElementById(options.videoId);
    var poster = document.getElementById(options.posterId);
    var overlayEl = options.overlayId ? document.getElementById(options.overlayId) : null;
    var stepEl = options.stepId ? document.getElementById(options.stepId) : null;
    var titleEl = options.titleId ? document.getElementById(options.titleId) : null;
    var captionEl = options.captionId ? document.getElementById(options.captionId) : null;
    var playBtn = options.playBtnId ? document.getElementById(options.playBtnId) : null;
    var prevBtn = options.prevBtnId ? document.getElementById(options.prevBtnId) : null;
    var nextBtn = options.nextBtnId ? document.getElementById(options.nextBtnId) : null;
    var dotsEl = options.dotsId ? document.getElementById(options.dotsId) : null;
    var autoplay = !!options.autoplay;
    var loop = !!options.loop;
    var posterOnly = !!options.posterOnly;

    if (!video || !poster) return null;

    var beats = [];
    var index = 0;
    var playing = false;
    var timer = null;
    var carouselTimer = null;
    var transitionMs = prefersReduced ? 0 : 280;

    function assetPath(file) {
      return file.indexOf("assets/") === 0 ? file : "assets/" + file.replace(/^assets\//, "");
    }

    function updateDots(i) {
      if (!dotsEl) return;
      dotsEl.querySelectorAll(".hyperframe-dot").forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === i);
        dot.setAttribute("aria-selected", dotIndex === i ? "true" : "false");
      });
    }

    function updateOverlay(beat, i) {
      if (stepEl) stepEl.textContent = "Step " + (i + 1) + " of " + beats.length;
      if (titleEl) titleEl.textContent = beat.title;
      if (captionEl) captionEl.textContent = beat.caption;
    }

    function showBeat(i, animate) {
      var beat = beats[i];
      if (!beat) return;
      index = i;

      function applyBeat() {
        poster.src = assetPath(beat.poster);
        poster.alt = beat.title + " — " + beat.caption;
        poster.classList.add("is-visible");
        video.classList.remove("is-visible");
        updateOverlay(beat, i);
        updateDots(i);
        if (overlayEl) overlayEl.classList.remove("is-changing");
        poster.classList.remove("is-fading");
      }

      if (animate && transitionMs > 0) {
        if (overlayEl) overlayEl.classList.add("is-changing");
        poster.classList.add("is-fading");
        setTimeout(applyBeat, transitionMs);
      } else {
        applyBeat();
      }
    }

    function playSegment() {
      var beat = beats[index];
      if (posterOnly || !beat || !beat.segment) {
        scheduleNext(beat ? beat.durationSec * 1000 : 4000);
        return;
      }

      var src = assetPath(beat.segment);
      video.src = src;
      video.currentTime = 0;
      video.classList.add("is-visible");
      poster.classList.remove("is-visible");

      video.play().catch(function () {
        video.classList.remove("is-visible");
        poster.classList.add("is-visible");
        scheduleNext(beat.durationSec * 1000);
      });

      video.onended = function () {
        video.classList.remove("is-visible");
        poster.classList.add("is-visible");
        scheduleNext(400);
      };
    }

    function scheduleNext(delay) {
      clearTimeout(timer);
      if (!playing) return;
      timer = setTimeout(function () {
        var nextIndex = index + 1;
        if (nextIndex >= beats.length) {
          if (loop) {
            showBeat(0, true);
            playSegment();
          } else {
            stop();
          }
          return;
        }
        showBeat(nextIndex, true);
        playSegment();
      }, delay);
    }

    function startCarousel() {
      stopCarousel();
      if (!autoplay || beats.length < 2) return;

      function tick() {
        var beat = beats[index];
        var delay = (beat ? beat.durationSec : 5) * 1000;
        carouselTimer = setTimeout(function () {
          var nextIndex = index + 1 >= beats.length ? 0 : index + 1;
          showBeat(nextIndex, !prefersReduced);
          tick();
        }, delay);
      }

      tick();
    }

    function stopCarousel() {
      clearTimeout(carouselTimer);
      carouselTimer = null;
    }

    function play() {
      playing = true;
      if (playBtn) {
        playBtn.textContent = "Pause demo";
        playBtn.setAttribute("aria-pressed", "true");
      }
      if (posterOnly) {
        stopCarousel();
        startCarousel();
      } else {
        playSegment();
      }
    }

    function stop() {
      playing = false;
      clearTimeout(timer);
      video.pause();
      stopCarousel();
      if (playBtn) {
        playBtn.textContent = "Play demo";
        playBtn.setAttribute("aria-pressed", "false");
      }
    }

    function togglePlay() {
      if (playing) stop();
      else play();
    }

    function goPrev() {
      var nextIndex = index - 1 < 0 ? (loop ? beats.length - 1 : 0) : index - 1;
      showBeat(nextIndex, !prefersReduced);
      if (playing && posterOnly) {
        stopCarousel();
        startCarousel();
      }
    }

    function goNext() {
      var nextIndex = index + 1 >= beats.length ? (loop ? 0 : beats.length - 1) : index + 1;
      showBeat(nextIndex, !prefersReduced);
      if (playing && posterOnly) {
        stopCarousel();
        startCarousel();
      }
    }

    if (playBtn) playBtn.addEventListener("click", togglePlay);
    if (prevBtn) prevBtn.addEventListener("click", goPrev);
    if (nextBtn) nextBtn.addEventListener("click", goNext);

    if (dotsEl) {
      dotsEl.addEventListener("click", function (event) {
        var dot = event.target.closest(".hyperframe-dot");
        if (!dot) return;
        var dotIndex = parseInt(dot.getAttribute("data-index"), 10);
        if (Number.isNaN(dotIndex)) return;
        showBeat(dotIndex, !prefersReduced);
        if (playing && posterOnly) {
          stopCarousel();
          startCarousel();
        }
      });
    }

    function buildDots() {
      if (!dotsEl) return;
      dotsEl.innerHTML = "";
      beats.forEach(function (_beat, dotIndex) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "hyperframe-dot" + (dotIndex === 0 ? " is-active" : "");
        dot.setAttribute("role", "tab");
        dot.setAttribute("data-index", String(dotIndex));
        dot.setAttribute("aria-label", "Step " + (dotIndex + 1));
        dotsEl.appendChild(dot);
      });
    }

    function initBeats(rawBeats) {
      beats = normalizeBeats(rawBeats);
      buildDots();
      showBeat(0, false);
      if (autoplay) {
        playing = true;
        startCarousel();
      }
    }

    fetch("assets/hyperframes-manifest.json")
      .then(function (res) {
        return res.ok ? res.json() : null;
      })
      .then(function (manifest) {
        var raw = manifest && manifest.beats && manifest.beats.length ? manifest.beats : FALLBACK_BEATS;
        initBeats(raw);
      })
      .catch(function () {
        initBeats(FALLBACK_BEATS);
      });

    return { showBeat: showBeat, play: play, stop: stop };
  }

  createPlayer({
    videoId: "hyperframe-video",
    posterId: "hyperframe-poster",
    stepId: "hyperframe-step",
    titleId: "hyperframe-title",
    captionId: "hyperframe-caption",
    playBtnId: "hf-play",
    prevBtnId: "hf-prev",
    nextBtnId: "hf-next",
    dotsId: "hyperframe-dots",
  });

  createPlayer({
    videoId: "hero-hyperframe-video",
    posterId: "hero-hyperframe-poster",
    overlayId: "hero-hyperframe-overlay",
    stepId: "hero-hyperframe-step",
    titleId: "hero-hyperframe-title",
    captionId: "hero-hyperframe-caption",
    prevBtnId: "hero-hf-prev",
    nextBtnId: "hero-hf-next",
    dotsId: "hero-hyperframe-dots",
    autoplay: true,
    loop: true,
    posterOnly: true,
  });
})();
