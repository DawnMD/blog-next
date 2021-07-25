import { NextSeo } from 'next-seo';
import AnimateLayout from '../components/Layout/AnimateLayout';
import Portfolio from '../components/Portfolio';
import {
	getMaxLikedBlog,
	getRecentBlog,
	getAllArticles,
} from '../utils/blogUtils';

const title = `Hey, I'm Mainak Das. ✌️`;
const description = `I'm a self learned and self taught developer.`;

export default function Home(props) {
	return (
		<AnimateLayout>
			<NextSeo
				title='Home'
				description={description}
				openGraph={{ title, description }}
			/>
			<Portfolio featured={props.featured} />
		</AnimateLayout>
	);
}

export async function getStaticProps() {
	const data = await getAllArticles();
	const mostLiked = getMaxLikedBlog(data);
	const mostRecent = getRecentBlog(data);
	return {
		props: { featured: { mostRecent, mostLiked } },
	};
}
