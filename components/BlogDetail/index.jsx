import ReactMarkdown from 'react-markdown';
const BlogDetail = ({ blog }) => {
	return (
		<article className='py-8 mx-auto prose prose-xl dark:prose-light'>
			<h1>{blog.title}</h1>
			<ReactMarkdown>{blog.body_markdown}</ReactMarkdown>
		</article>
	);
};

export default BlogDetail;
