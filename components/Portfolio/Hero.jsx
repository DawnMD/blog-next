import Typist from 'react-text-typist';
import SvgHero from '../shared/Svg/SvgHero';
const Hero = (props) => {
	return (
		<>
			<section className='flex flex-col items-center min-h-screen gap-6 -mt-16 justify-evenly md:flex-row'>
				<div className=''>
					<SvgHero />
				</div>
				<div className='flex flex-col gap-2 text-center w-80'>
					<h1 className='text-3xl font-semibold tracking-wide md:text-4xl lg:text-5xl md:font-bold'>
						<span>This is</span>{' '}
						<br className='invisible hidden md:visible md:block' />
						<span className='text-transparent bg-purple-500 bg-gradient-to-r from-red-500 bg-clip-text animate-gradient-x'>
							Mainak Das
						</span>
					</h1>
					<h2 className='w-full text-2xl'>
						I am a{' '}
						<Typist
							className='text-3xl font-semibold'
							sentences={['Frontend', 'Javascript', 'React']}
							cursorSmooth={true}
						/>{' '}
						developer
					</h2>
				</div>
			</section>
		</>
	);
};
export default Hero;
