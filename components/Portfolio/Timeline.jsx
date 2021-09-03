import TimelineIcon from '../shared/Icons/TimelineIcon';
import Section from '../shared/SectionHeading';
import parse from 'html-react-parser';
const timelineDatas = [
	{
		year: 2021,
		timelineProgress: [
			{
				heading: 'Graduated University 👨🏽‍🎓',
				caption:
					'Graduated from Adamas University acquiring a <strong>CGPA of 7.25</strong>',
			},
			{
				heading: 'Second Internship 💡💡',
				caption:
					`<i>Why not learn how the frontend company works and develop my skills at the same time?</i></br> Worked as an intern in APlus Topper, where I got the opportunity to learn about various frontend processes the company operates.`,
			},
		],
	},
	{
		year: 2020,
		timelineProgress: [
			// {
			// 	heading: 'Grabbed First Internship 💡',
			// 	caption:
			// 		'After learning programming and frontend in web development for few months,my programming skills had evolved.',
			// },
			{
				heading: 'Started Learning Frontend Technologies',
				caption:
					'During the pandemic, I saw some videos on youtube about how people make cool websites with React.Js. Researched some more on those topics like HTML, CSS, JavaScript had caught my interest and motivated to start learning theses languages.',
			},
		],
	},
	{
		year: 2017,
		timelineProgress: [
			{
				heading: 'Started at Adamas University 🎓',
				caption: `Started pursuing my under-graduated degree on Bachelor&apos;s of Technology in Computer Science Engineering.`,
			},
			{
				heading: 'Graduated High School 🎒',
				caption: `Graduated with a score of 61.8% from Bidhannar
						Municipal School. Acquired <strong>B+</strong> grade.`,
			},
		],
	},
	{
		year: 2016,
		timelineProgress: [
			{
				heading: 'Learnt How to do Programming',
				caption:
					'My friend&apos;s brother taught me the basics on how to write a program on C, from that moment I knew it was gonna be interesting uphill.',
			},
		],
	},
	{
		year: 2015,
		timelineProgress: [
			{
				heading: 'Started Knowing About Programming 🙇🏽‍♂️',
				caption:
					'By watching my friend&apos;s brother writing something which back then I thought was some secret code language, my interest in learning that particular language started developing.',
			},
		],
	},
];
const Timeline = () => {
	return (
		<Section title='Timeline'>
			<div className='flex flex-col w-full gap-4'>
				{timelineDatas.map((data, dataIdx) => (
					<div key={dataIdx} className='flex flex-col gap-2'>
						<h3 className='text-lg font-bold lg:text-xl'>{data.year}</h3>
						<ul className={`flex flex-col gap-3`}>
							{data.timelineProgress.map((yearData, yearDataIdx) => (
								<li key={yearDataIdx} className='flex flex-col gap-1'>
									<div className='flex items-center gap-2'>
										<TimelineIcon />
										<h3 className='text-xl font-semibold lg:text-2xl'>
											{yearData.heading}
										</h3>
									</div>
									<p className='pl-6 text-gray-600 dark:text-gray-200 lg:text-lg'>
										{parse(yearData.caption)}
									</p>
								</li>
							))}
						</ul>
						{dataIdx === timelineDatas.length - 1 ? null : (
							<hr className='mt-4 border border-gray-200 dark:border-gray-500' />
						)}
					</div>
				))}
			</div>
		</Section>
	);
};
export default Timeline;
