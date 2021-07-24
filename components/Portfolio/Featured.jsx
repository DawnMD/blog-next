import SectionHeading from '../shared/SectionHeading';
import HeartIcon from '../shared/Icons/HeartIcon';
import ClockIcon from '../shared/Icons/ClockIcon';
import NoScrollLink from '../shared/NoScrollLink';
const Featured = (props) => {
	const { mostRecent, mostLiked } = props.featured;
	return (
		<SectionHeading title='Featured Blogs'>
			<div className='flex flex-col w-full gap-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col gap-3'>
						<h3 className='text-lg font-bold lg:text-xl'>Most Recent Blog</h3>
						<NoScrollLink href={`/blog/${mostRecent.slug}`}>
							<a className='flex flex-col gap-1'>
								<div className='flex items-center gap-2'>
									<ClockIcon className='w-5 h-5 text-yellow-600 dark:text-yellow-400' />
									<h3 className='text-xl font-semibold lg:text-2xl'>
										{mostRecent.title}
									</h3>
								</div>
								<p className='pl-6 text-gray-600 dark:text-gray-200 lg:text-lg'>
									{mostRecent.description}
								</p>
							</a>
						</NoScrollLink>
					</div>
					<hr className='my-4 border border-gray-200 dark:border-gray-500' />
					<div className='flex flex-col gap-3'>
						<h3 className='text-lg font-bold lg:text-xl'>Most Upvoted Blog</h3>
						<NoScrollLink href={`/blog/${mostLiked.slug}`}>
							<a className='flex flex-col gap-1'>
								<div className='flex items-center gap-2'>
									<HeartIcon className='w-5 h-5 text-red-700 dark:text-red-400' />
									<h3 className='text-xl font-semibold lg:text-2xl'>
										{mostLiked.title}
									</h3>
								</div>
								<p className='pl-6 text-gray-600 dark:text-gray-200 lg:text-lg'>
									{mostLiked.description}
								</p>
							</a>
						</NoScrollLink>
					</div>
				</div>
			</div>
		</SectionHeading>
	);
};
export default Featured;
