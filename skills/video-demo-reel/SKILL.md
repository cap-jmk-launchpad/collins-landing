---
name: video-demo-reel
description: >-
  Records and stitches Collins agency demo videos using HeyGen hyperframes
  concepts, Playwright brand reel capture, FFmpeg encoding, and beat-synced
  subtitles. Use when building demo-reel.html, storyboard.mjs,
  record-hyperframes.mjs, collins-agency-demo.mp4, or hyperframes-manifest.json.
---

# Video / Demo Reel (Collins workflow)

Produce a **cinematic brand release video** of the Collins method — generated hero images and title cards, **not** a landing-page scroll tour. Landing `#demo` plays the encoded MP4 with subtitle overlays synced from the manifest.

## When to use

- Regenerating `deliverables/collins-agency-demo.mp4`
- Editing beat copy, timing, or method step visuals
- Wiring hyperframe subtitle sync on the landing page
- Applying VideoZero animation-basics (staging, slow-in/out, overlapping text)

## Prerequisites

1. `npm install` (Playwright, ffmpeg-static, hyperframes).
2. Hero method images: `npm run hero:images` → `assets/hero-method-*.png`.
3. Local server running during capture: `npm run serve` (port 4173).
4. Playwright browsers installed (`npx playwright install chromium` if needed).

## Architecture overview

```
storyboard.mjs          → beat definitions (titles, captions, durations)
demo-reel.html/js/css   → 1920×1080 cinematic player (?record=1 for capture)
record-hyperframes.mjs  → Playwright records demo-reel → webm + manifest + posters
stitch-hyperframes.mjs  → FFmpeg H.264 → collins-agency-demo.mp4
index.html #demo        → plays MP4 + HTML subtitle overlay above controls
```

**HeyGen hyperframes concept:** Beat-based storytelling — each beat has poster, title, caption, `startSec` / `durationSec`. Collins uses Playwright on a dedicated reel page instead of scrolling the live landing page.

## Storyboard (`scripts/demo-record/storyboard.mjs`)

Exports:

- `MOTION` — timing constants (`animationSettleMs`, `crossfadeMs`, `reelLoadMs`, etc.)
- `HERO_METHOD_STORYBOARD` — six method steps (discover → measure)
- `BRAND_REEL_STORYBOARD` — intro title + 6 method beats + outro title (8 beats total)
- `COLLINS_STORYBOARD` — alias for brand reel (legacy scroll tour `PAGE_STORYBOARD` is deprecated empty)

Edit captions here first, then rebuild. Keep copy agency-focused; no em dashes.

### Beat structure (brand reel)

| Beat | Type | Content |
|------|------|---------|
| 00 | title | "Collins" intro |
| 01–06 | method | Hero method images + step copy |
| 07 | title | "Unify. Automate. Amplify." outro |

Durations: ~6400ms per method beat, 7000ms for measure, 4000/4600ms for title cards.

## Brand reel page (`demo-reel.html`)

Separate 1920×1080 page — **not** `index.html`.

- `demo-reel.js` — beat timeline, `window.__REEL_SHOW_BEAT__(index)` for Playwright control
- `?record=1` — disables autoplay timeline; recorder drives beats manually
- `?autoplay=1` — preview full reel in browser

Motion rules (also in `demo-reel.css` header comment):

- **VideoZero animation-basics:** staging (one focal action per beat), slow-in/out easing, overlapping text entrances, secondary neon glow
- **No Ken Burns zoom** on method images — static cards with text appear animations
- Text stacks animate in; images stay fixed (opacity crossfade between beats only)

## Recording (`record-hyperframes.mjs`)

**Terminal 1:**

```bash
npm run serve
```

**Terminal 2:**

```bash
npm run demo:frames
# or full pipeline:
npm run demo:build
```

Recorder flow:

1. Opens `http://127.0.0.1:4173/demo-reel.html?record=1`
2. Waits for `window.__REEL_READY__` and `__REEL_SHOW_BEAT__`
3. For each beat: `showBeat(i)` → `animationSettleMs` wait → hold for `durationMs` → screenshot poster
4. Saves continuous Playwright video → `assets/segments/collins-demo-full.webm`
5. Writes `assets/hyperframes-manifest.json` with measured `startSec` / `durationSec` per beat

Override base URL: `DEMO_BASE_URL=http://127.0.0.1:4173 npm run demo:frames`

### Overlays during capture

- Reel page bakes copy into layout (title cards + method copy card). No separate landing-page subtitle layer is recorded.
- Landing `#demo` subtitles are **HTML overlays added at playback** — they must not be duplicated inside the MP4 capture target.
- Hero carousel on landing uses poster-only mode (no text overlay on generated images).

## Stitching (`stitch-hyperframes.mjs`)

1. Reads `assets/hyperframes-manifest.json`
2. Encodes `assets/segments/collins-demo-full.webm` → H.264 MP4 via `ffmpeg-static`
3. Rebalances beat `durationSec` from probed video length
4. Copies to `deliverables/collins-agency-demo.mp4`

Output name override: `DEMO_OUTPUT=my-demo.mp4 npm run demo:stitch`

## Landing page integration

`#demo` section (`index.html`):

- Single `<video>` with native controls
- `.hyperframe-overlay` positioned **above** native controls (`bottom: 3.5rem`)
- `script.js` `syncFromVideoTime()` updates title/caption from manifest beats
- Subtitle-only mode while video visible (no poster re-show during playback)

After rebuild, verify manifest beats match `storyboard.mjs` captions.

## Step-by-step workflow

```
Task progress:
- [ ] Update storyboard.mjs beats/copy
- [ ] Regenerate hero images if visuals changed (npm run hero:images)
- [ ] Terminal 1: npm run serve
- [ ] Terminal 2: npm run demo:build
- [ ] Spot-check assets/collins-agency-demo.mp4
- [ ] Verify assets/hyperframes-manifest.json beat timings
- [ ] npm run serve → test #demo subtitle sync in browser
- [ ] Copy deliverables/collins-agency-demo.mp4 if sharing externally
```

## Key commands

| Command | Purpose |
|---------|---------|
| `npm run serve` | Required static server for Playwright capture |
| `npm run demo:frames` | Record webm + manifest + poster PNGs |
| `npm run demo:stitch` | FFmpeg encode to MP4 |
| `npm run demo:build` | `demo:frames` then `demo:stitch` |
| `npm run hero:images` | Regenerate method card PNGs used in reel |

## Pitfalls (Collins learnings)

| Issue | Fix |
|-------|-----|
| `Brand reel not reachable` | Start `npm run serve` before `demo:frames` |
| Landing scroll in video | Use `demo-reel.html`, not index.html capture; `PAGE_STORYBOARD` is deprecated |
| Ken Burns / image zoom | Forbidden — static images + text animations only |
| Duplicate subtitle layers | MP4 = visuals; landing adds one HTML overlay synced to manifest |
| Captions over video controls | `.demo-stage .hyperframe-overlay { bottom: 3.5rem }` |
| Manifest / video drift | Re-run full `demo:build`; stitch rebalance uses probed duration |
| Beat text clipped | Check `demo-reel.css` method card padding; avoid long captions |
| Autoplay during record | `record=1` disables reel autoplay so Playwright controls timing |
| Em dashes in captions | Short sentences per brand.md; search storyboard + demo-reel.js |
| Missing ffmpeg | `ffmpeg-static` devDependency; reinstall if stitch fails |
| Wrong posters in carousel | `beatPosterFile()` maps to `hero-method-*.png` |

## VideoZero alignment

Reference: [VideoZero animation-basics](https://github.com/VideoZero/skills/tree/main/animation-basics)

| Principle | Collins application |
|-----------|---------------------|
| Staging | One beat = one focal image + one text stack |
| Slow in / slow out | `--ease-out` on text entrances; crossfade `680ms` |
| Overlapping action | Text stagger (`animationSettleMs` before hold) |
| Secondary action | Neon glow, vignette, grain — not competing motion |
| No gratuitous zoom | Explicit: no Ken Burns on method images |

## File structure

```
collins/
├── demo-reel.html
├── demo-reel.css
├── demo-reel.js
├── index.html                    # #demo video player + subtitles
├── script.js                     # syncFromVideoTime, carousel
├── assets/
│   ├── hero-method-*.png
│   ├── hyperframes-manifest.json
│   ├── collins-agency-demo.mp4
│   └── segments/
│       └── collins-demo-full.webm
├── deliverables/
│   └── collins-agency-demo.mp4
└── scripts/demo-record/
    ├── storyboard.mjs
    ├── record-hyperframes.mjs
    ├── stitch-hyperframes.mjs
    └── scroll-motion.mjs         # legacy scroll easing (not used for brand reel)
```

## Majico handoff

Copy to:

`majico.xyz/.cursor/skills/video-demo-reel/SKILL.md`

Run order with sibling skills: `landing-page-agency` → `video-demo-reel` → update landing `#demo` → `brand-guidelines-beamer` for PDF handoff.
