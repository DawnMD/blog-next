import TimelineIcon from '../shared/Icons/TimelineIcon';
import Section from '../shared/SectionHeading';
const Timeline = () => {
	return (
		<Section title='Timeline'>
			<div className='w-full'>
				<h3 className='text-xl font-semibold tracking-tight'>2017</h3>
				<div className='flex items-center gap-2'>
					<TimelineIcon />
					<h3 className='text-2xl font-semibold'>Graduated High School 🎒</h3>
				</div>
				<p className='pl-6 text-lg'>Graduated with a score of 61.8%</p>
			</div>
		</Section>
	);
};
export default Timeline;
