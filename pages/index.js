import { NextSeo } from 'next-seo';
import Hero from '../components/HomePage/Hero';
import AnimateHOC from '../components/Layout/AnimationHOC';
import Education from '../components/Portfolio/Education';
import Skills from '../components/Portfolio/Skills';
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
			<Skills />
			<Education />
		</AnimateHOC>
	);
}
