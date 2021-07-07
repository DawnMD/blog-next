import ReactMarkdown from 'react-markdown';
import { sanitizeDevToMarkdown } from '../../utils/markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import gfm from 'remark-gfm';
const BlogDetail = ({ blog }) => {
	const markdown = sanitizeDevToMarkdown(blog.body_markdown);
	return (
		<section className='flex flex-col items-center gap-8'>
			<article className='mx-auto prose md:prose-lg lg:prose-lg xl:prose-xl dark:prose-light'>
				<h1>{blog.title}</h1>
				<ReactMarkdown
					rehypePlugins={[rehypeRaw, rehypeSanitize]}
					remarkPlugins={[gfm]}>
					{markdown}
				</ReactMarkdown>
			</article>
			<a
				href={blog.canonical_url}
				className='text-xl font-medium text-center text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50'>
				React, comment and follow on
				<br />
				<span className='font-bold '>Dev.To</span>
			</a>
		</section>
	);
};

export default BlogDetail;
