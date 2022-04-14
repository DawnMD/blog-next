import { Blog, FullBlog } from '../types/blogData';

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export function filterResponse(data: FullBlog): Blog {
  const article = {
    body_markdown: data.body_markdown,
    comments_count: data.comments_count,
    cover_image: data.cover_image,
    id: data.id,
    page_views_count: data.page_views_count,
    description: data.description,
    public_reactions_count: data.public_reactions_count,
    published_at: data.published_at,
    slug: data.slug,
    title: data.title,
    url: data.url,
  };
  return article;
}
