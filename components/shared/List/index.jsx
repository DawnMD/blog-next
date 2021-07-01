import ListItem from '../ListItem';
const List = ({ blogs }) => {
	return (
		<ul className='flex flex-col gap-6 items-center'>
			{blogs.map((blog, postIdx) => (
				<ListItem key={postIdx} blog={blog} />
			))}
		</ul>
	);
};
export default List;
