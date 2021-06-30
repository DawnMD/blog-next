import Nav from '../shared/Nav';

export function Layout(props) {
	return (
		<>
			<Nav />
			<main>{props.children}</main>
			{/* //TODOFooter */}
		</>
	);
}
