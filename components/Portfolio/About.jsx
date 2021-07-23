import Section from '../shared/SectionHeading';
const About = () => {
	return (
		<Section title='About'>
			<div className='flex flex-col gap-4 text-lg text-center lg:text-left'>
				<p>
					I&apos;m a Computer Engineering student, will be graduating on 2021.
					Knowledgeable in frontend technologies. Sometimes I use Next.js,
					Redux, Node.js. I&apos;m currently experimenting with Express and
					MongoDB.
				</p>
				<p>
					I spend most of my time learning different web technologies and
					creating content for my blog on interesting problems I&apos;ve had to
					solve and create tutorials to educate and help others use various
					technologies for the first time or in a more efficient manner.
				</p>
			</div>
		</Section>
	);
};
export default About;
