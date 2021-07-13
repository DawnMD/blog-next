import Section from '../shared/SectionHeading';
const Testimonials = (props) => {
	return (
		<Section title='Testimonials'>
			<figure className='relative flex flex-col gap-4 px-6 py-3'>
				<blockquote className='font-serif italic before:absolute before:top-0 before:left-0 before:text-6xl before:content-quote'>
					<p className='pl-2 text-3xl font-bold tracking-wide max-w-7xl'>
						During the period of his internship program with us he was found
						punctual, hardworking and inquisitive.
					</p>
				</blockquote>
				<figcaption className='pl-2 text-lg'>
					— Subrata Mallick,
					<cite> CEO & Founder, Next Generation Technocom Private Ltd.</cite>
				</figcaption>
			</figure>
		</Section>
	);
};
export default Testimonials;
