import { PageHeader } from "@/components/shared/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `What colleagues and founders have said about working with ${siteConfig.name}.`,
};

const testimonials = [
  {
    quote:
      "During his internship period with us we found him a person who is reliable and able to ensure the assigned tasks are completed in a timely manner.",
    name: "Phani Ponapalli",
    title: "CEO & Founder, APlusTopper Pvt. Ltd.",
  },
  {
    quote:
      "During the period of his internship program with us he was found punctual, hardworking and inquisitive.",
    name: "Subrata Mallick",
    title: "CEO & Founder, Next Generation Technocom Private Ltd.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-16">
      <PageHeader
        eyebrow="Testimonials"
        title="What people say"
        intro="Sometimes other people's opinions describe you better than your own."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="border-line-soft bg-surface relative flex flex-col rounded-2xl border p-7 sm:p-8"
          >
            <span
              aria-hidden="true"
              className="font-calSans text-brand/20 absolute top-4 right-6 text-7xl leading-none select-none"
            >
              &rdquo;
            </span>
            <blockquote className="relative text-lg leading-relaxed text-neutral-100">
              {testimonial.quote}
            </blockquote>
            <figcaption className="border-line-soft mt-6 border-t pt-5 text-sm">
              <span className="block font-semibold text-neutral-100">
                {testimonial.name}
              </span>
              <span className="mt-0.5 block text-neutral-500">
                {testimonial.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="border-line-soft mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed p-6">
        <p className="text-sm text-neutral-400">
          Worked with me before? I&apos;d love a line for this page.
        </p>
        <a
          href={`mailto:${siteConfig.email}?subject=Testimonial`}
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Send a testimonial
        </a>
      </div>
    </div>
  );
}
