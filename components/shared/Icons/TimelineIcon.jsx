const TimelineIcon = () => {
	return (
		<div className='flex items-center pt-1'>
			<span className='sr-only'>Check</span>
			<svg
				className='w-4 h-4 text-green-700 dark:text-green-300'
				viewBox='0 0 24 24'>
				<g
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'>
					<path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
					<path d='M22 4L12 14.01l-3-3' />
				</g>
			</svg>
		</div>
	);
};
export default TimelineIcon;
