const Timeline = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-4xl font-bold font-heading text-zinc-50'>Timeline</h1>
      <p className='text-lg'>
        Chronological moments and events since I learned about programming.
      </p>
      <div>
        <div className='flex flex-col gap-4'>
          <h5 className='text-4xl font-bold text-teal-400 font-heading'>
            2022
          </h5>
          <h6 className='text-xl font-bold text-zinc-50'>
            Converted to Full Time 🎉✨🎊
          </h6>
          <p>
            Converted my last internship with Codemancers to a Full Time Job
            Offer, where I'll be working on designing, developing, building and
            deploying solutions for customers and for Codemancers.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='text-4xl font-bold text-teal-400 font-heading'>
            2021
          </h5>
          <h6 className='text-xl font-bold text-zinc-50'>
            Converted to Full Time 🎉✨🎊
          </h6>
          <p>
            Converted my last internship with Codemancers to a Full Time Job
            Offer, where I'll be working on designing, developing, building and
            deploying solutions for customers and for Codemancers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
