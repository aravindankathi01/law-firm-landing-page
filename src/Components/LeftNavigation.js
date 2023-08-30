// import React, { useState, useEffect } from "react";
// import { useSwiper } from "swiper/react";
// import left from "../assets/LeftArrow.png";
// const LeftNavigation = () => {
//   const swiper = useSwiper();
//   console.log("left swiper", swiper.isBeginning);
//   const [isBegining, setIsBegining] = useState(swiper.isBeginning);

//   useEffect(() => {
//     swiper.on("slideChange", () => {
//       setIsBegining(swiper.isBeginning);
//     });
//   }, []);

//   // swiper.on("slideChange", () => {
//   //   setIsBegining(swiper.isBeginning);
//   // });
//   return (
//     <div
//       className='w-[90px] h-[90px] rounded-full -bg--color-white flex justify-center items-center cursor-pointer absolute top-4 z-10'
//       // className='w-[90px] h-[90px] rounded-full -bg--color-white absolute top-4 z-10'
//       onClick={() => swiper.slidePrev()}>
//       {!isBegining && <img src={left} alt='left' className=''></img>}
//     </div>
//   );
// };

// export default LeftNavigation;
