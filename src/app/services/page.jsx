import React from "react";

import Navbar from "../components/common/Navbar";
import Hero from "../components/services/Hero";
import Swiper from "../components/services/Swiper";
import FourHeading from "../components/services/FourHeading";
import AllCare from "../components/services/AllCare";
import Footer from "../components/common/Footer";

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
