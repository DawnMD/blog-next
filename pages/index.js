import Hero from '../components/HomePage/Hero';
import Education from '../components/Portfolio/Education';
import Skills from '../components/Portfolio/Skills';
export default function Home({ featuredBlogs }) {
	return (
		<>
			<Hero />
			<Skills />
			<Education />
		</>
	);
}
