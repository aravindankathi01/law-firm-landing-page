import React from "react";
import ChooseCard from "./ChooseCard";
import { chooseArray } from "../utils/constants";

const Choose = () => {
  return (
    <div className='w-[1139px] h-[551px]'>
      <h1 className='text-center font-semibold text-[54px] leading-[77px] mb-[97px]'>
        Why Choose us?
      </h1>
      <div className='flex flex-row justify-between'>
        {chooseArray.map((item, ind) => {
          return <ChooseCard {...item} key={ind} index={ind} />;
        })}
      </div>
    </div>
  );
};

export default Choose;
