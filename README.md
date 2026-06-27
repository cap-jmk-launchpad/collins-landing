# Collins landing page

Marketing agency landing page mock for **Collins** — neon green dark theme, interactive demo, vector logo.

**Live repo:** [cap-jmk-launchpad/collins-landing](https://github.com/cap-jmk-launchpad/collins-landing)

## Preview locally

```bash
npm run serve
```

Open http://localhost:4173

## Demo recording

Storyboard-driven walkthrough (see `scripts/demo-record/storyboard.mjs`):

```bash
npm run serve          # terminal 1
npm run demo:frames    # terminal 2 — records posters + webm segments
npm run demo:stitch    # concat segments → assets/collins-agency-demo.mp4
```

Or in one shot after the site is being served:

```bash
npm run demo:build
```

Outputs land in `assets/hyperframes-manifest.json`, `assets/collins-demo-*.png`, `assets/segments/*.webm`, and the stitched **`assets/collins-agency-demo.mp4`** used by the demo player.

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
| `assets/collins-agency-demo.mp4` | Stitched full demo video (site player source) |
| `deliverables/collins-agency-demo.mp4` | Shareable copy of the demo video (~58s) |
| `deliverables/brand-guidelines.pdf` | Shareable brand guidelines (HTML source in same folder) |
| `docs/brand.md` / `design.md` | Brand narrative and design tokens |

## Brand guidelines PDF

Regenerate the shareable PDF from the HTML template:

```bash
npm run brand:pdf
```

Outputs `deliverables/brand-guidelines.pdf` and a copy at `brand-guidelines.pdf`.

Project ID: `ebd31ae8-0025-441d-8eea-7bbda8af377d` (Majico / Collins)
