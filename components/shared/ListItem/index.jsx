import NoScrollLink from '../NoScrollLink';
import { formatDate } from '../../../utils/helpers';
import HeartIcon from '../Icons/HeartIcon';
import CommentIcon from '../Icons/CommentIcon';
import WatchIcon from '../Icons/WatchIcon';
const ListItem = ({ blog }) => {
	const date = formatDate(blog.published_at);
	return (
		<li>
			<NoScrollLink href={`/blog/${blog.slug}`}>
				<article className='flex flex-col gap-2 px-4 py-2 bg-gray-100 rounded-md shadow-lg cursor-pointer hover:shadow-xl dark:bg-gray-900'>
					<h3 className='text-4xl font-bold tracking-wide'>{blog.title}</h3>
					<div className='text-sm font-semibold text-gray-600 dark:text-gray-200'>
						{date}
					</div>
					<small className='flex gap-1'>
						{blog.tag_list.map((tag, tagIdx) => (
							<span key={tagIdx} className='flex items-center p-1 text-sm'>
								<span className='text-lg italic text-gray-400 font-base'>
									#
								</span>
								<span className='font-medium'>{tag}</span>
							</span>
						))}
					</small>
					<p className='text-xl font-medium'>{blog.description}</p>
					<div className='flex gap-6'>
						<small className='flex gap-1 text-sm'>
							<WatchIcon className='items-center w-5 h-5' />
							<span>{blog.page_views_count}</span>
						</small>
						<small className='flex gap-1 text-sm'>
							<CommentIcon className='items-center w-5 h-5' />
							<span>{blog.comments_count}</span>
						</small>
						<small className='flex gap-1 text-sm'>
							<HeartIcon className='items-center w-5 h-5' />
							<span>{blog.public_reactions_count}</span>
						</small>
					</div>
				</article>
			</NoScrollLink>
		</li>
	);
};
export default ListItem;
