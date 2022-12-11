'use client';

import { spotifyNowPlayingFetcher } from 'endpoints/spotifyEndpoints';
import NextLink from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useSWR from 'swr';
import { SpotifyAnimatedBars } from './SpotifyAnimatedBars';

export const Footer = () => {
  const pathname = useSelectedLayoutSegment();
  const { data: nowPlaying } = useSWR('/now-playing', spotifyNowPlayingFetcher);

  return (
    <footer className='flex flex-col gap-8 px-4 py-8 text-center border-t border-zinc-700'>
      {pathname !== null && (
        <div className='flex items-center justify-between px-4'>
          <div className='flex items-center gap-2'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              className='w-4 h-4'
              xmlns='http://www.w3.org/2000/svg'>
              <title>Spotify</title>
              <path
                fill='currentColor'
                d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z'
              />
            </svg>
            <div>
              {!nowPlaying?.isPlaying ? (
                <p>Not Playing</p>
              ) : (
                <div className='text-left'>
                  <p className='text-sm font-semibold font-heading text-zinc-50'>
                    {nowPlaying?.title}
                  </p>
                  <p className='text-xs'>{nowPlaying.artist}</p>
                </div>
              )}
            </div>
          </div>
          {nowPlaying?.isPlaying && <SpotifyAnimatedBars />}
        </div>
      )}
      <p className='text-xs font-light'>
        Handcrafted with love by{' '}
        <NextLink
          href='http://'
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold transition-all hover:text-zinc-50'>
          Mainak Das
        </NextLink>
      </p>
    </footer>
  );
};
