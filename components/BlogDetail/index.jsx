import ReactMarkdown from 'react-markdown';
import { sanitizeDevToMarkdown } from '../../utils/markdown';
import rehypeSanitize from 'rehype-sanitize';
import gfm from 'remark-gfm';
import { customRenderMarkdown } from '../../utils/markdown';
import { formatDate } from '../../utils/helpers';
const BlogDetail = ({ blog }) => {
	const markdown = sanitizeDevToMarkdown(blog.body_markdown);
	const date = formatDate(blog.published_at);
	return (
		<>
			<article className='py-8 mx-auto prose md:prose-lg lg:prose-lg xl:prose-xl dark:prose-light'>
				<h1>{blog.title}</h1>
				<p className='text-gray-400'>{date}</p>
				<ReactMarkdown
					components={customRenderMarkdown()}
					rehypePlugins={[rehypeSanitize]}
					remarkPlugins={[gfm]}>
					{markdown}
				</ReactMarkdown>
			</article>
			<div className='text-xl font-medium text-center underline group'>
				<a
					href={blog.canonical_url}
					className='text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50'>
					React, comment and follow on
					<br />
					<span className='font-bold '>Dev.To</span>
				</a>
			</div>
		</>
	);
};

export default BlogDetail;
