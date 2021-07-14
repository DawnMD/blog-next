import Link from 'next/link';
const NoScrollLink = (props) => {
	return (
		<Link href={props.href} scroll={false} passHref>
			{props.children}
		</Link>
	);
};
export default NoScrollLink;
