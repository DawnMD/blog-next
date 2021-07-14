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
				className='flex flex-col gap-4 m-4 md:m-6 md:gap-6'>
				{props.children}
			</motion.main>
		</>
	);
};
export default AnimateHOC;
