/** Collins agency landing — hyperframe storyboard. */

export const COLLINS_STORYBOARD = [
  {
    id: "01",
    slug: "hero",
    hash: "#top",
    title: "Collins agency",
    caption: "Digital marketing & automation for brands that want clarity, not bloat",
    durationSec: 6,
  },
  {
    id: "02",
    slug: "services",
    hash: "#services",
    title: "Full-funnel services",
    caption: "Strategy, content, paid media, and automation under one senior team",
    durationSec: 7,
  },
  {
    id: "03",
    slug: "demo",
    hash: "#demo",
    title: "How we work",
    caption: "A guided walkthrough of our approach — step by step",
    durationSec: 6,
  },
  {
    id: "04",
    slug: "results",
    hash: "#proof",
    title: "Client results",
    caption: "Outcomes from retainers and campaign partnerships we stand behind",
    durationSec: 7,
  },
  {
    id: "05",
    slug: "faq",
    hash: "#faq",
    title: "Working together",
    caption: "Engagement models, timelines, and what to expect from a Collins partnership",
    durationSec: 6,
  },
  {
    id: "06",
    slug: "contact",
    hash: "#start",
    title: "Book a strategy call",
    caption: "Tell us where growth is stuck — we will map the next 90 days with you",
    durationSec: 6,
  },
  {
    id: "07",
    slug: "endcard",
    hash: "#top",
    title: "Collins",
    caption: "Unify · Automate · Amplify — your growth agency",
    durationSec: 4,
  },
];

export const COLLINS_GREEN = {
  bg: "#0f1a0a",
  text: "#d2f380",
  border: "#39ff14",
  accent: "#39ff14",
};

export function beatAssetBase(beat) {
  return `collins-demo-${beat.id}-${beat.slug}`;
}
