import Section from '../shared/SectionHeading/SectionHeading';
import { testimonialData } from '../../data/testimonialData';

const Testimonials = (): JSX.Element => {
  return (
    <Section title='Testimonials'>
      {testimonialData.map(({ company, person, designation, words }) => (
        <figure
          className='relative flex flex-col gap-2 px-6 py-3 lg:gap-4'
          key={person}>
          <blockquote className='font-serif italic before:absolute before:top-0 before:-left-1 before:text-6xl before:content-quote'>
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
