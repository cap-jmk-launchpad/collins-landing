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
      caption: "A guided walkthrough of our approach — captured as hyperframes",
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

  function createPlayer(options) {
    var video = document.getElementById(options.videoId);
    var poster = document.getElementById(options.posterId);
    var stepEl = document.getElementById(options.stepId);
    var titleEl = document.getElementById(options.titleId);
    var captionEl = document.getElementById(options.captionId);
    var playBtn = options.playBtnId ? document.getElementById(options.playBtnId) : null;
    var prevBtn = options.prevBtnId ? document.getElementById(options.prevBtnId) : null;
    var nextBtn = options.nextBtnId ? document.getElementById(options.nextBtnId) : null;
    var dotsEl = options.dotsId ? document.getElementById(options.dotsId) : null;

    if (!video || !poster) return null;

    var beats = [];
    var index = 0;
    var playing = false;
    var timer = null;

    function assetPath(base, file) {
      return file.indexOf("assets/") === 0 ? file : base + file;
    }

    function showBeat(i) {
      var beat = beats[i];
      if (!beat) return;
      index = i;

      var posterSrc = assetPath("assets/", beat.poster.replace(/^assets\//, ""));
      poster.src = posterSrc;
      poster.classList.add("is-visible");
      video.classList.remove("is-visible");

      if (stepEl) stepEl.textContent = "Step " + (i + 1) + " of " + beats.length;
      if (titleEl) titleEl.textContent = beat.title;
      if (captionEl) captionEl.textContent = beat.caption;

      if (dotsEl) {
        dotsEl.querySelectorAll(".hyperframe-dot").forEach(function (dot, dotIndex) {
          dot.classList.toggle("is-active", dotIndex === i);
          dot.setAttribute("aria-selected", dotIndex === i ? "true" : "false");
        });
      }
    }

    function playSegment() {
      var beat = beats[index];
      if (!beat || !beat.segment) {
        scheduleNext(beat ? beat.durationSec * 1000 : 4000);
        return;
      }

      var src = assetPath("assets/", beat.segment.replace(/^assets\//, ""));
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
        if (index + 1 >= beats.length) {
          stop();
          return;
        }
        showBeat(index + 1);
        playSegment();
      }, delay);
    }

    function play() {
      playing = true;
      if (playBtn) {
        playBtn.textContent = "Pause demo";
        playBtn.setAttribute("aria-pressed", "true");
      }
      playSegment();
    }

    function stop() {
      playing = false;
      clearTimeout(timer);
      video.pause();
      if (playBtn) {
        playBtn.textContent = "Play demo";
        playBtn.setAttribute("aria-pressed", "false");
      }
    }

    function togglePlay() {
      if (playing) stop();
      else play();
    }

    function prev() {
      stop();
      showBeat(Math.max(0, index - 1));
    }

    function next() {
      stop();
      showBeat(Math.min(beats.length - 1, index + 1));
    }

    if (playBtn) playBtn.addEventListener("click", togglePlay);
    if (prevBtn) prevBtn.addEventListener("click", prev);
    if (nextBtn) nextBtn.addEventListener("click", next);

    fetch("assets/hyperframes-manifest.json")
      .then(function (res) {
        return res.ok ? res.json() : null;
      })
      .then(function (manifest) {
        beats = manifest && manifest.beats && manifest.beats.length ? manifest.beats : FALLBACK_BEATS;
        beats = beats.map(function (beat) {
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

        if (dotsEl) {
          dotsEl.innerHTML = "";
          beats.forEach(function (_beat, dotIndex) {
            var dot = document.createElement("button");
            dot.type = "button";
            dot.className = "hyperframe-dot" + (dotIndex === 0 ? " is-active" : "");
            dot.setAttribute("role", "tab");
            dot.setAttribute("aria-label", "Frame " + (dotIndex + 1));
            dot.addEventListener("click", function () {
              stop();
              showBeat(dotIndex);
            });
            dotsEl.appendChild(dot);
          });
        }

        showBeat(0);
      })
      .catch(function () {
        beats = FALLBACK_BEATS;
        showBeat(0);
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
    stepId: null,
    titleId: null,
    captionId: null,
  });
})();
