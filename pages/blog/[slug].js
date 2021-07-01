import BlogDetail from '../../components/BlogDetail';
import { getBlog } from '../../utils/blogUtils';
export default function Post({ blog }) {
	return (
		<>
			<BlogDetail blog={blog} />
		</>
	);
}
export async function getStaticProps(context) {
	const { slug } = context.params;
	const blog = getBlog(slug);
	// console.log(blog);
	return {
		props: {
			blog,
		},
	};
}
export async function getStaticPaths(context) {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
