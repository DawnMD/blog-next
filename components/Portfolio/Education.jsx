const Education = () => {
	return (
		<section className='flex flex-col items-center space-y-4 tracking-wide md:space-y-6'>
			<h2 className='font-bold text-3xl lg:text-4xl'>Education</h2>
			<div className='w-36 mx-auto h-1 rounded-lg bg-gradient-to-r from-red-500 via--400 to bg-purple-500 animate-gradient-x'></div>
			<div className='bg-gray-900 md:w-6/12 md:text-center py-4 px-6 rounded-lg shadow-lg md:px-3 space-y-1'>
				<h3 className='font-semibold text-2xl lg:text-3xl'>
					Adamas University
				</h3>
				<p className='space-x-2'>
					<span className='text-xl font-medium lg:text-2xl'>
						Bachelor&apos;s of Technology in <br /> Computer Science Engineering
					</span>
					<span className='text-indigo-400'>&#8226;</span>
					<em className='text-gray-300'>August 2017 - Present</em>
				</p>
				<ul className='list-disc list-inside text-lg'>
					<li>Computer Science Engineering</li>
					<li>CGPA: 7.25</li>
				</ul>
			</div>
			<div className='bg-gray-900 md:w-6/12 md:text-center py-4 px-6 md:px-3 rounded-lg shadow-lg space-y-1'>
				<h3 className='font-semibold text-2xl lg:text-3xl'>
					Bidhannagaer Municipal School
				</h3>
				<p className='space-x-2'>
					<span className='text-xl font-medium'>Higher Secondary</span>
					<span className='text-indigo-400'>&#8226;</span>
					<em className='text-gray-300'>March 2015 - March 2017</em>
				</p>
				<ul className='list-disc list-inside text-lg'>
					<li>Science with Computer Science</li>
					<li>CGPA: 6.1</li>
				</ul>
			</div>
		</section>
	);
};
export default Education;
