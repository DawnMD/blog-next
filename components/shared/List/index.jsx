import ListItem from '../ListItem';
const List = ({ blogs }) => {
	return (
		<ul className='flex flex-col gap-4 xl:gap-6'>
			{blogs.map((blog, postIdx) => (
				<ListItem key={postIdx} blog={blog} />
			))}
		</ul>
	);
};
export default List;
