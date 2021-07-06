import BlogDetail from '../../components/BlogDetail';
import {
	createPathParams,
	filterCacheBySlug,
	getAllArticles,
	readCache,
	writeCache,
} from '../../utils/blogUtils';

export default function Post({ blog }) {
	return (
		<>
			<BlogDetail blog={blog} />
		</>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const cacheContents = readCache();
	const blog = filterCacheBySlug(cacheContents, slug);
	return {
		props: {
			blog,
		},
		revalidate: 21600,
	};
}
export async function getStaticPaths() {
	const data = await getAllArticles();
	writeCache(data);
	const blogPath = createPathParams(data);
	return {
		paths: blogPath,
		fallback: false,
	};
}
