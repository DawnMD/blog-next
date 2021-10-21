import fs from 'fs';
import path from 'path';
import { Blog, FullBlog } from '../types/blogType';
import { filterResponse } from './helpers';

type PathParam = { params: { slug: string } }[];

export async function getAllArticles(): Promise<Blog[]> {
  const res = await fetch('https://dev.to/api/articles/me/published', {
    headers: {
      'api-key': process.env.devToAPIKey as string,
    },
  });

  const data: FullBlog[] = await res.json();
  const filterArticles: Blog[] = data.map((article) => filterResponse(article));
  return filterArticles;
}

export function writeCache(data: Blog[]): void {
  fs.writeFileSync(
    path.join(process.cwd(), 'content', 'devto.cache.js'),
    JSON.stringify(data)
  );
}

export function readCache(): Blog[] {
  const cache = fs.readFileSync(
    path.join(process.cwd(), 'content', 'devto.cache.js'),
    'utf-8'
  );
  const cacheContents = JSON.parse(cache);
  return cacheContents;
}

export function filterCacheBySlug(cache: Blog[], slug: string) {
  return cache.find((cachedArticle) => cachedArticle.slug === slug);
}

export function createPathParams(data: Blog[]): PathParam {
  const path: PathParam = [];
  data.map((blog) => {
    path.push({
      params: {
        slug: blog.slug,
      },
    });
  });

  return path;
}

export function getMaxLikedBlog(data: Blog[]): Blog {
  const blog = data.reduce((a, b) => {
    return a.public_reactions_count > b.public_reactions_count ? a : b;
  });
  return blog;
}

export function getRecentBlog(data: Blog[]): Blog {
  const blog = data.reduce((a, b) => {
    return new Date(a.published_at) > new Date(b.published_at) ? a : b;
  });
  return blog;
}
