import Hero from '../components/HomePage/Hero';
import Education from '../components/Portfolio/Education';
// import FeaturedPost from '../components/HomePage/FeaturedPost';
import Skills from '../components/Portfolio/Skills';
import { getFeaturedBlogs } from '../utils/blogUtils';
export default function Home({ featuredBlogs }) {
	return (
		<>
			<Hero />
			{/* <FeaturedPost blogs={featuredBlogs} /> */}
			<Skills />
			<Education />
		</>
	);
}

export async function getStaticProps() {
	const featuredBlogs = getFeaturedBlogs();
	return {
		props: {
			featuredBlogs,
		},
		revalidate: 86400,
	};
}
