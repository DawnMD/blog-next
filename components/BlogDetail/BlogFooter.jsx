const BlogFooter = (props) => {
	return (
		<footer className='text-xl font-medium text-center underline group'>
			<a
				href={props.url}
				className='text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50'>
				React, comment and follow on
				<br />
				<span className='font-bold '>Dev.To</span>
			</a>
		</footer>
	);
};
export default BlogFooter;
