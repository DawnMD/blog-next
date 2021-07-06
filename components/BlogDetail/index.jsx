import ReactMarkdown from 'react-markdown';
import { sanitizeDevToMarkdown } from '../../utils/markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import gfm from 'remark-gfm';
const BlogDetail = ({ blog }) => {
	const markdown = sanitizeDevToMarkdown(blog.body_markdown);
	return (
		<article className='py-8 mx-auto prose prose-xl dark:prose-light'>
			<h1>{blog.title}</h1>
			<ReactMarkdown
				rehypePlugins={[rehypeRaw, rehypeSanitize]}
				remarkPlugins={[gfm]}>
				{markdown}
			</ReactMarkdown>
		</article>
	);
};

export default BlogDetail;
