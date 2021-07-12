import { NextSeo } from 'next-seo';
import Hero from '../components/Portfolio/Hero';
import AnimateHOC from '../components/Layout/AnimationHOC';
import About from '../components/Portfolio/About';
import Education from '../components/Portfolio/Education';
import Skills from '../components/Portfolio/Skills';
import Testimonials from '../components/Portfolio/Testimonials';
const title = `Hey, I'm Mainak Das. ✌️`;
const description = `I'm a self learned and self taught developer.`;

export default function Home(props) {
	return (
		<AnimateHOC>
			<NextSeo
				title='Home'
				description={description}
				openGraph={{ title, description }}
			/>
			<Hero />
			<About />
			<Skills />
			<Education />
			<Testimonials />
		</AnimateHOC>
	);
}
