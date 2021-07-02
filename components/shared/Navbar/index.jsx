import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
const Nav = (props) => {
	const [mobileNav, setMobileNav] = useState(false);
	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};
	// useEffect(() => {
	// 	window.addEventListener('orientationchange', () => {
	// 		setMobileNav(false);
	// 	});
	// }, []);
	return (
		<>
			<header className='sticky top-0 left-0 z-10 w-full p-4 text-lg font-medium bg-gray-900 bg-opacity-95 shadow-xl flex justify-between items-center md:text-xl'>
				<span className='text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 via--400 to bg-purple-500 bg-clip-text animate-gradient-x md:text-3xl '>
					<Link href='/'>MD</Link>
				</span>
				<nav className='hidden invisible md:flex md:visible md:space-x-4'>
					<ul className='flex space-x-4 items-center'>
						<li>
							<Link href='/blogs'>Blogs</Link>
						</li>
						<li className='bg-gray-800 shadow-lg rounded-lg px-2 py-1 hover:shadow-inner hover:bg-gray-600 hover:text-indigo-200 cursor-pointer'>
							<Link href='/contact'>Contact Me</Link>
						</li>
					</ul>
				</nav>
				<div className='md:hidden md:invisible'>
					<MenuIcon onClick={toggleMobileNav} navStatus={mobileNav} />
				</div>
			</header>
			{mobileNav && (
				<nav className='fixed z-10 w-full px-4 pb-4 bg-opacity-95 bg-gray-900 text-xl font-medium tracking-wide shadow-md'>
					<ul className='flex flex-col space-y-2 justify-center'>
						<li>
							<Link href='/blogs'>Blogs</Link>
						</li>
						<li className=''>
							<Link href='/contact'>Contact Me</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};
export default Nav;
