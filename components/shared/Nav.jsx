import Link from 'next/link';
import MenuIcon from './icons/MenuIcon';
const Nav = (props) => {
	return (
		<header className='w-full p-4 text-lg font-medium bg-gray-900 shadow-xl flex justify-between items-center'>
			<span className='text-2xl font-bold text-transparent bg-gradient-to-r from-red-500 via--400 to bg-purple-500 bg-clip-text'>
				<Link href='/'>MD</Link>
			</span>
			<nav className='flex space-x-4'>
				<ul className='flex space-x-4 items-center'>
					{/* <li>
						<Link href='/portfolio'>Portfolio</Link>
					</li> */}
					<li>
						<Link href='/blogs'>Blogs</Link>
					</li>
					<li className='bg-gray-800 shadow-lg rounded-lg px-2 py-1 hover:shadow-inner hover:bg-gray-600 hover:text-indigo-200 cursor-pointer'>
						<Link href='/contact'>Contact Me</Link>
					</li>
					{/* <li>// TODO Light/Dark Mode</li> */}
				</ul>
				{/* <span className='border p-1 rounded-md cursor-pointer'>
					<MenuIcon />
				</span> */}
			</nav>
		</header>
	);
};
export default Nav;
