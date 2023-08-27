import React from "react";
import { ReactComponent as Vector } from "../assets/Vector.svg";

const Header = () => {
  return (
    <div className='mt-[10px] w-full flex flex-row items-center justify-between'>
      <div className='flex flex-row gap-3'>
        <Vector />
        <h1 className='text-xl font-bold font-'>IGSTUDIO</h1>
      </div>
      <div className='flex flex-row w-[431px] h-[21px] gap-[41px]'>
        <p>Home</p>
        <p>Attroneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className='w-[172px] h-[47px] border-2 -border--color-white flex justify-center items-center font-semibold'>
        <p>Contact now</p>
      </div>
    </div>
  );
};

export default Header;
