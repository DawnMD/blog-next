import { Blog } from '../../../types/blogType';
import ListItem from '../ListItem/ListItem';

interface ListProps {
  blogs: Blog[];
}

const List = ({ blogs }: ListProps): JSX.Element => {
  return (
    <ul className='flex flex-col gap-4 xl:gap-6'>
      {blogs.map((blog, postIdx: number) => (
        <ListItem key={postIdx} blog={blog} />
      ))}
    </ul>
  );
};

export default List;
