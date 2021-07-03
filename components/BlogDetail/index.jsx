import BlogHeader from './BlogHeader';
import BlogBody from './BlogBody';
const BlogDetail = ({ blog }) => {
	return (
		<article className='mx-auto overflow-hidden bg-gray-50 md:max-w-3xl md:my-3 lg:my-5 xl:max-w-5xl xl:rounded'>
			<BlogHeader title={blog.title} image={blog.image} />
			<BlogBody content={blog.content} />
		</article>
	);
};

export default BlogDetail;
