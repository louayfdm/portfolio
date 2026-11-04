# CLAUDE.md — Portfolio de Louay Ben Hassine

The owner is not a developer. Explain in plain French, do the technical work yourself, and give exact steps when he has to act (GitHub, Vercel, Web3Forms).

## Project
- Astro 5 static site, deployed on Vercel from GitHub. `npm run dev`, `npm run build`.
- Bilingual: English (default) at `/en/`, French at `/fr/`. Root `/` redirects by browser language.
- Content lives in `src/data/*.ts` (one object per language). Layout in `src/pages/[lang]/`, `src/layouts/Base.astro`, `src/components/Shot.astro`. Styles and tokens in `src/styles/global.css`.
- Images in `public/img/<project>/<name>.webp` (top crop) and `<name>-full.webp` (full screen, opened in the lightbox). Sizes in `img-meta.json`. To add an image: export PNG, convert to WebP, add its size to `img-meta.json`.
- Contact form: Web3Forms, access key in `src/data/site.ts` (`CONTACT.web3formsKey`). Public by design.

## Who he is
Louay Ben Hassine, Lead Product Designer at Keyrus MEA, Tunis. 6+ years. Telecom super apps, back offices, design systems. Targets lead, senior and product designer roles, full-time or freelance, anywhere.

## Writing rules (strict)
- Human, direct, factual. Short sentences. No marketing or AI words: seamless, innovative, revolutionary, synergy, holistic, leverage, empower, unlock, elevate, robust, spearheaded, effortless, flawless (FR: révolutionnaire, innovant, fluide, sans friction, synergie, holistique, levier).
- Never invent numbers, quotes, clients or results. If a fact is missing, leave it out.
- Credit honestly: “I” only for Louay’s own work, “we” for team or client decisions.
- Case studies are complete but without noise: scale, constraints, decisions, system, result. No personal or logistic details (leave, replacements, percentages).
- Each case study stands alone. Do not caption a screen with something it does not show.
- Write English first, then adapt to natural French (not word for word). French typography: decimal comma, non-breaking space before : ; ? !, « guillemets ».

## Facts that must stay consistent
- Zain Bahrain: sole product designer, 2024 to today. Segments: Consumers, Business, High-end (never “VIP” on the site). Gradients: Jade Horizon (chosen over Azure Waters), Midnight Sky, a black gradient created by Keyrus. Rebrand about three months. 266 color variables, 3 modes, 144 change.
- Omniflow CX Suite: lead product designer with 2 designers. Modules: App Manager Studio, Selfcare, Marketplace, Event & Ticketing, Marketing, Data. Token system built under his lead (no component library declared yet). Control Tower designed in 2022 with one designer (Adobe XD). Omniflow 360: he led the rebrand, UI redesign and new features including Hermes AI. Base of Max it and Zain.
- Max it (Orange MEA): product designer (not lead), 2022 to 2023, marketplace and shared flows. 8 markets on the core product (full app in 6, marketplace only in Morocco and Egypt). Illustrated buttons were a team idea. He did not create the 166 variables or the Arabic variants.
- Maroc Telecom: 2024. Product designer for bid, scoping and final design; design lead for the rebrand (4 weeks, web and app, 8 color variables). The rebrand came at the end, just before launch. His second color proposal was chosen by the client.

## Design direction (v2)
- Light and neutral. Ground #F1F1EE, paper #FFF, tone #E4E4E0, ink #000, muted #55554F. One family: Schibsted Grotesk.
- Text never sits on a client colour. Client colours only appear inside their own screens.
- The logo (black, square blocks cut by a thin channel) is the signature: side column, top bar, footer, favicon, CV. Its construction drives the "mosaic" component: screens shown in neutral blocks separated by an 8px channel (`src/components/Mosaic.astro`).
- Square buttons and blocks, like the mark. No gradients, no shadows, no eyebrows, no 01/02 numbering.
- Home: fixed profile column (desktop) + feed: 4 project cards (each project once), About, Contact. No repeated project blocks.
- Case studies: document layout with a sticky contents list. The Zain segment switch lives in the Zain case study (`live: 'segments'` on a decision).
- CVs: `public/cv/Louay-Ben-Hassine-CV-EN.pdf` (English pages) and `-FR.pdf` (French pages), one A4 page each.
