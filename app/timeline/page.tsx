import { useState } from 'react';

export default function Timeline() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-4xl font-bold font-heading text-zinc-50'>Timeline</h1>
      <p className='text-lg'>
        Chronological moments and events since I learned about programming.
      </p>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <h5 className='text-4xl font-bold tracking-tight text-teal-400 font-heading'>
            2022
          </h5>
          <div className='flex flex-col gap-2'>
            <h6 className='text-xl font-bold text-zinc-50'>
              Converted to Full Time 🎉✨🎊
            </h6>
            <p>
              Converted my last internship with Codemancers to a Full Time Job
              Offer, where I'll be working on designing, developing, building
              and deploying solutions for customers and for Codemancers.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h5 className='text-4xl font-bold tracking-tight text-teal-400 font-heading'>
            2021
          </h5>
          <div className='flex flex-col gap-2'>
            <h6 className='text-xl font-bold text-zinc-50'>
              Fourth Internship ✨
            </h6>
            <p>
              I got a chance to work for Codemancers as an intern where I
              learned various new technologies and contributed those skills into
              my own projects as well as to the company itself.
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h6 className='text-xl font-bold text-zinc-50'>
              Third Internship ℹ️
            </h6>
            <p>
              After acquiring several new skills at both frontend and backend, I
              got a chance to put those skills to use in the company PVSquare
              Pvt. Ltd. Where I worked on improving the UI for the app
              CXDeployer.
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h6 className='text-xl font-bold text-zinc-50'>
              Graduated University 👨🏽‍🎓
            </h6>
            <p>
              Graduated from Adamas University acquiring a Cumulative Grade
              Points Average (CGPA) of 7.25.
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h6 className='text-xl font-bold text-zinc-50'>
              Second Internship 💡💡
            </h6>
            <p>
              Why not learn how the frontend company works and develop my skills
              at the same time? Worked as an intern at APlus Topper, where I got
              the opportunity to learn about various frontend technologies and
              how a web development-based company operates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
