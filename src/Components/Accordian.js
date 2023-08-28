import React, { useState } from "react";
import yellowCircle from "../assets/yellowCircle.png";

const Accordian = ({ FAQ_DATA }) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  return (
    <div className='flex flex-col w-[540px] h-[560px]'>
      {FAQ_DATA.map((item, index) => {
        return (
          <div
            className='min-h-[107px] flex flex-col border-b-2 border-borderOp justify-center'
            key={index}>
            <div className='flex flex-row w-full justify-between items-center'>
              <p className='font-semibold text-2xl leading-6'>
                {item.question}
              </p>
              <div
                className='w-[28px] [28px] relative cursor-pointer flex justify-center items-end'
                onClick={() => {
                  if (displayIndex === index) {
                    setDisplayIndex(null);
                  } else {
                    setDisplayIndex(index);
                  }
                }}>
                {displayIndex !== index ? (
                  <img
                    src={yellowCircle}
                    alt='circle'
                    className='w-full h-full'></img>
                ) : (
                  <div className='w-[28px] h-[28px] -bg--color-white rounded-full border-2 -border--color-white'></div>
                )}
                <p className='absolute -text--color-black font-extrabold text-2xl'>
                  {displayIndex !== index ? "+" : "−"}
                </p>
              </div>
            </div>
            {displayIndex === index && (
              <p className='py-[39px] text-lg font-medium leading-[29px] opacity-30'>
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
