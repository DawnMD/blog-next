import Contact from '../../components/Contact';
import { NextSeo } from 'next-seo';
const title = `Contact`;
const description = `Get in touch 😉`;
export default function ContactPage() {
	return (
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{ title, description }}
			/>
			<Contact />
		</>
	);
}
