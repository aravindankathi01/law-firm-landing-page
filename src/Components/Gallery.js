import React from "react";
// import { ReactComponent as BusinessLaw } from "../assets/businessLaw.svg";
// import { ReactComponent as BusinessLaw2 } from "../assets/businessLaw2.svg";
// import { ReactComponent as ElderAbuse } from "../assets/elderAbuse.svg";
// import { ReactComponent as LandlordDisputes } from "../assets/landlordDisputes.svg";
// import { ReactComponent as PartnershipLaw } from "../assets/partnershipLaw.svg";
// import { ReactComponent as RealEstateLaw } from "../assets/realEstateLaw.svg";
import BusinessLaw from "../assets/businessLaw.png";
import BusinessLaw2 from "../assets/businessLaw2.png";
import ElderAbuse from "../assets/elderAbuse.png";
import LandlordDisputes from "../assets/landloerDisputes.png";
import PartnershipLaw from "../assets/partnershipLaw.png";
import RealEstateLaw from "../assets/realEstateLaw.png";

const Gallery = () => {
  return (
    <div className='w-[1140px] h-[1228px]'>
      <h1 className='text-center font-semibold text-[54px] leading-[77px] mb-[77px]'>
        Area of Practices
      </h1>
      <div className='grid grid-cols-3 w-full gap-[30px]'>
        <div className='rounded-[14px] col-span-2 w-[752px] h-[342px]'>
          {/* <BusinessLaw /> */}
          <img src={BusinessLaw} alt='BusinessLaw'></img>
        </div>
        <div className='rounded-[14px] w-[358px] h-[342px]'>
          {/* <PartnershipLaw /> */}
          <img src={PartnershipLaw} alt='PartnershipLaw'></img>
        </div>
        <div className='rounded-[14px] w-[358px] h-[342px]'>
          {/* <RealEstateLaw /> */}
          <img src={RealEstateLaw} alt='RealEstateLaw'></img>
        </div>
        <div className='rounded-[14px] col-span-2 w-[752px] h-[342px]'>
          {/* <BusinessLaw2 /> */}
          <img src={BusinessLaw2} alt='BusinessLaw2'></img>
        </div>
        <div className='rounded-[14px] col-span-2 w-[752px] h-[342px]'>
          {/* <LandlordDisputes /> */}
          <img src={LandlordDisputes} alt='Landlord'></img>
        </div>
        <div className='rounded-[14px] w-[358px] h-[342px]'>
          {/* <ElderAbuse /> */}
          <img src={ElderAbuse} alt='ElderAbuse'></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
