import BlogDetail from '../../components/BlogDetail';
import fs from 'fs';
import path from 'path';

export default function Post({ blog }) {
	return (
		<>
			<BlogDetail blog={blog} />
		</>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const cache = fs.readFileSync(
		path.join(process.cwd(), 'devto.cache.js'),
		'utf-8'
	);
	const cacheContents = JSON.parse(cache);
	const blog = cacheContents.find(
		(cachedArticle) => cachedArticle.slug === slug
	);
	return {
		props: {
			blog,
		},
	};
}
export async function getStaticPaths() {
	const res = await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': process.env.devToAPIKey,
		},
	});

	const data = await res.json();
	fs.writeFileSync(
		path.join(process.cwd(), 'devto.cache.js'),
		JSON.stringify(data)
	);
	const blogPath = [];
	data.map((blog) => {
		blogPath.push({
			params: {
				slug: blog.slug,
			},
		});
	});

	return {
		paths: blogPath,
		fallback: false,
	};
}
