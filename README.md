# ShipOps

[![ShipOps Website Deployment](https://github.com/d4rkr0n1n/shipops/actions/workflows/nextjs.yml/badge.svg?branch=dev)](https://github.com/d4rkr0n1n/shipops/actions/workflows/nextjs.yml)

ShipOps is a single-page website for subscription DevOps services for Indian startups and small product teams that need reliable cloud infrastructure without hiring a full-time DevOps engineer. It presents practical deliverables, the delivery model, scope boundaries, legal policies, and a direct email-based contact flow.

## Features

- Service overview for CI/CD, Terraform, cloud operations, Kubernetes, observability, and GitOps
- Example deliverables including CI/CD pipelines, cloud infrastructure, monitoring, alerts, and reliability upgrades
- Clear included and excluded work boundaries
- Async, one-active-request operating model and three-step process explanation
- Weekly capacity plans and a one-time offer in INR, paid on an ad hoc basis:
	- **Lite Audit**: Rs 199 one-time offer, shown first
	- **Audit**: Rs 399/week, marked as the most popular plan
	- **Launch**: Rs 899/week
- Contact dialog with a plan-specific email template and `mailto:` links
- QR codes for the contact email and generated email template
- Expandable Legal & Policies section covering Terms of Service, Privacy Policy, refunds, cancellation, service agreements, statements of work, data access, credentials, liability, and availability
- Light and dark themes with preference persistence in `localStorage`
- Responsive layout, metadata, canonical URL, favicon, Apple icon, and Open Graph/Twitter image references

## Tech Stack

- Next.js 16.3.1 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4 through PostCSS
- `qrcode` for client-side QR code generation
- ESLint with Next.js Core Web Vitals and TypeScript rules

## Getting Started

### Requirements

- Node.js with npm

### Install dependencies

```bash
npm install
```

### Configure the site URL

Copy the example environment file and adjust the URL for the environment:

```bash
cp .env.example .env.local
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

`.env.local` supports:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

This value is used for metadata, canonical URLs, and asset URLs. The application falls back to `http://localhost:3000` when it is not set.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |

## Project Structure

```text
app/
	page.tsx                 Main landing page and content data
	contact-dialog.tsx       Plan-specific email dialog and QR codes
	theme-toggle.tsx         Light/dark theme control
	layout.tsx               Metadata, icons, and root layout
	globals.css              Site layout, responsive styles, and themes
	# (planned) api/checkout/verify/      Checkout verification route (not yet implemented)
public/                    Static assets
```

The main page is a server component. The contact dialog and theme toggle are client components because they use browser APIs and interactive state.

## Contact Flow

Selecting a plan opens a dialog addressed to `midlry.mr@gmail.com`. The dialog includes a pre-filled subject and project-requirements template, a button to copy that template, a direct email link, and QR codes generated in the browser. Weekly plans represent weekly capacity and are paid or confirmed on an ad hoc basis; there is no automatic renewal. Lite Audit is a one-time offer.

There is currently no active payment provider or checkout verification implementation. Payments are handled manually after project confirmation. Razorpay and other operational integrations remain planned work; do not treat plan selection as a completed purchase or automatic subscription.

## Deployment Notes

The app can be deployed to a Node-compatible Next.js host using:

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the public origin before building so generated metadata points to the deployed site. The current Next configuration does not enable static export, so a host that supports running Next.js is expected.

## Status

The website is an early production-facing brochure and lead-capture experience. Planned work includes business registration, payment integration, automated security and code scanning, environment promotion workflows, and additional client intake automation.