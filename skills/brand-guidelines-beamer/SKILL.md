---
name: brand-guidelines-beamer
description: >-
  Generates Collins brand guidelines PDFs from LaTeX Beamer (neon dark theme)
  or Playwright HTML fallback. Use when building brand-guidelines.pdf,
  collins-beamer.sty, font embedding, Tectonic/XeLaTeX compile, or
  deliverables/ brand handoff documents.
---

# Brand Guidelines Beamer PDF (Collins workflow)

Produce a shareable **brand guidelines PDF** from structured brand sources. Primary path: **LaTeX Beamer** with `collins-beamer.sty`. Fallback: **HTML → PDF** via Playwright.

## When to use

- Regenerating `deliverables/brand-guidelines.pdf`
- Updating Beamer slides after `brand.md` / `design.md` changes
- Fixing font embedding, neon palette, or PDF upload to Catbox/manifest

## Prerequisites

1. Source content in `brand.md` and `design.md` (identity, palette, type, motion, do's/don'ts).
2. Logo assets in `deliverables/` (`collins-logo-neon-512.png`, etc.).
3. Node.js + `npm install` for compile scripts.
4. **One** PDF engine (in priority order):
   - Local **XeLaTeX** (`xelatex` on PATH)
   - **Tectonic** (`choco install tectonic` on Windows, or bundled in `scripts/brand-guidelines/bin/`)
   - **Docker** `texlive/texlive:latest`

## Source of truth

| Content | Authoritative file |
|---------|-------------------|
| Voice, positioning, CTAs | `brand.md` |
| Colors, typography, motion | `design.md` |
| Slide layout + copy | `scripts/brand-guidelines/brand-guidelines.tex` |
| Beamer theme | `scripts/brand-guidelines/collins-beamer.sty` |

After compile, synced copies land in `deliverables/` (`.tex`, `.sty`, `fonts/`, `.pdf`).

## Beamer theme (`collins-beamer.sty`)

Neon dark agency palette via `xcolor` + `fontspec`:

| Color | Hex | Role |
|-------|-----|------|
| `collinsDeep` | `#040806` | Slide background |
| `collinsGreen` | `#39ff14` | Structure / accent |
| `collinsTeal` | `#00ff88` | Gradient partner |
| `collinsText` | `#f0f7eb` | Body text |
| `collinsSecondary` | `#9aab94` | Subtitles |

Typography:

- **Inter** — sans body (`\setsansfont`)
- **Plus Jakarta Sans** — display headings (`\CollinsDisplay`, `\displayheading{}`)
- Bundled TTFs in `scripts/brand-guidelines/fonts/` (downloaded by `ensure-fonts.mjs`)
- System fallbacks: Segoe UI → Arial if bundles missing

`brand-guidelines.tex` uses 16:9 Beamer, title page with radial green/teal glows and logo graphic.

## Step-by-step workflow (LaTeX — preferred)

```
Task progress:
- [ ] Sync brand.md + design.md changes into brand-guidelines.tex
- [ ] Verify deliverables/ logo PNGs exist
- [ ] npm run brand:pdf
- [ ] Open deliverables/brand-guidelines.pdf
- [ ] Confirm fonts render (not default Computer Modern)
- [ ] Check urls.json / manifest.json if Catbox upload ran
```

### What `npm run brand:pdf` does

`scripts/brand-guidelines/compile-brand-guidelines.mjs`:

1. Runs `ensure-fonts.mjs` — downloads Inter + Plus Jakarta Sans TTFs if missing
2. Compiles `brand-guidelines.tex` via XeLaTeX → Tectonic → Docker (first success wins)
3. Copies PDF to `deliverables/brand-guidelines.pdf` and root `brand-guidelines.pdf`
4. Syncs `.tex`, `collins-beamer.sty`, and `fonts/` into `deliverables/`
5. Optionally uploads to Catbox and updates `urls.json` + manifest `guidelinesPdf`

## HTML fallback workflow

When LaTeX toolchain is unavailable or for quick iteration on HTML template:

```bash
npm run brand:pdf:html
```

`scripts/generate-brand-guidelines.mjs`:

- Opens `deliverables/brand-guidelines.html` in Playwright
- `page.pdf()` with A4, `printBackground: true`
- Writes same output paths as LaTeX path

Use LaTeX for final handoff (better font control, Beamer structure). Use HTML fallback for environments without TeX.

## Key commands

| Command | Engine | Output |
|---------|--------|--------|
| `npm run brand:pdf` | LaTeX (alias) | `deliverables/brand-guidelines.pdf` |
| `npm run brand:pdf:latex` | LaTeX | Same |
| `npm run brand:pdf:html` | Playwright | Same (from HTML template) |

## Pitfalls (Collins learnings)

| Issue | Fix |
|-------|-----|
| Wrong fonts in PDF | Run compile script (triggers `ensure-fonts.mjs`); verify `fonts/` exists; use XeLaTeX/Tectonic, not pdfLaTeX |
| `fontspec` errors | Engine must be XeLaTeX or Tectonic `-X compile` |
| Missing logo on title slide | `\graphicspath` must resolve `deliverables/collins-logo-neon-512.png` |
| Stale deliverables copy | Re-run `brand:pdf`; script overwrites `deliverables/*.tex`, `.sty`, `fonts/` |
| Catbox upload fails | PDF still written locally; upload is best-effort (warn only) |
| HTML PDF missing backgrounds | Ensure `printBackground: true` in generate script |
| Divergent brand docs | Keep root, `docs/`, and `deliverables/` brand.md / design.md pairs aligned |
| Light-theme slides | Beamer theme is dark-first; do not inject white slide backgrounds |
| Windows path issues | Compile script uses `shell: true` on win32 for spawn |

## File structure

```
collins/
├── brand.md
├── design.md
├── brand-guidelines.pdf              # root copy after build
├── deliverables/
│   ├── brand-guidelines.pdf          # shareable output
│   ├── brand-guidelines.html         # HTML fallback source
│   ├── brand-guidelines.tex          # synced from scripts/
│   ├── collins-beamer.sty
│   └── fonts/                        # bundled Inter + Plus Jakarta Sans
├── scripts/
│   ├── brand-guidelines/
│   │   ├── brand-guidelines.tex      # edit slides here
│   │   ├── collins-beamer.sty        # theme source
│   │   ├── compile-brand-guidelines.mjs
│   │   ├── ensure-fonts.mjs
│   │   └── fonts/
│   └── generate-brand-guidelines.mjs # HTML → PDF fallback
└── urls.json                         # Catbox URL for guidelines PDF
```

## Content checklist for slides

Mirror brand.md §8–9 and design.md §2–7:

- [ ] Agency positioning (not SaaS)
- [ ] Neon palette table with hex values
- [ ] Plus Jakarta Sans + Inter roles
- [ ] Logo usage and clear space
- [ ] Primary CTA: "Book a strategy call"
- [ ] Motion summary + `prefers-reduced-motion`
- [ ] Do's and don'ts (copy + visual)

## Majico handoff

Copy to:

`majico.xyz/.cursor/skills/brand-guidelines-beamer/SKILL.md`

Pair with `landing-page-agency` and `video-demo-reel` skills for full Collins deliverable pipeline.
