import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://mainak.vercel.app",
  ),
};

function HeaderFallback() {
  return (
    <header className="z-10 flex items-center justify-between px-4 py-8 sm:px-8 lg:px-16">
      <div className="font-calSans text-2xl font-semibold text-neutral-50 lg:text-4xl">
        <div className="h-8 w-10 lg:h-10 lg:w-16 rounded bg-neutral-800 animate-pulse" />
      </div>
      <nav className="hidden items-center gap-4 md:flex" aria-hidden="true">
        {["Home", "About", "Blogs", "Testimonials"].map((name) => (
          <span
            key={name}
            className="h-9 w-16 rounded bg-neutral-800 animate-pulse"
          />
        ))}
      </nav>
    </header>
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
  variable: "--font-matter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${CalSans.variable} ${Matter.variable} bg-black font-sans antialiased`}
      >
        <div className="flex min-h-dvh flex-col bg-neutral-900 text-neutral-400 sm:mx-auto sm:max-w-3xl lg:max-w-7xl">
          <Suspense fallback={<HeaderFallback />}>
            <Header />
          </Suspense>
          <main className="grow px-4 pb-4 sm:px-8 lg:mx-auto lg:max-w-7xl lg:px-16">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
