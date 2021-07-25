import About from './About';
import Hero from './Hero';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Timeline from './Timeline';
import Featured from './Featured';
const Portfolio = (props) => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Timeline />
			<Featured featured={props.featured} />
			<Testimonials />
		</>
	);
};
export default Portfolio;
