import {
  DashboardIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import Link from 'next/link';

import ProfilePicture from '@/public/images/portfolio_main.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      <div className='flex justify-center lg:col-span-1 lg:col-start-2'>
        <Image
          src={ProfilePicture}
          alt='Mainak Das'
          className='object-cover object-bottom max-w-xs shadow-xl rounded-xl lg:max-w-sm max-h-80 lg:max-h-96'
        />
      </div>
      <div className='flex flex-col gap-6 mt-8 lg:px-8 lg:col-start-1 lg:row-start-1'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-calSans text-brand'>Mainak Das</h1>
          <h2 className='text-3xl font-semibold text-zinc-200'>
            Web Developer, Blogger
          </h2>
        </div>
        <div className='flex flex-col gap-2'>
          <p>
            Building Beautiful Web Experiences At <span>Codemancers</span>
          </p>
          <p>
            Solved and created tutorials to educate and help others use various
            technologies for the first time or in a more efficient manner.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-6 lg:col-span-1 lg:row-start-2 lg:px-8 lg:mb-8'>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/DawnMD'
          className='flex items-center justify-between gap-2 border rounded-xl p-4 border-zinc-600/40 hover:text-zinc-100 transition-all'>
          <span className='flex items-center gap-2'>
            <GitHubLogoIcon className='w-4 h-4 lg:h-6 lg:w-6' />
            <span>Github</span>
          </span>
          <ExternalLinkIcon className='w-4 h-4' />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/mainak1147/'
          className='flex items-center justify-between gap-2 border rounded-xl p-4 border-zinc-600/40 hover:text-zinc-100 transition-all'>
          <span className='flex items-center gap-2'>
            <LinkedInLogoIcon className='w-4 h-4 lg:h-6 lg:w-6' />
            <span>LinkedIn</span>
          </span>
          <ExternalLinkIcon className='w-4 h-4' />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/mainak_ds'
          className='flex items-center justify-between gap-2 border rounded-xl p-4 border-zinc-600/40 hover:text-zinc-100 transition-all'>
          <span className='flex items-center gap-2'>
            <TwitterLogoIcon className='w-4 h-4 lg:h-6 lg:w-6' />
            <span>Twitter</span>
          </span>
          <ExternalLinkIcon className='w-4 h-4' />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:mainakdas104@gmail.com'
          className='flex items-center justify-between gap-2 border rounded-xl p-4 border-zinc-600/40 hover:text-zinc-100 transition-all'>
          <span className='flex items-center gap-2'>
            <EnvelopeClosedIcon className='w-4 h-4 lg:h-6 lg:w-6' />
            <span>Mail</span>
          </span>
          <ExternalLinkIcon className='w-4 h-4' />
        </Link>
      </div>
      <div className='flex flex-col gap-4 lg:self-start'>
        <div className='flex flex-col gap-4 p-4 text-sm border rounded-xl border-zinc-600/40 lg:mx-16'>
          <div className='flex items-center gap-2'>
            <DashboardIcon className='w-8 h-8 text-brand' />
            <h4 className='text-lg text-zinc-50 font-calSans'>Work</h4>
          </div>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col gap-1'>
              <span className='text-zinc-50 font-calSans max-w-[150px]'>
                Codemancers
              </span>
              <span className='text-xs'>Frontend Developer</span>
            </p>
            <p className='text-sm text-zinc-500'>2022 - Present</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col gap-1'>
              <span className='text-zinc-50 font-calSans max-w-[150px]'>
                Codemancers
              </span>
              <span className='text-xs'>Frontend Developer Intern</span>
            </p>
            <p className='text-sm text-zinc-500'>2021 - 2021</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col gap-1'>
              <span className='text-zinc-50 font-calSans max-w-[150px]'>
                CXDeployer
              </span>
              <span className='text-xs'>Fullstack Developer Intern</span>
            </p>
            <p className='text-sm text-zinc-500'>2021 - 2021</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col gap-1'>
              <span className='text-zinc-50 font-calSans max-w-[150px]'>
                APlus Topper
              </span>
              <span className='text-xs'>Frontend Developer Intern</span>
            </p>
            <p className='text-sm text-zinc-500'>2021 - 2021</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col gap-1'>
              <span className='text-zinc-50 font-calSans max-w-[150px]'>
                Next Generation Technocom Pvt. Ltd.
              </span>
              <span className='text-xs'>Application Developer Intern</span>
            </p>
            <p className='text-sm text-zinc-500'>2020 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
