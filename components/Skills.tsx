import {
  Docker,
  ExpressJS,
  Mongo,
  Next,
  NodeJS,
  React,
  Redux,
  Tailwind,
  TypeScript,
} from './shared/Icons/SkillsIcon';

const Skills = (): JSX.Element => {
  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-2xl font-bold tracking-tight md:text-4xl'>
        Techstack I know
      </h3>
      <p className='text-neutral-600 dark:text-neutral-400'>
        Techs & frameworks I mostly like to use.
      </p>
      <div className='flex flex-wrap items-center gap-3 md:gap-5 lg:gap-7'>
        <NodeJS />
        <TypeScript />
        <Tailwind />
        <React />
        <Redux />
        <Next />
        <ExpressJS />
        <Mongo />
        <Docker />
      </div>
    </section>
  );
};

export default Skills;
