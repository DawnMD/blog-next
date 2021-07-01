import BlogHeader from './BlogHeader';
import BlogBody from './BlogBody';
const DUMMY_DATA = {
	slug: 'getting-started-with-nextjs',
	title: 'Getting started with NextJS',
	date: '2021-06-30',
	excert: 'React framework for production',
	image: 'getting-started-nextjs.png',
	content: '# this is a h1',
};
const BlogDetail = (props) => {
	return (
		<article className='m-3 rounded bg-gray-700 overflow-hidden lg:my-5'>
			<BlogHeader title={DUMMY_DATA.title} image={DUMMY_DATA.image} />
			<BlogBody content='# This is a h1' />
		</article>
	);
};

export default BlogDetail;
