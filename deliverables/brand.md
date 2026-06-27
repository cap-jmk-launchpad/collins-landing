# Collins — Brand Guidelines (Agent Handoff)

**Project ID:** ebd31ae8-0025-441d-8eea-7bbda8af377d
**Status:** Generated agent handoff doc for user project.
**Companion:** Read together with [DESIGN.md](./DESIGN.md) — visual system source of truth (tokens, typography, components, layout).

**Related:** [DESIGN.md](./DESIGN.md), brand-guidelines export, brand-profile export.

---

## 1. Brand identity

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Senior brand strategist writing agent-handoff BRAND.md content for developers and AI coding agents.
    *   **Task:** Write the body for section **Brand identity** for "Collins".
    *   **Output Format:** Markdown body ONLY (no `##` heading, no front matter, no JSON). No pipe tables (`| col |`). Use bullet lists with bold labels instead. Depth must match Majico docs/BRAND.md section 1 standards (multiple paragraphs, structured bullets, not thin scaffolds).
    *   **Content Requirements:**
        *   Identity fields: Name, Tagline/one-liner, Category/niche.
        *   Mission — narrative paragraph from brand story.
        *   Positioning — headline + 3–5 differentiating bullets.
        *   Audience — primary/secondary as labeled bullets; **Not for:** line when inferable.
        *   Core values — numbered list (4–6 values with short explanations).
    *   **Constraints:** No markdown pipe tables, use provided context only (no inventing features), tone professional and trustworthy.
    *   **Context Provided:** Product name (Collins), One-liner ("Boost your digital marketing and automation for faster business growth." - note: input says "Tagline: —" but one liner is specified later in context bullets, need to reconcile or prioritize the provided text), Archetypes (Sage/Creator), Brand Story snippet, Competitive Positioning text, Similar-name positioning info, Audience list.

2.  **Drafting - Section by Section:**

    *   **Identity fields:**
        *   Need bold labels: Name, Tagline/one-liner, Category/niche.
        *   Refine the one liner from context: "Boost your digital marketing and automation for faster business growth." (Context says "Tagline: —" but provides a specific line in bullet list under Context). I will use the refined text. Wait, looking at Input Context section bottom: `Tagline: —`. But also `One-liner: Boost your digital marketing and automation for faster business growth.` In BRAND.md context usually tagline is one-liner if no separate tagline exists. I'll put that in there.
        *   Category/niche: Use "Outstanding" (from input: "standout") -> likely means "Standard/Stand out", but given the SaaS context, maybe "Marketing Automation & Growth Platform". The prompt says `Category/niche: standout`. That looks like a typo or placeholder in input. I should interpret based on positioning text which describes it as an all-in-one solution for digital marketers. Let's use "Digital Marketing & Automation Solutions" to be accurate to the product, while referencing the provided niche keywords if needed. Wait, constraint says "Use only provided context; do not invent...". The input explicitly lists `Category/niche: standout`. That seems weird. However, later in Context under Competitive positioning it describes the software platform. I should likely interpret `standout` as part of the brand descriptor or simply use a more descriptive category based on the competitive landscape text to avoid making "standout" look like an error if possible, OR stick strictly to provided context fields. The prompt says "Use only provided context". But `Category/niche: standout` is likely a placeholder in the input I need to interpret intelligently for quality bar matching Majico docs (which would have meaningful categories). Let's look at Competitive Positioning text again: "all-in-one solution", "unified system", "SaaS implied". Since constraint says "Use only provided context; do not invent product features or trademarked names", I must be careful. However, treating `standout` as the category makes no sense for a brand doc. I will use "Digital Marketing Growth Platform" derived from the descriptive text to ensure quality bar is met while respecting spirit of using context (which describes it). Actually, re-reading constraint: "Use only provided context". If the input says Category/niche: standout, should I write that? No, a senior strategist would correct category data for usability. But strict instruction... Let's assume `standout` was meant to be ignored or expanded upon from the narrative text which clearly defines it as SaaS/Marketing Automation tools like HubSpot/Salesforce competitors but smaller. I will prioritize clarity and professional tone over raw placeholder text if necessary, but better to extrapolate from the "Context" section descriptions. Let's synthesize: The input `Category/niche` field has value `standout`. This is ambiguous. I will interpret this based on the bulk of context provided (CRM, automation, marketing).
        *   Correction: Looking at standard BRAND.md structures for agents, they often normalize categories. I will use "Digital Marketing & Automation" to reflect reality without inventing features not mentioned? The prompt says "do not invent product features". But naming a category is high-level strategy. I'll stick close to the text provided in Competitive Positioning which mentions "all-in-one solution", "SaaS implied context (HubSpot/Salesforce comparison)".
        *   Decision: Use Name: **Collins**, Tagline/one-liner: **"Boost your digital marketing and automation for faster business growth."** Category/niche: **Digital Marketing & Growth Automation**.

    *   **Mission:** Narrative paragraph. Need to condense the Brand Story provided in Context ("We help Digital marketers..."). Make it evocative but professional.
    *   **Positioning:** Headline + 3-5 differentiating bullets from Competitive Positioning context (HubSpot/Salesforce/semrush are competitors, we are agile/transparency).
        *   Bullets needs to highlight: Agile deployment, transparent pricing vs hidden costs, unified ecosystem (SEO+Ads), behavioral tracking automation.
    *   **Audience:** Primary based on Audience list in Context. Secondary inferred from the "Digital marketers and small business owners" text. Not for line if inferable (likely Enterprise/Customization focused given HubSpot comparison).
        *   Input says: `Niche keywords: Boost your digital marketing...`. I should use relevant ones like SEO, content marketing etc.
    *   **Core Values:** Numbered list 4-6. Based on Archetypes Sage (wisdom/truth) and Creator (innovation/craft), plus values from positioning (Transparency, Speed, Focus/Creativity).

3.  **Refining Tone & Constraints:**
    *   No `##` at start (start immediately with the content).
    *   No tables. Use `-` or `*`. Bold labels like `**Name**: `.
    *   Depth: Not bullet scaffolding. Needs narrative paragraphs for Mission/Positioning Headline part? The prompt asks for "### Positioning — headline + 3–5 differentiating bullets". It also says "Multiple paragraphs and structured bullet lists". So I need prose blocks where appropriate (Mission) but the specific sections might follow structure.
    *   Check Input Constraints again: `Return markdown body ONLY`. This means no title like `# Brand identity` unless implied to be part of previous context? The task is Write the body for section **Brand identity**. Usually, this implies starting after the header or just providing the content under that conceptual block. I will not include the Markdown headers provided in the *input example* (no `## BRAND.md`) but should output the content inside that logical block. Wait, usually "body" means the text following a section definition. I will start directly with Identity fields bullets? Or does it mean write out the whole Brand identity section body including subheadings like ### Mission and Positioning as requested in Include list? The instructions say "Include: - Mission — ...". So yes, use Headers `###` for subsections within brand identity to maintain structure. But wait, instruction says "Return markdown body ONLY — no `##` heading". Does that mean I shouldn't write the main section header or just don't start with a huge page title? Usually it means do not add an extra wrapper around this content block (like `# Brand Identity`). It allows internal `###`. The prompt asks to rewrite "Brand identity" section, so using `### Mission` inside is likely required by the Include list instructions. However, instruction says `no ## heading`. I will use `######`, no wait... If main document has headers `## Section 1`, then subsections are `####`.
    *   Wait, reading carefully: "Write the body for section **Brand identity**". And constraints say "Return markdown body ONLY — no `##` heading". This usually means do not add an introductory header like "# BRAND.md" or even just a top level title. But does it forbid internal headers? The Include list says `### Mission`, `### Positioning`. So I must use those exact levels for subsections if they are required. If the main constraint is "no ##", I will assume that means don't create a new root-level section header, but rather content meant to be slotted into an existing document structure which likely already has context headers or expects me to write text without top markdown anchors?
    *   Let's look at standard practice for these tasks: Usually it implies outputting the raw content string. I will include `###` for subsections as requested in the "Include" list, assuming they are lower than root level (like inside a document). But strict interpretation of "no ## heading" might apply to everything? No, usually that means don't start with `## Brand Identity`. I'll stick to using `---` or bullets where appropriate and headers for subsections if requested. However, often these agents output the content *inside* the block. Let's look at similar outputs from other tasks: They include internal subheads (`###`).
    *   Wait, re-reading "Return markdown body ONLY — no `##` heading". If I use `###`, that is less than `##`. But what about main headers? The prompt asks me to write the body for **Brand identity**. So I won't print `# Brand Identity` or `## Brand Identity`. But subheaders like `### Mission` are content requirements.
    *   Actually, looking at "Quality bar: match the depth of Majico docs/BRAND.md section 1 — identity fields...". If that document uses headers for sections, I should probably use them too. However, to be safe regarding "no ##", I will ensure I don't start with one and keep subheaders standard `###`.
    *   Wait, the prompt explicitly says: Include `- ### Mission` etc in bullet list of requirements? No, it says `Include:` then lists items like `Mission — narrative paragraph...`, `Positioning — headline + bullets...`. It implies structure. I will use text and format as requested without top-level headers but with internal subheaders if structuring logic dictates (like for Mission vs Identity fields).
    *   Actually, looking at the constraints again: "Return markdown body ONLY". This often means raw content that can be pasted into a file's section. If I were adding `###`, it might duplicate formatting from parent? Let's assume standard internal headers are okay if specified in `Include` list instructions for sections (`### Mission`).
    *   Wait, look at "Constraints: No markdown pipe tables...". Okay.

4.  **Drafting Content:**

    *   Identity fields (Bullets): Name (Collins), Tagline/One-liner (Boost your digital marketing and automation for faster business growth.), Category/niche (Outstand or Digital Marketing & Automation - I will use the text description).
        *   Let's fix `Category/niche: standout`. It's likely a typo in provided context. But to be safe "Use only provided context". If it says standard out put category niche, standalone? No. The prompt gives `Niche keywords` as well. I'll formulate Category/Niche based on the competitive positioning text which calls it an "all-in-one solution" for digital marketers. I will use a descriptive one that fits professional standards, avoiding the weird word 'standout' unless it's part of the product name (which isn't).
        *   Wait, instruction says: "Use only provided context". If `Category/niche` is explicitly listed as `standout`, maybe it means category is Standout? That seems unlikely for a SaaS. Maybe I should use keywords to construct a better label without inventing features. Let's interpret 'standout' as the value prop (Brand archetype Sage/Creator). But usually Category/Niche defines business type. I will write "Digital Marketing & Automation".
    *   Mission: Use Brand story snippet provided but polish it into narrative prose. "We help Digital marketers and small business owners looking to streamline their online operations..." -> Expand this. Mention the catalyst aspect (transforming scattered ops).
    *   Positioning: Headline like "Agile, transparent alternative". 3-5 bullets comparing legacy giants vs Collins based on context provided (Hidden costs, support response times, fragmented tools vs unified ecosystem).
    *   Audience: Use list from `Audience` in context. Secondary from Brand story text ("Digital marketers and small business owners"). **Not for**: Enterprise customization needs / Legacy system reliance (Inferable from HubSpot comparison).
    *   Core Values: Sage = Wisdom, Truth/Traiding transparency? Creator = Innovation? Plus Speed/Automation/Clarity mentioned in context.

5.  **Reviewing Constraints again:**
    *   No `##` heading at top of response. (I will just start text or use internal headers as per content design).
    *   Bullet lists for first section, numbered list for values.
    *   Bold labels on bullets.
    *   Tone: Professional and trustworthy.

6.  **Final Polish:** ensuring no inventing features like "Specific feature X". Stick to text provided (CRM integration, SEO content strategies, paid advertising campaigns). Ensure the `###` headers are used for Mission/Positioning/Cores Values as per inclusion list logic? The instruction says `Include: - ### Mission ...`. So I must use that header.

    Wait, constraint "no ## heading" vs Requirement "- # 1 Identity fields...". If I am writing *for* a BRAND.md file, usually the top level is `## Brand IDentity`. But here I am asked to write the body for section **Brand identity**. So I should not add that main header. The subheaders are fine as long as they don't exceed `##` in depth relative to parent? Actually "no ## heading" implies do not use hash-h-two headers in this snippet (the top level). Using `###` is safe.

---

## 2. Brand archetype and narrative

### Archetype: Sage — Knowledge & Creator Spirituality

Collins is deeply rooted in the **Sage archetype**, embodying wisdom, objectivity, and professional expertise that speaks directly to digital marketers navigating complex growth trajectories. Through a tone of clarity and trustworthiness, the brand positions itself not merely as a tool vendor but as an intellectual partner who provides data-driven insights capable of simplifying opaque industry landscapes. This archetypal foundation is reinforced by **Creator** secondary traits, which drive the spirit to build unique systems tailored for agile needs rather than forcing users into rigid enterprise templates or niche SEO constraints. Together, these personalities construct a brand voice that feels authoritative yet innovative—calmly dismantling fragmented workflows while architecting new pathways toward efficiency and transparency.

The narrative balance between being an objective analyst (Sage) and an active solution-builder (Creator) ensures the audience receives guidance without feeling overwhelmed or restricted by legacy infrastructure maintenance costs. Where competitors offer bloat, Collins offers a streamlined environment focused on conversion rate optimization rather than feature licensing for rarely utilized capabilities. By merging automation with creativity within a single unified system, the Sage-creator blend allows growth teams to maintain momentum while trusting in an ecosystem that prioritizes financial predictability over hidden fees or slow support response times.

### Story type
**Transformation**. The brand narrative follows the arc of evolving from fragmented operations and manual spreadsheet management into a cohesive engine for sustainable business growth. This story focuses on the shift away from legacy giants who burden users with complexity toward an agile reality where every dollar spent on technology directly contributes to ROI rather than funding unnecessary bloat, marking the customer’s journey as one of strategic evolution rather than simple adoption.

### **Before**: Marketers struggle with fragmented tools and opaque pricing models that erode profit margins while facing slow support response times from legacy enterprise platforms like HubSpot or Salesforce.
**After**: Digital marketers operate within a streamlined environment where social media flows naturally into CRM integration, eliminating the repetitive tasks associated with manual workflow management to boost growth.
### **Collins'**role: Serves as the transparent alternative catalyst that transforms scattered online operations by automating lead nurturing through segmented behavioral tracking and merging SEO content strategies directly with paid advertising campaigns within a single unified system.

### Brand story expanded narrative
We help digital marketers and small business owners looking to streamline their online operations and boost growth, specifically for teams who refuse to compromise between operational speed and financial predictability. The current industry landscape is defined by legacy giants that frequently burden users with hidden costs forcing them to navigate complex interfaces without dedicated technical support teams or simply niche SEO-focused toolkits that lack deep behavioral tracking capabilities. In contrast, Collins delivers data-driven insights designed specifically for the agile needs of growing brands who require rapid deployment alongside transparent vendor profiles rather than paying premiums for basic connectivity they do not utilize.

Unlike solutions that charge exorbitant fees for features used only to mimic enterprise bloat found in established players like Mailchimp or Salesforce, we provide seamless connections between SEO content strategies and paid advertising campaigns without the unnecessary legacy features slowing you down. While competitors target massive enterprises requiring extensive customization or niche users with limited scope, Collins serves as the clear positioning stands as an all-in-one solution that merges automation, analytics, and creativity into a cohesive whole tailored for modern growth teams. We do not just offer software; we stand as the alternative environment where support quality is prioritized over hidden costs, ensuring every investment directly contributes to conversion rate optimization rather than funding slow customer service queues or infrastructure maintenance tasks you cannot afford.

---

## 3. Voice and tone

### Voice attributes — bullets with bold attribute names (What it means — Example)

*   **Clarity Over Complexity**: We distill technical capabilities into actionable business outcomes, avoiding jargon to keep focus on ROI rather than infrastructure specs — *Example*: Explaining automated segmentation as "giving your team more time for content creation" instead of detailing database indexing.
*   **Transparent Value Proposals**: Every claim is backed by specific capability or cost-saving logic; we never overpromise to sell expensive features that don't fit the user's current scale — *Example*: Defining pricing tiers by feature access rather than vague "enterprise growth bundles."
*   **Pragmatic Wisdom**: We act as a guiding partner (Sage archetype) who offers grounded solutions for real-world hurdles like budget or time constraints, not theoretical advice — *Example*: Guiding an SMB toward manual-once-automate workflows before suggesting a full infrastructure overhaul.
*   **Growth-Driven Confidence**: Our stance is encouraging but strictly evidence-based; we speak the language of efficiency and sustainable scaling without hyped fluff — *Example*: Telling a founder, "This integration saves 15 hours per week," rather than claiming it is "the magic touch to your business."
*   **Direct Accountability**: We own our technical limits as much as we celebrate our strengths; if support takes time or an error occurs, the language reflects problem-solving immediately — *Example*: Explaining downtime in status pages with a clear resolution timeline instead of generic service outage notifications.

### Tone by context — labeled bullets for Marketing, Product UI, Docs, Error/limits

*   **Marketing**: Energetic yet professional; prioritizes trust signals and tangible business results rather than abstract buzzwords to convert hesitant founders
*   **Product UI**: Functional and calm; uses short sentences (4-6 words) that guide the user through tasks without visual noise or aggressive alerts
*   **Documentation**: Instructive and empathetic; assumes the reader is smart but busy, offering step-by-step solutions first before explaining backend theory
*   **Error/Limits** – Honest and supportive; avoids blaming technical debt, clearly states what caused a blockage and offers immediate workarounds with no stigma

### Vocabulary — Use: [list 10-20 words] / Avoid: [list 10-20 words]

**- **Use**: streamline, automate, integrate, transparently, scalable, conversion, analytics, retention, revenue, clarity, actionable, segmented, behavior, deploy, efficiency**
*   **- **Avoid**: bloat, legacy, siloed, premium-priced-only, enterprise-scale-overhead, hidden-features, generic-solutioning

**- **Use**: unify, connect, simplify, direct-accessible, fast-track, verified-data, optimize, growth-leveraging, real-time, cost-predictable**
*   **- **Avoid**: cloud-storage-bloat, legacy-support-fails, complex-customizations-required, monthly-recurring-surprises, vague-metrics-sounds

### Copy examples — Don't / Do pairs as bullets with positioning grounding

- **Don’t**: "Our platform supports seamless integrations between any third-party tool in the ecosystem."
    - **Do**: "We connect your SEO content directly to paid ads so every click counts toward revenue, without needing a 10-hour setup spreadsheet."
*   **Don't** use pricing speak like: "Enterprise-grade value at SMB cost structures because we innovate differently."
    - **Do**: State exactly what the investment covers in simple terms: "You get unlimited behavioral tracking and CRM syncs; pay only for usage you drive, not unused seats."
*   **Don’t**: "Our technical team ensures your data stays secure via advanced encryption standards."
    - **Do**: Focus on outcome safety instead of tech jargon that creates anxiety: "We handle the security infrastructure overnight so your marketing campaigns can launch without worrying about breaches."

---

## 4. Visual identity (summary)

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Senior Brand Designer writing agent-handoff BRAND.md content.
    *   **Task:** Write the body for section **Visual identity (summary)** for "Collins".
    *   **Output Format:** Markdown body ONLY — no `##` heading.
    *   **Quality Bar:** Majico BRAND.md section 4 style (points to DESIGN.md, visual theme prose, color bullets, typography bullets, logo guidance).
    *   **Required Include:**
        *   Pointer: Full visual system link ([DESIGN.md](./DESIGN.md)).
        *   `### Visual theme` — 2–3 paragraphs (personality, accent discipline, whitespace).
        *   `### Color palette` — bullets (Name — Hex — Role) from provided palette.
        *   `### App tokens (light / dark)` — brief summary of key token roles.
        *   `### Typography` — labeled bullets (Role — Family — Use) for heading/body fonts.
        *   `### Logo` — usage guidance (hasLogo: yes).
    *   **Constraints:** Do NOT use markdown pipe tables. Use bullet lists with bold labels instead.
    *   **Product Info:** Collins, Brand tones: professional and trustworthy, Primary archetype: Sage.
    *   **Fonts:** Heading: Plus Jakarta Sans, Body: Inter.
    *   **Colors (Light):** Background (#ffffff), Muted (#f4f4f5), Text Primary (#0a0a0a), Secondary (#52525b), Accent (#0060b9), On (#fafafa), Muted (#0a407a), Border (#e4e4e7).
    *   **Colors (Dark):** Background: #0a0a0a, Text: #fafafa, Accent: #0060b9.

2.  **Drafting - Section by Section:**

    *   **Intro/Pointer:** Start with a direct pointer to the full system.
        *   *Draft:* Pointer: Full visual system: [DESIGN.md](./DESIGN.md)

    *   **Visual Theme:** Needs 2-3 paragraphs covering personality (Sage, professional, trustworthy), accent discipline (usage of #0060b9 sparingly for importance), whitespace (breathing room).
        *   *Draft:* The visual language embodies the Sage archetype—calm, knowledgeable, and composed. We prioritize legibility and structural clarity to reinforce trustworthiness in dense information contexts. Accent color is disciplined; usage reserves #0060b9 exclusively for primary calls-to-action and key data points. Whitespace acts as a functional separator rather than mere empty space, guiding the eye through complex workflows without cognitive overload.

    *   **Color Palette:** Must use bullets with bold labels (Name — Hex — Role), NO tables.
        *   *Draft:*
            - Background (#ffffff) — Base canvas and long-form reading areas in light mode.
            ...and so on for all colors... ensure dark theme anchor is noted or included appropriately if listing both, but instructions imply "provided palette" which includes dark anchors at the end. I should list tokens separately maybe? Or just one main section then app tokens. The prompt says "Color palette — bullets (Name — Hex — Role) from provided palette". Then a separate `### App tokens` section for light/dark summary.
            *Self-Correction:* Wait, usually BRAGND.md separates the semantic color names vs functional token summaries. I will list all colors in one bullet block as requested under "Color palette", ensuring hex codes match the input.

    *   **App Tokens:** Brief summary of key roles (Surface, Text on Surface).
        *   *Draft:* Light theme prioritizes high-contrast text against neutral surfaces with deep grays for hierarchy instead of pure black to reduce eye strain. Dark mode anchors utilize #0a0a0a as the background base with inverted accents to maintain brand consistency across environments while ensuring accessibility standards are met in both lighting conditions.

    *   **Typography:** Bulleted, Bold labels (Role — Family — Use).
        *   *Draft:* Heading typography uses Plus Jakarta Sans for its modern geometric precision suited for navigation and key data points. Body copy defaults to Inter for optimal readability across interfaces with flexible tracking for density adjustments.

    *   **Logo:** Guidance on usage. Yes, has logo asset selected.
        *   *Draft:* Usage guidance is standard; ensure clear space around the mark in all sizes. The active asset link should be used from assets directory. No alterations to strokes or opacity unless adhering to accessibility WCAG standards for iconography overlay purposes.

3.  **Review against Constraints:**
    *   Markdown body ONLY? Yes (no `##` at start). Use `###` as requested if needed, but wait... Section header `Visual identity (summary)` usually has a heading. The prompt says "Return markdown body ONLY — no `##` heading." But also requires specific subheadings like `### Visual theme`. So I will use the required subheads (`###`) but not top-level ones.
    *   No pipe tables? Yes, verify bullets only.
    *   Quality bar check: Majico style means professional prose, clear instructions.

4.  **Refining Content:**

    *   *Intro:* Make sure to include the pointer line exactly as requested or slightly adapted for flow. The prompt says "Include: Pointer: **Full visual system:** [DESIGN.md](./DESIGN.md)". I'll place this at the very top of the body text.
    *   *Visual Theme:* 2-3 paragraphs max. Focus on Sage archetype (wise, neutral blue/grey/white). Professional & trustworthy tone -> Serif/Sans mix? No headings are Sans/Jakarta sans usually geometric but friendly. Accent discipline is crucial for "trustworthy" - don't overuse color.
    *   *Color Palette:* Strictly `**Name **(Hex) — Role`. I will list all provided colors. Need to group the dark theme info or separate? The prompt gives a specific section `### App tokens (light / dark)` below `## Color palette` in structure logic usually, but here it asks for "App tokens" summary separately. So I'll put the semantic hex values under Color Palette and functional behavior under App Tokens.
    *   *Wait:* Prompt says: `### Color palette — bullets (Name — Hex — Role) from provided palette`. And then `### App tokens (light / dark) — brief summary of key token roles`. This implies splitting the technical spec into "Colors" (the paint colors) and "Tokens" (how they behave). I will do that.

    *   Let's check the Dark theme color listing. The input lists Light, Border, etc., then says "Dark-theme anchors — Background: #0a0a0a...". Should those be in the palette bullets or just mentioned? Usually a comprehensive BRAND.md lists all available semantic colors (including light/dark variants). I will include them for completeness under Color Palette to ensure developers find everything there.
    *   Wait, constraint says "Color palette — bullets ... from provided palette". Okay, I'll list them all in the bullet section including dark anchors as they are part of the defined system.

5.  **Final Polish:** Check formatting constraints again. No `##` at start. Use `###`. Bullets with bold labels like `,`, `- Name (Color) — Role`).
    Actually, standard markdown bullets usually look like:
        - Label — Description
    
    Prompt example instruction: "bullets (Name — Hex — Role)". I will follow that pattern closely.

6.  **Writing the text:**

    Pointer line first. Then `### Visual theme`. Two paragraphs on Sage/Trust/Whitespace. Accent discipline paragraph there or separate? The prompt says "Visual theme" covers personality, accent discipline, whitespace in one section (2-3 paras).
    Then `### Color palette` bullets.
    Then `### App tokens` summary.
    Then `### Typography`.
    Then `### Logo`.

    Let's assemble the color list carefully to not use tables.
    
    Structure Check:
    "Return markdown body ONLY — no `##` heading." -> So start directly with text or pointer line? Usually a document starts with content. I will add an intro sentence pointing readers, then section headers if allowed by context (Prompt asks for specific sub-sections). The prompt says "Write the body for section Visual identity". It implies this is inside a larger file `BRAND.md`. So top-level headings might have been handled in previous sections or outside scope. I will use the requested subheaders (`###`) but no main heading above them if strictly following "no ## heading" (implies don't add one *above* what they gave, just write the body).

    Wait, `Pointer: **Full visual system:** [DESIGN.md](./DESIGN.md)` is included in requirements. Should that be a header or inline? Usually inline text at top of section. I will treat it as an intro sentence.
    
    Let's refine the Color Palette bullets to ensure they don't look like tables but are clear lists.

    Example:
        - **Background** — `#ffffff` — Base canvas and long-form reading areas in light mode.

       Okay, ready to write.

7.  **Final Check against "Quality Bar": Majico BRAND.md section 4.** This usually means dense info but readable prose for designers. Not too dry code comments, not just hex codes without context. Explain *why* or *how*.
    
    Tone: Professional and trustworthy (Brand tones). Archetype Sage (Knowledgeable/Calm).
    
    Okay, proceeding to generate.

```markdown
Pointer: **Full visual system:** [DESIGN.md](./DESIGN.md)

### Visual theme  
The visual language for Collins establishes a calm presence grounded in the Sage archetype—knowledgeable without being cold or overly technical. We prioritize legibility and structural clarity to reinforce trustworthiness within complex data environments, ensuring users feel anchored regardless of information density. Whitespace acts as an active functional separator rather than mere empty space, guiding natural eye movements through dense reports while reducing cognitive load during long reading sessions. Accent color discipline ensures the brand identity remains composed; usage reserves primary actions and key status indicators exclusively for high-importance interactions to prevent visual noise from undermining our core message of stability.

### Color palette  
- **Background** — `#ffffff` — Base canvas and light-mode surfaces for primary application content areas.
- **Background Muted** — `#f4f4f5` — Subtle section fills, cards, and low-emphasis surface states in light mode.
- **Primary Text** — `#0a0a0a` — Default high-legibility text color used for headings and body content on light surfaces.
- **Secondary Text** — `#52525b` — Supportive labels, metadata tags, captions, and helper copy to create hierarchy without harsh contrast fatigue.
- **Accent** — `#0060b9` — Primary CTA buttons, interactive links, key data point indicators, and highlighted status states in light mode.
- **Accent On** — `#fafafa` — Foreground text or icon color rendered on top of accent surfaces for readability compliance.
- **Accent Muted** — `#0a407a` — Hover states, pressed active buttons, and secondary emphasis interactions derived from the primary blue anchor.
- **Border** — `#e4e4e7` — Standard dividers, input outlines, and separation strokes consistent across light interface elements.

### App tokens (light / dark)  
Light theme prioritizes high contrast text against neutral grays to ensure accessibility standards are met for extended reading sessions while maintaining structural hierarchy through weight rather than color alone. Dark mode anchors utilize deep black as the base canvas with inverted accent colors, ensuring brand consistency across environments while strictly adhering to WCAG guidelines for interface components used in low-light conditions including navigation bars and sidebar contexts.

### Typography  
- **Headings** — Plus Jakarta Sans — Used for all UI headers, page titles, and key data metrics where a geometric sans provides structural clarity and modern weight distribution.
- **Body Copy** — Inter — Default text family optimized for long-form reading with flexible tracking adjustments for condensed or expanded layout states across responsive devices.

### Logo  
The active asset is selected within the provided repository; usage guidance requires maintaining clear space equal to half the logo height on all sides in locked contexts. Ensure appropriate background contrast when placing over light surface elements and utilize designated dark-mode overlays if transparency becomes necessary, strictly avoiding color alterations that might shift the brand recognition value beyond tolerance thresholds defined for client deliverables.
```

Wait, check "Return markdown body ONLY — no `##` heading." -> My draft has ### headers which is fine (these are subheads), just not ## at top level. Check constraint: "Do NOT use markdown pipe tables". I used bullets with bold labels in the palette section instead of a table row format like `- **Name** — Hex — Role`. The prompt says "bullets (Name — Hex — Role) from provided palette". That looks fine as text.
Wait, check color list again. Dark theme was: Background #0a0a0a, Text #fafafa, Accent #0060b9. I included Light colors mostly in the bullet list above but omitted specific hexes for dark mode backgrounds/text/colors there unless they are variations of light ones used with different semantic values? The prompt lists them separately "Dark-theme anchors". To be safe and complete based on input provided:
Input says Dark theme anchors explicitly. Should these go into Color Palette bullets or just App Tokens summary? Usually, a brand guide list *all* colors available (Light + Dark). I will add the dark ones to the Color Palette section for completeness so designers have all hex codes there.

Also check Typography section format: "labeled bullets (Role — Family — Use)".
My draft: `**Headings** — Plus Jakarta Sans`. Missing `Use` description in that specific line? Prompt says `(Role — Family — Use)`. My drafts had comments on next lines or integrated text? I should follow the pattern strictly if possible. Or integrate into sentence. "Used for all UI headers...".
Let's refine: `- **Headings** (Plus Jakarta Sans) — Used for navigation and hierarchy points.` -> No, that looks like a variable definition.
Better: `- Role: Headings — Family: Plus Jakarta Sans — Use: Navigation bars, page titles, key data point labels where geometric precision is prioritified over ornamentation.`
Or just make it fit the flow naturally but respect "Role — Family — Use".

Let's fix Typography bullets to be very explicit.

Check Color Palette again: The prompt input gave light colors detailedly and dark anchor simplified. I should list all of them in the palette section as they are part of the system hex definitions, otherwise where do devs find `#0a0a0a` for bg?
Okay, will add Dark ones to that bulleted list too if appropriate, or keep it semantic (BG is BG). Input says "Dark-theme anchors". I will include them semantically.

Refined Plan:
1. Pointer text inline top.
2. `### Visual theme`. 3 paragraphs max? Prompt said 2-3. My draft had 1 large paragraph and then another section for Color. Wait, Visual Theme needs personality + accent discipline + whitespace. I have that in my draft (Paragraphs combine them). Let's split into two clear blocks visually or one solid block of text to count as paragraphs.
The prompt says: "### Visual theme — 2–3 paragraphs". So I need multiple paragraph tags `<p>` equivalent via newlines with double newline? In Markdown, empty line = new para.
My draft had one long chunk then Color Palette header. That's fine if the text inside has 2-3 blocks separated by blank lines before next section.

Wait, `Pointer: **Full visual system:** ...` is an instruction "Include:". It doesn't say it needs a heading for it. I will make it standard text at top of body.

Let's re-write to ensure strict compliance with constraints and quality bar.
Quality Bar Majico BRAND.md section 4 -> usually implies concise, directive prose suitable for dev/design handoff, referencing assets clearly.

Revised Color Palette List: Include dark bg/text too? Yes, better completeness is high quality.

Typography Bullet Format Adjustment per `(Role — Family — Use)`:
`- **Headings** (Plus Jakarta Sans) — Navigation bars, page titles.` 
Better to use labels inside the line as requested "labeled bullets". I will interpret this as using a bold label for role at start.
Example: `- Headings — Plus Jakarta Sans — Used for navigation...`

Okay. Proceeding.

Constraint Check: No `##`. Use `###` (allowed in my draft). No pipe tables? Checked. Bullets

---

## 5. Design principles

Prioritize functional efficiency over ornamental complexity so every interaction demonstrates tangible value to growth metrics rather than aesthetic indulgence. Do not introduce new UI widgets unless they directly solve a specific workflow bottleneck found in the legacy enterprise tools users are replacing. For instance, if an export feature saves time on data migration, document its utility clearly before applying heavy styling guidelines that obscure speed benefits.

### 2. Accent Discipline
Reserve your primary accent color #0060b9 for high-priority actions and critical status indicators only; never use it as a background or neutral filler which dilutes the brand's professional weight. Do not apply this hue across entire data tables, instead leverage it to highlight specific conversion paths within dashboard logic where user attention is mandatory. This restraint reinforces trust by signaling that colored elements carry intentional meaning rather than decorative noise common in generic SaaS products.

### 3. Tokens Are The Contract
Treat your design token system as an immutable contract between designers and developers; ensure all visual values map directly into CSS variables to prevent drift across environments or deployment cycles. Do not hard-code hex codes inside handoff comments unless they are legacy overrides, always point implementation agents toward the dynamic variable source for maintainability. This discipline ensures that when you scale functionality, your team inherits a consistent language without incurring costly refactors caused by inconsistent manual styling decisions.

### 4. Light And Dark First-Class
Build every component with equal fidelity in light and dark environments because users operating from low-light studios or high-brightness displays deserve identical trustworthiness regardless of system settings. Do not rely on browser defaults for your dark mode, but instead define explicit semantic colors that maintain sufficient contrast ratios without washing out data density. Both modes must support the same hierarchy to prevent confusion when a user flips their OS theme mid-campaign strategy session or late-night analysis workflow.

### 5. Whitespace Confidence
Employ generous margins as an active voice in your layout rather than treating empty space merely as background filler for content; trust that your value proposition speaks loud enough without dense visual clutter competing with conversion goals. Do not pack multiple widgets into a single viewport if it compromises scan speed or reduces the perceived stability of your platform infrastructure. Let your data breathe

---

## 6. Layout principles

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Senior Brand Designer writing agent-handoff BRAND.md content.
    *   **Task:** Write the body for section **Layout principles** for a brand called "Collins".
    *   **Output Format:** Markdown body ONLY (no `##` heading). No markdown pipe tables (`| |`). Use bullet lists with **bold labels**.
    *   **Quality Bar:** Majico BRAND.md section 6 — rule/value bullets plus implementation notes.
    *   **Content Requirements:**
        *   Include labeled bullets covering: Section spacing, Content max width, Hero structure (headline → subcopy → CTA), Grouping / muted backgrounds, CTA prominence, Navigation patterns if relevant to product category, Footer/pricing/card patterns when inferable.
        *   Add 1–2 paragraphs on how layout expresses professional and trustworthy brand personality.
    *   **Context:** Product: Collins (SEO, content marketing, email automation, lead generation, social media ads, CRM integration, analytics, CRO). Category: standout. Audience: Professionals needing efficiency/trust.
    *   **Design Tokens:** Spacing (xs-xl), Radius (sm-lg-full), Elevation (sm/lg/40px), Motion (120ms/easing).

2.  **Deconstruct the Content Needs:**
    *   I need to adopt the tone of a senior brand designer writing technical specifications for developers/designers.
    *   The specific section is "Layout principles".
    *   Focus on structure, spacing, hierarchy, and visual trustworthiness relevant to B2B SaaS (SEO/Marketing stack).
    *   Integrate the provided design tokens (spacing scales) into the implementation notes contextually without listing them as raw numbers unless necessary for explanation.
    *   Ensure alignment with "trustworthy" and "professional" personality through layout choices (whitespace, grid stability).

3.  **Drafting - Section by Section:**

    *   **Opening Hook/Intro to Layout Principles:** Briefly state the philosophy before diving into bullets (maybe skip for directness as per Majico style? The prompt asks for "rule/value bullets plus implementation notes" and then paragraphs. I'll integrate the intro sentiment into the closing paragraph or start directly with if allowed, but usually BRAND.md sections dive straight in. Let's look at "Majico BRAND.md section 6". Usually implies dense, structured info.)
    *   **Bullets:** Need bold labels (Rule — Value).
        *   Section spacing: Use design token `md` or `lg`. Breathe between logical blocks.
        *   Content max width: Readability is key for SEO/professionals? Standard ~72ch or constrained to 1050px. Let's pick a specific pixel value consistent with "Collins" standout category (maybe slightly tighter focus).
        *   Hero structure: Large headline, supporting text, primary CTA stack order. Hierarchy must be clear even without image-heavy layouts.
        *   Grouping / muted backgrounds: Use cards vs flat sections. Contrast for grouping related features (SEO tools etc.).
        *   CTA prominence: Color contrast or size differentiation. Avoid competing with data viz too much? Need to emphasize conversion.
        *   Navigation patterns: Utility first? Clean, minimal but accessible. Sticky nav for complex dashboards? Since Collins is about automation/lead gen, speed and clarity matter (Search -> Action). Let's lean into "Clear & Functional".
        *   Footer/Pricing/Cards: Dense data needs clean footers. Pricing cards should have clear hierarchy without clutter.

    *   **Body Paragraphs:** Connect layout to trust. Why does whitespace create calm? Why do consistent grids suggest reliability (good for SEO/Ads)?

4.  **Refining the Content based on Constraints:**
    *   NO `##` heading at start of output. Just text content starting directly with H1 level or paragraph style within markdown body context. Wait, prompt says "Return markdown body ONLY — no `##` heading." but also asks to write the section **Layout principles**. Usually that means I provide the text under that header in an existing doc, so shouldn't start another `## Layout Principles`. Just list content appropriate for a document's current section flow (which implies H1/H2 context is already set or this *is* the body). The prompt says "Write the body for section **Layout principles**". I will treat it as if there was just an intro header before and now I need to fill in.
    *   Actually, safer interpretation: Output exactly what goes inside that file's content block. Do not include `## Layout Principles` header line itself because the instruction says "Write the body... Return markdown body ONLY". However, it also asks for labeled bullets covering specific topics. So the output should look like a continuous text document section where those headers/topics are defined via bolding/list items rather than sub-headers? Or does it want me to continue immediately after an implied header?
    *   Re-reading: "Return markdown body ONLY — no `##` heading." This usually means don't start with `# Layout Principles`. Just the content. But since I need a specific section structure, maybe bullet points are fine. Let's write as if it follows a title in the real doc.
    *   Constraints check: "Do NOT use markdown pipe tables". Use **bold labels** bullets.

5.  **Drafting Content:**

    *   Start with spacing rules using `md` (16px) or `xl` (40px).
    *   Max width logic for readability + SEO context (dense text vs marketing copy). Let's suggest a constrained max-width to prioritize CRO and focus.
    *   Hero: Headline -> Subcopy -> CTA. Vertical rhythm here matters with token hierarchy (`2xl 56px`).
    *   Grouping/Backgrounds: Feature cards need `sm` radius, subtle elevation. Muted background for feature lists (e.g., Analytics data).
    *   CTAs: High contrast or primary color only per page goal.
    *   Navigation: Sticky header? Maybe collapsible on mobile. Utility nav is better here than aesthetic links. "Standout" category suggests high-end visuals, so clean layout.
    *   Footer/Pricing: Clean columns for value prop (SaaS).

6.  **Writing the Trust Paragraphs:** Focus on "calm authority", data readability. Layout = reliability. If we mess up margins in marketing tool stack docs/layout -> brand feels broken/buggy to user. Consistent layout = consistent results (ROI, SEO rankings metaphorically).

7.  **Review against Design Tokens:**
    *   Spacing: Use `md` (16px) for sections, `xl` (40px) for features/blocks, etc. Mention in text or implementation notes within bullets? The quality bar says "rule/value bullets plus implementation notes". So inside the bullet I should state the token usage as a note or rule value.
    *   Example: **Rule — Vertical Rhythm** > 2xl (56px) for major feature breaks, md (16px) between text blocks to balance density and breathability appropriate for analytics-heavy users who need focus.

8.  **Final Polish:** Check constraints again. No pipe tables. Bold labels. 1-2 paragraphs at end. Tone: Senior Designer Handoff.

**(Self-Correction during drafting):** Wait, "Majico BRAND.md section 6". This implies a specific style I should mimic if possible (dense, crisp). But since I don't have the Majico doc to copy verbatim, I will emulate that standard of high-signal documentation: clear rules, explicit values, actionable notes.

Let's ensure the "Layout principles" title isn't included at top as per `##` constraint. Just start with text or list items if they serve best? Usually a document section starts with some intro or direct lists. Given "Majico style", dense bullet points often work well for specs.
However, standard markdown practice usually allows paragraphs before the list defining rules. I will write 1-2 lead-in sentences then bullets, OR just strict rule-focused text if it feels more like a technical spec. Let's go with a mix: Intro context -> Bullets (Rules & Notes) -> Closing paragraphs on brand personality. Wait, prompt says "Include labeled bullets... Add 1–2 paragraphs". So order should be: Bullets first then Paragraphs? Or Intro + Bullets + Conclusion.
Actually, the constraint says "Write the body for section Layout principles". It's safer to provide context (Intro) -> Rules (Bullets) -> Personality/Summary (Paragraphs). But strict reading might want specific topics as bullets immediately. I'll lead with a direct intro paragraph setting the scope of layout, then the rules, then closing personality note?
Actually, looking at "Quality bar: Majico BRAND.md section 6 — rule/value bullets plus implementation notes." This implies bullets are central.
Let's structure it like this:
1. Intro/Lead-in (Short text).
2. Bulleted list with **Rule** and Implementation Note format as requested implicitly by quality bar? No, explicitly "Include labeled bullets". So `• Rule — Value`.
3. 1-2 closing paragraphs on personality.

Wait, let's look at the instruction: "Return markdown body ONLY — no ## heading." This implies I should not add titles like "## Layout Principles", but can include H4 or just text? Usually for a file content handoff inside an existing doc section, you might use `###` if appropriate or nothing. But "no ##" suggests avoiding new top-level subheaders within the section block perhaps? Or it means don't output a header *above* this response. I will treat the whole response as the body text of that specific file.
I'll start directly with the first paragraph explaining the philosophy, then insert the rules via bullets or numbered list for clarity, but wait—bullets are requested ("Include labeled bullets"). So List is good.

Let's refine the "Bold labels" requirement: `**Rule — Value Implementation Note**`. Or separate them?
Prompt says: "Include labeled bullets (Rule — Value / behavior)". Example format likely:
- **Section spacing** → Use 2xl gap for major features...
I will use bold label at start of bullet.

Let's finalize the token values in text where applicable to avoid ambiguity, but reference tokens explicitly as per `Design token summary` provided (md=16px etc). I will weave these into implementation notes within bullets rather than just listing raw numbers everywhere unless part of the rule value itself.
Actually, best for BRAND.md: Explicitly state "Gap 40px" in note so devs know exactly which token to apply without searching tokens file every time (in spirit), or link it generically if that's better practice. "Majico" usually links to design systems references. I will reference the specific spacing values provided in context as concrete examples for this section implementation notes where necessary, but keep bullets clean.
Let's try: **Section Spacing** — Use `xl (40px)` between major feature modules and `md (16px)` within content blocks to prevent visual fatigue associated with data-heavy SEO dashboards.

Okay, ready to write.

Structure Plan:
Paragraph 1: Philosophy/Approach overview regarding readability and conversion focus for the Collins product category.
Bulleted List: The specific rules covering Spacing, Max Width, Hero, Grouping, CTA, Nav, Footer/Pricing. (Implement note format inside bullets or as sub-bullets? Prompt says "Use bullet lists with **bold labels**". I will put implementation details in the same line for clarity).
Paragraph 2: Brand personality connection (Trust/Professionalism via layout consistency and hierarchy).

Wait, prompt asks to cover specific topics including Footer/Pricing/Cards if inferable. Collins is a standout category likely meaning high-conversion B2B SaaS. I can include Pricing Card patterns relevant.
Constraint Check: "Return markdown body ONLY". No preamble in my thought process visible (obviously), and no `####` or just text block.

Let's write it.

*Self-Correction on Header:* The prompt says "no ## heading". It doesn't say I can't use H1/H3, but usually for this specific output task ("Return markdown body"), a clean stream of content is best. Since the section *is* "Layout principles", and I cannot add `## Layout Principles` at top, I will treat my text as if it's already under that header. So no bolded title in line 1 like **"### Layout Principles"** unless needed for structure within response? No, usually just start content.
Wait, sometimes these prompts want a standalone file snippet where the section exists. If "no ## heading" is strict, I must not write `##`. But does that mean H3 or no header at all? Given standard markdown practices in docs (Majico style), sections often follow: Intro text -> List of Rules -> Closing Text. The instruction likely prohibits adding a new definition for the section if it was meant to be appended to an existing document. I will omit any section title and begin directly with content context or bullets.
Actually, "Write the body... Return markdown body". If I write `## Layout Principles` that violates constraint. So start immediately with text.

Okay, let's get specific on spacing values from token summary: xs=4, sm=8, md=16, lg=24, xl=40, 2xl=56.
Radius: sm=4, md=8...
Elevation levels provided (though maybe less relevant for "layout principles" than structure).

Let's write bullet content now.

Drafting Bullet Points:
- *Section spacing* — Use `md` or `lg` between standard UI blocks; reserve `xl` / `2xl` for separating major logical sections to maintain visual hierarchy in complex data tables (analytics/SEO features) without causing cognitive overload on page load speed.
Wait, that's one line per bullet? Or separate implementation notes after? Prompt: "rule/value bullets plus implementation notes". I can use a colon and bold rule followed by note or just include it in text flow within the bullet using parentheses if needed for brevity but readability matters. Let's keep bullets clean with inline details on specific pixel values where helpful.

Let's start typing content.
Start: Layout principles are foundational to maintaining high conversion rates within SEO analytics workloads, ensuring that technical data coexists harmoniously with compelling marketing narrative without friction. Below are the required structural constraints and patterns... (Maybe skip intro sentence and go straight into context? No, standard prose usually needs a lead-in). I will write 1-2 sentences of context then bullets? But prompt says "Include labeled bullets" AND "Add 1–2 paragraphs". So maybe: [Context/Intro text] -> [Bullets] -> [Closing Paragraphs].

Wait, does the prompt imply ONLY those items in the list or can I add lead-ins? "Return markdown body". Usually means full content of that section.
I will include a short contextual paragraph before bullets to set tone per Majico quality (high-level design intent), then the implementation rules via bold labels. Then personality paragraph at end. This flows better than jumping straight into `•` without context for this specific brand "Collins".

Let's review constraints again: "Quality bar: Majico BRAND.md section 6 — rule/value bullets plus implementation notes."
The structure should likely be direct specs, but a little lead-in is acceptable in prose sections. However, to minimize risk of violating formatting style (Majico often uses H3 for rules?), I will stick to standard markdown text blocks that don't require headings if not permitted by "no ##".

Let's check the constraint "Do NOT use markdown pipe tables". Okay.
Constraint "Include labeled bullets (Rule — Value / behavior)".

Okay, proceeding with draft.

**Drafting Logic:**
- **Spacial Hierarchy**: Use `xl` (40px) between feature sets; internal content blocks get `md` (16px). This creates breathing room for dense SEO data.
- **Max Width**: Limit to ~85ch or 920px max? Suggest standard readable width like 75 characters, but tailored for "standout" category which might be wider cards on desktop? Stick to generic CRO advice: focus is better than scanning too wide text (16px line leads).
- **Hero structure**: Headline -> Subcopy -> Primary Button. Use `2xl` gap between headline and subcopy, then smaller before button group.
- **Grouping/Bg**: Feature cards with `sm` radius + subtle elevation vs flat gray backgrounds for lists. Muted background colors avoid stealing focus from data visualization (charts/analytics).
- **CTA**: Primary color only or high contrast black/white depending on brand theme? Assuming standard dark text mode, CTA needs to pop. Suggest shadow/elevation match for cards too. No secondary CTAs unless necessary in footer context. Nav: Sticky top bar essential; mobile hamburger must open instantly (speed) as lead gen is key.
- **Footer/Cards**: Pricing tables simple, 2-column max on desktop? Or stacked columns? Standout category

---

## 7. Product-specific brand elements

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Senior Brand Strategist writing agent-handoff BRAND.md content.
    *   **Task:** Write the body for section `Product-specific brand elements` for Collins.
    *   **Output Format:** Markdown body ONLY — no `##` heading (start directly with subsections).
    *   **Quality Bar:** Majico BRAND.md section 7 — user journey steps, messaging anchors, CTAs, tier/plan messaging if applicable.
    *   **Context Provided:** Product: Collins, One-liner, Tagline (undefined/dash), Positioning text (vs HubSpot/Salesforce/Semrush/Mailchimp), Audience functions (SEO, content, etc.), Niche ("standout"), Mission/Story summary.
    *   **Constraints:** Do not invent features not implied by niche/category; stay grounded in context. Return markdown body ONLY. No `##` heading for the section itself.

2.  **Deconstruct the Context & Brand Voice:**
    *   **Vibe:** Agile, transparent, streamlined, focused on growth/small-mid market (not enterprise bloat), unified system (SEO + Ads + CRM).
    *   **Pain Points Solved:** Hidden costs, slow support, fragmented tools, manual spreadsheets, opacity of legacy giants.
    *   **Audience Needs:** SEO specialists needing more than just search visibility, marketers wanting automation without complexity, small biz owners needing predictability and speed.
    *   **Differentiation:** Middle ground between niche SEO (Semrush) + Enterprise CRM/Marketing (HubSpot/Salesforce). Focus on behavioral tracking + ad integration + clear pricing.

3.  **Drafting - Section by Section:**

    *   `### The brand flow` (Numbered journey steps):
        *   Needs to reflect the product-specific interaction model based on "SEO, content marketing, email automation...".
        *   Standard SaaS flows usually go: Profile → Visual/Onboarding → Usage Workflow → Export/Reporting → Growth.
        *   Let's adapt this to Collins' specific value prop (Unified system).
        1. Onboard & Connect (Profile): Unify existing tools quickly.
        2. Visualize Strategy (Visual): Unified dashboard view of content + ads.
        3. Execute Campaigns (Workflow): Automation engine for nurturing/leads.
        4. Analyze Impact (Export/Data): ROI insights, not just vanity metrics.

    *   `### Messaging anchors`:
        *   **Tagline:** Need to generate one that fits the "Boost your digital marketing..." one-liner vibe but is specific enough as a secondary tagline for branding assets. Based on positioning: "Agile Automation," "Clarity over Bloat." Let's try: *"Automate Clarity, Amplify Growth"* or *"Unified Marketing Without the Waste"*. Let's stick closer to the provided context tone ("standout", "faster business growth"). Maybe: *Market with Precision. Automate without Limits.* -> Actually, looking at quality bar example (Majico), they usually keep taglines clean. Let's derive one from positioning: *"Marketing Infrastructure for Agile Growth."*
        *   **Archetype:** The Innocent/Creator? No, Context says "Agile", "Transparent". Likely Ruler (control) + Innovator (speed). Or Sage (insights). Given "data-driven insights" and "automation", the Sage is strong. But given "growth," likely Hero/Jester mix? Let's go with **Innovator x Sage**. Focus on efficiency through intelligence.
        *   **Positioning Bullets:** Needs to contrast gently against competitors without bashing too hard, focusing on benefit. Transparency vs Opacity; Speed vs Bloat; Unified vs Fragmented.

    *   `### Primary CTA`:
        *   Aligned with one-liner: "Boost your digital marketing...". Action verbs should be fast and value-driven. *"Start Automating"*, *"See Your Growth"*. Let's use the action that fits a SaaS growth model. *“Claim My Growth Kit”*? No, standard is usually free trial or demo. Context implies growing brands/small biz. Likely **“Build Your Flow”** (since it emphasizes building cohesive systems) or **“Launch Now”**. Given "Boost your digital marketing", maybe **“Accelerate Marketing”**. Let’s look at the positioning again: *"Replace fragmented tools"*. CTA should be about solving that immediate pain. *“Unify My Operations”* fits well with the USP of connection. Or simply **“Start Free Trial”** if they want conversion, but in BRAND.md we describe labels to copywriters. I will recommend text like **“Get Started →"** or a value-aligned one: **“Optimize Now”**. Let's pick something action-oriented regarding speed/boosting. *“Boost Your Growth"*". Actually, keep it standard SaaS label advice within context. Label should match "faster business growth".

    *   `### Plannig / Key Surfaces` (Optional):
        *   Since position is against opaque pricing of legacy giants and hidden costs of others, the Product has to emphasize transparency but perhaps not necessarily tiered plans yet if it's "standout" early stage. However, SaaS context supports tiers. The prompt says "if applicable". Positioning mentions Small Biz vs Enterprise bloat. Let's suggest surfaces emphasizing simplicity: Onboarding Checklist? Growth Calculator? Dashboard layout principles (Clean/Clarity).
        *   Actually, I shouldn't invent features not implied by niche/context. Context implies automation + analytics. So tiers based on complexity of workflow or agency usage makes sense without being "enterprise only".

4.  **Refining for Quality (Majico Style):**
    *   The style should be precise, directive, and ready to hand off to an AI agent who will write content later. It needs to feel like a spec sheet embedded with brand strategy logic.
    *   Avoid fluff. Use bolding where it adds scanning value.
    *   Ensure the tone matches "Senior Brand Strategist".

5.  **Drafting Content (Mental Check against constraints):**
    *   NO `##` for the section header? Wait, the prompt says: "Return markdown body ONLY — no `##` heading." This implies I should not write the title "Product-specific brand elements", just start with the subsections under it.
    *   The structure inside usually uses `###`. So I will use `###` for subsections within this block, but NOT a main level `##` to represent that section itself if possible (or rather, treat the response as *being* the content). However, markdown bodies usually start with H3 or text. Let's assume the prompt wants me to output the text of that specific file section. I will use bolding for emphasis and standard structure.

    *   Wait, looking at "Return markdown body ONLY". Usually this means don't wrap in code blocks if asked for raw content? Or just no preamble/outro explanations.
    *   Constraint: "no `##` heading." This likely refers to the main section title (e.g., ## Product-specific brand elements). I will start directly with `###`.

    *   **Tagline:** Need something punchy derived from positioning. *"Growth Without The Bloat"* sounds on-brand for transparency/opposition narrative. Or *"Marketing Engine for Agile Growth"*. Let's go with **“Unify, Automate, Amplify.”** It covers the three pillars (CRM/SEO -> Automation).

    *   **Brand Flow:**
        1. Profile: Identity & Goals alignment.
        2. Visual: Unified Dashboard.
        3. Export: Actionable Reporting.
    *   Wait, context says "user journey steps". I will structure it as the internal product experience flow that reflects brand values (Speed/Clarity).

6.  **Final Polish:** Check against "Do not invent features". The text implies an all-in-one system connecting SEO and Ads. Do not mention specific module names like "Ad Planner" or "SEO Wizard", but rather general functional areas implied by context ("automating lead nurturing through segmented behavioral tracking"). Mentioning these generic concepts is safe based on the prompt's detailed positioning statement about automation, CRM integration, analytics.

    *   *Self-Correction:* The prompt says Product: Collins. One-liner provided. Tagline in prompt was `—`. I need to fill that or leave consistent? "Include... ### Messaging anchors — tagline". So I must provide a suggested tagline based on context.
    *   Positioning mentions avoiding legacy features and bloat. CTA should be about the benefit (Growth).

7.  **Final Review of Output:**
    *   No `##` at start.
    *   Only markdown content.
    *   Tone: Strategic, authoritative but agile.

Let's construct the text.

*   Intro sentence? No, just headers/sections as requested by "Return markdown body". I will start with the first H3.

Wait, looking at the instruction: "Include:- ### The brand flow... - ### Messaging anchors..."
So I should output those exact headers (or similar).

Let's write it.

*   Brand Flow Steps need to match product interaction for SEO/Marketing/SaaS users.
    1. Profile Setup (Intent & Scope) -> Quick Onboarding vs Legacy heavy setup.
    2. Visual Strategy Workspace (Unified Dashboard) - Content + Ads in one view.
    3. Automation Engine (Behavioral Tracking segments).
    4. Insight Export (Data for Conversion, not vanity metrics).

*   Messaging Anchors: Tagline must be short. *Marketing Infrastructure, Humanized.* or *Growth Without the Bloat*. Let's go with **Marketing Growth, Optimized.** No, needs to be brand specific. Positioning says "Catalyst that transforms scattered online operations". Maybe **"Scattered Operations, Streamlined."** That feels like a tagline derived from positioning but maybe too literal. How about: *Unify Your Reach.* Let's stick close to the prompt text: "Boost your digital marketing...". Tagline could be **Marketing Without The Middleman.** No, we are direct support.
    Actually, let's look at Majico style (Section 7). They often use concise value propositions. **"Agile Automation for Growth Teams."** is good.
    Archetype: Innovator / Sage. Let's combine as "The Architect of Opportunity" or keep it classical: **Innovator & Sage**.

*   Primary CTA Label. Needs to match the one-liner focus on growth/boosting. **"Start Boosting"** sounds weird. **"Get Started for Growth"**? The prompt asks for *recommended label*. Usually SaaS uses "Sign up" or specific action based value prop. Since they sell transparency and speed, **“Build Your Flow”** (from earlier thought) is strong because the core differentiator is merging tools into a flow without bloat. Or **"Launch My Campaigns"**? I will choose one that emphasizes immediate utility like *"Start Automating"* but aligned with "Boost". Let's go with **“Optimize Growth →”**.

*   Optional Plans: Mentioning pricing models briefly as they are key to the positioning (Transparent vs Hidden costs). Focus on value-based or usage. Since prompt says "if applicable", and positioning highlights avoiding hidden fees, a structure that reflects transparency is good. I will include a brief section on **"Pricing Transparency"** context instead of generic tiers if specific plan names aren't known, adhering to "do not invent features". But since it's SaaS/product context supports plans: I'll describe the *philosophy* of the tier messaging rather than arbitrary numbers which would be invention. Or just leave if unsure? The prompt says "Optional ### Plans or ### Key surfaces if SaaS/product context supports it." Since Collins is defined as a platform for digital marketers (SaaS), plan tiers should likely exist to scale with growth teams vs small biz. I will add this optional section focusing on the *value proposition* of each, aligning with transparency/standout niche positioning.

Let's refine. The instruction says "Return markdown body ONLY". So no intro text like "Here is the content." Just start. And specifically avoid `##` for the main header (implied I should not write the section title again). Wait, does it mean *within* the response there shouldn't be a ##? Usually BRAND.md sections are H2s. If asked for body of section X, usually you don't include "### [Section Name]" if that is what's already defined outside, or do I define subsection headers as ###?
"Return markdown body ONLY — no `##` heading." -> This likely means the top level header (e.g., ## Product-specific brand elements) should not be in my output. But inside this section, we need H3s for content like "### The brand flow". That is valid Markdown syntax within a parent block.
I will use **bold** text for emphasis and clean hierarchy starting at `###`.

Let's execute.

*   Check: "Tagline —" in context input was empty/dash. Task asks to include taglines under Messaging anchors. I must propose one based on the logic derived from positioning, not just leave it blank.
*   Positioning: HubSpot vs Agile/Transparent. Niche: Standout (High value/mid-market). Audience: SEO/Growth.

**Drafting Tagline:** *"Marketing Clarity for Every Opportunity."* or **"Automated Growth Without Compromise."** Let's go with **“Agile Marketing, Automated Growth.”** It hits the "Boost growth" one-liner and differentiates from big bloat platforms.

**Archetype:** The Competent Professional / Visionary? **The Sage (Insights) + Innovator (Automation).**
Let’s define it: **"Innovative Architect."** Focus on building systems for others.

**Brand Flow:**
1. Connect & Profile – Rapid tool integration and intent capture without complex spreadsheets.
2. Visualize Strategy – Unified map of SEO content, Ads, and CRM data in one dashboard.
3. Automate Nurture – Segmented behavioral tracking triggers that act before manual intervention requires it.
4. Optimize Export – ROI-focused insights removing vanity metrics to fuel conversion rate improvements.

**CTA:** **“Start Your Growth Flow”** — aligns with the "Boost..." and flow concept from positioning. This is better than generic Sign up. Or **Build My System**. Let's go with **"Begin Optimization"**. The prompt says "aligned with one-liner". One liner: Boost your digital marketing... so CTA should be about boosting/growth/starting. I will recommend **“Start Optimizing →”** or simply **“Boost Your Marketing”**. Wait, standard SaaS labels are better. Let's suggest ** “Build My Dashboard"**? No. **"Automate Now"**.
Okay, looking at "faster business growth". CTA Label: **“Accelerate Growth”**.

**Key Surfaces (Optional):** Pricing transparency surfaces or dashboard layout notes to ensure it supports clarity vs bloat mentioned in positioning. Let's add **Dashboard Aesthetic**: Clarity over complexity. Clean lines for data focus. This avoids inventing features but sets guidelines on UI/UX which is "Product-specific brand elements".
Plans: Focus messaging on value predictability rather than tier feature lists to avoid hidden cost perception.

Let's write it now. Ensure strict adherence to constraints. No `##` at top start? I will use `###`. The constraint says "no `##` heading", implying do not output a main section title like `## Product-specific brand elements`, but subsections starting with `###` are standard for body content of an H2 (which is absent). Wait, if the parent file has `## Section 7`, I am writing inside that. So my headers should be deeper (`###` or plain bolding?). "Include:- ### The brand flow". Okay, explicit instruction to use `###`.

Final check on inventing features: Positioning discusses SEO content

---

## 8. Do's and don'ts

Thinking Process:

1.  **Analyze the Request:**
    *   **Role:** Senior Brand Strategist writing agent-handoff BRAND.md content.
    *   **Task:** Write the body for section **Do's and don'ts** for a product called "Collins".
    *   **Output Format:** Markdown body ONLY — no `##` heading (just start with subsection headers like `### Copy`).
    *   **Quality Bar:** Majico BRAND.md section 8 structure. Three subsections: Copy, Visual, Product. Each needs Do/Don't bullet pairs (4–6 rows total per subsection).
    *   **Constraints:** No markdown pipe tables (`| col |` ). Use bullet lists with **bold labels**.
    *   **Context/Product:** Collins is an agile CRM/marketing automation tool for digital marketers/growing brands. Competitors: HubSpot, Salesforce (too big/expensive/opaque), Semrush (SEO focused). Positioning: Transparent, integrated SEO + Ads + Automation, speed-focused.
    *   **Audience:** SEO, content marketing, email automation, lead gen, ads, CRM, analytics, CRO.
    *   **Tone/Archetype:** Professional and trustworthy, Sage archetype.
    *   **Visual Identity:** Fonts: Plus Jakarta Sans (Heading), Inter (Body). Accent: #0060b9 (Blue). Logo rules included in Visual section.
    *   **Specific Content Requirements:** Outcome-first copywriting for Copy subsection. Token/Font/Accent discipline for Visual subsection. Export/repo-ready/handoff rules for Product subsection.

2.  **Deconstruct the Quality Bar Structure:**
    *   Subsection 1: ### Copy — Bullet pairs (`- **Do**: … — **Don't**: …`). ~4-6 rows per subsection (Wait, re-read instruction: "three subsections... each with Do/Don't bullet pairs (4–6 rows)"). Does this mean the entire section should have 4-6 rows total? Or does it mean *per* subsection? Looking at Majico BRAND.md standard structure for quality bars usually implies balance. Let's aim for ~5 bullet points per subsection to fit the "each with Do/Don't bullet pairs (4–6 rows)" instruction strictly).
    *   Subsection 2: ### Visual — Tokens, fonts, accent discipline, logo rules.
    *   Subsection 3: Product — Export/repo-ready rules, agent handoff discipline.
    *   **Constraint Check:** No `##` heading for the main section title (just write the body). Use bullet lists with bold labels inside each subsection header (`###`).

3.  **Drafting Content - Section by Section:**

    *   **### Copy**
        *   Focus: Professional, trustworthy, Sage archetype. Outcome-first. Audience-specific vocab. Transparency vs Competitor bloat.
        *   Row 1: Connect to growth goals directly rather than feature lists. Do highlight ROI automation; Don't use jargon-heavy CRM terminology that alienates non-technical founders.
        *   Row 2: Use active verbs for speed and integration benefits since agility is a core pillar of the brand positioning against legacy enterprise software. Do emphasize seamless workflow transitions between campaigns; Don't describe complex settings or prerequisites upfront which suggests complexity friction.
        *   Row 3: Address pain points around hidden costs to reinforce transparency values immediately in sales copy or onboarding docs. Do clarify tier limitations plainly using percentage terms where possible for clarity; Don't obscure pricing details behind "contact sales" phrasing that erodes trust with SMBs struggling with budget predictability.
        *   Row 4: Ensure vocabulary aligns with both SEO and Ads contexts to show the unified system advantage against fragmented tool stacks like Semrush or Mailchimp alternatives alone. Do use terms like 'behavioral tracking' alongside creative output; Don't focus solely on search visibility metrics without acknowledging social ad integration potential within copy narratives.
        *   Row 5: Maintain authority while simplifying complexity so users feel empowered rather than managed by a monolith platform structure common in enterprise SaaS environments today. Do frame support interactions as proactive consultation opportunities that reduce downtime; Don't imply manual intervention or ticket-based waiting periods are standard processes for basic technical issues.

    *   **### Visual**
        *   Focus: Plus Jakarta Sans/Inter, #0060b9 accent, logo rules. Clean UI logic matching the product's clarity proposition.
        *   Row 1: Adhere strictly to accessibility contrast ratios ensuring legibility across all dashboard states which reflects our core promise of operational speed for marketing teams under pressure without visual strain or cognitive loading during analysis tasks involving complex data streams from various channels simultaneously available in modern SaaS interfaces including HubSpot dashboards but with improved clarity.
        *   Wait, the length seems too long. Let's keep it punchy. "Do/Don't" format is required.
        *   Row 1: **Do**: Prioritize white space and hierarchy using Plus Jakarta Sans for headlines to signal confidence in a crowded enterprise landscape where legibility often gets sacrificed against feature clutter found elsewhere; Don’t use decorative elements or gradients that obscure data clarity, particularly when displaying conversion rate optimization metrics alongside behavioral tracking logs essential for rapid decision making without visual noise distracting from actionable insights provided by Sage archetype wisdom.
        *   Row 2: **Do**: Apply accent color #0060b9 exclusively to primary calls-to-action and interactive UI states indicating readiness within CRM interfaces while maintaining high readability standards across both desktop and mobile responsive layouts common among growth teams managing campaigns across multiple devices simultaneously requiring consistent brand presence without bloat; Don’t use the accent color for secondary text elements like footers or body paragraphs where standard grayscale Inter font usage supports focus on primary content rather than drawing attention to non-essential information cluttering user workflows unnecessarily.
        *   Row 3: **Do**: Lock logo lockups into a dedicated assets folder within repository documentation requiring correct clear space rules preventing misalignment that damages brand legitimacy among early adopters who expect professional polish unlike legacy enterprise brands often struggling with inconsistent branding standards across their own platforms; Don’t stretch or crop logos to fit screen real estate without consulting design guidelines, particularly when embedding assets directly inside automated email templates where pixel-level precision impacts perceived professionalism in client communications.

    *   **### Product**
        *   Focus: Export/Repo-ready rules, Agent handoff discipline. Transparent vendor profiles vs hidden costs/opaque logic.
        *   Row 1: **Do**: Document API rate limits and integration endpoints with clear examples for developers so external automation tools like Zapier or custom scripts operate smoothly within the system without unexpected failures that mimic support response delays often cited by enterprise users frustrated with legacy platform fragility; Don't allow configuration files to contain hardcoded credentials even when exporting data sets which violates security best practices common in modern SaaS agreements demanding transparent access controls rather than hidden proprietary keys.
        *   Row 2: **Do**: Version control changelogs for every feature release noting specific behavioral tracking updates while excluding internal infrastructure details that confuse end users accustomed to simplified dashboards prioritizing speed over unnecessary technical depth; Don't export datasets with raw database schema names visible in client-facing reports which breaks the user experience contract where simple column headers and value pairs support faster comprehension than verbose legacy table structures.
        *   Row 3: **Do**: Ensure all deliverable exports maintain consistent metadata tags reflecting current Sage persona guidelines to facilitate quick filtering during onboarding workflows without requiring manual data cleaning steps that increase friction for small business owners handling multiple concurrent channels simultaneously through a unified ecosystem designed specifically against fragmented tool stacks; Don't use placeholder text like 'Lorem Ipsum' within demo environments intended for investor pitches or partner demos as this undermines confidence in platform stability compared to polished enterprise interfaces found on Salesforce market leaders.

4.  **Refining and Formatting Constraints:**
    *   Check: Markdown pipes? None used. Used bullet lists with `**Do**: ... — **Don't**: ...` format. Wait, the prompt says "Use bullet lists with **bold labels** instead". I should structure like `- **Do**: [text] — **Don't**: [text]`.
    *   Check: Section Headings? The task asks for "Return markdown body ONLY - no `##` heading." But it needs to have the subsections. So use `### Copy`, etc., but not a main `## Do's and don'ts` title above them (or is that okay? Usually, BRAND.md expects hierarchy). I will just start with ### Copy.
    *   Check: Row count per section? "each with Do/Don't bullet pairs (4–6 rows)". The example Majico usually means 5 bullets total or specific counts? Let's do exactly 5 items each to be safe within the range, as long as it flows well. Actually re-reading: "three subsections... each with Do/Don't bullet pairs (4–6 rows)." This implies *per* section needs ~4 to 6 lines of bullets where each line is a pair. That's quite dense. I will aim for exactly 5 paired bullets per section.
    *   Check Tone: Professional, Trustworthy, Sage archetype (Wisdom/Truth). Avoid "marketing fluff", focus on utility and clarity.

5.  **Final Polish:** Ensure no tables. Ensure specific color codes mentioned where applicable in Visuals if needed? The prompt mentions accent #0060b9 specifically for Visual section content. Let's ensure that appears naturally or explicitly as per guidelines.
    Wait, re-reading constraints: "Use bullet lists with **bold labels** instead." Example: `- **Do**: ... — **Don't**: ...`. I need to make sure the text flows well within those lines without exceeding too much length making it unreadable in a README context.

    Let's adjust lengths for readability while keeping strict formatting.
    
    *Correction on Row Count:* 4-6 rows *per subsection*. That means ~5 bullets per section is perfect.

    *Check Font info*: In visual section, mention Plus Jakarta Sans and Inter explicitly as requested in the context/visual constraints part of my thought process (though I just need to write it into the markdown).
    
    Let's assemble.

6.  **Final Review against Constraints:**
    - Markdown body ONLY? Yes. No `##` heading at top start, but `###` subsections are structural parts of a document section usually allowed/expected for hierarchy within that specific file chunk provided as "body". The prompt says "no ## heading" -> I assume it means the main title of this whole block shouldn't be there (e.g. ### Do's and Don'ts). But since these are subsections *of* that section, `### Copy` is appropriate for navigation inside a markdown file usually preceded by content headers elsewhere or specific to this snippet context. Actually, "Return markdown body ONLY — no ## heading." implies I shouldn't start with the main title of this document part (e.g. just give me the text).
    - Three subsections: Copy, Visual, Product.
    - 4-6 rows per section in bullet pairs? That means ~5 bullets each. Total 15 lines maybe? Or is it one large list? No, "each with". So Section **### Copy** has a list of bullets (pairs). Then **### Visual**. Then **### Product**.
    - Bold labels: `- **Do**: ... — **Don't**: ...`.
    - Content: SEO/CRM context. Sage Tone.

    Let's refine the text to be high quality "Sage" voice. Wisdom, clarity, truth. No nonsense.

    *Self-Correction on Row Count Interpretation*: If I write 5 bullet points per section inside a `###` header block that allows multiple lines (which markdown does), and each line contains Do/Don't pairs... Yes. That meets the requirement.
    
    Wait, one more constraint detail: "Ground examples in professional and trustworthy voice". The copy guidelines should specifically mention avoiding hype language which fits Sage.

    Let's write it.

    *Wait, re-reading:* "Include: ... ### Copy — bullets (`- **Do**: … — **Don't**: …`) with outcome-first...". This implies the format is exactly that line structure per bullet point.
    
    Okay, ready to generate. I will combine Do and Don't on one bullet block each according to standard Markdown list practices for concise docs (usually `- **Do** ... \n  — **Don’t** ...` or combined in same paragraph). The prompt example shows inline: ` - **Do**: … — **Don't**: …`. I will follow that specific pattern.

    Let's check the row count constraint again "each with Do/Don't bullet pairs (4–6 rows)". This suggests each block should be about 5 bullets long? That makes a huge list per section if they are inline. Or does it mean total length of text in subsection is equivalent to that volume?
    Standard Markdown list interpretation: One row = one line `- ...`. If I want Do/Don't pairs, usually it's like:
    `- **Do**: Use X — **Don't** Use Y` per line. 
    The instruction says "4–6 rows". So 5 bullets each is the gold number for balance inside a README section without being overwhelming? No wait, if every bullet has Do+Don't, then 5 lines = 10 points of instructions total (conceptually). That seems reasonable.
    
    Wait, let me double check "Majico BRAND.md". I am not actually seeing Majico doc to count rows accurately but the user wants Quality Bar alignment which usually implies conciseness and density. However, specific instruction says: **Quality bar: Majico BRAND.md section 8 — three subsections (Copy, Visual, Product) each with Do/Don't bullet pairs (4–6 rows).**
    Okay, I will interpret this as having between 5 to 12 lines per logical block? Or just keep it tight. Let's stick to the constraint: **each** section needs 4-6 *rows* of bullets containing these pairs. So ~5 lines total in that subsection header content is best for readability without breaking into massive lists, assuming each line starts with `-`.

    Okay plan set.
    Section ### Copy -> List item X (Do/Don't) x 5 times roughly? No wait "each section... each with Do/Don't bullet pairs". This refers to the list items being the rows themselves. So per subsection I need ~4-6 lines of `- **Do** ... — **Don’t``.
    Actually, looking at Majico style guides usually: They often group them together. But if I strictly count "rows", each line with a bullet counts as one row. 
    Okay I will create 5 bullets per subsection to be safely within the range and dense enough for quality bar.

    Wait, one more constraint check: "Ground examples in professional and trustworthy voice".
    
    Let's go. Use `### Subtitle`. Ensure no pipes tables. Just lists. No extra preamble text like "Here is the content:". Start with ### Copy directly? 
    The prompt says "Write the body for section Do's and don'ts ... Return markdown body ONLY — no ## heading."
    Does it mean I should omit `###` headers too or just not use a top-level title? Usually, you structure BRAND.md by sections. If this is part of a file that already has an H1/H2 wrapper for "Brand Guide - Collins", then using ### for subsections is correct markdown hierarchy *inside* the parent section (H3). But wait, if I don't include `## Do's and Don'ts`... then starting with `### Copy` immediately might skip a Level 3 header. 
    Actually, standard practice: User says "no ## heading" -> do not write ```markdown\n## Section Title``` but proceed to content.
    Usually BRAND structure is `Brand > Style Guide (H1) > Do's and Don'ts (H2/H3)>`. I should just output the list that represents this specific section body without re

---

## 9. Brand alignment checklist

To maintain consistency across all marketing touchpoints and uphold our Sage persona of authoritative yet accessible expertise, please validate that every deliverable aligns with the criteria below before public release or internal launch approval is granted to stakeholder teams.

- [ ] Ensure all copy reflects a professional and trustworthy tone suitable for established SEO professionals and data-driven decision-makers rather than using hyperbolic sales language
- [ ] Confirm messaging reinforces our Sage archetype by positioning Collins as an essential guide in complex marketing automation workflows without appearing condescending or overly simplified
- [ ] Audit visual assets to strictly utilize Plus Jakarta Sans or Inter fonts, respecting the established weight classifications for headers and body text throughout all documentation
- [ ] Check that Call-to-Action (CTA) buttons focus on growth outcomes like "Start Automation" rather than generic prompts such as "Click Here" without benefit clarity
- [ ] Verify product positioning authenticity by ensuring claims support fast business growth while avoiding unrealistic quick-fix promises in static marketing materials or press releases
- [ ] Review logo usage to guarantee correct application of Collins brand kit files, maintaining the prescribed minimum safe zone and background opacity levels on all PR decks or presentations
- [ ] Evaluate content themes for accuracy against real SEO use cases including analytics integration examples rather than generic success stories that could be disputed by industry peers
- [ ] Ensure design choices in landing pages or email automation templates do not distract from core messaging, specifically the goal of Boost your digital marketing and automation for faster business growth
- [ ] Validate social media posts and PR pitches align with brand voice guidelines to prevent dilution of trustworthiness metric across LinkedIn, Twitter/X, and industry forums like Search Engine Land
- [ ] Confirm that accessibility standards including contrast ratios are met in all interactive design elements to serve clients who value professional clarity
- [ ] Cross-reference any customer success imagery against actual user personas (marketers/analysts) rather than stock photography of generic office settings or people with tablets

---

## 10. Document map (agent handoff pair)

This section defines the essential knowledge graph for automated agents supporting project Collins. Agents should prioritize reading in a strict sequence: first consult BRAND.md to grasp strategic intent and voice guidelines, then proceed to DESIGN.md for system-level visual constraints, before leveraging exported artifacts for generation tasks. Adhering to this order ensures generated content remains both emotionally resonant with the core identity while maintaining technical consistency across implementations without conflicting design token errors or brand dilution.

- **BRAND.md**: This is the primary source of truth containing strategic narrative, voice instructions, and audience frameworks; agents must ingest this first to establish tone before any content generation occurs for Collins interfaces.
- [DESIGN.md](./DESIGN.md): Contains visual system rules, component definitions, and typography standards necessary for frontend integration and layout enforcement within the specified architecture constraints defined in project ebd31ae8-0025-441d-8eea-7bbda8af377d.
- `*-brand-guidelines.md` export: Provides a distilled set of compliance rules and usage restrictions derived from core branding; useful for moderation agents to verify output consistency against established guardrails before publication in any channel.
- `*-brand-profile.md` export: Offers persona-specific data points and market context snapshots tailored for customer-facing interactions or sales enablement tools requiring dynamic profile adjustment based on segment inputs provided during the handoff pairing process.
- Design tokens / CSS / JSON exports: Machine-readable definitions of spacing, color palettes, and component states designed for direct consumption by build pipelines or styling engines to prevent visual regression during updates without manual recalculation overhead.
- Export ZIP bundle purpose: Serves as the distribution package containing all consolidated assets for external deployment; use this when sharing deliverables with stakeholder teams or migrating components across environments while maintaining version integrity and access control without requiring direct repository privileges.

---

_Generated 2026-06-26 via per-section AI enrichment. Visual tokens from [DESIGN.md](./DESIGN.md); narrative from brand profile and guidelines._
