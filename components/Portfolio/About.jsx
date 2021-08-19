import Section from '../shared/SectionHeading';
const About = () => {
	return (
		<Section title='About'>
			<div className='flex flex-col gap-4 text-lg text-center lg:text-left'>
				<p>
					Graduted as a Computer Engineering student, I specialize mainly in frontend technologies. I use Next.js, React.Js Redux, Node.js and currently experimenting with Express and MongoDB.
				</p>
				<p>
				Having a keen interest in learning different web technologies, currently experimenting with Express and MongoDB, I have been spending most of my time learning different frameworks and creating content for my blog on interesting problems. I had solved and created tutorials to educate and help others use various technologies for the first time or in a more efficient manner.
				</p>
			</div>
		</Section>
	);
};
export default About;
