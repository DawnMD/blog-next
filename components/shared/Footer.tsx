export const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 px-8 py-4 text-sm'>
      <hr className='border-zinc-400 border-opacity-60' />
      <div className='flex items-center justify-between'>
        <p className='tracking-wide text-zinc-200'>
          Handcrafted by{' '}
          <span className='font-semibold tracking-wider text-white'>
            Mainak Das
          </span>
        </p>
        <ul className='flex flex-col gap-1 font-semibold text-zinc-400 md:flex-row md:gap-2'>
          <li>
            <a
              href='https://github.com/DawnMD'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-all hover:text-white'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://dev.to/dawnind'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-all hover:text-white'>
              Dev.to
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mainak1147/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-all hover:text-white'>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
