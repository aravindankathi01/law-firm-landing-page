// import React from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper/css";
// import { Navigation, A11y } from "swiper/modules";
// import { useEffect } from "react";
// import LeftNavigation from "./LeftNavigation";
// import RightNavigation from "./RightNavigation";
// import CarouselButtons from "./CarouselButtons";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();
//   console.log("HOOK SWIPER", swiper);
//   useEffect(() => {
//     swiper.slideTo(0);
//   }, [data]);

//   return <></>;
// };

// const MainCarousel = ({ data, renderCardComponent, children, ref }) => {
//   return (
//     <div className='w-full flex flex-row gap-[30px] relative h-screen overflow-visible mt-96'>
//       <Swiper
//         className='static'
//         initialSlide={0}
//         modules={(Navigation, A11y)}
//         slidesPerView={"auto"}
//         spaceBetween={30}
//         allowTouchMove={true}
//         ref={ref}>
//         <CarouselButtons />

//         <Controls data={data} />
//         {/* {children} */}

//         {data.map((item, index) => {
//           return (
//             <SwiperSlide key={index}>
//               {renderCardComponent(item, index)}
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default MainCarousel;
