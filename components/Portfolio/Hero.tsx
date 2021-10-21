import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import SocialIcons from '../shared/Icons/SocialIcons';

const Hero = (): JSX.Element => {
  return (
    <>
      <section className='flex flex-col items-center justify-center min-h-screen gap-6 -mt-16 md:justify-evenly md:flex-row'>
        <div className='flex items-center justify-center border-2 border-gray-800 rounded-full dark:border-gray-50'>
          <Image
            src='/images/home/potrait.JPG'
            width={350}
            height={350}
            className='rounded-full'
            alt='Mainak Das'
            priority
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2 text-center w-80'>
            <h1 className='text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl md:font-bold'>
              <span>Hello, I am</span>{' '}
              <br className='invisible hidden md:visible md:block' />
              <span className='text-transparent bg-purple-500 bg-gradient-to-r from-red-500 bg-clip-text animate-gradient-x'>
                Mainak
              </span>
            </h1>
            <h2 className='w-full text-2xl'>
              I&apos;m a{' '}
              <span className='text-3xl font-medium'>
                <Typewriter
                  words={['Frontend', 'Javascript', 'React']}
                  loop={false}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>{' '}
              <br className='invisible hidden md:visible md:block xl:hidden xl:invisible' />
              developer.
            </h2>
          </div>
          <div>
            <SocialIcons />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;