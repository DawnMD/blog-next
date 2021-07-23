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
					'Got my graduation degree and ended my college days acquiring a total <strong>CGPA of 7.25</strong>.',
			},
			{
				heading: 'Second Internship',
				caption:
					'Why not learn how frontend company works and develop my skills at the same time? Snagged my second internship with a frontend company where I got the chance to learn about the advanced stuffin the frontend.',
			},
		],
	},
	{
		year: 2020,
		timelineProgress: [
			{
				heading: 'Landed First Internship',
				caption:
					'After learning programming and frontend for few months, felt like I understood those better than most of my classmates. My interviewing skills were very low but somehow I landed my first ever internship.',
			},
			{
				heading: 'Started Learning Frontend Web Developer',
				caption:
					'During pandemic saw some random videos on youtube about how some normal people making cool looking websites with <strong>React.Js</strong>. Researched some more on those topics andfound out about <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>. Started learning immediately.',
			},
		],
	},
	{
		year: 2017,
		timelineProgress: [
			{
				heading: 'Started at Adamas University 🎓',
				caption: `Started persuing my under-graduated degree on Bachelor&apos;s of
						Technology on Computer Science Engineering.`,
			},
			{
				heading: 'Graduated High School 🎒',
				caption: `Graduated with a score of 61.8% on best of five from Bidhannar
						Municipal School. Acquired <strong>A</strong> grade.`,
			},
		],
	},
	{
		year: 2016,
		timelineProgress: [
			{
				heading: 'Learned How to Program',
				caption:
					'The one whom I saw writing some secret code like languages, taught me the basics on how to write a program on <strong>C</strong>. From that moment I knew it was gonna be interesting uphill.',
			},
		],
	},
	{
		year: 2015,
		timelineProgress: [
			{
				heading: 'Started Knowing About Programming 🙇🏽‍♂️',
				caption:
					'By watching a friend&apos;s brother writing something which back then I thought as some secret code language, my interest over learning that particular language statred developing.',
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
						<ul className='flex flex-col gap-3'>
							{data.timelineProgress.map((yearData, yearDataIdx) => (
								<li key={yearDataIdx}>
									<div className='flex items-center gap-2'>
										<TimelineIcon />
										<h3 className='text-xl font-semibold lg:text-2xl'>
											{yearData.heading}
										</h3>
									</div>
									<p className='pl-6 lg:text-lg'>{parse(yearData.caption)}</p>
								</li>
							))}
						</ul>
						<hr className='mt-4 border border-gray-200 dark:border-gray-500' />
					</div>
				))}
			</div>
		</Section>
	);
};
export default Timeline;
