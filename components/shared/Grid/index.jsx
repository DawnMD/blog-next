import GridItem from '../GridItem';
const Grid = (props) => {
	return (
		<ul className='flex flex-col gap-6 items-center'>
			{props.posts.map((post, postIdx) => (
				<GridItem key={postIdx} post={post} />
			))}
		</ul>
	);
};
export default Grid;
