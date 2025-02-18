import React from "react";

import Swiper from "../components/services/Swiper";
import FourHeading from "../components/services/FourHeading";
import AllCare from "../components/services/AllCare";

import Hero from "../components/services/Hero";

function page() {
  return (
    <>
      <Hero />

      <Swiper />

      <FourHeading />

      <AllCare />
    </>
  );
}

export default page;
