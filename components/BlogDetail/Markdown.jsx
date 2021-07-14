import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import {
	customRenderMarkdown,
	sanitizeDevToMarkdown,
} from '../../utils/markdown';
import { formatDate } from '../../utils/helpers';

const Markdown = (props) => {
	const markdown = sanitizeDevToMarkdown(props.children);
	const date = formatDate(props.date);
	return (
		<>
			<h1>{props.title}</h1>
			<p className='text-gray-400'>{date}</p>
			<ReactMarkdown
				components={customRenderMarkdown()}
				rehypePlugins={[rehypeSanitize]}
				remarkPlugins={[gfm]}>
				{markdown}
			</ReactMarkdown>
		</>
	);
};
export default Markdown;
