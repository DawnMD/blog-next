import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function SvgCircle(props) {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		delay: 1,
	});
	useEffect(() => {
		if (inView) {
			animation.start({
				pathLength: props.score / 100,
				transition: {
					duration: 1,
					ease: 'easeIn',
				},
			});
		}
		if (!inView) {
			animation.start({
				pathLength: 0,
			});
		}
	}, [inView]);
	return (
		<div>
			<motion.svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 86.49 86.49'
				className='w-24 m-2 overflow-visible antialiased'
				ref={ref}>
				<motion.path
					stroke='#C1c1c1'
					fill='none'
					strokeWidth='5'
					d='M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43'
					fill='none'
				/>
				<motion.path
					stroke='#301240'
					fill='none'
					strokeWidth='7.5'
					animate={animation}
					d='M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43'
					fill='none'
				/>
				<text
					x='50%'
					y='50%'
					textAnchor='middle'
					fill='white'
					dy='.3rem'
					className='font-medium'>
					{`${props.score} %`}
				</text>
			</motion.svg>
		</div>
	);
}
