import List from '../shared/List';
const Blogs = ({ blogs }) => {
	return (
		<section className='space-y-8'>
			<h2 className='text-4xl tracking-wide font-semibold text-center'>
				All Blogs
			</h2>
			<List blogs={blogs} />
		</section>
	);
};
export default Blogs;
