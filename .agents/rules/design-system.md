# Design System & Visual Identity Rules

## 1. Official Brand Visual Identity (from landing-page-exemplo.png)
- **Primary CTA & Highlights:** `#FF3D68` (Pink). Use for main WhatsApp conversion buttons, cart triggers, highlight text spans in headlines, and primary badges.
- **Secondary CTA & Accents:** `#FF8C32` (Orange). Use for B2B buttons, category indicators, eyebrow badges, and secondary card borders.
- **Backgrounds:** `#FFFFFF` (pure white surface), `#F8F9FA` / `#FFF5F7` (delicate festive warmth), and `#1E1E1E` / `#2A2A2A` for high-contrast dark sections.
- **Text & Headings:** `#2A2A2A` in heavy weights (`font-black`, `font-extrabold`), uppercase punchy headlines.

## 2. Card & UI Component Styling
- **Framed Cards:** Use thin colored borders (`border border-accent/40` or `border border-primary/40`) with `rounded-2xl` or `rounded-3xl` and white background.
- **Image Badges:** In catalog cards, display dark pill badges (`bg-dark text-white text-[10px] uppercase font-bold tracking-wider`) over product/category images.
- **Section Badges (Eyebrows):** Rounded-full pills with subtle border, uppercase tracking-wider text (e.g. `border border-accent/30 text-accent bg-accent-light/40`).
- **Feature Bullets:** Colored dots or checkmarks in pink/orange circles.

## 3. Centralized Visual Tokens (Mandatory)
- Never hardcode arbitrary hex colors or specific untokenized color families inside JSX component trees.
- Always use semantic tokens mapped in `src/app/globals.css`:
  - `bg-primary`, `text-primary`, `border-primary`
  - `bg-accent`, `text-accent`, `border-accent`
  - `bg-surface`, `bg-ice`, `text-foreground`, `text-dark-muted`, `border-border-subtle`
  - `bg-whatsapp`, `text-whatsapp`
- Any future brand palette modification must be achievable in **1 single file** (`src/app/globals.css`).

## 4. Reusable Primitives
- Always favor reusable UI primitives in `src/components/ui/`:
  - `<Button variant="accent|primary|whatsapp|secondary|outline|ghost">`
  - `<Badge variant="accent|primary|whatsapp|neutral|dark">`
  - `<Breadcrumbs items={...} />`

## 5. Proportional Validation
- For simple cosmetic changes, asset replacements (logos/images), or CSS variable adjustments, apply edits directly and finish quickly without heavy asynchronous loops or redundant tests.

## 6. Homepage Hero Banners
- Store promotional banner assets in `public/images/banners/`.
- Maintain proportional aspect ratio (e.g. `aspect-[3094/1376]`) in full-width edge-to-edge layout without cropping textual and graphic content on smaller screens.
- Keep the HeroBanner component structured modularly with an extensible slides/banners configuration to enable future multi-banner carousels without refactoring.

## 7. Homepage Advantages / TrustBar Section
- Do NOT use dark backgrounds for the trust/advantages section following the hero. Keep a light, clean background (`bg-white` or `bg-ice`).
- Present commercial benefits objectively in light framed cards (`rounded-3xl` with thin colored borders `border-2 border-pink-100/70 hover:border-accent`).
- Cover core customer pillars: Fast WhatsApp support, express local dispatch (Uber Flash/pick-up), in-house DTF UV personalization, and full catalog variety.

