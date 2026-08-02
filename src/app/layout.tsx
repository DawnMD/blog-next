import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.summary,
  keywords: [
    "Mainak Das",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
    creator: "@mainak_ds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

function HeaderFallback() {
  return (
    <div className="h-18" aria-hidden="true">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <div className="h-7 w-11 animate-pulse rounded bg-neutral-800" />
        <div className="hidden h-10 w-96 animate-pulse rounded-full bg-neutral-800/60 md:block" />
        <div className="h-9 w-24 animate-pulse rounded-full bg-neutral-800" />
      </div>
    </div>
  );
}

const CalSans = localFont({
  src: "../../public/fonts/CalSans/CalSans-SemiBold.woff2",
  display: "swap",
  style: "normal",
  weight: "600",
  variable: "--font-calSans",
});

const Matter = localFont({
  src: [
    {
      path: "../../public/fonts/Matter/Matter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Matter/Matter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Matter/Matter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-matter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="top">
      <body
        className={`${CalSans.variable} ${Matter.variable} bg-canvas font-sans text-neutral-400 antialiased`}
      >
        <a
          href="#main"
          className="bg-brand sr-only rounded-full px-4 py-2 text-sm font-semibold text-neutral-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to content
        </a>

        <div className="flex min-h-dvh flex-col">
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>
          <main id="main" className="grow">
            {children}
          </main>
          <Footer />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
