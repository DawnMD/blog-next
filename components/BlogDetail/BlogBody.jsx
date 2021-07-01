import ReactMarkdown from 'react-markdown';
const BlogBody = (props) => {
	return (
		<div className='max-w-none p-4 prose prose-lg md:p-6 lg:p-12 md:prose-xl lg:prose-2xl'>
			<ReactMarkdown>{props.content}</ReactMarkdown>
		</div>
	);
};
export default BlogBody;
