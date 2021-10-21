import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface SVGCircleProps {
  color: string;
  score: number;
}

export default function SvgCircle({
  score,
  color,
}: SVGCircleProps): JSX.Element {
  const animation = useAnimation();
  const finalPathLength = score / 10;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 1,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        pathLength: finalPathLength,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({
        pathLength: 0,
      });
    }
  }, [inView, animation, finalPathLength]);

  return (
    <div>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 86.49 86.49'
        className='w-24 m-2 overflow-visible antialiased'
        ref={ref}>
        <motion.path
          className={`stroke-current text-gray-400`}
          fill='none'
          strokeWidth='5'
          d='M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43'
        />
        <motion.path
          className={`${color} stroke-current`}
          fill='none'
          strokeWidth='7.5'
          animate={animation}
          d='M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43'
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='.45rem'
          className='font-bold fill-current '>
          {`${score}/10`}
        </text>
      </motion.svg>
    </div>
  );
}
