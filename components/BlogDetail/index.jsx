import ReactMarkdown from 'react-markdown';
import { sanitizeDevToMarkdown } from '../../utils/markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import gfm from 'remark-gfm';
import Image from 'next/image';
const customMarkdown = {
	p(paragraph) {
		const { node } = paragraph;

		if (node.children[0].tagName === 'img') {
			const image = node.children[0];
			return (
				<div>
					<Image
						src={image.properties.src}
						alt={image.alt}
						width={700}
						height={107}
					/>
				</div>
			);
		}
		return <p>{paragraph.children}</p>;
	},
};
const BlogDetail = ({ blog }) => {
	const markdown = sanitizeDevToMarkdown(blog.body_markdown);
	const formatDate = new Date(blog.published_at).toLocaleDateString('en-US', {
		weekday: 'long',
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
	return (
		<>
			<article className='py-8 mx-auto prose md:prose-lg lg:prose-lg xl:prose-xl dark:prose-light'>
				<h1>{blog.title}</h1>
				<p className='text-gray-400'>{formatDate}</p>
				<ReactMarkdown
					components={customMarkdown}
					rehypePlugins={[rehypeRaw, rehypeSanitize]}
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
