const Skills = () => {
	const skills = [
		{
			tech: 'HTML5',
			color: 'text-html',
			info: 'Hyper Text Markup Language.',
		},
		{
			tech: 'CSS3',
			color: 'text-css',
			info: 'Cascading Style Sheets.',
		},
		{
			tech: 'Tailwind CSS',
			color: 'text-tailwind',
			info: 'A utility-first CSS framework.',
		},
		{
			tech: 'React JS',
			color: 'text-react',
			info: 'A JavaScript library for building user interfaces.',
		},
		{
			tech: 'Redux',
			color: 'text-redux',
			info: 'A Predictable State Container for JS Apps.',
		},
		{
			tech: 'Next JS',
			color: '',
			info: 'The React Framework for Production.',
		},
	];
	return (
		<section className='flex flex-col items-center gap-4 md:gap-6'>
			<h2 className='text-3xl font-bold tracking-wide md:text-4xl'>Skills</h2>
			<div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{skills.map((skill) => {
					return (
						<div
							className='px-6 py-4 space-y-2 text-center bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900'
							key={skill.tech}>
							<h4
								className={`text-2xl font-bold tracking-wider ${skill.color}`}>
								{skill.tech}
							</h4>
							<p className='text-lg font-medium'>{skill.info}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default Skills;
