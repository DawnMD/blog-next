import List from '../Shared/List';
const Blogs = ({ blogs }) => {
	return (
		<section className='flex flex-col gap-4 md:gap-6'>
			<h2 className='text-3xl font-bold tracking-wide text-center md:text-4xl'>
				All Blogs
			</h2>
			<div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
			<List blogs={blogs} />
		</section>
	);
};
export default Blogs;
