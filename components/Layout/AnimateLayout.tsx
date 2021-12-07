import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const AnimateLayout = ({
  title,
  description,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'keyframes' }}
        className='flex flex-col h-screen gap-4 px-8 '>
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
      </motion.main>
    </>
  );
};
export default AnimateLayout;
