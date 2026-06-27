# Design System: Collins
**Project ID:** ebd31ae8-0025-441d-8eea-7bbda8af377d

## 1. Visual Theme & Atmosphere
The visual identity for Collins must immediately communicate reliability without appearing rigid; it sits firmly at the intersection of professional authority and creative agility. Drawing from our primary Sage archetype, every design decision serves to educate and empower, presenting data-driven insights with clarity rather than intimidation. The atmosphere should feel like a high-efficiency command center where complex automation processes are rendered into understandable narratives for growth teams. We avoid the sterile, cold minimalism often associated with enterprise SaaS because it implies distance from real business needs; instead, our aesthetic breathes confidence and transparency. This is not just about looking "tech"; it is about visually proving that we understand your operational struggles while offering a clear path forward. The tone of the visual language must be calm yet decisive—mirroring the trustworthy nature required when handling sensitive CRM data and scaling marketing campaigns for small business owners who cannot afford hidden costs or technical ambiguity.

Our positioning intent targets the vital middle ground between niche SEO tools and bloated enterprise suites, serving digital marketers who need rapid deployment alongside financial predictability. The visual theme reflects this by rejecting "bloat" in favor of a streamlined ecosystem where every element has a purpose. We serve agile growth teams that refuse to compromise between speed and clarity; therefore, the design language avoids dense information hierarchies or navigation structures that force users to dig for features they don't use. Instead, we utilize whitespace as an active tool for focus, allowing social media metrics and CRM leads to breathe within a unified system. This approach ensures that when clients land on our materials—whether it is sales collateral or dashboard mockups—they immediately sense the difference between paying for legacy infrastructure versus investing directly in conversion optimization. The product speaks to marketers tired of navigating complex interfaces without dedicated support; visually, we offer a hand-holding interface where complexity is hidden behind intuitive simplicity, reinforcing our promise that no one will be forced to build custom workflows just to access basic connectivity.

Three core design principles anchor this system: Clarity over Complexity, Speed in Presentation, and Human-Centric Transparency. First, **Clarity over Complexity** dictates that data visualization must never obscure the story; charts explain behavior rather than display raw numbers for their own sake. Second, **Speed in Presentation** is reflected in loading states, animations, and layouts that signal immediate responsiveness, reinforcing our tagline of rapid deployment without sacrificing stability. Third, **Human-Centric Transparency** ensures that when we discuss pricing or feature sets visually, the layout remains honest about what a tool can do versus what it cannot, avoiding flashy marketing claims that promise features only to disappoint later. These principles ensure that every pixel serves the goal of transforming scattered online operations into an engine for sustainable growth without hidden costs. The aesthetic is modern but never trendy; it stands as a legacy-free alternative in a market crowded with established players who prioritize their own history over your future needs.

In terms of copy and voice embedded within these visuals, we must walk a tightrope between corporate expertise and accessible partnership. We want the agency to sound like an experienced consultant walking alongside you, not a distant vendor delivering software from on high. The language used in our UI micro-copy and marketing assets should never say "Optimize your fragmented legacy workflows for maximum scalability," which is jargon-heavy and alienating; instead, we must write **"Transform scattered tasks into one streamlined growth engine."** Similarly, avoid the arrogant or generic phrasing of "Unleash the full potential of this all-in-one suite," because that promises magic without delivering on support quality. The correct approach is to say: **"Simplify your marketing stack with transparent automation designed for real teams."** This distinction in wording sets a professional standard where we admit limitations honestly while highlighting our unique advantage in behavioral tracking and ad campaign integration, ensuring clients feel they are partnering with an ally rather than simply purchasing another software subscription.

## 2. Color Palette & Roles
- **Background (#ffffff)**: The foundational canvas for all long-form reading experiences, primary content streams, and core application surfaces. This neutral white ensures maximum legibility while reflecting the Sage archetype's clarity and intellectual purity; use exclusively as the default root background or within high-emphasis cards to reduce cognitive load during dense information consumption.
- **Background Muted (#f4f4f5)**: A subtle wash for section dividers, secondary content areas (e.g., meta-data grids), and low-priority informational panels where visual breathing room is required without introducing distracting white space; acts as a tonal bridge between the stark base canvas and surface elements to maintain depth.
- **Primary Text (#0a0a0a)**: The dominant voice of the brand, applied strictly to headings (H1–H6), primary body copy, and interactive states requiring high contrast; its near-black weight anchors the layout with professional authority, ensuring that core messaging is instantly legible across all screen densities.
- **Secondary Text (#52525b)**: The supportive narrative layer for metadata, timestamps, helper labels, disabled inputs, and captions; designed to recede visually without vanishing entirely, allowing users to scan structural hierarchy while keeping the primary message focused on high-priority text rendered in `#0a0a0a`.
- **Accent (#485668)**: The strategic signal color for all critical interactions including Primary buttons (Submit/Save), active hyperlinks, selected states, and key emphasis indicators; chosen specifically to avoid the aggressive saturation of typical SaaS palettes, reflecting a calm, trustworthy agency presence that guides user attention without shouting.
- **Accent On (#fafafa)**: The exclusive foreground treatment for iconography, text labels, or graphical elements rendered directly upon `#485668` surfaces; utilizes an off-white base rather than pure white to prevent harsh edge contrast when placed against the darkened accent hue in gradients or complex backgrounds.
- **Accent Muted (#6a727d)**: The transitional state for hover effects on buttons, pressed interactive elements (like toggles), and secondary action links; provides a perceptible shift from the base accent tone while maintaining color harmony to indicate availability without triggering immediate execution intent as aggressively as the primary `#485668`.
- **Border (#e4e4e7)**: The structural skeleton defining input field outlines, card container edges, table separators, and grid dividers; a slightly warmer gray designed to be visible yet understated, reinforcing boundaries without competing for attention against content.

**Gradients**: Given the brand's professional nature and muted sage tones, gradients should be applied with restraint primarily in Hero sections or large-scale background art pieces to add depth without chaos.
- *Hero Patterns*: Apply a subtle directional gradient flowing diagonally (approx 45deg) using stops between `#ffffff` fading into very light tints of the Accent (`#fdf0f2`) and Background Muted, creating an atmospheric "wash" that suggests movement while keeping text legible. Avoid mixing this with high-saturation colors; strictly stick to monochromatic or near-monochromatic transitions within the defined palette.
- *Footer/Surface*: Use minimal vertical gradients on footer backgrounds moving from `#f4f4f5` at top down to a slightly deeper neutral (e.g., blending into `#ebebed`) only if supporting high-emphasis CTAs; do not use complex multi-stop rainbows as they violate the Sage archetype of order.

**Dark-theme anchors**: The dark mode implementation prioritizes deep contrast that preserves the brand's serious tone rather than flattening it to pure black.
- *Background*: Shifts from `#ffffff` base to a rich charcoal anchor at **#0a0a0a**. This is not absolute zero but a perceptually neutral gray-black, essential for reducing eye strain during night-time usage while maintaining the "Sage" intellectual depth.
- *Text*: Inverts Primary Text (`#0a0a0a`) to off-white `**fafafa`**, and Secondary Text (`#52525b`) to a mid-tone gray (approx **#8e8e93**) or darker muted accent variants, ensuring text never loses its hierarchy.
- *Accent*: The base Accent color remains **485668** in dark mode as it offers sufficient contrast against the deep background; however, ensure any gradients involving this color add black opacity stops rather than white to prevent washing out on OLED screens.

**Do / don't**: Adhere strictly to these usage rules to maintain brand integrity and accessibility:
- *Don't*: Overuse `Accent (#485668)` as a general background for large surface areas unless explicitly part of a gradient pattern; doing so dilutes the signal color, causing critical calls-to-action to look like accidental errors or broken UI states. Reserve it strictly for interactive elements and focal points.
- *Don't*: Pair `Accent Muted (#6a727d)` with white text on its own background without verifying contrast ratios against specific screen backgrounds; this pair is specifically designed for subtle interaction feedback, not as a high-emphasis container that might lead to legibility issues if combined poorly with dark-mode variants.

**App tokens note**: For engineering implementation, all color usage maps directly to CSS custom properties (e.g., `--color-accent-primary`, `--surface-muted`). These semantic tokens allow the design system to function in light and dark modes via a simple class toggle or media query without duplicating values, ensuring consistent rendering across web applications.

## 3. Typography Rules
# Plus Jakarta Sans: The Architect of Authority & Agility

**Plus Jakarta Sans** serves as the primary narrative driver for Collins, chosen specifically to embody the "Sage" archetype's demand for intelligence and clarity while rejecting the opaque complexity found in legacy enterprise tools. Its geometric yet humanist construction signals that this agency possesses technical depth without sacrificing approachability—a critical differentiator when pitching against bloated platforms like HubSpot or Salesforce where support feels distant.

This font is deployed with surgical precision to establish hierarchy:
*   **H1 (Hero Sections):** Set in `Extra Bold` or `Black`. This weight commands immediate attention, declaring the agency's value proposition before a single pixel of code loads. It suggests a confidence that rivals enterprise giants but moves at startup velocity.
*   **H2 & H3 (Section Headers):** Utilized in `Bold` to break down complex service offerings into digestible chunks for decision-makers scanning quickly. The geometric counters maintain legibility even at smaller sizes, ensuring data-heavy case studies remain accessible.
*   **CTAs & Buttons:** Applied as the exclusive typographic element within action areas (`Semi-Bold`), using color contrast rather than weight alone to guide the user journey toward conversion optimization.

**Inter**: The Engine of Readability & Trust

While Plus Jakarta Sans provides the structural framework, **Inter** acts as the steady hand guiding the client through implementation details, ensuring zero friction in reading dense technical specifications or behavioral tracking metrics. Inter's vast open-source glyph repertoire and exceptional legibility at small sizes make it indispensable for:
*   **UI Microcopy:** Labels next to inputs, toggle states, and navigation labels must be instantly decodable; Inter delivers this without visual noise.
*   **Forms & Metadata:** Critical in the agency workflow where clients input sensitive business data or review campaign metrics; the font reduces cognitive load during high-stakes decision moments.
*   **Body Paragraphs & Case Study Narratives:** Used for all long-form content describing automation logic, SEO strategies, and ROI calculations. Its neutral tone allows the client's voice to shine without stylistic interference.

# Scale Reference: Rhythmic Proportions

Collins' scale system is designed to create breathing room between information clusters, reinforcing the brand promise of "clarity amidst complexity." These values approximate a standard `16px` base line-height ratio but are tuned for screen dominance.

- **H1**: `90px` / `-3/2rem`<br>`Font Weight: 800–900` (Extra Bold to Black) — — — Loose (`1.2`) - Creates a bold statement block — Hero headlines, landing page anchors.
- **H2**: `48px` / `3rem`<br>`Font Weight: 700` (Bold) — — — Standard (`1.5`) — Section dividers in service pages & case studies.
- **Sub-header/Label**: `20px` / `1.25rem`<br>`Font Weight: 600–700` (Semi-Bold) — — — Tighter (`1.3`) - Groups related info logically — Card titles, step indicators in automation flows.
- **Body**: — — `16px – 24px / 1rem – 1.5rem`<br>`Font Weight: 400–500` (Regular to Medium) — Relaxed (`1.6`) - Essential for reading complex data rows and ROI tables without fatigue. — Feature descriptions, pricing breakdowns, methodology steps.
- **Caption/Small**: — — `12px – 13px / 0.75rem`<br>`Font Weight: 400–600` (Regular to Semi-Bold) — Moderate (`1.4`) - Metadata tags, legal disclaimers, UI badges. — Form labels, tooltip text, footer links.

# Pairing Rules: The Hierarchy of Information

Adherence to this pairing logic ensures the interface never feels disjointed, even when managing disparate data streams (e.g., syncing CRM leads with social metrics).

1.  **The "Statement" Zone:** All primary communication headers and value propositions utilize **Plus Jakarta Sans**. If a header is `Extra Bold` or larger than `24px`, it must be Plus Jakarta. Never dilute the brand's authority by using Inter for major headlines; that creates visual instability typical of generic SaaS templates we explicitly avoid.
2.  **The "Data" Zone:** Any content containing rows, columns, lists, or detailed explanations defaults to **Inter**. If a section is text-heavy (over 150 words) regarding automation logic or case study results, switch immediately to Inter at `400` weight with ample line height (`1.6`).
3.  **The "Action" Zone:** Interactive elements (buttons and form placeholders) live in the intersection: use Plus Jakarta Sans for button text when the design is minimal, but default to Inter within complex multi-field forms or toolbars where density matters most.

# Tracking & Emphasis: Breathing Room vs. Urgency

*   **Tight Tracking (`-1%` to `-2%`):** Apply strictly to H3 headers and sub-headings in Plus Jakarta Sans when space is at a premium (e.g., dense feature grids). This creates visual cohesion without sacrificing readability, signaling that the agency handles complexity with elegance.
    *   *Exception:* Never tighten tracking on body copy or CTAs; this reduces legibility and appears amateurish.
*   **Bold Emphasis (`700`):** In Inter text blocks, use bold sparingly only to highlight key metrics (e.g., conversion rates) or specific action items within a strategy breakdown. Avoid `Extra Bold` in UI body copy unless referencing the agency's own core brand values.
    *   *Pro Tip:* Use font variants (`Semi-Bold`) rather than simply increasing weight if you need emphasis on secondary headers; it maintains better visual rhythm with the primary headline weights.

# Do / Don't: Avoiding Legacy Pitfalls

**❌ DO NOT use Tight Tracking on Body Copy or Small UI Labels.**
Many design systems force tight letter-spacing to create a "modern" look, but for Collins' specific audience (agile marketers), this sacrifices readability when scanning long lists of behavioral triggers or technical specs. The Sage archetype requires clear communication; never trade clarity for style trends unless the user is looking at large-scale hero imagery where tracking can be adjusted without affecting legibility.

**❌ DO NOT mix Plus Jakarta Sans and Inter in a single sentence flow.**
While both are excellent, they have distinct geometric personalities that clash if not clearly demarcated by whitespace or layout structure. Do not use "Inter for the H2" simply because you ran out of space; instead, redesign the hierarchy to push the heavy title down two lines. Consistency in font usage reinforces trust—a non-negotiable requirement when an agency represents a brand's future revenue stream against skeptical enterprise buyers who have been burned by opaque pricing and poor support elsewhere.

## 4. Component Stylings
### Button Architecture & Interaction States
**Primary Action (The "Accent" Driver):** The primary button serves as the direct response engine for Collins, leveraging our Sage archetype to demand authority without aggression. It utilizes solid `#485668` (#accent) fill with high-contrast foreground text in `#fafafa` (#on-accent).
*   **Morphology:** Utilize a pill-rounded radius of `20px` (`border-radius: 1rem`) to soften the corporate edge, inviting approachability. Dimensions should strictly follow an internal grid (min-height 48px) scaled by button size variants (sm/md/lg).
*   **Typography & Casing:** Labels must be uppercase with a tight letter-spacing of `2px` (`text-transform: uppercase; letter-spacing: .05em`). Font-weight defaults to medium or semi-bold depending on width. Trailing punctuation is strictly forbidden.
*   **Interaction Physics:** On hover, introduce an immediate opacity drop in the accent fill to `-6%`, transitioning through our muted state `#6a727d` (`#accent-muted`) via a subtle 150ms ease-out animation before snapping back or fading out on focus. The active/pressed state must utilize `rgba(72, 86, 104, 0.9)` to indicate depth without darkening the brand identity too heavily.
*   **Secondary Action:** Use transparent backgrounds with a single-weighted border in `#e4e4e7` (#border). On hover/focus, invert fill and stroke colors (Fill becomes `#fafafa`, Stroke becomes `#485668`) to maintain visibility against light surfaces. Text color switches from standard gray to primary black (`#0a0a0a`).
*   **Ghost Variant:** Reserved for dense data tables or dashboard contexts where space is premium; identical behavior to secondary but utilizing only the text and border weight without background interruption until active state.

### Surface & Container Systems (Cards, Panels, Containers)
**The "Canvas" Principle:** Collins surfaces must never compete with content; they should act as neutral frames for information.
*   **Surface Colors:** Default containers reside on pure white (`#ffffff`). Secondary sections or cards requiring differentiation utilize `#f4f4f5` (#background-muted). Avoid generic grays; all muted backgrounds are strictly this specific off-white tone to maintain the professional, uncluttered aesthetic.
*   **Borders & Separation:** Outlines for inputs, cards, and distinct panels must use a subtle stroke of `1px solid #e4e4e7` (#border). Never allow borders to touch; always respect an 8pt (or 2rem) margin buffer before adjacent elements like titles or images.
*   **Shadows:** Shadow usage is minimalist but present for hierarchy. Use a diffuse, multi-stop shadow strictly on elevation states: `0px 4px 12px rgba(72, 86, 104, 0.05)`. Never use hard black shadows or colored drop-shadows; they must recede into the white canvas seamlessly to maintain that "paper" feel of the Sage archetype.
*   **Padding Tone:** Internal padding scales with card size: Small cards (icons only): `16px`; Medium content blocks: `24px` vertical / `32px` horizontal; Large dashboards/containers: `48px`. This breathing room is critical for readability and perceived trustworthiness.

### Data Capture & Form Interfaces
**Focus on Clarity:** Forms are gateways to data, not the destination themselves. The design must guide users through a frictionless journey that feels secure yet effortless.
*   **Input States:** Default inputs use `#e4e4e7` border with transparent backgrounds (unless grouped). Placeholder text uses Secondary Text (`#52525b`) at 80% opacity to avoid visual noise without competing for attention.
*   **Focus Mechanics:** The active state is the most important moment in form UX. It must transition instantly from `transparent` or border-colors: white -> solid Accent `#485668`. Accompany this with a subtle ring glow effect using our accent hue at low opacity to signal system response time, reinforcing trust that the click was registered immediately.
*   **Error Handling:** Never use red (`#dc2626` or similar) which implies danger; use semantic warnings like "Please verify..." in secondary text color near a border change to `#e1705a` (custom muted error tone). Underline errors with a 4pt thick stroke rather than generic borders.
*   **Validation Success:** Upon completion, inputs should visually shift briefly toward the Primary Black (`#0a0a0a`) border or green-ish accent variation to confirm data integrity before submitting, reducing anxiety about submission failure.

### Brand Identity & Lockup Protocols
**Logo Presentation Logic:** Since asset paths are abstracted for this system:
*   **Clearspace Rule:** All instances of the Collins brand mark must maintain a clear space equal to `50%` of its height on all four sides unless constrained by layout rules (e.g., mobile headers). Do not allow text labels or navigation links from "Collins" to overlap directly with the iconography.
*   **Inverted Variants:** Provide explicit SVG paths for dark mode and reversed contexts where background is `#485668`. The inverted logo should utilize white (`#ffffff`) rather than `#fafafa` if possible, but maintain strict adherence to brand colors when on light surfaces; ensure the text element remains readable against any backdrop.
*   **Prohibited Usage:** Never rotate logos beyond 90 degrees (unless part of a specific circular badge context). Do not stretch horizontal lockups into vertical rectangles or vice versa without explicit re-design approval from the Creative Lead.

### Structural Patterns: Nav, Hero & Pricing
**Navigation Bar Logic:** The agency-facing header should prioritize utility over decoration but never clutter the viewport. A fixed-top nav bar should utilize a semi-transparent backdrop filter (`blur(8px)`) blending `rgba(255, 255, 255, 0.9)` so that content scrolls behind softly, maintaining continuity of the "canvas."
*   **Hero Section:** The primary hero area must start with pure white or a very light tint of Accent Muted to establish immediate clarity. Value propositions should use large-scale typography (`3rem+`) in Primary Text (`#0a0a0a`), utilizing only one instance of Accent color for the main CTA link within the copy itself (e.g., "Learn more at Collins").
*   **Pricing Structures:** Avoid complex tiered tables if possible; opt for clean cards. The most expensive or recommended plan should subtly utilize our `#485668` accent in a border-bottom line of 2px beneath it to draw the eye without needing a background color change that disrupts flow. Use `#fafafa` inside these specific "highlighted" pricing boxes for text contrast against white, but never make them darker than standard cards unless emphasizing an upsell feature list.

### Do's and Don'ts: Brand Integrity
- **Do**: **DO** use `#485668` exclusively for high-emphasis states (buttons, links) to maintain the "Sage" wisdom vibe; keep it restrained. — **Don't**: **DON'T** introduce gradients or noise textures that distract from content readability or dilute the clean white canvas aesthetic.
| **DO** allow generous whitespace (`#ffffff`) between sections to let the professional copy breathe and build trust through simplicity. | **DON'T** use red, orange, or yellow colors anywhere; strictly adhere to the defined palette (Accents, Muteds, Grays) regardless of urgent content warnings needing attention.

## 5. Layout Principles
The primary frame for all marketing assets adheres to an 120rem (approx. 1920px) logical width, creating a "studio-grade" viewport that feels premium without breaking responsive constraints on desktops. Below this max-width container, content utilizes the defined spacing scale strictly: standard section separation uses `spacing-lg` (16px), while distinct narrative breaks or major feature switches utilize `spacing-xl` (40px). Vertical rhythm between card-based components within a column is set to 2rem with an explicit gap of 8px, ensuring cards float visually rather than touching.

Hero sections follow a strict top-to-bottom hierarchy: the primary headline occupies one full grid row (h1), followed by subcopy and value proposition in a second row, with the primary CTA block anchored at the bottom for maximum click-through focus. Accent backgrounds—specifically brand blues or teals reserved for conversion points—are applied exclusively to CTAs and key insight metrics; muted backgrounds should dominate 80% of the page surface (off-white/light grays) to reduce cognitive load, with high-contrast color only used when highlighting specific data anomalies or success states in analytics views.

For internal product UIs like dashboards and settings panels, employ a rigid 12-column grid where primary navigation is flush left within this frame, allowing the main content area to stretch fluidly while maintaining alignment guides for charts and dense lists. Data tables utilize alternating row backgrounds at `spacing-xs` increments (4px) rather than solid blocks to improve readability over long scrolls.

**Alignment status:**
- Fonts — Headings inherit from global theme sans-serif stack; body text strictly limited to 1rem base size, never scaling larger without explicit design token override for feature sections.
- Colors — Backgrounds default to `surface-default`; interactive states use `primary-action` exclusively; error/success messages utilize semantic indicators rather than brand primary colors to maintain visual clarity.
- Spacing — All gutters must correspond exactly to the defined scale (4, 8, 16, 24); arbitrary pixel values are forbidden unless correcting for specific browser edge cases or legacy asset integration.
- Components — Buttons respect `radius-sm` (4px) as default; inputs use border radius of `0` on left/right and full height to mimic system native feel until elevation sm is applied via shadow layering only.

**Do / don't:**
- Do stack headlines vertically with subcopy before placing a CTA; Don't wrap subtitles inside the same line-height block as the header if it reduces readability below 20 words per row.
- Do use solid, opaque backgrounds for cards containing dense data or complex charts to aid focus; Don't rely solely on shadow elevation for separation when content density exceeds three paragraphs of text within a single container.

## 6. Spacing & Radius Scale
### Spacing & Radius Scale

In Collins' Agency operating mode, spacing is not merely cosmetic; it is a structural language that communicates premium stability and thoughtful craft to your ideal client profile (ICP). We move away from arbitrary pixel counts toward a disciplined token system where every gap tells the eye how much weight to give an element. This guide translates our internal design tokens into practical usage rules for building a brand portfolio site, pitch decks, or case study showcases that command market respect.

Consistency in vertical rhythm is the single most effective way to signal agency competence. We use this scale to enforce "breathing room" based on content density and hierarchy.

- **`xs`**: `4px` — **Micro-utility gaps.** Use only between inline elements (e.g., list items, small icon text pairs). Never use this for section breaks; it creates visual clutter that cheapens the brand.
- **`sm`**: `8px` — **Component tightness.** The standard gap inside compact components like avatar stacks in bios or form field labels vs. inputs. Use here to separate adjacent columns on cards without creating large white space gaps.
- **`md`**: `16px` — **The Golden Standard.** This is your default inter-element padding for buttons (horizontal alignment) and the primary gap between rows of text in body copy. In portfolio grids, this defines standard item separation when content density is high.
- **`lg`**: `24px` — **Grouping & Section Breaks.** Use to separate distinct UI groups or columns with different semantic weight (e.g., separating a header block from the sub-grid below it). In site layouts, this acts as the standard gap between featured case studies.
- **`xl`**: `40px` — **Major Hierarchy Dividers.** Reserve for full-width section dividers or large hero-to-content transitions. This scale signals "a new idea is starting." Use generously in whitespace-heavy landing pages to establish authority and focus on the work, not the browser chrome.
- **`2xl`**: `56px` — **Feature-Level Separation.** The maximum vertical rhythm used between major thematic blocks (e.g., Hero section vs. Services summary). If a gap feels too large here, you have likely introduced unnecessary whitespace that distracts from the portfolio's impact.

#### 2. Radius Scale & Component Mapping (`sm` – `full`)
Radius in Collins defines how "friendly" or "corporate rigid" an interface appears. For an agency selling strategy and design, we use radius to match the tone of each project while maintaining system consistency.

- **`sm`**: `4px` — **Data & Inputs.** Strictly used on form fields (`input`, `textarea`) and small informational badges (e.g., "PDF", "Link"). Using this radius suggests precision, compliance, and utility. Avoid using it for primary brand buttons; it looks too technical unless specifically mimicking a dashboard style project case study.
- **`md`**: `8px` — **Standard UI Elements.** The default for internal links (`<a>` tags), standard toggle switches, and secondary action chips within dashboards or blog cards. It maintains the illusion of "standard industry practice" while allowing your brand to stand out in its container.
- **`lg`**: `12px` — **Elevated Surfaces & Cards.** This is the sweet spot for content cards on portfolio pages. When a client needs full-screen imagery, pair this radius with high elevation (`elev-lg`) and generous padding (`pad-4xl`). It softens the edges of heavy visuals without making them look overly playful or childish.
- **`full`**: `9999px` — **Surface Continuity.** Reserved for floating modals, hero banners that span 100% width/height, and primary call-to-action (CTA) buttons on landing pages. This creates a "floating" island effect where the content feels contained in its own world. Use this sparingly to drive maximum conversion focus.

#### 3. Practical Pattern Mapping
Don't guess; apply these direct token mappings to your design system configuration:

*   **Primary Button:** `padding-y: md` (8px vertical), `radius: full`. The "pills" shape signals friendliness and confidence, distinct from the rigid utility of data dashboards.
*   **Standard Content Card:** `border-radius: lg` (12px) paired with internal padding derived from our spacing scale (`md` for title area, `lg` for content block). This creates a balanced "box" that frames work effectively without feeling cramped.
*   **Section Vertical Rhythm:** Default gap between major blocks should be `xl` (40px) to allow the user's eye to rest and digest complex case study narratives before moving to the next visual chapter.

#### 4. Do / Don't Consistency Rules
To ensure your agency brand feels cohesive across deliverables, adhere strictly to these constraints:

*   **DO:** Use `md` (16px) as the universal default for horizontal spacing between inline text blocks and form inputs unless you are deliberately creating a minimalist aesthetic where content density is high.
*   **DON'T:** Mix `sm` radius on primary buttons with `lg` or `full` cards; this creates visual friction that suggests an unpolished internal state rather than external brand authority.
*   **DO:** Maintain consistent elevation logic: Small components use standard shadows, while floating hero elements (`radius: full`) always demand the strongest shadow (`elev-lg`, 12px blur) to create separation from the background.
*   **DON'T:** Use `40px` (`xl`) gaps between every paragraph within a single body block of text; this fractures reading flow and is reserved only for separating distinct sections or major concept pivots.

#### Technical Implementation Notes (CSS/SCSS Context)
When exporting these rules to your frontend stack:

*   **Shadows:** Use `0 1px 2px rgba(0,0,0,0.06)` for the default "lifted" state of cards using `radius: lg`. For deep immersion (full-screen sections), switch to `0 4px 12px rgba(0,0,0,0.08)`.
*   **Animation:** Apply `cubic-bezier(0.4, 0, 0.2, 1)` with a duration of `120ms` for micro-interactions (hover states on links/buttons). Use `200ms` only when revealing entire sections or loading heavy case study images to ensure the motion feels substantial and deliberate rather than snappy.

## 7. Elevation & Motion
We define Elevation as the visual hierarchy that communicates component importance based on interaction state: use **elevation-sm** for standard content containers like informational cards and text-heavy dropdowns to maintain an airy, professional feel; apply **elevation-md** exclusively to active modals or primary action panels where user focus is required without appearing intrusive; reserve **elevation-lg** strictly for system-level alerts or hero-layer overlays that demand immediate attention. For Motion durations, adhere rigidly to the 120ms standard for micro-interactions like checkbox ticks or hover states to ensure snappy responsiveness on high-frequency tasks, while mandating a 200ms duration for page transitions and full modal appearances to allow the user's eye to naturally settle before loading additional content. All motion implementations must utilize `cubic-bezier(0.4, 0, 0.2, 1)` to strike the ideal balance between technical precision and organic rhythm appropriate for a trustworthy brand tone.

Crucially, always include the Reduced-Motion accessibility flag in your build settings; if this preference is detected by user agent or system detection, immediately strip all non-essential animations while retaining state changes via color shifts alone. Regarding shadows and animation usage: do use soft, diffused elevation layers to create depth that separates interface elements from the background without visual clutter; never do hard-edge drop-shadows or aggressive parallax effects as these undermine brand credibility and professional clarity. Remember that in an agency operating mode where positioning is paramount, every pixel must contribute to a market-facing narrative of reliability—avoid animation bloat just because you can, ensuring the final product reflects a team capable of delivering precise, accessible, and high-trust digital experiences for winning clients across any vertical.

_Generated 2026-06-27 via per-section AI enrichment._
