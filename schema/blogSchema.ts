import { z } from 'zod';

export const blogSchema = z.array(
  z.object({
    type_of: z.string(),
    id: z.number(),
    title: z.string(),
    description: z.string(),
    published: z.boolean(),
    published_at: z.string(),
    slug: z.string(),
    path: z.string(),
    url: z.string(),
    comments_count: z.number(),
    public_reactions_count: z.number(),
    page_views_count: z.number(),
    published_timestamp: z.string(),
    positive_reactions_count: z.number(),
    cover_image: z.union([z.string(), z.null()]),
    canonical_url: z.string(),
    reading_time_minutes: z.number(),
    body_markdown: z.string(),
  })
);

export type blogSchemaType = z.infer<typeof blogSchema>;
