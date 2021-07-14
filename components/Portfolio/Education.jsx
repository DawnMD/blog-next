import SectionHeading from '../shared/SectionHeading';

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
		<SectionHeading title='Education'>
			<div className='flex flex-col gap-4 lg:gap-6'>
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
		</SectionHeading>
	);
};
export default Education;
