import Navbar from '../shared/Navbar';

export default function Layout(props) {
	return (
		<>
			<Navbar />
			<>{props.children}</>
		</>
	);
}
