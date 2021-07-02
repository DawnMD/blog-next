import Image from 'next/image';
const Hero = (props) => {
	return (
		<>
			<section className='bg-gray-900 rounded-lg p-4 space-y-4 shadow-xl flex flex-col items-center md:space-y-8'>
				<div className='w-72 h-72 rounded-full overflow-hidden border-4 max-w-xs'>
					<Image
						src='/images/home/potrait.JPG'
						alt='An image showing Mainak'
						width={280}
						height={280}
						layout='responsive'
					/>
				</div>
				<h1 className='text-2xl font-semibold md:text-4xl md:font-bold tracking-wide'>
					<span>Hi, I&apos;m</span>
					<span className='text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 via--400 to bg-purple-500 bg-clip-text animate-gradient-x md:text-7xl'>
						Mainak Das
					</span>
				</h1>
				<p className='tracking-wide max-w-4xl text-lg text-center font-medium md:text-2xl md:font-semibold'>
					Computer Engineering student with experience in JavaScript, Python and
					full stack web development. Knowledgeable in range of other
					development languages and methodologies. Bright critical thinker with
					talent for learning quickly in results-oriented environment.
				</p>
			</section>
		</>
	);
};
export default Hero;
