import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${CalSans.variable} ${Matter.variable} bg-black font-sans antialiased`}
        >
          <div className="flex min-h-dvh flex-col bg-neutral-900 text-neutral-400 sm:mx-auto sm:max-w-3xl lg:max-w-7xl">
            <TRPCReactProvider>
              <Header />
              <main className="grow px-4 pb-4 sm:px-8 lg:mx-auto lg:max-w-7xl lg:px-16">
                {children}
              </main>
              <Footer />
              <Analytics />
              <SpeedInsights />
            </TRPCReactProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
