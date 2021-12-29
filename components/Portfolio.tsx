import NextImage from 'next/image';
import { CurrentRole } from '../types/cmsTypes';

interface PortfolioProps {
  about: string;
  role: CurrentRole;
}

const Portfolio = ({ about, role }: PortfolioProps): JSX.Element => {
  return (
    <section className='flex flex-col gap-2 md:flex-row-reverse md:items-center'>
      <div>
        <NextImage
          src='/images/home/potrait.JPG'
          className='rounded-full filter grayscale'
          alt='Mainak Das'
          height={256}
          width={256}
          priority
          loading='eager'
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

export default Portfolio;
