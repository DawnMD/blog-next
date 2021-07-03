import Image from 'next/image';
const Hero = (props) => {
	return (
		<>
			<section className='flex flex-col items-center p-4 space-y-4 bg-gray-900 rounded-lg shadow-xl md:space-y-8'>
				<div className='max-w-xs overflow-hidden border-4 rounded-full w-72 h-72'>
					<Image
						src='/images/home/potrait.JPG'
						alt='An image showing Mainak'
						width={280}
						height={280}
						layout='responsive'
					/>
				</div>
				<h1 className='text-2xl font-semibold tracking-wide md:text-4xl md:font-bold'>
					<span>Hi, I&apos;m</span>
					<span className='text-4xl font-bold text-transparent bg-purple-500 bg-gradient-to-r from-red-500 bg-clip-text animate-gradient-x md:text-7xl'>
						Mainak Das
					</span>
				</h1>
				<p className='max-w-4xl text-lg font-medium tracking-wide text-center md:text-2xl md:font-semibold'>
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
