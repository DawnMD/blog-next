import { NextPage } from 'next';
import AnimateLayout from '../components/Layout/AnimateLayout';
import { timelineData } from '../data/timelineData';
import parse from 'html-react-parser';

const title = 'My Timeline';
const description = 'Things I did and achieved.';

const Timeline: NextPage = () => {
  return (
    <AnimateLayout title={title} description={description}>
      <section className='flex flex-col max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
          Timeline
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Chronological moments and events since I learned about programming.
        </p>
        <div className='flex flex-col gap-6'>
          {timelineData.map((item, tIdx) => (
            <div key={`timeline-${tIdx}`} className='flex flex-col gap-3'>
              <h3 className='text-2xl font-bold tracking-tight md:text-4xl'>
                {item.year}
              </h3>
              {item.timelineProgress.map((data, pIdx) => (
                <div
                  key={`timeline-${tIdx}-${pIdx}`}
                  className='flex flex-col gap-1'>
                  <h4 className='text-lg font-medium md:text-xl'>
                    {parse(data.heading)}
                  </h4>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {parse(data.caption)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </AnimateLayout>
  );
};

export default Timeline;
