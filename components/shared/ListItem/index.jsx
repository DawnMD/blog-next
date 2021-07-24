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
				<article className='flex flex-col gap-2 p-3 bg-gray-100 rounded-md shadow-lg cursor-pointer dark:bg-gray-900'>
					<h3 className='text-xl font-bold tracking-wide lg:text-3xl'>
						{blog.title}
					</h3>
					<div className='text-sm font-semibold text-gray-600 lg:text-lg dark:text-gray-300'>
						{date}
					</div>
					<small className='flex gap-1'>
						{blog.tag_list.map((tag, tagIdx) => (
							<span key={tagIdx} className='flex items-center p-1 text-sm'>
								<span className='text-sm italic text-gray-400 lg:text-lg font-base'>
									#
								</span>
								<span className='font-medium lg:text-lg'>{tag}</span>
							</span>
						))}
					</small>
					<p className='lg:text-xl'>{blog.description}</p>
					<div className='flex gap-6'>
						<small className='flex items-center gap-1 text-sm'>
							<HeartIcon className='w-4 h-4' />
							<div>{blog.public_reactions_count}</div>
						</small>
						<small className='flex items-center gap-1 text-sm'>
							<WatchIcon className='w-4 h-4 ' />
							<div>{blog.page_views_count}</div>
						</small>
						<small className='flex items-center gap-1 text-sm'>
							<CommentIcon className='w-4 h-4' />
							<div>{blog.comments_count}</div>
						</small>
					</div>
				</article>
			</NoScrollLink>
		</li>
	);
};
export default ListItem;
