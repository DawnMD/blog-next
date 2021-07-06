import Navbar from '../shared/Navbar';
// import Footer from '../shared/Footer';

export default function Layout(props) {
	return (
		<>
			<Navbar />
			<main className='m-4 space-y-4 md:m-6 md:space-y-6'>
				{props.children}
			</main>
			{/* <Footer /> */}
		</>
	);
}
