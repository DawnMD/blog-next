import List from '../shared/List';
const FeaturedPost = ({ blogs }) => {
	return (
		<section className='m-6 space-y-6'>
			<h2 className='text-4xl tracking-wide font-semibold text-center'>
				Featured Posts
			</h2>
			<List blogs={blogs} />
		</section>
	);
};

export default FeaturedPost;
