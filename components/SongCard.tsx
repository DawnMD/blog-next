import NextImage from 'next/image';
import NextLink from 'next/link';

interface SongItemProps {
  songTitle: string;
  albumTitle: string;
  songUrl: string;
  albumImage: { height: number; width: number; url: string };
  artists: string;
}

export const SongItem = ({
  albumImage,
  albumTitle,
  songTitle,
  artists,
  songUrl,
}: SongItemProps): JSX.Element => {
  return (
    <NextLink href={songUrl}>
      <a className='grid grid-cols-2 gap-4 md:flex'>
        <div className='md:w-36 md:h-36'>
          <NextImage
            className='rounded'
            width={albumImage.width}
            height={albumImage.height}
            src={albumImage.url}
            loading='lazy'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex flex-col'>
            <h4 className='text-lg font-medium md:text-xl'>{songTitle}</h4>
            <small className='text-neutral-600 dark:text-neutral-400'>
              {albumTitle}
            </small>
          </div>
          <p className='text-sm'>{artists}</p>
        </div>
      </a>
    </NextLink>
  );
};
