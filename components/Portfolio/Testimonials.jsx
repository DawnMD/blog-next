import Section from '../shared/SectionHeading';
const Testimonials = (props) => {
	return (
		<Section title='Testimonials'>
			<figure className='flex flex-col gap-4 px-6 py-3'>
				<blockquote className=''>
					<p className='text-2xl font-bold tracking-wide'>
						During the period of his internship program with us he was found
						punctual, hardworking and inquisitive.
					</p>
				</blockquote>
				<figcaption>
					—Subrata Mallick,
					<cite> CEO & Founder, Next Generation Technocom Private Ltd.</cite>
				</figcaption>
			</figure>
		</Section>
	);
};
export default Testimonials;
