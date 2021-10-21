export type Blog = {
  body_markdown: string;
  comments_count: number;
  cover_image: string | null;
  description: string;
  id: number;
  page_views_count: number;
  public_reactions_count: number;
  published_at: string;
  slug: string;
  tag_list: string[];
  title: string;
  url: string;
};
