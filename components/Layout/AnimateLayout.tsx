import { motion } from 'framer-motion';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

interface LayoutProps {
  children: JSX.Element[];
}

const AnimateLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'keyframes' }}
        className='flex flex-col h-screen gap-4 px-8 '>
        <Navbar />
        <div className='flex-1 max-w-2xl mx-auto'>{children}</div>
        <Footer />
      </motion.main>
    </>
  );
};
export default AnimateLayout;
