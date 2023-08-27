import React from "react";

const Introduction = () => {
  return (
    <div className='ml-[150px] mr-[158px] w-[1050px] mt-40 h-[174px] flex flex-row'>
      <div className='w-1/2 border-r-2 -border--color-border'>
        <h1 className='w-[387px] h-full leading-[87px] font-semibold text-5xl'>
          Let's Introduce Ourself
        </h1>
      </div>
      <div className='w-1/2 flex flex-col pl-20 gap-3'>
        <h1 className='w-auto font-semibold text-3xl leading-[50px] pt-3'>
          {" "}
          Criminal
        </h1>
        <p className='w-[475px] font-normal text-xl opacity-40'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
