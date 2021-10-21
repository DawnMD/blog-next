import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import {
  customRenderMarkdown,
  sanitizeDevToMarkdown,
} from '../../utils/markdown';
import { formatDate } from '../../utils/helpers';

interface MarkdownProps {
  children: string;
  dateISO: string;
  title: string;
}

const Markdown = ({ children, dateISO, title }: MarkdownProps) => {
  const markdown = sanitizeDevToMarkdown(children);
  const date = formatDate(dateISO);

  return (
    <>
      <h1>{title}</h1>
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
