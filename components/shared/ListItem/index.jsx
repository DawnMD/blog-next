import Link from 'next/link';
import Image from 'next/image';
const ListItem = ({ blog }) => {
	const { title, date, image, excerpt, blogSlug } = blog;
	const formatDate = new Date(date).toLocaleDateString('en-US', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
	});
	return (
		<li className='w-full overflow-hidden bg-gray-100 rounded-lg shadow-lg md:w-4/5 lg:w-3/5 xl:w-2/5 dark:bg-gray-900'>
			<Link href={`/blog/${blogSlug}`}>
				<a className='flex flex-col'>
					<div className='flex flex-col h-52'>
						{image && (
							<Image
								src={`/images/blog/${blogSlug}/${image}`}
								alt={title}
								height={320}
								width={320}
								layout='responsive'
								objectFit='cover'
							/>
						)}
					</div>
					<div className='flex flex-col gap-2 p-3'>
						<span className='flex flex-col gap-1'>
							<h3 className='text-lg font-semibold tracking-wide md:text-2xl'>
								{title}
							</h3>
							<p className='text-sm font-light md:text-2xl'>{formatDate}</p>
						</span>
						<p className='md:text-xl'>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};
export default ListItem;
