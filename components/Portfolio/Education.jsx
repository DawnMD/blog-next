const Education = () => {
	const education = [
		{
			college: 'Adamas University',
			degree: 'Bachelor of Technology in Computer Science Engineering',
			duration: 'August 2017 - Present',
			descp: 'Computer Science Engineering',
			outcome: 'CGPA: 7.25',
		},
		{
			college: 'Bidhannagar Municipal School',
			degree: 'Higher Secondary',
			duration: 'March 2015 - March 2017',
			descp: 'Science with Computer Science',
			outcome: '61.8% on best of 5',
		},
	];
	return (
		<section
			id='education'
			className='flex flex-col items-center gap-4 tracking-wide md:gap-6'>
			<h2 className='text-3xl font-bold lg:text-4xl'>Education</h2>
			<div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
			<div className='grid w-full gap-4 md:grid-cols-2 md:grid-flow-col'>
				{education.map((edu) => {
					return (
						<div
							key={edu.outcome}
							className='px-6 py-4 space-y-1 text-center bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900'>
							<h3 className='text-2xl font-semibold lg:text-3xl'>
								{edu.college}
							</h3>
							<p className='space-x-2'>
								<span className='text-xl font-medium lg:text-2xl'>
									{edu.degree}
								</span>
								<span className='text-indigo-400'>&#8226;</span>
								<em className='text-gray-700 dark:text-gray-400'>
									{edu.duration}
								</em>
							</p>
							<ul className='text-lg list-disc list-inside'>
								<li>{edu.descp}</li>
								<li>{edu.outcome}</li>
							</ul>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default Education;
