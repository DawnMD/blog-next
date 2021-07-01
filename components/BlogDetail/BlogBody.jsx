import ReactMarkdown from 'react-markdown';
const BlogBody = (props) => {
	return (
		<div className='p-4 md:p-6 lg:p-12'>
			<div>
				<ReactMarkdown>{props.content}</ReactMarkdown>
			</div>
		</div>
	);
};
export default BlogBody;
