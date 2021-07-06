import Blogs from '../../components/Blogs';
import { getAllArticles } from '../../utils/blogUtils';
import { NextSeo } from 'next-seo';
const title = `Blogs`;
const description = `Articles I write in my free time. 📝`;
export default function Posts({ blog }) {
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<section>
				<Blogs blogs={blog} />
			</section>
		</>
	);
}
export async function getStaticProps() {
	const data = await getAllArticles();
	return {
		props: {
			blog: data,
		},
	};
}
