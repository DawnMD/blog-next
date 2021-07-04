import BlogHeader from './BlogHeader';
import BlogBody from './BlogBody';
const BlogDetail = ({ blog }) => {
	return (
		<article className='mx-auto overflow-hidden bg-gray-100 rounded-md shadow-lg md:max-w-3xl md:my-3 lg:my-5 xl:max-w-5xl dark:bg-gray-900'>
			<BlogHeader title={blog.title} image={blog.image} />
			<BlogBody content={blog.content} />
		</article>
	);
};

export default BlogDetail;
