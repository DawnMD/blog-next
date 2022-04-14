import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/shared/Layout';
import { ITimeline, TimelineBlocks } from '../types/graphcmsData';
import { graphcmsConnection } from '../utils/graphcmsConnection';

const title = 'My Timeline';
const description = 'Things I did and achieved.';

const Timeline: NextPage<{ timelineData: TimelineBlocks[] }> = ({
  timelineData,
}) => {
  return (
    <Layout title={title} description={description}>
      <section className='flex flex-col max-w-2xl gap-4 mx-auto mb-16'>
        <h1 className='text-3xl font-bold tracking-tight md:text-5xl'>
          Timeline
        </h1>
        <p className='text-neutral-600 dark:text-neutral-400'>
          Chronological moments and events since I learned about programming.
        </p>
        <div className='flex flex-col gap-6'>
          {timelineData.map((item) => (
            <div key={`timeline-${item.id}`} className='flex flex-col gap-3'>
              <h3 className='text-2xl font-bold tracking-tight md:text-4xl'>
                {item.timelineYear}
              </h3>
              {item.timelineInfos.map((data) => (
                <div
                  key={`timeline-${item.id}-${data.id}`}
                  className='flex flex-col gap-1'>
                  <h4 className='text-lg font-medium md:text-xl'>
                    {data.title}
                  </h4>
                  <span className='text-neutral-600 dark:text-neutral-400'>
                    {data.content[0]}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;

export const getStaticProps: GetStaticProps = async () => {
  const { timelines } = await graphcmsConnection.request<ITimeline>(`{
  timelines {
    timelineBlocks(orderBy: timelineYear_DESC) {
      id
      timelineYear
      timelineInfos(orderBy: sequence_DESC, where: {sequence_gt: 0}) {
        sequence
        id
        title
        content
      }
    }
  }
}
`);

  return {
    props: {
      timelineData: timelines[0].timelineBlocks,
    },
  };
};
