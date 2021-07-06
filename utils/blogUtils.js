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
