import Section from '../shared/SectionHeading';
import SvgAbout from '../shared/Svg/SvgAbout';
const About = () => {
	return (
		<Section title='About'>
			<div className='flex flex-col items-center justify-center w-full gap-4 md:gap-8 lg:justify-evenly md:flex-row'>
				<div>
					<SvgAbout />
				</div>
				<div>
					<p className='max-w-4xl px-3 text-lg font-medium tracking-wide text-center lg:text-left md:text-2xl md:font-semibold'>
						Computer Engineering student with experience in JavaScript, Python
						and full stack web development. Knowledgeable in range of other
						development languages and methodologies. Bright critical thinker
						with talent for learning quickly in results-oriented environment.
					</p>
				</div>
			</div>
		</Section>
	);
};
export default About;
