import Section from '../shared/SectionHeading';
const data = [
	{
		company: 'Next Generation Technocom Private Ltd.',
		person: 'Subrata Mallick',
		designation: 'CEO & Founder',
		words:
			'During the period of his internship program with us he was found punctual, hardworking and inquisitive.',
	},
	{
		company: 'APlusTopper Pvt. Ltd.',
		person: 'Phani Ponapalli',
		designation: 'CEO & Founder',
		words:
			'During his internship period with us we found him a person who is reliable and able to ensure the assigned tasks are completed in a timely manner.',
	},
];
const Testimonials = (props) => {
	return (
		<Section title='Testimonials'>
			{data.map(({ company, person, designation, words }) => (
				<figure
					className='relative flex flex-col gap-2 px-6 py-3 lg:gap-4'
					key={person}>
					<blockquote className='font-serif italic before:absolute before:top-0 before:left-0 before:text-6xl before:content-quote'>
						<p className='pl-2 text-xl font-bold tracking-wide xl:text-2xl'>
							{words}
						</p>
					</blockquote>
					<figcaption>
						— {person},
						<cite>
							{' '}
							{designation}, {company}
						</cite>
					</figcaption>
				</figure>
			))}
		</Section>
	);
};
export default Testimonials;
