import NextImage from 'next/image';

export default function Home() {
  return (
    <div className='grid grid-flow-row grid-rows-6 gap-4'>
      <div className='relative row-span-3 overflow-hidden rounded-md shadow-md'>
        <NextImage
          className='absolute inset-0 object-cover bg-blend-darken grayscale'
          src='/images/mainak.JPG'
          fill
          alt='Mainak Das'
        />
        <div className='relative flex flex-col justify-end h-full gap-2 p-4 bg-gradient-to-b from-transparent via-zinc-800/60 to-zinc-900'>
          <h1 className='text-3xl font-bold tracking-wider text-white'>
            Mainak Das
          </h1>
          <p className='text-lg'>
            Building Beautiful Web Experiences at{' '}
            <span className='text-xl font-semibold text-white'>
              Codemancers
            </span>
          </p>
        </div>
      </div>
      <p className='p-4 text-lg rounded-md shadow-md bg-zinc-900'>
        Solved and created tutorials to educate and help others use various
        technologies for the first time or in a more efficient manner.
      </p>
      <div className='p-4 rounded-md shadow-md bg-zinc-900'>
        <h3>Hobbies</h3>
        <ul className='list-disc list-inside'>
          <li>Coding</li>
          <li>Travel</li>
          <li>Photography</li>
        </ul>
      </div>
    </div>
  );
}
