import { motion } from 'framer-motion';
const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
};
const AnimateHOC = (props) => {
	return (
		<>
			<motion.main
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={variants}
				transition={{ type: 'linear' }}
				className='flex flex-col w-full h-full p-8 gap-14 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96'>
				{props.children}
			</motion.main>
		</>
	);
};
export default AnimateHOC;
