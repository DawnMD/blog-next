import Blogs from '../../components/Blogs';
import { getAllArticles } from '../../utils/blogUtils';
import { NextSeo } from 'next-seo';
import AnimateLayout from '../../components/Layout/AnimateLayout';
const title = `Blogs`;
const description = `Articles I write in my free time. 📝`;
export default function Posts({ blog }) {
	return (
		<AnimateLayout>
			<NextSeo
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<Blogs blogs={blog} />
		</AnimateLayout>
	);
}
export async function getStaticProps() {
	const data = await getAllArticles();
	return {
		props: {
			blog: data,
		},
		revalidate: 86400,
	};
}
