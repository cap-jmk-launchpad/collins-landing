# Design System: Collins

**Project ID:** ebd31ae8-0025-441d-8eea-7bbda8af377d  
**Companion:** [BRAND.md](./BRAND.md) — voice, agency positioning, CTAs, messaging anchors.

Implementation sources: `styles.css`, `index.html`, `script.js`, `assets/hyperframes-manifest.json`.

---

## 1. Visual theme & atmosphere

Collins is a **neon green agency** brand on a dark canvas — not a light-mode SaaS product. The atmosphere should feel like a senior growth studio: electric accents, deep backgrounds, soft radial glows, and confident typography.

**Narrative anchor:** Growth strategy with neon clarity. Senior-led full-funnel services for brands that want transparent partnerships, not bloated retainers or opaque vendor stacks.

**Design intent:**

- **Dark-first** — `#040806` base with layered surfaces (`--bg-surface`, `--bg-muted`, `--bg-elevated`).
- **Neon accent hierarchy** — Green leads (`#39ff14`); teal and lime support gradients and feature variants.
- **Glow as depth** — Box-shadow glow tokens replace heavy flat shadows; borders use translucent green.
- **Operator polish** — Motion confirms intent (reveals, hyperframe beats) without playful bounce in core flows.

Cross-reference voice and copy rules in [BRAND.md](./BRAND.md) §3 and §7 before writing UI text or demo captions.

---

## 2. Color palette & roles

All values map to `:root` in `styles.css`. Do not use legacy palette colors (`#0060b9`, `#485668`, light `#ffffff` marketing canvas).

### Core surfaces

| Token | Hex / value | Role |
|---|---|---|
| `--bg-deep` | `#040806` | Page canvas, button text on neon fills |
| `--bg-surface` | `#0a100c` | Sticky header scrim, base panels |
| `--bg-muted` | `#0f1610` | Alternating section bands (`.panel-muted`) |
| `--bg-elevated` | `#141c14` | Feature cards, testimonials, elevated tiles |

### Text

| Token | Hex | Role |
|---|---|---|
| `--text-primary` | `#f0f7eb` | Headlines, body, primary UI copy |
| `--text-secondary` | `#9aab94` | Nav links, de-emphasized labels |
| `--text-muted` | `#6b7a66` | Footer, metadata, helper text |

### Neon accents

| Token | Hex | Role |
|---|---|---|
| `--neon-green` | `#39ff14` | Primary accent; eyebrows; nav hover; dot active state |
| `--neon-teal` | `#00ff88` | Gradient partner; feature icon variant (`.accent-teal`) |
| `--neon-lime` | `#b6ff00` | Secondary highlight; feature icon variant (`.accent-lime`) |
| `--neon-mint` | `#7fff7f` | Tertiary highlight; sparing decorative use |
| `--accent` | `var(--neon-green)` | Semantic alias for primary interactive accent |
| `--accent-on` | `#040806` | Text/icons on filled neon buttons |
| `--accent-muted` | `#2ecc12` | Pressed/hover depth on accent fills |

### Borders & glow

| Token | Value | Role |
|---|---|---|
| `--border` | `rgba(57, 255, 20, 0.12)` | Default dividers, card strokes, header rule |
| `--border-strong` | `rgba(57, 255, 20, 0.32)` | Ghost button outlines, emphasis rings |
| `--glow-green` | `0 0 40px rgba(57, 255, 20, 0.22)` | Primary button default glow |
| `--glow-lime` | `0 0 40px rgba(182, 255, 0, 0.18)` | Optional lime emphasis |
| `--glow-teal` | `0 0 40px rgba(0, 255, 136, 0.18)` | Optional teal emphasis |

### Background atmosphere

`.bg-glow` applies fixed radial gradients (green / teal / lime at low opacity) over `--bg-deep`. Do not replace with flat solid fills on marketing pages.

### Color rules

- Primary action = neon green → teal gradient fill + `--accent-on` label + `--glow-green`.
- Secondary action = ghost pill with `--border-strong`; hover adds green border and inset glow.
- Links in body inherit `--text-primary`; nav uses `--text-secondary` → `--neon-green` on hover.
- Gradient text (`.gradient-text`) uses `linear-gradient(90deg, var(--neon-green), var(--neon-teal))`.
- Never use accent neon for long body paragraphs or full-bleed section backgrounds.

---

## 3. Typography rules

| Role | Family | Use |
|---|---|---|
| Display / headings | **Plus Jakarta Sans** | H1–H3, logo wordmark, buttons, stats, eyebrows, hyperframe titles |
| Body / UI | **Inter** | Lede, section ledes, FAQ, footer, captions |
| Spec | Monospace | Token names, paths, code snippets in docs |

### Scale (web)

- **Eyebrow** — 0.8125rem (13px), semibold, uppercase, `letter-spacing: 0.12em`, `--neon-green`
- **H1 (hero)** — `clamp(2.5rem, 5.5vw, 4.25rem)`, extrabold (800), `line-height: 1.05`, `letter-spacing: -0.04em`
- **H2 (section)** — ~clamp 1.75–2.5rem, bold, tight tracking
- **H3 (card)** — ~1.125–1.25rem, semibold
- **Lede / section-lede** — ~1.0625–1.125rem, `--text-secondary`, max ~60ch
- **Body** — 1rem, `line-height: 1.6`, `letter-spacing: -0.01em`
- **Small / footer** — 0.8125rem, `--text-muted`

### Pairing rules

- One display family per heading block — do not mix Inter into headlines.
- Weight contrast over size alone: extrabold H1 vs regular body.
- Uppercase eyebrows only — not full sentences.
- Tight tracking (`-0.03em` to `-0.04em`) on display sizes; leave body at `-0.01em`.

---

## 4. Component stylings

### Buttons

| Variant | Styles | Use |
|---|---|---|
| `.button-primary` | Green→teal gradient, pill radius, `--accent-on` text, `--glow-green` | "Book a strategy call," "Play demo" |
| `.button-ghost` | Transparent, `--border-strong`, pill radius | "Watch the demo," "Email the team," hyperframe prev/next |
| `.button-sm` | Reduced height/padding | Header CTA |
| `.button-lg` | Increased height/padding | Final CTA block |

Shared: `--font-display`, semibold, `min-height: 3rem`, hover `translateY(-1px)`, transitions via `--motion`.

### Cards & panels

- **`.panel`** — Section wrapper; vertical padding with section-head pattern (eyebrow + h2 + lede).
- **`.panel-muted`** — `--bg-muted` band for demo and FAQ sections.
- **`.feature-card`** — `--bg-elevated`, border `--border`, radius `--radius-lg`; hover lift + border brighten.
- **`.feature-icon`** — Numbered badge; default green; `.accent-lime` / `.accent-teal` variants for grid rhythm.
- **`.testimonial`** — Quote card with avatar footer; same elevated surface treatment.

### Navigation & header

- **`.site-header`** — Sticky, blurred scrim `rgba(5,5,8,0.75)`, bottom `--border`.
- **`.site-nav`** — Horizontal text links, `--text-secondary` → `--neon-green` hover.
- **`.logo-lockup`** — SVG + wordmark; logo `drop-shadow` green glow.

### FAQ

- **`<details class="faq-item">`** — Native disclosure; summary uses display font; answer body in Inter.

### Final CTA

- **`.final-cta`** / **`.final-cta-inner`** — Centered closing band; primary + ghost action pair.

### Inputs

Contact CTAs currently use `mailto:` anchors, not form fields. If forms are added: quiet `--border` outline, focus ring `--border-strong` or `--neon-green`, no heavy outer glow.

---

## 5. Layout principles

- **Grid** — `--max-width: 1180px` centered; hero 2-column (`1fr 1fr`) collapsing to single column ≤960px.
- **Hero** — Copy left, hyperframe theater right; stats grid + avatar row below lede actions.
- **Feature grid** — Responsive multi-column grid of `.feature-card` items (six services).
- **Testimonial grid** — 2×2 on desktop; stacks on mobile.
- **Section rhythm** — `.section-head` centered or left-aligned with shared eyebrow pattern.
- **Footer** — `.footer-grid` four columns → stack on narrow viewports.

See [BRAND.md](./BRAND.md) §6 for narrative layout intent (hero order, CTA hierarchy).

---

## 6. Spacing & radius scale

### Spacing

| Token | Value | Typical use |
|---|---|---|
| xs | 4px | Icon gaps, tight inline spacing |
| sm | 8px | Avatar row gaps, dot spacing |
| md | 16px | Card padding, nav gap baseline |
| lg | 24px | Grid gaps, internal section spacing |
| xl | 40px | Between major content blocks |
| 2xl | 56px | Section padding top/bottom |

### Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Small chips (rare) |
| `--radius-md` | 8px | Inner elements |
| `--radius-lg` | 12px | Cards, hyperframe stage, testimonials |
| `--radius-pill` | 9999px | All buttons, hyperframe dots (pill/circle) |

---

## 7. Elevation & motion

### Elevation

Depth is conveyed through **glow** and **border** more than classic gray shadows:

- Cards: subtle border + hover glow increase.
- Primary buttons: `--glow-green`, stronger on hover (`0 0 50px rgba(57, 255, 20, 0.45)`).
- Hyperframe stage: inset green ring when playing (`.is-playing`).

Legacy elevation tokens (`0 1px 2px rgba(0,0,0,0.06)` etc.) are not primary on this dark neon site — prefer glow tokens.

---

## Motion & animation

Motion confirms intent on a dark neon canvas — it never competes with copy or CTAs. All timing and easing live in `:root` (`styles.css`); orchestration lives in `script.js`.

### Principles

- **Restrained neon motion** — Glow pulses and crossfades reinforce the palette; avoid decorative motion for its own sake.
- **Accent discipline** — Animation draws attention to hyperframe beats, active dots, and hover feedback — not body copy or full-width bands.
- **No distracting loops on CTAs** — Primary and ghost buttons use hover lift and glow only; never infinite pulse on "Book a strategy call" or header CTAs.
- **Beat-synced storytelling** — Carousel and demo theater advance on timed beats; subtitle overlays exit/enter in sync with poster crossfades.
- **Intent over bounce** — Default to `--ease-out` for entrances; reserve `--ease-spring` for dot activation and step tick only.

### Motion tokens

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 120ms | Pressed states (`.is-pressed`), carousel button snap |
| `--duration-fast` | 200ms | Nav hover, FAQ chevron, footer links |
| `--duration-normal` | 320ms | Hyperframe overlay fade (`opacity` + `translateY`) |
| `--duration-beat` | 420ms | Beat change, poster crossfade, subtitle stagger (`--motion-beat`) |
| `--duration-slow` | 520ms | Stage box-shadow transition |
| `--stagger-step` | 45ms | Subtitle line cascade (step → title → caption) |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, beat transitions, overlay settle |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default UI transitions |
| `--ease-spring` | `cubic-bezier(0.34, 1.45, 0.64, 1)` | Dot activate, step counter tick only |
| `--motion` | `var(--duration-fast) var(--ease-in-out)` | Buttons, nav, cards, dots (default shorthand) |
| `--motion-beat` | `var(--duration-beat) var(--ease-out)` | Poster/video crossfade, beat swap |

### Keyframe animations (`styles.css`)

| Keyframe | Duration / easing | Trigger | Effect |
|---|---|---|---|
| `stage-glow-pulse` | 2.4s infinite, `--ease-in-out` | `.hyperframes-stage.is-playing` | Inset neon ring breathes while video plays |
| `subtitle-stagger-in` | `--duration-beat`, `--ease-out` | `.hyperframe-overlay.is-entering` children | Step, title, caption fade up with stagger delays |
| `step-tick` | `--duration-beat`, `--ease-spring` | `.hyperframe-step.is-ticking` | Step counter blurs/scales on beat change |
| `dot-activate` | `--duration-beat`, `--ease-spring` | `.hyperframe-dot.is-activating` | Active dot overshoots then settles at 1.35× |
| `dot-glow-pulse` | 1.8s infinite, `--ease-in-out` | `.hyperframe-dot.is-active` | Active dot glow ring pulses (carousel indicator only) |

Looping keyframes are confined to **demo stage** and **active carousel dots** — never on CTA buttons.

### JavaScript orchestration (`script.js`)

| Behavior | Implementation | Notes |
|---|---|---|
| **Scroll reveals** | `IntersectionObserver` on `.reveal`; adds `.is-visible` at 12% threshold | Hero `.reveal` elements show immediately on load |
| **Stat count-up** | `[data-count]` elements ease from 0 → target over 1200ms (`ease-out cubic`) | Skipped when `prefers-reduced-motion: reduce` |
| **Beat-synced subtitles** | `showBeat()` swaps overlay content; CSS classes `is-exiting` / `is-entering` / `is-settled` | `BEAT_TRANSITION_MS = 420` (0 when reduced motion) |
| **Hero carousel crossfade** | Poster-only player: `is-fading` / `is-entering` with `--beat-direction` for horizontal drift | Autoplay loops beats by `durationSec` from manifest |
| **Demo video reveal** | `showVideoFrame()`: poster `is-revealing-out`, video `is-revealing-in` at 65% of beat duration | Full-video mode syncs beats via `timeupdate` |
| **Button press feedback** | `pulseButton()` adds `.is-pressed` for 180ms on play/prev/next/dot clicks | No-op when reduced motion |

### Per-component motion

#### Hero carousel (`.hero-theater`)

- **Autoplay** — Poster-only loop; advances every beat's `durationSec` (5–7s per step).
- **Poster crossfade** — Opacity + scale + blur + directional `translateX` via `--beat-direction` (±8–10px).
- **Subtitle overlay** — Exits down (`translateY(8px)`); enters with staggered `subtitle-stagger-in` on step, title, caption.
- **Nav buttons** — Hidden until hover/focus; scale 1.08 on hover, 0.92 on press.
- **Dots** — Active dot scales 1.35× with `dot-glow-pulse`; `dot-activate` on beat change.

#### Demo video + subtitle captions (`#hyperframes-theater`)

- **Play transition** — Poster blurs/scales out; video scales in from 0.97.
- **Playing state** — Stage gets `is-playing` + `stage-glow-pulse` inset glow.
- **Beat sync** — While full video plays, `syncFromVideoTime()` updates subtitles without re-loading poster when video is visible (`subtitleOnly` mode).
- **Step counter** — `.hyperframe-step` receives `is-ticking` on each beat advance.

#### Stat icons (`.stat-icon`)

- **Static glow** — `filter: drop-shadow(0 0 6px rgba(57, 255, 20, 0.35))`; no animation loop.
- **Count-up numbers** — Adjacent `<strong data-count>` animates via JS; icons remain still.

#### Buttons (`.button`, `.hyperframe-btn`)

- **Hover** — `translateY(-1px)` + glow/border brighten via `--motion`.
- **Press** — `.is-pressed` scales to 0.96 (hyperframe) or instant duration on carousel nav; **no infinite animation**.
- **Primary CTA** — Stronger box-shadow on hover only; gradient fill is static.

#### Section reveals (`.reveal`)

- **Initial** — `opacity: 0`, `translateY(24px)`.
- **Visible** — 600ms `--ease-in-out` to full opacity and `translateY(0)`.
- **Stagger** — `.reveal-delay-1` … `-4` add 80ms increments (160ms, 240ms, 320ms).
- **Hero exception** — Hero reveals skip the observer wait and show on first paint.

#### Other UI

- **Feature cards** — Hover lift `-4px` + border/glow via `--motion`.
- **FAQ** — Summary chevron rotates 45° on open.
- **Nav / footer links** — Color transition only (`--motion`).

### Reduced motion fallback

When `prefers-reduced-motion: reduce` is active:

**CSS (`styles.css`):**

- `scroll-behavior: auto` (no smooth scroll).
- Hero carousel nav buttons always visible (`opacity: 1`).
- `.hyperframes-stage.is-playing` — static inset border; no `stage-glow-pulse`.
- Hyperframe posters, videos, overlays, dots — transitions and animations disabled; transforms and filters reset.
- `.reveal` — immediately visible (`opacity: 1`, no transform).
- Button/card/dot hovers — no `translateY` or scale.

**JavaScript (`script.js`):**

- `BEAT_TRANSITION_MS = 0` — beat swaps are instant; no crossfade classes applied.
- All `.reveal` elements get `.is-visible` immediately (no observer).
- Count-up skipped — final stat values shown at once.
- `pulseButton()` and step tick animations no-op.

Content must remain fully readable: static posters, visible captions, and final stat numbers without requiring motion to understand the page.

---

## 8. Hyperframes demo (agency showcase)

**Hyperframes** is the internal name for the captioned step-through demo that showcases the Collins agency experience — hero carousel and full demo theater.

### Assets

- Manifest: `assets/hyperframes-manifest.json`
- Posters: `assets/collins-demo-0X-*.png`
- Segments: `assets/segments/*.webm`
- Full video: `assets/collins-agency-demo.mp4`

### Beat map (7 steps)

| Step | Title | Caption |
|---|---|---|
| 01 | Collins agency | Digital marketing & automation for brands that want clarity, not bloat |
| 02 | Full-funnel services | Strategy, content, paid media, and automation under one senior team |
| 03 | How we work | A guided walkthrough of our approach, step by step |
| 04 | Client results | Outcomes from retainers and campaign partnerships we stand behind |
| 05 | Working together | Engagement models, timelines, and what to expect from a Collins partnership |
| 06 | Book a strategy call | Tell us where growth is stuck. We will map the next 90 days with you. |
| 07 | Collins | Unify, automate, amplify. Your growth agency. |

### DOM structure

```
.hyperframes-theater
  .hyperframes-stage
    .hyperframe-video
    .hyperframe-poster
    .hyperframe-overlay
      .hyperframe-step
      .hyperframe-title
      .hyperframe-caption
  .hyperframes-controls (demo section only)
  .hyperframe-dots
```

Two instances: `#hyperframes-theater` (demo section) and `.hero-theater` (compact hero carousel). Both wired in `script.js`.

### Visual treatment

- Stage: `--radius-lg`, border `--border`, overflow hidden.
- Overlay: bottom gradient scrim; step/title/caption animate on beat change (`.is-entering`, `.is-exiting`).
- Dots: pill/circle toggles; `.is-active` scales with green fill/glow.
- Posters crossfade with `.is-fading` / `.is-entering`; video reveals on play.

When updating copy, sync manifest captions with [BRAND.md](./BRAND.md) §7 and `index.html` demo section.

---

## 9. Implementation handoff

### Token mapping checklist

- [ ] All new colors reference existing CSS variables — no stray hex in components.
- [ ] Typography uses `--font-display` / `--font-body`.
- [ ] Buttons use pill radius and gradient/g ghost pattern — no new button families.
- [ ] Section backgrounds use deep/muted/elevated roles — no white marketing sections.
- [ ] Motion honors `--motion` / `--motion-beat` and reduced-motion media query.
- [ ] Hyperframes manifest stays aligned with landing page narrative (agency, not product).

### QA checklist

- [ ] Primary CTA contrast: neon gradient + `#040806` text passes AA.
- [ ] Body text `#f0f7eb` on `#040806` / `#0f1610` passes AA.
- [ ] Focus states visible on nav, buttons, hyperframe controls, FAQ summaries.
- [ ] Hero and demo hyperframes functional with manifest-loaded beats.
- [ ] Mobile layout: hero stacks, theater full-width, footer columns stack.

### File map

| File | Purpose |
|---|---|
| [BRAND.md](./BRAND.md) | Voice, positioning, CTAs |
| `styles.css` | Token definitions + components |
| `index.html` | Section structure + copy |
| `script.js` | Reveals, stat counters, hyperframes controller |
| `assets/hyperframes-manifest.json` | Demo beat metadata |

If a visual element feels off-brand, adjust tokens here first — then propagate to `styles.css` — before adding one-off overrides.

---

_Updated 2026-06-27. Tokens sourced from `styles.css`; agency narrative from [BRAND.md](./BRAND.md) and `index.html`._
