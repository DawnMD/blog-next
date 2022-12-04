'use client';
import { spotifyNowPlayingFetcher } from 'endpoints/spotifyEndpoints';
import useSWR from 'swr';
import NextImage from 'next/image';
import NextLink from 'next/link';

export const SpotifyNowPlaying = () => {
  const { data: nowPlaying } = useSWR('/now-playing', spotifyNowPlayingFetcher);
  return (
    <div className='flex flex-col gap-4 p-4 text-sm border rounded-xl border-spotify sm:mx-8 lg:mx-16'>
      <div className='flex items-center gap-2'>
        <svg
          role='img'
          viewBox='0 0 24 24'
          className='w-4 h-4 text-spotify'
          xmlns='http://www.w3.org/2000/svg'>
          <title>Spotify</title>
          <path
            fill='currentColor'
            d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z'
          />
        </svg>
        <div className='flex items-center justify-between w-full'>
          <h6 className='text-lg font-semibold text-zinc-50 font-heading'>
            Spotify
          </h6>
          {nowPlaying?.isPlaying && (
            <div className='flex w-5 h-4 gap-[1px]'>
              <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave'></div>
              <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave animation-delay-2' />
              <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave animation-delay-3' />
              <div className='w-1 h-full origin-bottom bg-zinc-400 rounded-t-md animate-music-wave animation-delay-4' />
            </div>
          )}
        </div>
      </div>
      {nowPlaying?.isPlaying ? (
        <NextLink
          href={nowPlaying.songUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='flex gap-4'>
          <NextImage
            alt={nowPlaying.title}
            src={nowPlaying.albumImageUrl.url}
            height={nowPlaying.albumImageUrl.height}
            width={nowPlaying.albumImageUrl.width}
            className='w-24 h-24 rounded-md shadow'
          />
          <div>
            <h6 className='text-lg font-semibold font-heading text-zinc-50 line-clamp-2'>
              {nowPlaying.title}
            </h6>
            <p className='text-xs line-clamp-1'>{nowPlaying.album}</p>
            <p className='text-sm line-clamp-1 text-zinc-200'>
              {nowPlaying.artist}
            </p>
          </div>
        </NextLink>
      ) : (
        <p className='font-semibold font-heading'>Not Playing</p>
      )}
    </div>
  );
};
