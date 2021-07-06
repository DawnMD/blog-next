import ListItem from '../ListItem';
const List = ({ blogs }) => {
	return (
		<ul className='flex flex-col max-w-4xl gap-4 mx-auto xl:gap-6'>
			{blogs.map((blog, postIdx) => (
				<ListItem key={postIdx} blog={blog} />
			))}
		</ul>
	);
};
export default List;
