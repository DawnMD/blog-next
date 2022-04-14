import NextImage from 'next/image';
import { Role } from '../types/graphcmsData';

interface PortfolioProps {
  about: string;
  role: Role;
  displayPicture: { porfilePicture: { url: string }; pictureAlt: string };
}

export const Intro = ({
  about,
  role,
  displayPicture,
}: PortfolioProps): JSX.Element => {
  return (
    <section className='flex flex-col gap-2 md:flex-row-reverse md:items-center'>
      <div>
        <NextImage
          src={displayPicture.porfilePicture.url}
          className='rounded-full filter grayscale'
          alt={displayPicture.pictureAlt}
          height={256}
          width={256}
          priority
        />
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='mb-2 text-4xl font-bold tracking-tight md:text-5xl'>
            Mainak Das
          </h1>
          <h2>
            {role.roleIntro} At{' '}
            <a
              className='text-xl font-bold'
              style={{ color: role.comapnyColor.hex }}
              href={role.companyUrl}
              rel='noreferrer'
              target='_blank'>
              {role.comapnyName}
            </a>
          </h2>
        </div>
        <p className='text-neutral-600 dark:text-neutral-400'>{about}</p>
      </div>
    </section>
  );
};
