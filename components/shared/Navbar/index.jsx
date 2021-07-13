import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitch from '../Icons/ThemeSwitch';
const Nav = (props) => {
	const [mobileNav, setMobileNav] = useState(false);
	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};
	const onLinkClick = () => {
		if (mobileNav) {
			setMobileNav(false);
		}
		return;
	};
	return (
		<>
			<header className='sticky top-0 left-0 z-10 flex items-center justify-between w-full p-4 text-lg font-medium bg-gray-100 shadow-xl bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-md md:text-xl dark:bg-gray-900'>
				<span className='text-2xl font-bold text-transparent bg-purple-500 bg-gradient-to-r from-red-500 bg-clip-text animate-gradient-x md:text-3xl '>
					<Link href='/' scroll={false}>
						<a onClick={onLinkClick}>MD.</a>
					</Link>
				</span>
				<nav className='flex items-center md:gap-4'>
					<ul className='items-center invisible hidden space-x-4 md:flex md:visible'>
						<li>
							<Link href='/blogs' scroll={false}>
								Blogs
							</Link>
						</li>
						<li className='px-3 py-2 font-bold tracking-wide text-transparent bg-purple-500 cursor-pointer group bg-gradient-to-r from-red-500 bg-clip-text hover:animate-gradient-x'>
							<Link href='/contact' scroll={false}>
								Contact Me
							</Link>
						</li>
					</ul>
					<ThemeSwitch />
					<button
						className='relative w-10 h-10 focus:outline-none md:invisible md:hidden'
						onClick={toggleMobileNav}>
						<span className='sr-only'>
							Open navbar menu on mobile screen button
						</span>
						<div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
							<span
								aria-hidden='true'
								className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
									mobileNav && 'rotate-45'
								} ${!mobileNav && '-translate-y-1.5'}`}></span>
							<span
								aria-hidden='true'
								className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
									mobileNav && 'opacity-0'
								}`}></span>
							<span
								aria-hidden='true'
								className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${
									mobileNav && '-rotate-45'
								} ${!mobileNav && 'translate-y-1.5'}`}></span>
						</div>
					</button>
				</nav>
			</header>
			{mobileNav && (
				<nav className='fixed z-10 w-full px-4 pb-4 text-xl font-medium tracking-wide bg-gray-100 shadow-md dark:bg-gray-900 md:hidden md:invisible bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-md'>
					<ul className='flex flex-col justify-center space-y-2'>
						<li>
							<Link href='/blogs' scroll={false}>
								<a onClick={onLinkClick}>Blogs</a>
							</Link>
						</li>
						<li className='font-bold tracking-wide'>
							<Link href='/contact' scroll={false}>
								<a onClick={onLinkClick}>Contact Me</a>
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};
export default Nav;
