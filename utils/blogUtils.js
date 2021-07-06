import fs from 'fs';
import path from 'path';

export async function getAllArticles() {
	const res = await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': process.env.devToAPIKey,
		},
	});

	const data = await res.json();
	return data;
}

export function writeCache(data) {
	fs.writeFileSync(
		path.join(process.cwd(), 'content', 'devto.cache.js'),
		JSON.stringify(data)
	);
}
export function readCache() {
	const cache = fs.readFileSync(
		path.join(process.cwd(), 'content', 'devto.cache.js'),
		'utf-8'
	);
	const cacheContents = JSON.parse(cache);
	return cacheContents;
}

export function filterCacheBySlug(cache, slug) {
	return cache.find((cachedArticle) => cachedArticle.slug === slug);
}

export function createPathParams(data) {
	const path = [];
	data.map((blog) => {
		path.push({
			params: {
				slug: blog.slug,
			},
		});
	});

	return path;
}
