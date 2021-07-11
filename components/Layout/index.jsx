import Navbar from '../Shared/Navbar';
// import Footer from '../Shared/Footer';

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
