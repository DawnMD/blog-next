import Navbar from '../shared/Navbar';
// import Footer from '../Shared/Footer';

export default function Layout(props) {
	return (
		<>
			<Navbar />
			<>{props.children}</>
			{/* <Footer /> */}
		</>
	);
}
