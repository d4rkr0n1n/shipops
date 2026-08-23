import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const title = "ShipOps — DevOps as a Service";
const description = "Senior DevOps expertise on subscription. CI/CD, Terraform, Kubernetes, cloud infrastructure, and GitOps for ambitious product teams.";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const metadataBase = new URL(configuredSiteUrl.endsWith("/") ? configuredSiteUrl : `${configuredSiteUrl}/`);
const assetUrl = (path: string) => new URL(path.replace(/^\//, ""), metadataBase).toString();
const themeScript = `
  try {
    const savedTheme = localStorage.getItem("shipops-theme");
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }
`;

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  alternates: { canonical: metadataBase.toString() },
  icons: {
    icon: [{ url: assetUrl("icon"), type: "image/png" }],
    apple: [{ url: assetUrl("apple-icon"), type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: metadataBase.toString(),
    title,
    description,
    siteName: "ShipOps",
    locale: "en_IN",
    images: [{ url: assetUrl("og.png"), width: 1200, height: 630, alt: "ShipOps — Ship faster. Sleep better." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: assetUrl("og.png"), alt: "ShipOps — Ship faster. Sleep better." }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
