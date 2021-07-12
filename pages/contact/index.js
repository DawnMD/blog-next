import Contact from '../../components/Contact';
import { NextSeo } from 'next-seo';
import AnimateHOC from '../../components/Layout/AnimationHOC';
const title = `Contact`;
const description = `Get in touch 😉`;
export default function ContactPage() {
	return (
		<AnimateHOC>
			<NextSeo
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<Contact />
		</AnimateHOC>
	);
}
