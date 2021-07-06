import Link from 'next/link';
const ListItem = ({ blog }) => {
	const formatDate = new Date(blog.published_at).toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
	return (
		<li className=''>
			<Link href={`/blog/${blog.slug}`}>
				<article className='flex flex-col gap-2 px-4 py-2 bg-gray-100 rounded-md shadow-lg cursor-pointer hover:shadow-xl dark:bg-gray-900 '>
					<h3 className='text-4xl font-bold tracking-wide'>{blog.title}</h3>
					<div className='text-sm font-semibold text-gray-600 dark:text-gray-200'>
						{formatDate}
					</div>
					<small className='flex gap-4'>
						{blog.tag_list.map((tag, tagIdx) => (
							<span
								key={tagIdx}
								className='px-3 py-1 text-sm border border-gray-600 rounded-2xl '>
								{tag}
							</span>
						))}
					</small>
					<p className='text-xl font-medium'>{blog.description}</p>
					<div className='flex gap-6'>
						<small className='text-sm'>{`views: ${blog.page_views_count}`}</small>
						<small className='text-sm'>{`comments: ${blog.comments_count}`}</small>
						<small className='text-sm'>{`reactions: ${blog.public_reactions_count}`}</small>
					</div>
				</article>
			</Link>
		</li>
	);
};
export default ListItem;
