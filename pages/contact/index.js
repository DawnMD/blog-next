import Contact from '../../components/Contact';
import { NextSeo } from 'next-seo';
import AnimateLayout from '../../components/Layout/AnimateLayout';
const title = `Contact`;
const description = `Get in touch 😉`;
export default function ContactPage() {
	return (
		<AnimateLayout>
			<NextSeo
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<Contact />
		</AnimateLayout>
	);
}
