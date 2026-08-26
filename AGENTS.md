<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ShipOps Repository Guidelines

## Project Overview

- ShipOps is a single-page DevOps-as-a-Service website.
- The primary route is the App Router home page in `app/page.tsx`.
- The site presents service capabilities, example deliverables, scope boundaries, process details, pricing, legal policies, FAQs, and a contact call to action.
- Plan selection currently opens an email-based contact flow. It is not an active payment or subscription checkout.

## Architecture

- Keep the main page as a Server Component unless a feature genuinely needs browser APIs or interactive state.
- `app/contact-dialog.tsx` is a Client Component because it uses dialog state, clipboard access, and client-side QR-code generation.
- `app/theme-toggle.tsx` is a Client Component because it reads and writes `localStorage`, `matchMedia`, and the document theme.
- Preserve hydration-safe rendering: do not read browser-only values during the initial render when the server cannot produce the same value. Read them in an effect and keep the initial markup deterministic.
- Keep document metadata, icons, canonical URL handling, and global layout concerns in `app/layout.tsx`.
- Use the existing `app/globals.css` design tokens and selectors for site-wide styling. Avoid introducing a second styling system for small changes.

## Content And Integrations

- Keep pricing and page content in the data structures at the top of `app/page.tsx` unless content management is introduced deliberately.
- Preserve the current pricing order unless explicitly requested: Lite Audit appears first, Audit is the featured/most popular weekly plan, and Launch follows it.
- Keep weekly capacity labels, the ad hoc payment model, and the one-time Lite Audit distinction consistent in the cards, contact dialog, README, legal policies, and any future checkout flow.
- The contact address and plan-specific email template live in `app/contact-dialog.tsx`; update both the visible flow and generated mailto/QR content together.
- QR codes are generated lazily in the browser through the `qrcode` dependency. Do not move that dependency into server-only code.
- Do not describe plan selection as a completed purchase or automatic renewal. Payments are currently handled manually after project confirmation; payment providers, checkout verification, and client intake automation are planned rather than implemented.
- Keep the Legal & Policies section in `app/page.tsx` aligned with the service terms: no refunds after work is scheduled or started, ad hoc cancellation without automatic renewal, written email records, statement-of-work handling, data-access and credential safeguards, and liability or availability boundaries.

## Environment And Deployment

- `NEXT_PUBLIC_SITE_URL` controls metadata, canonical URLs, and generated asset URLs. Use `http://localhost:3000` locally and the deployed public URL in production.
- The project is configured for a Node-compatible Next.js host. Use `npm run build` followed by `npm run start` for production verification.
- The GitHub Pages workflow supplies the public site URL for the current deployment configuration. Review the workflow before changing static-host assumptions.

## Validation

- Install dependencies with `npm install`.
- Run `npm run build` after source changes; this is the required compile and TypeScript check.
- Run `npm run lint` when the local ESLint and TypeScript versions are compatible. The current dependency set may fail during ESLint initialization because the installed `typescript-eslint` tooling does not yet support TypeScript 7; report that toolchain failure separately from source errors.
- For UI changes, manually verify both light and dark themes, the plan contact dialog, QR-code rendering, FAQ disclosure, and responsive layouts.

## Editing Rules

- Keep changes focused on the requested behavior and preserve existing user edits.
- Preserve the generated `nextjs-agent-rules` block above; place repository-specific instructions below it.
- Do not edit `.next/` or other generated build output. Do not commit secrets or local `.env` files.
