import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

export default function Layout(props) {
	return (
		<>
			<Navbar />
			<main>{props.children}</main>
			<Footer />
		</>
	);
}
