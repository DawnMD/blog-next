interface User {
  name: string;
  username: string;
  twitter_username: any;
  github_username: string;
  website_url: any;
  profile_image: string;
  profile_image_90: string;
}

export interface FullBlog {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: string;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: User;
}

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
