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
```

Outputs land in `assets/hyperframes-manifest.json`, `assets/collins-demo-*.png`, and `assets/segments/*.webm`.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Agency landing page + demo player |
| `styles.css` | Neon green design tokens |
| `script.js` | Scroll reveals, demo playback |
| `assets/logo.svg` | Vectorized Collins mark |
| `assets/hyperframes-manifest.json` | Demo beat manifest |

Project ID: `ebd31ae8-0025-441d-8eea-7bbda8af377d` (Majico / Collins)
