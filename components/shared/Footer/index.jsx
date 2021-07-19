import SocialIcons from '../Icons/SocialIcons';
const Footer = () => {
	return (
		<footer className='flex flex-col items-center w-full gap-2 pb-6'>
			<div className='my-3'>
				<SocialIcons />
			</div>
			<div className='text-sm text-gray-500 dark:text-gray-300'>
				Say hello at{' '}
				<a
					href='mailto:mainakdas104@gmail.com?subject=Hello'
					className='font-semibold tracking-wider hover:text-gray-900 dark:hover:text-gray-50'>
					mainakdas104@gmail.com
				</a>
			</div>
			<div className='flex flex-col items-center text-sm text-gray-500 dark:text-gray-300'>
				<p>
					Made with ❤️ by <span className='font-bold'>Mainak Das</span>
				</p>
				<p>
					Powered by{' '}
					<a
						href='https://docs.forem.com/api/'
						className='font-semibold hover:text-gray-900 dark:hover:text-gray-50'>
						Dev.to API
					</a>
				</p>
			</div>
		</footer>
	);
};
export default Footer;
