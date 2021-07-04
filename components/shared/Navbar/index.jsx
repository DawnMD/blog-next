import Link from 'next/link';
import { useEffect, useState } from 'react';
// import Mode from '../icons/Mode';
import MenuIcon from '../icons/MenuIcon';
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
			<header className='sticky top-0 left-0 z-10 flex items-center justify-between w-full p-4 text-lg font-medium bg-gray-900 shadow-xl bg-opacity-95 md:text-xl'>
				<span className='text-2xl font-bold text-transparent bg-purple-500 bg-gradient-to-r from-red-500 bg-clip-text animate-gradient-x md:text-3xl '>
					<Link href='/'>
						<a onClick={onLinkClick}>MD</a>
					</Link>
				</span>
				<nav className='flex md:space-x-4'>
					<ul className='items-center invisible hidden space-x-4 md:flex md:visible'>
						<li>
							<Link href='/blogs'>Blogs</Link>
						</li>
						<li className='px-2 py-1 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:shadow-inner hover:bg-gray-600 hover:text-indigo-200'>
							<Link href='/contact'>Contact Me</Link>
						</li>
					</ul>
					{/* <Mode /> */}
					<div className=' md:hidden md:invisible'>
						<MenuIcon onClick={toggleMobileNav} navStatus={mobileNav} />
					</div>
				</nav>
			</header>
			{mobileNav && (
				<nav className='fixed z-10 w-full px-4 pb-4 text-xl font-medium tracking-wide bg-gray-900 shadow-md md:hidden md:invisible bg-opacity-95'>
					<ul className='flex flex-col justify-center space-y-2'>
						<li>
							<Link href='/blogs'>
								<a onClick={onLinkClick}>Blogs</a>
							</Link>
						</li>
						<li className=''>
							<Link href='/contact'>
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
