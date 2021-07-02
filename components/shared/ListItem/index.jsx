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
		<li className='bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full md:w-4/5 lg:w-3/5 xl:w-2/5'>
			<Link href={`/blog/${blogSlug}`}>
				<a className='flex flex-col'>
					<div className='h-52 flex flex-col'>
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
					<div className='p-3 space-y-2'>
						<span className='space-y-1'>
							<h3 className='font-semibold text-lg md:text-2xl tracking-wide'>
								{title}
							</h3>
							<p className='font-light text-sm text-gray-400 md:text-2xl'>
								{formatDate}
							</p>
						</span>
						<p className='md:text-xl'>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};
export default ListItem;
