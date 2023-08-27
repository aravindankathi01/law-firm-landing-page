import React from "react";
import ChooseCard from "./ChooseCard";

const Choose = () => {
  const chooseArray = [
    {
      successRate: "98% Success Rate",
      description: `Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia
      consequatduis enim velit mollit Exer`,
    },
    {
      successRate: "100% Success Rate",
      description: `Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia
      consequatduis enim velit mollit Exer`,
    },
    {
      successRate: "100% Success Rate",
      description: `Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia
      consequatduis enim velit mollit Exer`,
    },
  ];
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
