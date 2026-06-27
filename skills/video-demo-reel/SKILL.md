---
name: video-demo-reel
description: >-
  Records and stitches Collins agency demo videos — Playwright brand reel capture
  on demo-reel.html, textless hero PNGs with HTML copy overlays, FFmpeg encode,
  beat manifest timing. Use when building demo-reel, storyboard.mjs,
  record-hyperframes.mjs, collins-agency-demo.mp4, hero-method-reel images,
  or regenerating the #demo section video.
---

# Video / Demo Reel (Collins workflow)

Produce a **cinematic brand release video** of the Collins method: logo bookends, six method beats with staggered neon text, encoded MP4. **Not** a landing-page scroll tour.

The landing `#demo` section plays the MP4 **only** — copy is baked into the video. No HTML caption overlay there.

## When to use

- Regenerating `assets/collins-agency-demo.mp4` or `deliverables/collins-agency-demo.mp4`
- Editing beat copy, timing, or method step visuals
- Adding or changing method hero art (`hero-method-reel-*` vs `hero-method-*`)
- Applying VideoZero motion design (staging, holds, crossfades, reduced-motion)
- Porting this pipeline to another repo (see Majico handoff)

## Prerequisites

| Tool | How |
|------|-----|
| **Node.js** 18+ | `npm install` in repo root |
| **Playwright Chromium** | `npx playwright install chromium` |
| **FFmpeg** | `ffmpeg-static` devDependency (bundled); or system `ffmpeg` on PATH |

After clone:

```bash
npm install
npx playwright install chromium
npm run hero:images    # if hero-method-* or hero-method-reel-* missing
```

## Architecture

```
generate-hero-method-images.mjs
  → hero-method-*.png          (full text — hero carousel)
  → hero-method-reel-*.png     (textless — reel background only)

storyboard.mjs                 → beat definitions, MOTION constants
demo-reel.html / .css / .js    → 1920×1080 player (?record=1 for capture)
record-hyperframes.mjs         → Playwright → webm + manifest + poster PNGs
stitch-hyperframes.mjs         → FFmpeg H.264 → MP4 + rebalance startSec
index.html #demo               → <video> only (no caption overlay)
```

**HeyGen hyperframes concept:** Beat-based storytelling with `startSec` / `durationSec` per beat. Collins captures a dedicated `demo-reel.html` page instead of scrolling `index.html`.

## Dual image pipeline (no duplicate text)

`scripts/generate-hero-method-images.mjs` emits two variants per step:

| Prefix | `textless` | Used by |
|--------|------------|---------|
| `hero-method-{id}-{slug}.png` | `false` | Hero carousel posters (`posterOnly` in `script.js`) |
| `hero-method-reel-{id}-{slug}.png` | `true` | `demo-reel.js` method beat backgrounds |

**Rule:** Reel method beats show **textless** PNGs plus `.reel-method-card` HTML (step label, title, caption). Never put copy on the reel PNG *and* in the overlay — that doubles text in the encoded MP4.

Hero carousel uses **full-text** PNGs with no text overlay on top.

Regenerate both after visual changes:

```bash
npm run hero:images
```

## Storyboard (`scripts/demo-record/storyboard.mjs`)

Exports:

- `MOTION` — `animationSettleMs` (1500), `crossfadeMs` (680), `reelLoadMs`, `reelBufferMs`, holds
- `HERO_METHOD_STORYBOARD` — six method steps (discover → measure)
- `BRAND_REEL_STORYBOARD` — intro logo beat + 6 method + outro logo (8 beats)
- `COLLINS_STORYBOARD` — alias for brand reel

### Beat structure

| Beat | Type | Content |
|------|------|---------|
| 00 | title | Collins intro + `assets/logo.svg` |
| 01–06 | method | Textless reel art + HTML copy card |
| 07 | title | "Unify. Automate. Amplify." outro + `assets/logo.svg` |

Durations in storyboard: intro 4400ms, method 6400ms (measure 7000ms), outro 5000ms.

Edit copy in `storyboard.mjs` **and** keep `demo-reel.js` `BEATS` in sync (recorder reads storyboard; reel page reads `demo-reel.js`).

## Brand reel page (`demo-reel.html`)

Separate 1920×1080 page — **never** capture `index.html` for the demo MP4.

| Query | Behavior |
|-------|----------|
| `?record=1` | Disables autoplay; Playwright calls `__REEL_SHOW_BEAT__(index)` per beat |
| `?autoplay=1` | Preview full timeline in browser |

Recorder hooks: `window.__REEL_READY__`, `window.__REEL_SHOW_BEAT__`, `window.__REEL_BEATS__`.

### Logo intro / outro

Title beats render real `assets/logo.svg` above headline (see `titleMarkup()` in `demo-reel.js`). Do not substitute raster logos — SVG keeps neon drop-shadow crisp at 1920×1080.

### No Ken Burns — letterbox instead

Method images are **static**. Forbidden: scale/zoom animations on art (causes crop).

In `demo-reel.css`:

- `.reel-method-image-wrap` — `aspect-ratio: 3 / 2` letterboxed inside 16:9 stage
- `.reel-method-image` — `object-fit: contain; object-position: center`
- Beat transitions use opacity crossfade (`--crossfade: 680ms`), not image scale

### Staggered text animations

On each method beat, CSS entrances cascade (~100–140ms apart):

| Element | Animation delay |
|---------|-----------------|
| `.reel-method-card` | 280ms |
| `.reel-step-label` | 420ms |
| `.reel-method-title` | 520ms |
| `.reel-method-caption` | 700ms |

Recorder waits `MOTION.animationSettleMs` (1500ms) after `showBeat()` so the stack finishes before the readable hold.

Title cards use the same slow-in/out pattern (`reel-rise`, `reel-rule-in`).

### Reduced motion

`demo-reel.css` `@media (prefers-reduced-motion: reduce)` disables animations — instant final states for preview accessibility.

## Recording (`record-hyperframes.mjs`)

**Terminal 1:**

```bash
npm run serve
```

**Terminal 2:**

```bash
npm run demo:frames
# or end-to-end:
npm run demo:build
```

Flow:

1. Open `http://127.0.0.1:4173/demo-reel.html?record=1`
2. Wait for `__REEL_READY__` + `__REEL_SHOW_BEAT__`
3. Per beat: `showBeat(i)` → `animationSettleMs` → hold for `durationMs` → screenshot poster
4. Save continuous video → `assets/segments/collins-demo-full.webm`
5. Write `assets/hyperframes-manifest.json` with measured `startSec` per beat

Override URL: `DEMO_BASE_URL=http://127.0.0.1:4173 npm run demo:frames`

### Capture discipline

- Record **only** `demo-reel.html` — overlays on that page (`.reel-method-card`, title copy) are **intentionally** baked into the MP4.
- Do **not** capture the landing `#demo` section with HTML caption layers — landing has no overlay; duplicate text means something is wrong with the image variant (text on PNG + overlay).
- Hero carousel uses `posterOnly: true` so carousel never stacks HTML captions on full-text PNGs.

## Stitching (`stitch-hyperframes.mjs`)

1. Read `assets/hyperframes-manifest.json`
2. Encode webm → H.264 (`libx264`, `crf 22`, `yuv420p`, `+faststart`, no audio)
3. **Probe** actual MP4 duration via FFmpeg
4. **Rebalance** each beat's `durationSec` from probed length vs `startSec` chain
5. Write `assets/collins-agency-demo.mp4` and copy → `deliverables/collins-agency-demo.mp4`

Override output: `DEMO_OUTPUT=my-demo.mp4 npm run demo:stitch`

Manifest `startSec` values come from the recorder clock; stitch corrects drift after encode. Re-run full `demo:build` after timing or copy changes — do not hand-edit durations without re-recording.

## Landing page `#demo` integration

`index.html` `#hyperframes-theater` / `.demo-stage`:

- Single `<video src="assets/collins-agency-demo.mp4">` with native controls
- **No** `.hyperframe-overlay`, step counter, or caption HTML — text is in the MP4
- `script.js` `initDemoVideo()` loads `manifest.fullVideo` if present; adds `is-playing` class for stage glow only

Hero theater (above fold) is separate: poster carousel from `hero-method-*.png` + dots — not the demo MP4.

## VideoZero / motion design

Reference: [VideoZero animation-basics](https://github.com/VideoZero/skills/tree/main/animation-basics)

| Principle | Collins application |
|-----------|---------------------|
| Staging | One beat = one image focal + one text stack |
| Slow in / slow out | `--ease-out`, `--ease-in-out` on entrances |
| Overlapping action | Staggered card → label → title → caption |
| Secondary action | Neon wash, border glow, vignette — not competing zoom |
| Holds | `durationMs` per beat after animations settle |
| Crossfades | 680ms opacity between beats |
| Reduced motion | Instant states in `demo-reel.css` and `styles.css` |

## Step-by-step workflow

```
Task progress:
- [ ] Edit storyboard.mjs + demo-reel.js copy (keep in sync)
- [ ] npm run hero:images (if art or step slugs changed)
- [ ] Terminal 1: npm run serve
- [ ] Terminal 2: npm run demo:build
- [ ] Spot-check assets/collins-agency-demo.mp4 (no double text, no crop)
- [ ] Confirm assets/hyperframes-manifest.json totalDurationSec matches video
- [ ] npm run serve → verify #demo plays encoded MP4 (no overlay duplicates)
- [ ] deliverables/collins-agency-demo.mp4 ready to share
```

## Commands

| Command | Purpose |
|---------|---------|
| `npm run serve` | Static server on port 4173 (required for capture) |
| `npm run hero:images` | Regenerate hero-method + hero-method-reel PNGs |
| `npm run demo:frames` | Record webm + manifest + beat posters |
| `npm run demo:stitch` | FFmpeg encode + probe + rebalance manifest |
| `npm run demo:build` | `demo:frames` then `demo:stitch` — **default re-record** |

## File structure

```
collins/
├── demo-reel.html
├── demo-reel.css
├── demo-reel.js
├── index.html                         # #demo video-only player
├── script.js                          # initDemoVideo, hero carousel
├── assets/
│   ├── logo.svg                       # intro/outro bookends
│   ├── hero-method-*.png              # full text (carousel)
│   ├── hero-method-reel-*.png         # textless (reel)
│   ├── hyperframes-manifest.json
│   ├── collins-agency-demo.mp4
│   └── segments/collins-demo-full.webm
├── deliverables/collins-agency-demo.mp4
├── scripts/
│   ├── generate-hero-method-images.mjs
│   └── demo-record/
│       ├── storyboard.mjs
│       ├── record-hyperframes.mjs
│       ├── stitch-hyperframes.mjs
│       └── scroll-motion.mjs          # legacy scroll easing (not brand reel)
└── skills/video-demo-reel/SKILL.md    # this file
```

## Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| `Brand reel not reachable` | Server not running | `npm run serve` before `demo:frames` |
| Duplicate text in MP4 | Full-text PNG on reel + HTML card | Use `hero-method-reel-*`; run `hero:images` |
| Image cropped / zoomed | Ken Burns or `object-fit: cover` | `object-fit: contain`, 3:2 letterbox; no scale keyframes |
| Landing scroll in video | Wrong capture target | Use `demo-reel.html`, not `index.html` |
| Manifest drift vs video | Encode changed duration | Re-run `demo:build`; stitch probes and rebalances |
| Beat text clipped | Long captions | Shorten copy; check `.reel-method-card` padding |
| Autoplay during record | Timeline running | `?record=1` disables autoplay in `demo-reel.js` |
| Missing ffmpeg | `ffmpeg-static` not installed | `npm install` |
| Blank method images | Missing reel PNGs | `npm run hero:images` |
| Wrong carousel posters | Manifest `poster` field | Hero uses `hero-method-*.png`; reel uses `hero-method-reel-*` in `demo-reel.js` |
| Em dashes in copy | Brand voice | Short sentences; search storyboard + demo-reel.js |
| Playwright browser missing | Fresh machine | `npx playwright install chromium` |
| Double captions on site | Overlay added to `#demo` | Remove `.hyperframe-overlay` from demo theater — video-only |

## Majico handoff

Collins stores project skills at `skills/video-demo-reel/SKILL.md` (repo root).

For **majico.xyz**, follow sibling convention:

```
majico.xyz/.cursor/skills/video-demo-reel/SKILL.md
```

Adapt paths (`demo-reel.*`, `assets/`, npm scripts) to that repo's layout. Suggested skill order: landing page → **video-demo-reel** → `#demo` wiring → brand guidelines PDF.
