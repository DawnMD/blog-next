import BlogDetail from '../../components/BlogDetail';
import {
	createPathParams,
	filterCacheBySlug,
	getAllArticles,
	readCache,
	writeCache,
} from '../../utils/blogUtils';
import { NextSeo } from 'next-seo';

export default function Post({ blog }) {
	return (
		<>
			<NextSeo
				title={blog.title}
				description={blog.description}
				openGraph={{ title: blog.title, description: blog.description }}
			/>
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
