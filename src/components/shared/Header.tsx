"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Guestbook", href: "/guestbook" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="z-10 flex items-center justify-between px-4 py-8 sm:px-8 lg:px-16">
      <Link
        href="/"
        className="font-calSans text-2xl font-semibold text-neutral-50 lg:text-4xl"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 264.79 150.54"
          className="text-brand h-8 w-10 lg:h-10 lg:w-16"
        >
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
            }}
            fill="currentColor"
            d="M154.45 287.76H191l30.41 64.82c8.53 18 14.35 31.16 16.73 39.27 1.95-7.55 7-20.67 15.78-39.27l30.63-64.82h35.23V438.3H293v-88.69l-47.7 82.74a11.69 11.69 0 01-3 3.86 8.08 8.08 0 01-10.46 0 13.68 13.68 0 01-3.11-3.79l-46.03-82.55a16.48 16.48 0 00.07 1.87q.4 9 .41 23.49v63.07h-28.73z"
            transform="translate(-154.45 -287.76)"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0 }}
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
          ></motion.path>
        </motion.svg>
      </Link>
      <LayoutGroup>
        <nav className="hidden items-center gap-4 md:flex" id="nav">
          {navigation.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={cn("font-bold transition-all", {
                "hover:text-brand text-neutral-400": href !== pathname,
                "text-neutral-800": href === pathname,
              })}
            >
              <span className="relative px-3 py-2">
                {name}
                {href === pathname && (
                  <motion.div
                    className="bg-brand absolute inset-0 -z-[1] rounded-md"
                    layoutId="header"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </span>
            </Link>
          ))}
        </nav>
      </LayoutGroup>
      <Sheet>
        <SheetTrigger asChild>
          <HamburgerMenuIcon className="h-4 w-4 md:hidden" />
        </SheetTrigger>
        <SheetContent side="right" className="h-full">
          <SheetHeader>
            <SheetTitle className="text-xl">Menu</SheetTitle>
          </SheetHeader>
          <motion.ul
            className="flex flex-col gap-4"
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {navigation.map(({ name, href }) => (
              <motion.li key={href} variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <SheetClose asChild>
                  <Link
                    href={href}
                    className={cn("border-b text-lg font-bold", {
                      "text-neutral-400": href !== pathname,
                      "text-brand border-brand": href === pathname,
                    })}
                  >
                    {name}
                  </Link>
                </SheetClose>
              </motion.li>
            ))}
          </motion.ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};
