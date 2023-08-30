import React, { useState } from "react";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  return (
    <div className='h-[356px] w-[1245px] flex justify-center items-center bg-Subscribe'>
      <div className='w-[686px] h-[170px] flex flex-col gap-[42px]'>
        <h1 className='w-full text-center font-semibold text-[55px] leading-[75px]'>
          Subscribe Our Newsletter
        </h1>
        <div className='w-full flex flex-row h-[53px] gap-[9px]'>
          <div className='w-[276px] rounded-l-lg -bg--color-white flex items-center pl-6'>
            <input
              type='text'
              name='name'
              value={formData.name}
              id='name'
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              className='text-ash font-normal text-sm leading-[19px] w-[201px] h-6 pl-2'
              placeholder='Name:'></input>
          </div>
          <div className='w-[276px] -bg--color-white flex items-center pl-6'>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              className='text-ash font-normal text-sm leading-[19px] w-[201px] h-6 pl-2'
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              placeholder='Enter your Email'></input>
          </div>
          <div className='cursor-pointer w-[116px] rounded-r-lg -bg--color-button flex justify-center items-center -text--color-black font-medium text-sm leading-[19px]'>
            SEND
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
