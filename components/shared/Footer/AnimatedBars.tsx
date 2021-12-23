const AnimatedBars = (): JSX.Element => {
  return (
    <div className='relative flex w-5 h-4 gap-[1px]'>
      <span className='w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave' />
      <span className='w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave animation-delay-2' />
      <span className='w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave animation-delay-3' />
      <span className='w-1 h-full origin-bottom bg-neutral-600 rounded-t-md dark:bg-neutral-400 animate-music-wave animation-delay-4' />
    </div>
  );
};

export default AnimatedBars;
