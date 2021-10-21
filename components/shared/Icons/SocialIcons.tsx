import { linkData } from '../../../data/linkData';

const SocialIcons = (): JSX.Element => (
  <div className='flex justify-center mx-auto text-2xl text-gray-500 dark:text-gray-300'>
    {linkData.map(({ Icon, href, description }, i) => (
      <a
        key={href}
        href={href}
        target='_blank'
        rel='noopener noreferrer nofollow'
        className={`hover:text-gray-900 dark:hover:text-gray-50 ${
          i < linkData.length - 1 ? 'mr-3' : ''
        }`}>
        <span className='sr-only'>{description}</span>
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialIcons;
