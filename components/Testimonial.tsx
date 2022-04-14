interface TestimonialProps {
  testimonial: string;
  author: string;
  position: string;
  company: string;
}

export const Testimonial = ({
  testimonial,
  author,
  position,
  company,
}: TestimonialProps): JSX.Element => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-lg font-bold md:text-2xl'>{testimonial}</p>
      <p className='text-sm font-medium md:text-lg'>
        - <span className='font-semibold'> {author}</span>{' '}
        <span className='font-black text-red-500 dark:text-yellow-500'>/</span>{' '}
        <span className='text-neutral-600 dark:text-neutral-400'>
          {position}, {company}
        </span>
      </p>
    </div>
  );
};
