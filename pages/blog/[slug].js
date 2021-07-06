import BlogDetail from '../../components/BlogDetail';
export default function Post({ blog }) {
	return (
		<>
			<BlogDetail blog={blog} />
		</>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const res = await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': process.env.devToAPIKey,
		},
	});

	const data = await res.json();
	const result = data.filter((article) => article.slug === slug);
	const blog = Object.assign({}, ...result);
	return {
		props: {
			blog,
		},
		revalidate: 60,
	};
}
export async function getStaticPaths() {
	const res = await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': process.env.devToAPIKey,
		},
	});

	const data = await res.json();
	const path = [];
	data.map((blog) => {
		path.push({
			params: {
				slug: blog.slug,
			},
		});
	});

	return {
		paths: path,
		fallback: false,
	};
}
