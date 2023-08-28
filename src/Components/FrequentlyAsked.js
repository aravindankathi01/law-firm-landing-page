import React from "react";
import Accordian from "./Accordian";
import { FAQ_DATA } from "../utils/constants";

const FrequentlyAsked = () => {
  return (
    <div className='w-[1140px] h-[629px] flex flex-col'>
      <h1 className='font-semibold text-[54px] leading-[74px] text-start'>
        FAQ
      </h1>
      <div className='flex flex-row gap-[26px] mt-[14px]'>
        <p className='w-[558px] h-[58px] text-lg font-medium leading-7 opacity-30'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <Accordian FAQ_DATA={FAQ_DATA} />
      </div>
    </div>
  );
};

export default FrequentlyAsked;
