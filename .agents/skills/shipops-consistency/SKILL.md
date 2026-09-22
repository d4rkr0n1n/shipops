---
name: shipops-consistency
description: "Maintain ShipOps coding and product consistency when changing the Next.js App Router site, its single-page content, client interactions, themes, pricing, contact flow, metadata, or responsive CSS. Use for feature work, UI polish, refactors, content updates, and validation in this repository."
argument-hint: "Describe the ShipOps page or behavior you want to change"
user-invocable: true
---

# ShipOps Consistency

Use this skill when making changes to the ShipOps website. Preserve the site's existing operating model, visual language, browser/server boundaries, and business wording while keeping edits small and easy to validate.

## Repository Shape

- The primary experience is the single-page App Router route in `app/page.tsx`.
- Keep page content and repeated structured content in data arrays or objects near the top of `app/page.tsx`.
- Keep global layout, metadata, canonical URL handling, and icon configuration in `app/layout.tsx`.
- Keep site-wide design tokens, layout selectors, responsive rules, and theme overrides in `app/globals.css`.
- Keep static assets in `public/` and do not edit `.next/` or other generated output.
- Read the repository's `AGENTS.md` and the relevant local Next.js guidance before introducing framework changes.

## Component Boundaries

- Keep `app/page.tsx` a Server Component unless the feature genuinely needs browser APIs or interactive state.
- Use a Client Component only for behavior requiring state, effects, the DOM, storage, clipboard, media preferences, dialogs, canvas, or other browser-only APIs.
- Preserve deterministic initial markup for hydration. Read `localStorage`, `matchMedia`, `navigator`, `window`, and `document` in effects or guarded client paths rather than during server rendering.
- Keep plan selection as a contact flow, not checkout: `app/contact-dialog.tsx` owns the plan-specific email template, `mailto:` URL, copy action, and lazy QR-code generation.
- Keep theme persistence and document theme attributes in `app/theme-toggle.tsx`.
- When changing a client flow, update the visible UI and generated values together, including email text, subject, QR payload, accessibility labels, and close/open behavior.

## Content And Business Rules

- Preserve the plan order: Lite Audit first, Audit featured/most popular, Launch third unless the user explicitly requests a new order.
- Keep Lite Audit one-time and weekly plans clearly distinct. Weekly capacity is reserved for the billing week and is not an automatic checkout or renewal flow.
- Do not describe choosing a plan as a completed purchase, payment confirmation, or active subscription checkout. Manual payment happens after project confirmation.
- Keep pricing, capacity labels, contact dialog copy, README descriptions, legal policies, and related UI aligned when changing commercial wording.
- Maintain the existing scope boundary: infrastructure and delivery work is included; application feature development, product design, unlimited support, third-party charges, and work beyond capacity are excluded unless explicitly revised.
- Preserve the async, one-active-request model and keep Trello as the source of truth when editing process copy.

## Styling And UI Patterns

- Prefer existing selectors and CSS variables over a second styling system or isolated inline style objects.
- Use the established token vocabulary (`--ink`, `--paper`, `--lime`, `--mint`, `--line`, `--muted`, and `--lime-dark`) and add a token only when a new semantic value is needed.
- Preserve both light and dark theme behavior through `:root` and `:root[data-theme="dark"]` rules.
- Keep the visual language editorial and operational: strong uppercase display headings, compact mono-style labels, restrained borders, generous shell spacing, and direct calls to action.
- Add responsive behavior in `app/globals.css`; preserve stable dimensions for controls and avoid layout shifts from dynamic labels or loading states.
- Keep interactive elements semantic and accessible: use buttons for actions, links for navigation, explicit `type="button"`, meaningful labels, and keyboard-friendly native dialogs/disclosures.
- Use the existing icon treatment and text arrows where already established. Do not introduce a new icon library for a small local change.
- Avoid decorative UI that competes with the service content or turns the operational site into a generic marketing template.

## Change Procedure

1. Identify the owning surface: route data, server markup, client interaction, metadata, or global CSS.
2. Read the nearby implementation and any related copy before editing.
3. Make the smallest change that preserves the existing public structure and class naming.
4. If a business rule changes, update every duplicated representation in the same pass: page data, dialog behavior/copy, README, and legal or policy text where applicable.
5. Check both theme selectors and responsive rules for UI changes.
6. Keep comments rare and only use them for non-obvious behavior.

## Validation

Run the narrowest useful check first, then the repository checks:

- `npm run build` is the required compile and TypeScript validation.
- `npm run lint` is useful when the local ESLint and TypeScript versions initialize successfully; report toolchain incompatibility separately from source errors.
- For UI changes, run the dev site and verify desktop and mobile layouts, both light and dark themes, FAQ disclosure, plan contact dialog, email template copy action, QR rendering, and accessible labels as relevant.
- For metadata or asset changes, verify `NEXT_PUBLIC_SITE_URL`, canonical output, favicon/Apple icon paths, and Open Graph/Twitter asset references.
- Review the final diff for unrelated formatting, generated files, accidental secrets, and inconsistent pricing or service language.
