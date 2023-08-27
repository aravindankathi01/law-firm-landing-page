import React from "react";
import Gift from "../assets/Gift.jpg";
const ChooseCard = ({ successRate, description, index }) => {
  const style = index % 2 === 1 ? "bg-odd" : "border-2 border-borderOp";

  return (
    <div
      className={
        "flex flex-col w-[359px] h-[377px] pl-6 pt-7 gap-6 rounded-2xl " + style
      }>
      <div className='w-[101px] h-[101px] rounded-full -bg--color-white flex justify-center items-center'>
        <img src={Gift} alt='gift' className=''></img>
      </div>
      <p className='font-semibold text-[24px] leading-6'>{successRate}</p>
      <p className='font-medium text-sm leading-[22px] opacity-30'>
        {description}
      </p>
      <button className='h-[43px] w-[121px] -bg--color-button rounded-full -text--color-black text-base font-medium'>
        Read More
      </button>
    </div>
  );
};

export default ChooseCard;
