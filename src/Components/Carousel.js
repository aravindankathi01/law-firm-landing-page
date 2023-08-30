import React, { useEffect, useRef, useState } from "react";
import left from "../assets/LeftArrow.png";
import right from "../assets/RightArrow.png";
import "swiper/css";
import CarouselCard from "./CarouselCard";
import { carouselData } from "../utils/constants";
// import MainCarousel from "./MainCarousel";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

const Carousel = () => {
  const sliderRef = useRef();
  // const [isBegining, setIsBegining] = useState(true);
  // const [isEnd, setIsEnd] = useState(false);
  // const [timePass, setTimePass] = useState(true);

  // sliderRef.current.swiper.isBeginning

  // useEffect(() => {
  //   sliderRef.current.swiper.on("slideChange", () => {
  //     setIsBegining(sliderRef.current.swiper.isBeginning);
  //   });
  // }, []);

  const handleButtonClick = (direction) => {
    if (direction === "Left") {
      sliderRef.current.swiper.slidePrev();

      console.log(sliderRef.current.swiper, "left");
    } else {
      sliderRef.current.swiper.slideNext();

      console.log("Right", sliderRef.current.swiper);
    }
  };

  // useEffect(() => {
  //   setIsBegining(sliderRef.current.swiper.isBeginning);
  //   setIsEnd(sliderRef.current.swiper.isEnd);
  // }, [sliderRef.current.swiper.isBegining, sliderRef.current.swiper.isEnd]);

  const Controls = ({ data }) => {
    const swiper = useSwiper();
    console.log("HOOK SWIPER", swiper);
    useEffect(() => {
      swiper.slideTo(0);
    }, [data]);

    return <></>;
  };

  return (
    <div className='w-[1137px] gap-[104px] relative'>
      <div className='h-[154px] w-full flex flex-row justify-between items-center mb-16'>
        <h1 className='w-[374px] font-semibold text-[54px] leading-[77px]'>
          What says our happy Clients
        </h1>
        <div className='flex gap-6'>
          {
            <div
              className='w-[90px] h-[90px] rounded-full -bg--color-white flex justify-center items-center cursor-pointer'
              onClick={() => {
                handleButtonClick("Left");
              }}>
              <img src={left} alt='left'></img>
            </div>
          }
          {
            <div
              className='w-[90px] h-[90px] rounded-full -bg--color-button flex justify-center items-center cursor-pointer'
              onClick={() => {
                handleButtonClick("Right");
              }}>
              <img src={right} alt='right'></img>
            </div>
          }
        </div>
      </div>

      {/* <div className='w-full flex flex-row gap-[30px]'> */}
      <Swiper
        className='static'
        initialSlide={0}
        modules={Navigation}
        slidesPerView={"auto"}
        spaceBetween={30}
        allowTouchMove={true}
        ref={sliderRef}>
        <Controls data={carouselData} />

        {carouselData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouselCard {...item} id={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default Carousel;
// h-[626px] flex flex-col
// {
//   /* <MainCarousel
// data={carouselData}
// children=<div className='flex flex-row w-[200px] h-[92px] gap-4 absolute top-0 right-3 z-50'>
//   <LeftNavigation />
//   <RightNavigation />
// </div>
// ref={sliderRef}
// renderCardComponent={(item, index) => {
//   return <CarouselCard {...item} id={index} />;
// }}
// /> */
// }
