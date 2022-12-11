export const SpotifyAnimatedBars = () => {
  return (
    <div className='flex w-5 h-4 gap-[1px]'>
      <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave'></div>
      <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave animation-delay-2' />
      <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave animation-delay-3' />
      <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave animation-delay-4' />
    </div>
  );
};
