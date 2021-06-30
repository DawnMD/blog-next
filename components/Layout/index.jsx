import Nav from '../shared/Nav';
import Footer from '../shared/Footer';

export default function Layout(props) {
	return (
		<>
			<Nav />
			<main>{props.children}</main>
			<Footer />
		</>
	);
}
