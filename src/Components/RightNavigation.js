// import React, { useState, useEffect } from "react";
// import { useSwiper } from "swiper/react";
// import right from "../assets/RightArrow.png";
// const RightNavigation = () => {
//   const swiper = useSwiper();
//   const [isEnd, setIsEnd] = useState(swiper.isEnd);
//   console.log("right swiper", swiper.isEnd);

//   useEffect(() => {
//     swiper.on("slideChange", () => {
//       setIsEnd(swiper.isEnd);
//     });
//   }, []);

//   // swiper.on("slideChange", () => {
//   //   setIsEnd(swiper.isEnd);
//   // });
//   return (
//     <div
//       // className='w-[90px] h-[90px] rounded-full -bg--color-button right-0 absolute top-4 z-10'
//       className='w-[90px] h-[90px] rounded-full -bg--color-button flex justify-center items-center cursor-pointer absolute top-4 z-10 right-0 '
//       onClick={() => swiper.slideNext()}>
//       {!isEnd && <img src={right} alt='right'></img>}
//     </div>
//   );
// };

// export default RightNavigation;
