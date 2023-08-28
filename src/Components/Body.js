import React from "react";
import Introduction from "./Introduction";
import Choose from "./Choose";
import Gallery from "./Gallery";
import Carousel from "./Carousel";
import OurTeam from "./OurTeam";
import FrequentlyAsked from "./FrequentlyAsked";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center gap-36'>
      <Introduction />
      <Choose />
      <Gallery />
      <Carousel />
      <OurTeam />
      <FrequentlyAsked />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Body;
