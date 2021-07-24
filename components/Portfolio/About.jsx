import Section from '../shared/SectionHeading';
const About = () => {
	return (
		<Section title='About'>
			<div className='flex flex-col gap-4 text-lg text-center lg:text-left'>
				<p>
					I&apos;m a Computer Engineering student, graduated in 2021. I
					specialize in frontend technologies. I use Next.js, React.Js Redux,
					Node.js and currently experimenting with Express and MongoDB.
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
