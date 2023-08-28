import React from "react";
import TeamMember from "./TeamMember";
import { teamData } from "../utils/constants";

const OurTeam = () => {
  return (
    <div className='w-[1156px] h-[425px] flex flex-col gap-[109px] items-center'>
      <h1 className='w-full text-center font-semibold text-[54px] leading-[77px]'>
        Our Team
      </h1>
      <div className='grid grid-cols-3 w-full place-items-center place-content-between gap-y-[62px] gap-l-[189px] gap-r-[219px]'>
        {teamData.map((member, index) => {
          return <TeamMember {...member} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
