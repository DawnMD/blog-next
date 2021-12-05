import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { spotifyTopTrackFetcher } from '../apis/spotify';
import AnimateLayout from '../components/Layout/AnimateLayout';
import { SpotifyTopTrack } from '../types/spotify';
import SongItem from '../components/SongItem';
import LoadingIcon from '../components/shared/Icons/LoadingIcon';

const title = 'My spotify top tracks';
const description = 'Songs I listen whole day or while I am coding';

const TopTracks = (): JSX.Element => {
  const { data: tracks, error } = useSWR<SpotifyTopTrack[]>(
    '/top-tracks',
    spotifyTopTrackFetcher
  );

  const renderTracksUI = () => {
    if (error) {
      return (
        <h2 className='flex gap-2 text-lg font-medium md:text-xl'>
          Something went wrong. Please try after sometime.
        </h2>
      );
    }

    if (!error && !tracks) {
      return (
        <h2 className='flex gap-2 text-lg font-medium md:text-xl animate-pulse'>
          Loading <LoadingIcon />
        </h2>
      );
    }

    if (tracks) {
      return (
        <div className='flex flex-col gap-6 mt-2'>
          {tracks?.map((track) => (
            <SongItem
              key={track.id}
              songTitle={track.name}
              songUrl={track.songUrl}
              albumTitle={track.album.name}
              albumImage={{
                url: track.album.image.url,
                height: track.album.image.height,
                width: track.album.image.width,
              }}
              artists={track.artist}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <AnimateLayout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <section className='flex flex-col max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
          Spotify Top Tracks
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Developers often have to deal with arduous, repetitive problems such
          as testing, that can be tedious or boring. Music can help to keep the
          brain alert and prevent it from switching off.
        </p>
        {renderTracksUI()}
      </section>
    </AnimateLayout>
  );
};

export default TopTracks;
