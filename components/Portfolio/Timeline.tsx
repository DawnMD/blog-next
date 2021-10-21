import TimelineIcon from '../shared/Icons/TimelineIcon';
import Section from '../shared/SectionHeading/SectionHeading';
import parse from 'html-react-parser';
import { timelineData } from '../../data/timelineData';

const Timeline = (): JSX.Element => {
  return (
    <Section title='Timeline'>
      <div className='flex flex-col w-full gap-4'>
        {timelineData.map((data, dataIdx) => (
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
            {dataIdx === timelineData.length - 1 ? null : (
              <hr className='mt-4 border border-gray-200 dark:border-gray-500' />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Timeline;
