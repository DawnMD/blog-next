"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, siteConfig, socials } from "@/config/site";
import { cn } from "@/lib/utils";
import { DownloadIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialIcon } from "./SocialIcon";

/** A nav item is active on its own page and on any page nested under it. */
function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export const Header = () => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header only grows a border/blur once the page has moved, so the hero
  // stays visually uninterrupted at the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-line-soft bg-canvas/80 border-b backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="group flex items-center gap-3"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 264.79 150.54"
            aria-hidden="true"
            className="text-brand h-7 w-11 transition-transform duration-300 group-hover:scale-105"
          >
            <motion.path
              initial={reduceMotion ? false : { opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              fill="currentColor"
              d="M154.45 287.76H191l30.41 64.82c8.53 18 14.35 31.16 16.73 39.27 1.95-7.55 7-20.67 15.78-39.27l30.63-64.82h35.23V438.3H293v-88.69l-47.7 82.74a11.69 11.69 0 01-3 3.86 8.08 8.08 0 01-10.46 0 13.68 13.68 0 01-3.11-3.79l-46.03-82.55a16.48 16.48 0 00.07 1.87q.4 9 .41 23.49v63.07h-28.73z"
              transform="translate(-154.45 -287.76)"
            />
            <motion.path
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                delay: 0.5,
              }}
              fill="currentColor"
              d="M340.38 408.16q24.74 0 36.6-12.69t11.85-34.08q0-21.4-11.85-34.3t-36.6-12.9h-19.51v94zm-40.8-120.4h44.36q24.75 0 41.64 9.44a60.91 60.91 0 0125.27 26q8.38 16.57 8.39 38.18 0 21.39-8.39 38a60.2 60.2 0 01-25.27 25.91 94.88 94.88 0 01-16.62 7 127.68 127.68 0 01-39.29 6H300z"
              transform="translate(-154.45 -287.76)"
            />
          </motion.svg>
          <span className="font-calSans hidden text-lg text-neutral-100 sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <LayoutGroup>
          <nav
            aria-label="Main"
            className="border-line-soft bg-surface/70 hidden items-center gap-1 rounded-full border p-1 backdrop-blur-md md:flex"
          >
            {navigation.map(({ name, href }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-neutral-950"
                      : "text-neutral-400 hover:text-neutral-100",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="bg-brand absolute inset-0 -z-1 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative">{name}</span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.resumeUrl}
            download
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            <DownloadIcon className="size-4" aria-hidden="true" />
            Résumé
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon" }),
                "md:hidden",
              )}
            >
              <HamburgerMenuIcon className="size-4" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="flex h-full flex-col">
              <SheetHeader>
                <SheetTitle className="font-calSans text-xl">Menu</SheetTitle>
              </SheetHeader>

              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
                {navigation.map(({ name, href }, i) => {
                  const active = isActive(pathname, href);
                  return (
                    <motion.div
                      key={href}
                      initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.25 }}
                    >
                      <SheetClose asChild>
                        <Link
                          href={href}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "font-calSans block rounded-lg px-3 py-3 text-lg transition-colors",
                            active
                              ? "bg-brand/10 text-brand"
                              : "text-neutral-300 hover:bg-neutral-800/60 hover:text-neutral-50",
                          )}
                        >
                          {name}
                        </Link>
                      </SheetClose>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-line-soft mt-auto space-y-4 border-t pt-6">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className={cn(buttonVariants({ size: "md" }), "w-full")}
                >
                  <DownloadIcon className="size-4" aria-hidden="true" />
                  Download résumé
                </a>
                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "icon" }),
                        "size-9",
                      )}
                    >
                      <SocialIcon name={social.icon} className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
