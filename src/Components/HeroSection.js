import React, { useState } from "react";
// import { ReactComponent as HeroImage } from "../assets/HeroImage.svg";
import HeroImage2 from "../assets/HeroImage2.png";

const HeroSection = () => {
  const [emailValue, setEmailValue] = useState("");

  return (
    <div className='h-[544px] w-full mt-9 flex flex-row gap-24'>
      <div className='flex flex-col mt-24 gap-4'>
        <div className='w-[571px] h-[194px] leading-[90px] text-start text-[66px]'>
          <h1 className='pl-2 font-medium'>You don't have to</h1>
          <h1 className='font-bold'>Fight them Alone.</h1>
        </div>
        <p className='w-[560px] h-[99px] font-medium text-base opacity-30'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className='w-[438px] h-[74px] flex flex-row justify-between items-center rounded-full -bg--color-primary'>
          <div className='flex flex-row gap-3 pl-8 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={0.5}
              stroke='currentColor'
              className='w-6 h-6 -fill--color-primary'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>

            <input
              type='email'
              id='email'
              name='email'
              value={emailValue}
              className='-bg--color-primary opacity-40 font-semibold'
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
              placeholder='Enter your email address'></input>
          </div>
          <button className='w-[137px] h-[62px] text-center mr-1 font-semibold text-base -bg--color-button rounded-full -text--color-black'>
            Let's Talk
          </button>
        </div>
      </div>
      <div className='w-[468px] relative flex flex-col'>
        {/* <HeroImage className='z-10 object-fill' /> */}
        <img
          src={HeroImage2}
          className='z-10 object-cover h-[510px] w-[467px]'
          alt='heroImage'></img>
        <div className='w-[467px] h-[400px] -bg--color-button rounded-[55px] absolute top-[100px]'></div>
      </div>
    </div>
  );
};

export default HeroSection;
