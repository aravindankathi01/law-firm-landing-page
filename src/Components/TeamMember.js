import React from "react";

const TeamMember = ({ image, noOfCases, name }) => {
  return (
    <div className='hover:rounded-2xl w-[344px] h-[109px] flex flex-row gap-[22px] pl-8 items-center hover:-bg--color-button hover:-text--color-black cursor-pointer'>
      <img
        src={image}
        alt='teamMember'
        className='w-[68px] h-[68px] rounded-full'></img>
      <div className='flex flex-col leading-6'>
        <p className='font-semibold text-2xl'>{name}</p>
        <p className='font-normal text-sm opacity-40'>{noOfCases} Cases</p>
      </div>
    </div>
  );
};

export default TeamMember;
