import React from "react";

const CarouselCard = ({ image, name, role, description, id }) => {
  const style = id % 2 === 1 ? "bg-odd" : "border-2 border-borderOp";
  console.log(style);
  return (
    <div
      className={
        "pl-[26px] pt-[36px] h-[368px] w-[359px] leading-6 rounded-2xl flex flex-col " +
        style
      }>
      <img
        src={image}
        alt='person'
        className='h-[105px] w-[102px] mb-[20px]'></img>
      <h1 className='font-semibold text-2xl pb-3'>{name}</h1>
      <p className='font-normal text-sm'>{role}</p>
      <p className='font-medium text-sm opacity-30 h-[92px] w-[293px] mt-[22px]'>
        {description}
      </p>
    </div>
  );
};

export default CarouselCard;
