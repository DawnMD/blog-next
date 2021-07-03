const Education = () => {
	return (
		<section
			id='education'
			className='flex flex-col items-center space-y-4 tracking-wide md:space-y-6'>
			<h2 className='text-3xl font-bold lg:text-4xl'>Education</h2>
			<div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
			<div className='px-6 py-4 space-y-1 bg-gray-900 rounded-lg shadow-lg md:w-6/12 md:text-center md:px-3'>
				<h3 className='text-2xl font-semibold lg:text-3xl'>
					Adamas University
				</h3>
				<p className='space-x-2'>
					<span className='text-xl font-medium lg:text-2xl'>
						Bachelor&apos;s of Technology in <br /> Computer Science Engineering
					</span>
					<span className='text-indigo-400'>&#8226;</span>
					<em className='text-gray-300'>August 2017 - Present</em>
				</p>
				<ul className='text-lg list-disc list-inside'>
					<li>Computer Science Engineering</li>
					<li>CGPA: 7.25</li>
				</ul>
			</div>
			<div className='px-6 py-4 space-y-1 bg-gray-900 rounded-lg shadow-lg md:w-6/12 md:text-center md:px-3'>
				<h3 className='text-2xl font-semibold lg:text-3xl'>
					Bidhannagaer Municipal School
				</h3>
				<p className='space-x-2'>
					<span className='text-xl font-medium'>Higher Secondary</span>
					<span className='text-indigo-400'>&#8226;</span>
					<em className='text-gray-300'>March 2015 - March 2017</em>
				</p>
				<ul className='text-lg list-disc list-inside'>
					<li>Science with Computer Science</li>
					<li>CGPA: 6.1</li>
				</ul>
			</div>
		</section>
	);
};
export default Education;
