import Blogs from '../../components/Blogs';
import { getAllBlogs } from '../../utils/blogUtils';
export default function Posts({ blogs }) {
	return (
		<>
			<Blogs blogs={blogs} />
		</>
	);
}
export async function getStaticProps() {
	const blogs = getAllBlogs();
	return {
		props: { blogs },
		revalidate: 86400,
	};
}
