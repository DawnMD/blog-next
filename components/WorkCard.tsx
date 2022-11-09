type WorkCardProps = {
  company: string;
  title: string;
  duration: string;
};

export const WorkCard = ({ company, duration, title }: WorkCardProps) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='flex flex-col gap-2'>
        <span className='font-semibold text-zinc-50 font-heading max-w-[150px]'>
          {company}
        </span>
        <span className='text-xs'>{title}</span>
      </p>
      <p>{duration}</p>
    </div>
  );
};
