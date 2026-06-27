(function () {
  document.getElementById("year").textContent = String(new Date().getFullYear());

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var BEAT_TRANSITION_MS = prefersReduced ? 0 : 420;

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

  var HERO_BEATS = [
    {
      id: "01",
      title: "Discover",
      caption: "Start with a 30-minute strategy call. Tell us where momentum is stuck.",
      poster: "assets/hero-method-01-discover.png",
      durationSec: 5,
    },
    {
      id: "02",
      title: "Map the sprint",
      caption: "Week one maps SEO, paid, content, and automation to your KPIs.",
      poster: "assets/hero-method-02-strategy.png",
      durationSec: 5,
    },
    {
      id: "03",
      title: "Scope with clarity",
      caption: "Transparent line items, senior access, and reporting cadence locked in.",
      poster: "assets/hero-method-03-scope.png",
      durationSec: 5,
    },
    {
      id: "04",
      title: "Ship campaigns",
      caption: "Content, paid media, and nurture launch from one shared playbook.",
      poster: "assets/hero-method-04-ship.png",
      durationSec: 5,
    },
    {
      id: "05",
      title: "Automate and connect",
      caption: "CRM and workflows wired to the same growth plan.",
      poster: "assets/hero-method-05-automate.png",
      durationSec: 5,
    },
    {
      id: "06",
      title: "Measure and compound",
      caption: "Revenue tied reporting and quarterly channel tuning.",
      poster: "assets/hero-method-06-measure.png",
      durationSec: 5,
    },
  ];

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
      caption: "A guided walkthrough of our approach, step by step",
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
      caption: "Tell us where growth is stuck. We will map the next 90 days with you.",
      poster: "assets/collins-demo-06-contact.png",
      segment: "assets/segments/collins-demo-06-contact.webm",
      durationSec: 6,
    },
    {
      id: "07",
      title: "Collins",
      caption: "Unify, automate, amplify. Your growth agency.",
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
        startSec: beat.startSec != null ? beat.startSec : null,
        durationSec: beat.durationSec || 6,
      };
    });
  }

  var DEFAULT_FULL_VIDEO = "assets/collins-agency-demo.mp4";

  function buildBeatStarts(rawBeats) {
    if (rawBeats.length && rawBeats[0].startSec != null) {
      return rawBeats.map(function (beat) {
        return beat.startSec;
      });
    }
    var starts = [];
    var elapsed = 0;
    rawBeats.forEach(function (beat) {
      starts.push(elapsed);
      elapsed += beat.durationSec || 0;
    });
    return starts;
  }

  function beatIndexAtTime(starts, time) {
    for (var i = starts.length - 1; i >= 0; i--) {
      if (time >= starts[i] - 0.05) return i;
    }
    return 0;
  }

  function pulseButton(btn) {
    if (!btn || prefersReduced) return;
    btn.classList.add("is-pressed");
    window.setTimeout(function () {
      btn.classList.remove("is-pressed");
    }, 180);
  }

  function nextFrame(fn) {
    requestAnimationFrame(function () {
      requestAnimationFrame(fn);
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
    var useFullVideo = !!options.useFullVideo;

    if (!video || !poster) return null;

    var stage = poster.closest(".hyperframes-stage");
    var beats = [];
    var beatStarts = [];
    var index = 0;
    var playing = false;
    var hasStarted = false;
    var timer = null;
    var carouselTimer = null;
    var fullVideoSrc = null;
    var beatSwapToken = 0;
    var transitionMs = BEAT_TRANSITION_MS;

    function assetPath(file) {
      return file.indexOf("assets/") === 0 ? file : "assets/" + file.replace(/^assets\//, "");
    }

    function updateDots(i) {
      if (!dotsEl) return;
      dotsEl.querySelectorAll(".hyperframe-dot").forEach(function (dot, dotIndex) {
        var isActive = dotIndex === i;
        dot.classList.toggle("is-active", isActive);
        if (isActive && !prefersReduced) {
          dot.classList.remove("is-activating");
          void dot.offsetWidth;
          dot.classList.add("is-activating");
        }
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }

    function tickStepCounter(i) {
      if (!stepEl) return;
      stepEl.textContent = "Step " + (i + 1) + " of " + beats.length;
      if (prefersReduced) return;
      stepEl.classList.remove("is-ticking");
      void stepEl.offsetWidth;
      stepEl.classList.add("is-ticking");
    }

    function updateOverlayContent(beat, i) {
      tickStepCounter(i);
      if (titleEl) titleEl.textContent = beat.title;
      if (captionEl) captionEl.textContent = beat.caption;
    }

    function settleOverlayEnter() {
      if (!overlayEl) return;
      overlayEl.classList.remove("is-exiting");
      overlayEl.classList.add("is-entering");
      nextFrame(function () {
        overlayEl.classList.add("is-settled");
        window.setTimeout(function () {
          overlayEl.classList.remove("is-entering", "is-settled");
        }, transitionMs);
      });
    }

    function showPosterFrame() {
      video.classList.remove("is-visible", "is-revealing-in");
      poster.classList.add("is-visible");
      poster.classList.remove("is-revealing-out", "is-fading", "is-entering");
      if (stage) stage.classList.remove("is-playing");
    }

    function showVideoFrame(animateReveal) {
      if (animateReveal && transitionMs > 0 && poster.classList.contains("is-visible")) {
        poster.classList.add("is-revealing-out");
        video.classList.add("is-revealing-in");
        window.setTimeout(function () {
          poster.classList.remove("is-visible", "is-revealing-out");
          video.classList.add("is-visible");
          nextFrame(function () {
            video.classList.remove("is-revealing-in");
          });
        }, Math.round(transitionMs * 0.65));
      } else {
        poster.classList.remove("is-visible", "is-revealing-out", "is-fading", "is-entering");
        video.classList.add("is-visible");
        video.classList.remove("is-revealing-in");
      }
      if (stage) stage.classList.add("is-playing");
    }

    function isVideoStageActive() {
      return useFullVideo && hasStarted && video.classList.contains("is-visible");
    }

    function showBeat(i, animate) {
      var beat = beats[i];
      if (!beat) return;
      var prevIndex = index;
      var direction = i > prevIndex ? 1 : i < prevIndex ? -1 : 0;
      var subtitleOnly = isVideoStageActive();

      function applyBeat() {
        index = i;
        if (!useFullVideo || !hasStarted) {
          poster.src = assetPath(beat.poster);
          poster.alt = beat.title + ": " + beat.caption;
        }
        updateOverlayContent(beat, i);
        updateDots(i);
        poster.classList.remove("is-fading");
      }

      if (animate && transitionMs > 0) {
        var token = ++beatSwapToken;
        if (!subtitleOnly) {
          if (stage) {
            stage.classList.add("is-beat-changing");
            if (direction) stage.style.setProperty("--beat-direction", String(direction));
          }
          poster.classList.add("is-fading");
        }
        if (overlayEl) overlayEl.classList.add("is-exiting");

        window.setTimeout(function () {
          if (token !== beatSwapToken) return;
          applyBeat();
          if (!subtitleOnly) {
            poster.classList.add("is-visible", "is-entering");
          }
          settleOverlayEnter();
          nextFrame(function () {
            poster.classList.remove("is-entering");
            if (stage) stage.classList.remove("is-beat-changing");
          });
        }, transitionMs);
      } else {
        index = i;
        applyBeat();
        if (overlayEl) overlayEl.classList.remove("is-exiting", "is-entering", "is-settled");
      }
    }

    function syncFromVideoTime() {
      if (!useFullVideo || !beats.length) return;
      var nextIndex = beatIndexAtTime(beatStarts, video.currentTime);
      if (nextIndex !== index) showBeat(nextIndex, !prefersReduced);
    }

    function seekToBeat(i) {
      if (!beats[i]) return;
      showBeat(i, !prefersReduced);
      if (useFullVideo && fullVideoSrc) {
        video.currentTime = beatStarts[i] || 0;
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
      showVideoFrame(!prefersReduced);

      video.play().catch(function () {
        showPosterFrame();
        scheduleNext(beat.durationSec * 1000);
      });

      video.onended = function () {
        showPosterFrame();
        scheduleNext(400);
      };
    }

    function playFullVideo() {
      if (!fullVideoSrc) {
        playSegment();
        return;
      }

      if (!video.src || video.getAttribute("data-full-src") !== fullVideoSrc) {
        video.src = fullVideoSrc;
        video.setAttribute("data-full-src", fullVideoSrc);
      }

      if (video.currentTime < (beatStarts[index] || 0) - 0.05) {
        video.currentTime = beatStarts[index] || 0;
      }

      showVideoFrame(!hasStarted && !prefersReduced);
      hasStarted = true;

      video.play().catch(function () {
        showPosterFrame();
        playing = false;
        if (playBtn) {
          playBtn.textContent = "Play demo";
          playBtn.setAttribute("aria-pressed", "false");
        }
      });
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
      pulseButton(playBtn);
      if (playBtn) {
        playBtn.textContent = "Pause demo";
        playBtn.setAttribute("aria-pressed", "true");
      }
      if (posterOnly) {
        stopCarousel();
        startCarousel();
      } else if (useFullVideo) {
        playFullVideo();
      } else {
        playSegment();
      }
    }

    function stop() {
      playing = false;
      clearTimeout(timer);
      video.pause();
      stopCarousel();
      if (useFullVideo && !hasStarted) {
        showPosterFrame();
      } else if (useFullVideo && hasStarted) {
        if (stage) stage.classList.remove("is-playing");
      }
      if (playBtn) {
        playBtn.textContent = "Play demo";
        playBtn.setAttribute("aria-pressed", "false");
      }
    }

    function onVideoEnded() {
      if (!useFullVideo) return;
      playing = false;
      hasStarted = false;
      showBeat(0, false);
      showPosterFrame();
      video.currentTime = 0;
      if (playBtn) {
        playBtn.textContent = "Play demo";
        playBtn.setAttribute("aria-pressed", "false");
      }
    }

    function togglePlay() {
      pulseButton(playBtn);
      if (playing) stop();
      else play();
    }

    function goPrev() {
      pulseButton(prevBtn);
      var nextIndex = index - 1 < 0 ? (loop ? beats.length - 1 : 0) : index - 1;
      if (useFullVideo) {
        seekToBeat(nextIndex);
        if (playing) video.play().catch(function () {});
        return;
      }
      showBeat(nextIndex, !prefersReduced);
      if (playing && posterOnly) {
        stopCarousel();
        startCarousel();
      }
    }

    function goNext() {
      pulseButton(nextBtn);
      var nextIndex = index + 1 >= beats.length ? (loop ? 0 : beats.length - 1) : index + 1;
      if (useFullVideo) {
        seekToBeat(nextIndex);
        if (playing) video.play().catch(function () {});
        return;
      }
      showBeat(nextIndex, !prefersReduced);
      if (playing && posterOnly) {
        stopCarousel();
        startCarousel();
      }
    }

    if (playBtn) playBtn.addEventListener("click", togglePlay);
    if (prevBtn) prevBtn.addEventListener("click", goPrev);
    if (nextBtn) nextBtn.addEventListener("click", goNext);

    if (useFullVideo) {
      video.addEventListener("timeupdate", syncFromVideoTime);
      video.addEventListener("ended", onVideoEnded);
    }

    if (dotsEl) {
      dotsEl.addEventListener("click", function (event) {
        var dot = event.target.closest(".hyperframe-dot");
        if (!dot) return;
        pulseButton(dot);
        var dotIndex = parseInt(dot.getAttribute("data-index"), 10);
        if (Number.isNaN(dotIndex)) return;
        if (useFullVideo) {
          seekToBeat(dotIndex);
          if (playing) video.play().catch(function () {});
          return;
        }
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

    function initBeats(rawBeats, videoSrc) {
      beats = normalizeBeats(rawBeats);
      beatStarts = buildBeatStarts(beats);
      fullVideoSrc = videoSrc || null;
      buildDots();
      showBeat(0, false);
      showPosterFrame();

      if (useFullVideo && fullVideoSrc) {
        video.poster = assetPath(beats[0].poster);
        video.preload = "metadata";
      }

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
        var raw =
          posterOnly && manifest && manifest.heroBeats && manifest.heroBeats.length
            ? manifest.heroBeats
            : posterOnly
              ? HERO_BEATS
              : manifest && manifest.beats && manifest.beats.length
                ? manifest.beats
                : FALLBACK_BEATS;
        var videoSrc = null;
        if (useFullVideo) {
          videoSrc =
            manifest && manifest.fullVideo
              ? assetPath(manifest.fullVideo)
              : DEFAULT_FULL_VIDEO;
        }
        initBeats(raw, videoSrc);
      })
      .catch(function () {
        initBeats(
          posterOnly ? HERO_BEATS : FALLBACK_BEATS,
          useFullVideo ? DEFAULT_FULL_VIDEO : null
        );
      });

    return { showBeat: showBeat, play: play, stop: stop };
  }

  function initDemoVideo() {
    var video = document.getElementById("hyperframe-video");
    var overlayEl = document.getElementById("hyperframe-overlay");
    var titleEl = document.getElementById("hyperframe-title");
    var captionEl = document.getElementById("hyperframe-caption");
    var stage = document.getElementById("hyperframe-stage");

    if (!video) return;

    var beats = [];
    var beatStarts = [];
    var index = 0;
    var transitionMs = BEAT_TRANSITION_MS;

    function showBeat(i, animate) {
      var beat = beats[i];
      if (!beat) return;
      index = i;
      if (titleEl) titleEl.textContent = beat.title;
      if (captionEl) captionEl.textContent = beat.caption;

      if (!animate || !overlayEl || transitionMs <= 0) {
        if (overlayEl) overlayEl.classList.remove("is-exiting", "is-entering", "is-settled");
        return;
      }

      overlayEl.classList.add("is-exiting");
      window.setTimeout(function () {
        overlayEl.classList.remove("is-exiting");
        overlayEl.classList.add("is-entering");
        nextFrame(function () {
          overlayEl.classList.add("is-settled");
          window.setTimeout(function () {
            overlayEl.classList.remove("is-entering", "is-settled");
          }, transitionMs);
        });
      }, transitionMs);
    }

    function syncFromVideoTime() {
      if (!beats.length) return;
      var nextIndex = beatIndexAtTime(beatStarts, video.currentTime);
      if (nextIndex !== index) showBeat(nextIndex, !prefersReduced);
    }

    function initBeats(rawBeats, videoSrc) {
      beats = normalizeBeats(rawBeats);
      beatStarts = buildBeatStarts(beats);
      if (videoSrc) video.src = videoSrc;
      showBeat(0, false);
    }

    video.addEventListener("timeupdate", syncFromVideoTime);
    video.addEventListener("play", function () {
      if (stage) stage.classList.add("is-playing");
    });
    video.addEventListener("pause", function () {
      if (stage) stage.classList.remove("is-playing");
    });
    video.addEventListener("ended", function () {
      if (stage) stage.classList.remove("is-playing");
      showBeat(0, false);
    });

    if (!prefersReduced) {
      var autoplayObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              video.play().catch(function () {});
              autoplayObserver.unobserve(video);
            }
          });
        },
        { threshold: 0.35 }
      );
      autoplayObserver.observe(video);
    }

    fetch("assets/hyperframes-manifest.json")
      .then(function (res) {
        return res.ok ? res.json() : null;
      })
      .then(function (manifest) {
        var raw =
          manifest && manifest.beats && manifest.beats.length ? manifest.beats : FALLBACK_BEATS;
        var videoSrc =
          manifest && manifest.fullVideo
            ? manifest.fullVideo.indexOf("assets/") === 0
              ? manifest.fullVideo
              : "assets/" + manifest.fullVideo
            : DEFAULT_FULL_VIDEO;
        initBeats(raw, videoSrc);
      })
      .catch(function () {
        initBeats(FALLBACK_BEATS, DEFAULT_FULL_VIDEO);
      });
  }

  initDemoVideo();

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
