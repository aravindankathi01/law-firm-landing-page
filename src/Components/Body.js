import React from "react";
import Introduction from "./Introduction";
import Choose from "./Choose";
import Gallery from "./Gallery";

const Body = () => {
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-36'>
      <Introduction />
      <Choose />
      <Gallery />
    </div>
  );
};

export default Body;
