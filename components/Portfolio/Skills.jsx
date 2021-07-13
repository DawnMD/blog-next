import SectionHeading from '../shared/SectionHeading';
import SvgCircle from '../shared/Svg/SvgCircle';
const Skills = () => {
	const skills = [
		{
			tech: 'HTML5',
			color: 'text-html',
			info: 'Hyper Text Markup Language.',
			score: 80,
		},
		{
			tech: 'CSS3',
			color: 'text-css',
			info: 'Cascading Style Sheets.',
			score: 70,
		},
		{
			tech: 'Tailwind CSS',
			color: 'text-tailwind',
			info: 'A utility-first CSS framework.',
			score: 70,
		},
		{
			tech: 'React.JS',
			color: 'text-react',
			info: 'A JavaScript library for building user interfaces.',
			score: 85,
		},
		{
			tech: 'Redux',
			color: 'text-redux',
			info: 'A Predictable State Container for JS Apps.',
			score: 80,
		},
		{
			tech: 'Next.JS',
			color: '',
			info: 'The React Framework for Production.',
			score: 80,
		},
		{
			tech: 'Node.Js',
			color: 'text-node',
			info: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.`,
			score: 60,
		},
		{
			tech: 'Mongo DB',
			color: 'text-mongo',
			info: 'MongoDB is a document database, which means it stores data in JSON-like documents.',
			score: 60,
		},
	];
	return (
		<SectionHeading title='Skills'>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
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
								<p className='text-lg font-medium'>{skill.info}</p>
							</div>
						</div>
					);
				})}
			</div>
		</SectionHeading>
	);
};
export default Skills;
