---
name: landing-page-agency
description: >-
  Builds agency (not SaaS) marketing landing pages with neon dark theme, hero
  method carousel, video-only demo section, and conversion-focused copy. Use when
  creating or updating Collins-style agency landings, index.html, styles.css,
  script.js, brand.md, or design.md handoff pages.
---

# Agency Landing Page (Collins workflow)

Build a **senior-led agency** landing page on a dark neon canvas. Position as a partnership, not a self-serve product.

## When to use

- New or refreshed agency marketing site for Collins or a Collins-style client
- Hero carousel, demo theater, testimonials, FAQ, or CTA copy changes
- Applying `brand.md` + `design.md` tokens to `index.html` / `styles.css` / `script.js`

## Prerequisites

1. Read **BRAND.md** then **DESIGN.md** (root, `docs/`, or `deliverables/` copies stay in sync).
2. `npm install` in the Collins repo.
3. Hero method images exist or will be generated (`npm run hero:images`).

## Agent read order

1. `brand.md` — voice, positioning, CTAs, canonical services/testimonials
2. `design.md` — color tokens, typography, motion, hyperframes spec
3. `index.html` — section structure and copy surfaces
4. `styles.css` — CSS variables (single source of truth for hex)
5. `script.js` — scroll reveals, carousel, demo subtitle sync
6. `assets/hyperframes-manifest.json` — demo beat timings (after video build)

## Eleven conversion elements (landing-page-guide-v2 mapping)

Map each element to a Collins section. Do not drop elements when refactoring.

| # | Element | Collins surface |
|---|---------|-----------------|
| 1 | Category clarity | Hero `.eyebrow` ("Digital marketing agency") |
| 2 | Value headline | Hero `h1` + optional `.gradient-text` accent |
| 3 | Supporting promise | Hero `.lede` (one system, transparent partnerships) |
| 4 | Primary CTA | "Book a strategy call" — header, hero, `#start` |
| 5 | Secondary CTA | "Watch the demo" ghost → `#demo` |
| 6 | Above-fold proof | `.stat-grid` + `.avatar-row` under hero actions |
| 7 | Process visualization | Hero `.hero-theater` — **generated method images**, not page screenshots |
| 8 | Service depth | `#services` — six `.feature-card` items (canonical names from brand.md §7) |
| 9 | Productized proof | `#demo` — **video-only** theater with subtitle-style captions |
| 10 | Social proof | `#proof` — four attributed testimonials |
| 11 | Objection + close | `#faq` + `#start` `.final-cta` (primary + "Email the team") |

Sticky header nav (`Services`, `Demo`, `Results`, `FAQ`) and footer four-column grid support trust but are not counted in the eleven.

## Positioning rules

- **Agency, not SaaS.** No "Start free trial", "Sign up", "Get started free", or feature-module grids for software Collins does not sell.
- **Primary CTA:** "Book a strategy call" (header may shorten to "Book a call").
- **Secondary:** "Watch the demo", "Email the team" (`hello@collins.app`).
- **Services:** Use exact names from brand.md §7 (Growth strategy, SEO & content, Paid media, Automation & CRM, Analytics & CRO, Retainer partnerships).

## Copy rules

- Short sentences. Operator-led tone. Evidence over superlatives.
- **No em dashes** (—). Use periods or commas instead.
- No enterprise jargon walls or abstract "holistic orchestration" filler.
- Testimonials: role + company attribution; quotes from brand.md §7 when possible.

## Visual system

### Theme

- Dark-first canvas: `--bg-deep` `#040806`, layered surfaces, neon green accent `#39ff14`.
- Never revert to legacy blues (`#0060b9`, `#485668`) or light SaaS-white marketing sections.
- `.bg-glow` radial atmosphere over deep background.

### Typography

- **Plus Jakarta Sans** — headings, buttons, stats, eyebrows, hyperframe titles
- **Inter** — lede, section lede, FAQ answers, footer, captions
- Load via Google Fonts link in `index.html` (same families as design.md §3)

### Motion (design.md §7)

- Tokens in `:root` (`--duration-beat`, `--ease-out`, `--motion-beat`, etc.)
- Scroll reveals: `.reveal` + `IntersectionObserver` in `script.js`
- Hero carousel: poster crossfade + dot activation; **no Ken Burns zoom** on images
- Primary CTAs: hover lift/glow only — **no infinite pulse**
- Honor `prefers-reduced-motion`: instant beats, visible reveals, skip count-up

## Hero carousel (method images)

The right column is a **poster-only** hyperframe player — not a screen recording of the landing page.

```
.hero-theater
  .hyperframes-stage
    .hyperframe-poster   ← generated method cards
    .hyperframe-dots    ← 6 steps
```

Workflow:

1. Define six method steps (discover → measure) in `scripts/generate-hero-method-images.mjs`.
2. Run `npm run hero:images` → `assets/hero-method-0X-*.png`.
3. Wire manifest `heroBeats` in `assets/hyperframes-manifest.json` for carousel timing.
4. `script.js` `createPlayer({ posterOnly: true, autoplay: true, loop: true })` drives crossfade.

Posters use icon + step number + neon accent per step. Do not substitute full-page Playwright screenshots.

## Demo section (video-only + subtitles)

`#demo` plays `assets/collins-agency-demo.mp4` with native `<video controls>`.

- Subtitle overlay: `.hyperframe-overlay` with title + caption only (no duplicate step chrome in HTML during playback).
- Position overlay **above native video controls** (`bottom: 3.5rem` in `styles.css` `.demo-stage`).
- Beat sync from `assets/hyperframes-manifest.json` via `syncFromVideoTime()` in `script.js`.
- When demo copy changes, update `scripts/demo-record/storyboard.mjs` and rebuild video (`npm run demo:build`).

## Step-by-step workflow

```
Task progress:
- [ ] Read brand.md + design.md
- [ ] Audit 11 conversion elements in index.html
- [ ] Apply tokens in styles.css (no stray hex in components)
- [ ] Write copy (agency CTAs, no em dashes)
- [ ] Generate hero method images if missing
- [ ] Wire hero carousel + demo manifest beats
- [ ] Verify reduced-motion path
- [ ] npm run serve → manual QA at :4173
```

## Key commands

| Command | Purpose |
|---------|---------|
| `npm run serve` | Local preview at http://localhost:4173 |
| `npm run hero:images` | Regenerate `assets/hero-method-*.png` |
| `npm run demo:build` | Rebuild demo MP4 + manifest (after storyboard/copy changes) |

## Pitfalls (Collins learnings)

| Issue | Fix |
|-------|-----|
| SaaS positioning / trial CTAs | Replace with "Book a strategy call"; re-read brand.md §7–8 |
| Em dashes in copy | Search for `—`; rewrite with short sentences |
| Hero shows page screenshots | Use `hero:images` generated cards only |
| Duplicate subtitle layers on demo video | Demo section: one `.hyperframe-overlay`; captions sync from manifest, not a second text stack |
| Stray hex in HTML/CSS | Map to `--neon-green`, `--bg-elevated`, etc. |
| Demo beats describe software | Align captions with agency method storyboard |
| Manifest out of sync | Re-run `demo:build` after `storyboard.mjs` edits |
| Motion overload on CTAs | No looping animation on primary buttons |
| Light-mode sections | Keep `.panel-muted` bands; dark canvas throughout |
| Image clipping in hero cards | Check `object-fit` and padding in generated poster HTML template |

## File structure

```
collins/
├── index.html          # Landing markup + sections
├── styles.css          # Design tokens + components
├── script.js           # Reveals, carousel, demo sync
├── brand.md            # Voice, CTAs, services, testimonials
├── design.md           # Colors, type, motion, hyperframes
├── assets/
│   ├── hero-method-*.png
│   ├── collins-agency-demo.mp4
│   └── hyperframes-manifest.json
└── scripts/
    └── generate-hero-method-images.mjs
```

## Majico handoff

Project ID in README: `ebd31ae8-0025-441d-8eea-7bbda8af377d`. Copy this skill to majico at:

`majico.xyz/.cursor/skills/landing-page-agency/SKILL.md`

(or symlink from Collins `skills/landing-page-agency/`).
