import Blogs from '../../components/Blogs';
import { getAllArticles } from '../../utils/blogUtils';
export default function Posts({ blog }) {
	return (
		<section>
			<Blogs blogs={blog} />
		</section>
	);
}
export async function getStaticProps() {
	const data = await getAllArticles();
	return {
		props: {
			blog: data,
		},
		revalidate: 21600,
	};
}
