# Collins client deliverables

Handoff bundle for the Collins digital marketing agency landing page.

**Exported:** 2026-06-27  
**Commit:** `5d83979`  
**Live site:** https://collins.d3bu7.com

## What's included

| File | Description |
|------|-------------|
| `deliverables/brand-guidelines.pdf` | Agency brand guidelines (LaTeX/Beamer, neon green, Plus Jakarta Sans + Inter) |
| `deliverables/brand.md` | Brand identity, voice, messaging for agents |
| `deliverables/design.md` | Visual system: tokens, typography, components, motion |
| `deliverables/collins-agency-demo.mp4` | ~55s brand reel with logo intro/outro |
| `deliverables/collins-logo-neon.svg` | Primary logo (neon green `#39ff14`) |
| `deliverables/collins-logo-neon-512.png` / `-1024.png` | Logo PNG exports |
| `deliverables/collins-logo-neon-light.svg` | Light-background variant + PNG exports |
| `deliverables/manifest.json` | Full inventory with paths, byte sizes, timestamps |

## Catbox URLs

- **Full deliverables bundle (zip):** https://files.catbox.moe/2ciwvq.zip
- **Brand guidelines PDF:** https://files.catbox.moe/mveycc.pdf
- **design.md:** https://files.catbox.moe/4s7a9i.md
- **brand.md:** https://files.catbox.moe/ndtw01.md

## Regenerate

```bash
npm run brand:pdf          # PDF:
pdf → deliverables/brand-guidelines.pdf
npm run logo:export        # PNG logo variants
Copy-Item assets/collins-agency-demo.mp4 deliverables/
```

Guidelines job: `9675b262-9f85-49b0-bef6-d097e566246a`
