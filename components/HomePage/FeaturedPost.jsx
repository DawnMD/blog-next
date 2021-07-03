import List from '../shared/List';
const FeaturedPost = ({ blogs }) => {
	return (
		<section className='m-6 space-y-6'>
			<h2 className='text-4xl font-semibold tracking-wide text-center'>
				Featured Posts
			</h2>
			<List blogs={blogs} />
		</section>
	);
};

export default FeaturedPost;
