import { Blog } from '../../types/blogType';
import List from '../shared/List/List';
import Section from '../shared/SectionHeading/SectionHeading';

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps): JSX.Element => {
  return (
    <Section title='All Blogs'>
      <List blogs={blogs} />
    </Section>
  );
};
export default Blogs;
