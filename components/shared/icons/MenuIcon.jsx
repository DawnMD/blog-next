export function MenuIcon({ onClick, navStatus }) {
	return (
		<>
			<button
				className='relative w-10 h-10 focus:outline-none'
				onClick={onClick}>
				{/* <span className='sr-only'>navStatus main menu</span> */}
				<div className='absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
					<span
						aria-hidden='true'
						className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
							navStatus && 'rotate-45'
						} ${!navStatus && '-translate-y-1.5'}`}></span>
					<span
						aria-hidden='true'
						className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
							navStatus && 'opacity-0'
						}`}></span>
					<span
						aria-hidden='true'
						className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${
							navStatus && '-rotate-45'
						} ${!navStatus && 'translate-y-1.5'}`}></span>
				</div>
			</button>
		</>
	);
}

export default MenuIcon;
