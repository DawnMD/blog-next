import Markdown from './Markdown';
import BlogFooter from './BlogFooter';
import { Blog } from '../../types/blogType';

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <article className='w-full py-8 mx-auto prose md:prose-lg xl:prose-xl dark:prose-light'>
        <Markdown title={blog.title} dateISO={blog.published_at}>
          {blog.body_markdown}
        </Markdown>
      </article>
      <BlogFooter url={blog.url} />
    </section>
  );
};

export default BlogDetail;
