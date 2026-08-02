import { SocialIcon } from "@/components/shared/SocialIcon";
import { navigation, siteConfig, socials } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-line-soft mt-24 border-t">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-calSans text-xl text-neutral-100">
              Let&apos;s build something.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {siteConfig.availability}. The fastest way to reach me is email —
              I reply to everything.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand hover:text-brand-soft mt-4 inline-block text-sm font-semibold underline decoration-dotted underline-offset-4 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex gap-12 sm:gap-20">
            <nav aria-label="Footer">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                Pages
              </h2>
              <ul className="mt-4 space-y-2.5">
                {navigation.map(({ name, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-neutral-400 transition-colors hover:text-neutral-50"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-neutral-500 uppercase">
                Elsewhere
              </h2>
              <ul className="mt-4 space-y-2.5">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target={social.icon === "mail" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
                    >
                      <SocialIcon
                        name={social.icon}
                        className="group-hover:text-brand size-3.5 text-neutral-500 transition-colors"
                      />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-line-soft mt-12 flex flex-col-reverse items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          {/* No dynamic year: `new Date()` at render time is a dynamic API
              under `cacheComponents` and would opt this route out of caching. */}
          <p className="text-xs text-neutral-500">
            © {siteConfig.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a
            href="#top"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-xs",
            )}
          >
            Back to top
            <ArrowUpIcon className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
