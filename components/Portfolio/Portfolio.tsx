import About from './About';
import Hero from './Hero';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Timeline from './Timeline';
import Featured from './Featured';
import { Blog } from '../../types/blogType';

interface PortfolioProps {
  featured: { mostRecent: Blog; mostLiked: Blog };
}

const Portfolio = ({ featured }: PortfolioProps): JSX.Element => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Featured featured={featured} />
      <Testimonials />
    </>
  );
};
export default Portfolio;
