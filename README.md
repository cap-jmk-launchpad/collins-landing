# Collins landing page

Marketing agency landing page mock for **Collins**: neon green dark theme, interactive demo, vector logo.

**Live repo:** [cap-jmk-launchpad/collins-landing](https://github.com/cap-jmk-launchpad/collins-landing)

## Preview locally

```bash
npm run serve
```

Open http://localhost:4173

## Demo recording (HyperFrames motion)

The landing demo is a **brand release reel** (`demo-reel.html`): cinematic crossfades through the six Collins method cards with title cards and staggered neon text overlays. Beat-synced captions in `#demo` follow `assets/hyperframes-manifest.json`.

Storyboard lives in `scripts/demo-record/storyboard.mjs` (`BRAND_REEL_STORYBOARD`).

### Regenerate the demo video

**Terminal 1** — serve the site:

```bash
npm run serve
```

**Terminal 2** — record + encode:

```bash
npm run demo:build
```

Or step by step:

```bash
npm run demo:frames   # Playwright brand reel → assets/segments/collins-demo-full.webm + manifest
npm run demo:stitch   # FFmpeg H.264 → assets/collins-agency-demo.mp4 + deliverables copy
```

### Outputs

| Path | Purpose |
|------|---------|
| `assets/hyperframes-manifest.json` | Beat titles, captions, `startSec` / `durationSec` for subtitle sync |
| `assets/collins-demo-*.png` | Poster frames per beat (hero carousel) |
| `assets/segments/collins-demo-full.webm` | Raw continuous recording |
| `assets/collins-agency-demo.mp4` | Encoded demo ( `#demo` player source) |
| `deliverables/collins-agency-demo.mp4` | Shareable copy |

Motion timing defaults (`holdMs`, `scrollMs`) are in `scripts/demo-record/storyboard.mjs`. The [`hyperframes`](https://github.com/heygen-com/hyperframes) package is included for CLI tooling (`npx hyperframes doctor`); capture uses Playwright with the same eased-scroll rhythm as HyperFrames website tours.

Override base URL: `DEMO_BASE_URL=http://127.0.0.1:4173 npm run demo:frames`

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Agency landing page + demo player |
| `styles.css` | Neon green design tokens |
| `script.js` | Scroll reveals, demo playback |
| `assets/logo.svg` | Vectorized Collins mark (source) |
| `deliverables/collins-logo-neon.svg` | Shareable neon mark for dark backgrounds (`#f5f5f7` + `#39ff14`) |
| `deliverables/collins-logo-neon-light.svg` | Print/light-bg variant (`#040806` + `#39ff14`) |
| `deliverables/collins-logo-neon-*.png` | Raster exports at 512px and 1024px (run `npm run logo:export`) |
| `assets/hyperframes-manifest.json` | Demo beat manifest |
| `assets/collins-agency-demo.mp4` | Full demo video (site player source) |
| `deliverables/collins-agency-demo.mp4` | Shareable copy of the demo video |
| `deliverables/brand-guidelines.pdf` | Shareable brand guidelines (HTML source in same folder) |
| `docs/brand.md` / `design.md` | Brand narrative and design tokens |

## Brand guidelines PDF

Regenerate the shareable PDF from the HTML template:

```bash
npm run brand:pdf
```

Outputs `deliverables/brand-guidelines.pdf` and a copy at `brand-guidelines.pdf`.

Project ID: `ebd31ae8-0025-441d-8eea-7bbda8af377d` (Majico / Collins)
