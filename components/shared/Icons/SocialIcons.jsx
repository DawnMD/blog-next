import { FaDev, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const links = [
	{
		Icon: FaDev,
		href: 'https://dev.to/dawnind',
		description: 'Dev.to Social',
	},
	{
		Icon: FaGithub,
		href: 'https://github.com/DawnMD',
		description: 'Github Social',
	},
	{
		Icon: FaLinkedinIn,
		href: 'https://www.linkedin.com/in/mainak1147',
		description: 'LinkedIn Social',
	},
];

const SocialIcons = () => (
	<div className='flex justify-center mx-auto text-2xl text-gray-500 dark:text-gray-300'>
		{links.map(({ Icon, href, description }, i) => (
			<a
				key={href}
				href={href}
				target='_blank'
				rel='noopener noreferrer nofollow'
				className={`hover:text-gray-900 dark:hover:text-gray-50 ${
					i < links.length - 1 ? 'mr-3' : ''
				}`}>
				<span className='sr-only'>{description}</span>
				<Icon />
			</a>
		))}
	</div>
);

export default SocialIcons;
