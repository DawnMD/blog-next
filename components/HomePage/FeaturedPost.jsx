import Grid from '../shared/Grid';
const FeaturedPost = (props) => {
	return (
		<section className='m-6 space-y-6'>
			<h2 className='text-4xl tracking-wide font-semibold text-center'>
				Featured Posts
			</h2>
			<Grid posts={props.posts} />
		</section>
	);
};

export default FeaturedPost;
