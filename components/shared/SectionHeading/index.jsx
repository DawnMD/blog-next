const SectionHeading = (props) => {
	return (
		<section className='flex flex-col items-center gap-4 tracking-wide md:gap-6'>
			<h2 className='text-3xl font-bold lg:text-4xl'>{props.title}</h2>
			<div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
			{props.children}
		</section>
	);
};
export default SectionHeading;
