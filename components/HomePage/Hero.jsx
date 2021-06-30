import Image from 'next/image';
const Hero = (props) => {
	return (
		<>
			<section className='bg-gray-900 m-6 rounded-lg p-6 space-y-6 shadow-xl flex flex-col items-center md:space-y-10'>
				<div className='w-72 h-72 rounded-full overflow-hidden border-4 max-w-xs'>
					<Image
						src='/images/home/potrait.JPG'
						alt='An image showing Mainak'
						width={320}
						height={320}
						layout='responsive'
					/>
				</div>
				<h1 className='text-2xl font-semibold md:text-4xl md:font-bold'>
					Hi, I'm{' '}
					<span className='text-4xl font-bold text-transparent bg-gradient-to-r from-red-500 via--400 to bg-purple-500 bg-clip-text animate-gradient-x md:text-7xl'>
						Mainak Das
					</span>
				</h1>
				<p className='text-lg text-center font-medium md:text-2xl md:font-semibold'>
					Student, innovative javascript developer, eager to learn new
					technologies.
				</p>
			</section>
		</>
	);
};
export default Hero;
