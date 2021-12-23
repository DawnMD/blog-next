import NextImage from 'next/image';

const Portfolio = (): JSX.Element => {
  return (
    <section className='flex flex-col gap-2 md:flex-row-reverse md:items-center'>
      <div>
        <NextImage
          src='/images/home/potrait.JPG'
          className='rounded-full filter grayscale'
          alt='Mainak Das'
          height={256}
          width={256}
          priority
          loading='eager'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='mb-2 text-4xl font-bold tracking-tight md:text-5xl'>
            Mainak Das
          </h1>
          <h2>
            Building Beautiful Web Experiences At{' '}
            <a
              className='text-xl font-bold text-codemancers'
              href='https://codemancers.com'
              rel='noreferrer'
              target='_blank'>
              Codemancers
            </a>
          </h2>
        </div>
        <p className='text-neutral-600 dark:text-neutral-400'>
          Solved and created tutorials to educate and help others use various
          technologies for the first time or in a more efficient manner.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
