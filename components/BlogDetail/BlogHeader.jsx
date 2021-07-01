import Image from 'next/image';
const BlogHeader = ({ title, image }) => {
	return (
		<header>
			<div className='h-44 flex flex-col md:h-56 lg:h-64 xl:h-90'>
				<Image
					src={`/images/blog/getting-started-with-nextjs/${image}`}
					alt={title}
					width={320}
					height={320}
					layout='responsive'
					objectFit='cover'
				/>
			</div>
			<div className='px-4 pt-4 text-4xl font-bold tracking-wide text-gray-900 md:px-6 md:pt-6 md:text-7xl lg:px-12 lg:pt-12'>
				{title}
			</div>
		</header>
	);
};
export default BlogHeader;
