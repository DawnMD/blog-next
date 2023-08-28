export default function TestimonialsPage() {
  return (
    <div className='relative px-4 sm:px-8 lg:px-12 mb-12'>
      <div className='mx-auto max-w-2xl lg:max-w-5xl'>
        <header className='max-w-2xl'>
          <h4 className='text-6xl font-calSans text-brand'>Testimonials</h4>
          <p className='mt-6 text-base text-zinc-400'>
            Sometimes people&apos;s opinion defines you better than your own.
          </p>
        </header>
        <div className='mt-16 sm:mt-20'>
          <div>
            <div className='flex max-w-3xl flex-col space-y-16'>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold md:text-2xl text-zinc-100'>
                  During his internship period with us we found him a person who
                  is reliable and able to ensure the assigned tasks are
                  completed in a timely manner.
                </p>
                <p className='text-sm font-semibold md:text-lg'>
                  - <span className='text-zinc-100'>Phani Ponapalli</span>{' '}
                  <span className='text-brand'>/</span>{' '}
                  <span>CEO & Founder, APlusTopper Pvt. Ltd.</span>
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold md:text-2xl text-zinc-100'>
                  During the period of his internship program with us he was
                  found punctual, hardworking and inquisitive.
                </p>
                <p className='text-sm font-semibold md:text-lg'>
                  - <span className='text-zinc-100'>Subrata Mallick</span>{' '}
                  <span className='text-brand'>/</span>{' '}
                  <span>
                    CEO & Founder, Next Generation Technocom Private Ltd.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
