import SectionHeading from '../shared/SectionHeading';
import SvgCircle from '../shared/Svg/SvgCircle';
const Skills = () => {
	const skills = [
		{
			tech: 'React.JS',
			color: 'text-react',
			score: 8.5,
		},
		{
			tech: 'Redux',
			color: 'text-redux',
			score: 8,
		},
		{
			tech: 'Next.JS',
			color: '',
			score: 8,
		},
		{
			tech: 'Tailwind CSS',
			color: 'text-tailwind',
			score: 7,
		},
		{
			tech: 'Node.Js',
			color: 'text-node',
			score: 6,
		},
		{
			tech: 'Mongo DB',
			color: 'text-mongo',
			score: 6,
		},
	];
	return (
		<SectionHeading title='Skills'>
			<div className='grid gap-4 lg:grid-cols-2'>
				{skills.map((skill) => {
					return (
						<div
							className='flex items-center gap-4 px-6 py-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900'
							key={skill.tech}>
							<SvgCircle score={skill.score} color={skill.color} />
							<div>
								<h3
									className={`text-2xl font-bold tracking-wider ${skill.color}`}>
									{skill.tech}
								</h3>
							</div>
						</div>
					);
				})}
			</div>
		</SectionHeading>
	);
};
export default Skills;
