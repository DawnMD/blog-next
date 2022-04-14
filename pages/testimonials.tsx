import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/shared/Layout';
import { Testimonial } from '../components/Testimonial';
import { TestimonialBlock, TestimonialContent } from '../types/graphcmsData';
import { graphcmsConnection } from '../utils/graphcmsConnection';

const title = 'Testimonials';
const description =
  'Some of the testimonials I got from the companies and people I worked with.';

type TestimonialProps = {
  testimonials: TestimonialContent[];
};

const Testimonials: NextPage<TestimonialProps> = ({ testimonials }) => {
  return (
    <Layout title={title} description={description}>
      <section className='flex flex-col max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
          Testimonials
        </h1>
        <p className='text-neutral-600 dark:text-neutral-400'>
          Sometimes people&apos;s opinion defines you better than your own.
        </p>
        <div className='flex flex-col gap-6'>
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial.testimonial}
              author={testimonial.testimonialAuthor[0]}
              position={testimonial.authorType}
              company={testimonial.company}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;

export const getStaticProps: GetStaticProps = async () => {
  const { testimonials } = await graphcmsConnection.request<TestimonialBlock>(`{
  testimonials {
    testimonialContents(orderBy: sequence_DESC) {
      id
      testimonial
      testimonialAuthor
      company
      authorType
    }
  }
}
`);

  return {
    props: {
      testimonials: testimonials[0].testimonialContents,
    },
  };
};
