import { navigation, siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url;

  return navigation.map(({ href }) => ({
    url: new URL(href, base).toString(),
    changeFrequency: href === "/blogs" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
