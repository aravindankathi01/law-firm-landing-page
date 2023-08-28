import React from "react";
import { ReactComponent as Vector } from "../assets/Vector.svg";
import pinterest from "../assets/pinterest.png";
import Instagram from "../assets/Instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className='w-full h-[367px] -bg--color-black flex flex-col'>
      <div className='mt-[118px] flex flex-row justify-between mr-[142px] ml-[164px]'>
        <div className='flex flex-row w-[143px] h-[30px] gap-3'>
          <Vector />
          <h1 className='text-xl font-bold font-'>IGSTUDIO</h1>
        </div>
        <div className='flex flex-row gap-[79px] font-semibold text-base'>
          <p>Home</p>
          <p>Attroneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div className='flex flex-row gap-[23px]'>
          <img
            className='w-[30px] h-[30px]'
            src={Instagram}
            alt='instagram'></img>
          <img className='w-[30px] h-[30px]' src={facebook} alt='fb'></img>
          <img className='w-[30px] h-[30px]' src={twitter} alt='x'></img>
          <img className='w-[30px] h-[30px]' src={pinterest} alt='pin'></img>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='mt-[104px] flex flex-row w-[425px] h-[20px] justify-center items-center gap-[21px]'>
          <p className='font-normal text-sm leading-5 opacity-80'>
            © 2023 Acme. All right reserved.
          </p>
          <p className='font-normal text-sm leading-5 opacity-80 cursor-pointer'>
            Privacy Policy
          </p>
          <p className='font-normal text-sm leading-5 opacity-80 cursor-pointer'>
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
