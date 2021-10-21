interface SectionHeadingProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const SectionHeading = ({
  children,
  title,
}: SectionHeadingProps): JSX.Element => {
  return (
    <section
      className='flex flex-col items-center w-full gap-4 tracking-wide md:gap-6'
      id={`${title.toLowerCase()}`}>
      <h2 className='text-3xl font-bold lg:text-4xl'>{title}</h2>
      <div className='h-1 mx-auto bg-purple-500 rounded-lg w-36 bg-gradient-to-r from-red-500 animate-gradient-x'></div>
      {children}
    </section>
  );
};
export default SectionHeading;
