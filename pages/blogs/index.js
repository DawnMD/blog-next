import Blogs from '../../components/Blogs';
export default function Posts({ blog }) {
	return (
		<section>
			<Blogs blogs={blog} />
		</section>
	);
}
export async function getStaticProps() {
	const res = await fetch('https://dev.to/api/articles/me/published', {
		headers: {
			'api-key': process.env.devToAPIKey,
		},
	});

	const data = await res.json();
	return {
		props: {
			blog: data,
		},
		revalidate: 60,
	};
}
