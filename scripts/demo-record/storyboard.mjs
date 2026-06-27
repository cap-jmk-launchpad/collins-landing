/** Collins agency landing — hyperframe storyboard. */

/** Motion rhythm (HyperFrames website-to-video pacing). */
export const MOTION = {
  holdMs: 4800,
  heroHoldMs: 4200,
  endcardHoldMs: 3800,
  scrollMs: 2600,
  settleMs: 350,
  loadSettleMs: 700,
  posterLeadMs: 400,
  heroTransitionMs: 480,
  reelLoadMs: 500,
  reelBufferMs: 600,
};

/** Six Collins method steps — hero carousel at #top. */
export const HERO_METHOD_STORYBOARD = [
  {
    id: "01",
    slug: "discover",
    type: "hero",
    heroIndex: 0,
    hash: "#top",
    title: "Discover",
    caption: "Start with a 30-minute strategy call. Tell us where momentum is stuck.",
    poster: "hero-method-01-discover.png",
  },
  {
    id: "02",
    slug: "strategy",
    type: "hero",
    heroIndex: 1,
    hash: "#top",
    title: "Map the sprint",
    caption: "Week one maps SEO, paid, content, and automation to your KPIs.",
    poster: "hero-method-02-strategy.png",
  },
  {
    id: "03",
    slug: "scope",
    type: "hero",
    heroIndex: 2,
    hash: "#top",
    title: "Scope with clarity",
    caption: "Transparent line items, senior access, and reporting cadence locked in.",
    poster: "hero-method-03-scope.png",
  },
  {
    id: "04",
    slug: "ship",
    type: "hero",
    heroIndex: 3,
    hash: "#top",
    title: "Ship campaigns",
    caption: "Content, paid media, and nurture launch from one shared playbook.",
    poster: "hero-method-04-ship.png",
  },
  {
    id: "05",
    slug: "automate",
    type: "hero",
    heroIndex: 4,
    hash: "#top",
    title: "Automate and connect",
    caption: "CRM and workflows wired to the same growth plan.",
    poster: "hero-method-05-automate.png",
  },
  {
    id: "06",
    slug: "measure",
    type: "hero",
    heroIndex: 5,
    hash: "#top",
    title: "Measure and compound",
    caption: "Revenue tied reporting and quarterly channel tuning.",
    poster: "hero-method-06-measure.png",
  },
];

/** Brand release reel — cinematic method story (no site scroll tour). */
export const BRAND_REEL_STORYBOARD = [
  {
    id: "00",
    slug: "intro",
    type: "title",
    title: "Collins",
    caption: "Digital marketing and automation for brands that want clarity",
    poster: "hero-method-01-discover.png",
    durationMs: 3600,
  },
  ...HERO_METHOD_STORYBOARD.map((beat) => ({
    ...beat,
    type: "method",
    step: beat.id,
    durationMs: beat.slug === "measure" ? 6200 : 5600,
  })),
  {
    id: "07",
    slug: "outro",
    type: "title",
    title: "Unify. Automate. Amplify.",
    caption: "Your growth agency.",
    poster: "hero-method-06-measure.png",
    durationMs: 4200,
  },
];

/** @deprecated Legacy scroll tour — kept for reference only. */
export const PAGE_STORYBOARD = [];

export const COLLINS_STORYBOARD = BRAND_REEL_STORYBOARD;

export const COLLINS_GREEN = {
  bg: "#0f1a0a",
  text: "#d2f380",
  border: "#39ff14",
  accent: "#39ff14",
};

export function beatAssetBase(beat) {
  return `collins-demo-${beat.id}-${beat.slug}`;
}

export function beatPosterFile(beat) {
  if (beat.poster) return beat.poster;
  return `${beatAssetBase(beat)}.png`;
}

export function reelTotalDurationMs(storyboard = BRAND_REEL_STORYBOARD) {
  return storyboard.reduce((sum, beat) => sum + (beat.durationMs || MOTION.heroHoldMs), 0);
}

export function buildReelTimeline(storyboard = BRAND_REEL_STORYBOARD) {
  let elapsedMs = MOTION.reelLoadMs;
  return storyboard.map((beat, index) => {
    const startSec = Math.round((elapsedMs / 1000) * 100) / 100;
    const durationMs = beat.durationMs || MOTION.heroHoldMs;
    elapsedMs += durationMs;
    const nextStartMs = storyboard[index + 1]
      ? elapsedMs
      : elapsedMs + MOTION.reelBufferMs;
    const durationSec = Math.round(((nextStartMs - startSec * 1000) / 1000) * 100) / 100;
    return { beat, startSec, durationSec };
  });
}
