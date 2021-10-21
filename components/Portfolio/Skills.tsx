import SectionHeading from '../shared/SectionHeading';
import SvgCircle from '../shared/Svg/SvgCircle';
import { skillsData } from '../../data/skillsData';

const Skills = (): JSX.Element => {
  return (
    <SectionHeading title='Skills'>
      <div className='grid gap-4 lg:grid-cols-2'>
        {skillsData.map(({ color, score, tech }) => {
          return (
            <div
              className='flex items-center gap-4 px-6 py-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-900'
              key={tech}>
              <SvgCircle score={score} color={color} />
              <div>
                <h3 className={`text-2xl font-bold tracking-wider ${color}`}>
                  {tech}
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
