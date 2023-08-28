import React from "react";

import CarouselCard from "./CarouselCard";
import { carouselData } from "../utils/constants";

const Carousel = () => {
  return (
    <div className='w-[1137px] h-[626px] flex flex-col gap-[104px]'>
      <div className='h-[154px] w-full flex flex-row justify-between items-center'>
        <h1 className='w-[374px] font-semibold text-[54px] leading-[77px]'>
          What says our happy Clients
        </h1>
        <div className='flex flex-row w-[200px] h-[92px] gap-4'>
          <div className='w-[90px] h-[90px] rounded-full -bg--color-white'></div>
          <div className='w-[90px] h-[90px] rounded-full -bg--color-button'></div>
        </div>
      </div>
      <div className='w-full h-[368px] flex flex-row gap-[30px]'>
        {carouselData.map((item, index) => {
          return <CarouselCard key={index} {...item} id={index} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
