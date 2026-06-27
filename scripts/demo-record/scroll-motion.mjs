/**
 * HyperFrames-inspired scroll motion — hold / travel rhythm with eased camera moves.
 * @see https://github.com/heygen-com/hyperframes (website-to-video pacing)
 */

/** easeInOutCubic — smooth acceleration and deceleration */
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** easeOutCubic — gentle landing at section */
export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export const DEFAULT_MOTION = {
  /** Pause on each section before traveling */
  holdMs: 4800,
  /** Eased scroll between anchors */
  scrollMs: 2600,
  /** Settle after scroll before poster snap */
  settleMs: 350,
  /** Initial page load settle */
  loadSettleMs: 600,
};

/**
 * Smooth scroll to absolute Y using rAF + easing (runs in page context).
 */
export async function smoothScrollTo(page, targetY, durationMs, easingName = "inOutCubic") {
  await page.evaluate(
    async ({ targetY, durationMs, easingName }) => {
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }
      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
      }
      const ease = easingName === "outCubic" ? easeOutCubic : easeInOutCubic;
      const startY = window.scrollY;
      const dist = targetY - startY;
      if (Math.abs(dist) < 2) return;

      await new Promise((resolve) => {
        const start = performance.now();
        function step(now) {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / durationMs);
          window.scrollTo(0, startY + dist * ease(t));
          if (t < 1) requestAnimationFrame(step);
          else resolve();
        }
        requestAnimationFrame(step);
      });
    },
    { targetY, durationMs, easingName }
  );
}

/** Resolve scroll Y for a hash anchor (0 for #top). */
export async function scrollYForHash(page, hash) {
  if (!hash || hash === "#top") {
    return 0;
  }
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    return Math.min(Math.max(0, absoluteTop - 24), maxScroll);
  }, hash);
}

/** Hide live subtitle overlays so they are not burned into capture. */
export async function hideLiveOverlays(page) {
  await page.addStyleTag({
    content: `
      .hyperframe-overlay,
      .hyperframe-subtitles,
      .hyperframes-controls,
      .hero-carousel-nav,
      .hero-hyperframe-dots { display: none !important; visibility: hidden !important; }
    `,
  });
}

/** Force all reveal elements visible for consistent capture. */
export async function forceRevealsVisible(page) {
  await page.addStyleTag({
    content: `.reveal { opacity: 1 !important; transform: none !important; }`,
  });
}
