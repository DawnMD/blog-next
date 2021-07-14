import Markdown from './Markdown';
import BlogFooter from './BlogFooter';
const BlogDetail = ({ blog }) => {
	return (
		<section className='flex flex-col gap-4'>
			<article className='py-8 mx-auto prose md:prose-lg lg:prose-lg xl:prose-xl dark:prose-light'>
				<Markdown title={blog.title} date={blog.published_at}>
					{blog.body_markdown}
				</Markdown>
			</article>
			<BlogFooter url={blog.canonical_url} />
		</section>
	);
};

export default BlogDetail;
