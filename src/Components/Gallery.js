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
        <div className='rounded-[14px] col-span-2 w-[752px] h-[342px] relative'>
          {/* <BusinessLaw /> */}
          <img src={BusinessLaw} alt='BusinessLaw'></img>
          <h1 className='absolute bottom-[41px] text-2xl font-semibold leading-6 left-auto right-auto text-center w-full text-title'>
            BUSINESS LAW
          </h1>
        </div>
        <div className='rounded-[14px] w-[358px] h-[342px] relative'>
          {/* <PartnershipLaw /> */}
          <img src={PartnershipLaw} alt='PartnershipLaw'></img>
          <h1 className='absolute bottom-[41px] text-2xl font-semibold leading-6 left-auto right-auto text-center w-full text-title'>
            Patnership LAW
          </h1>
        </div>
        <div className='rounded-[14px] w-[358px] h-[342px] relative'>
          {/* <RealEstateLaw /> */}
          <img src={RealEstateLaw} alt='RealEstateLaw'></img>
          <h1 className='absolute bottom-[41px] text-2xl font-semibold leading-6 left-auto right-auto text-center w-full text-title'>
            REAL ESTATE LAW
          </h1>
        </div>
        <div className='rounded-[14px] col-span-2 w-[752px] h-[342px] relative'>
          {/* <BusinessLaw2 /> */}
          <img src={BusinessLaw2} alt='BusinessLaw2'></img>
          <h1 className='absolute bottom-[41px] text-2xl font-semibold leading-6 left-auto right-auto text-center w-full text-title'>
            BUSINESS LAW
          </h1>
        </div>
        <div className='rounded-[14px] col-span-2 w-[752px] h-[342px] relative'>
          {/* <LandlordDisputes /> */}
          <img src={LandlordDisputes} alt='Landlord'></img>
          <h1 className='absolute bottom-[41px] text-2xl font-semibold leading-6 left-auto right-auto text-center w-full text-title'>
            LANDLORD DISPUTES
          </h1>
        </div>
        <div className='rounded-[14px] w-[358px] h-[342px] relative'>
          {/* <ElderAbuse /> */}
          <img src={ElderAbuse} alt='ElderAbuse'></img>
          <h1 className='absolute bottom-[41px] text-2xl font-semibold leading-6 left-auto right-auto text-center w-full text-title'>
            ELDER ABUSE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
