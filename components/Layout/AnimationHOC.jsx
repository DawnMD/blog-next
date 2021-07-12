import { motion } from 'framer-motion';
const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
};
const AnimateHOC = (props) => {
	return (
		<>
			<motion.main
				initial='hidden'
				animate='enter'
				variants={variants}
				transition={{ ease: 'easeIn', duration: 0.2 }}
				className='m-4 space-y-4 md:m-6 md:space-y-6'>
				{props.children}
			</motion.main>
		</>
	);
};
export default AnimateHOC;
