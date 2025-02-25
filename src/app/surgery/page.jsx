import React from "react";
import Hero from "../components/surgery/Hero";
import PreCons from "../components/surgery/PreCons";
import PetSurgery from "../components/surgery/PetSurgery";
import Exex from "../components/common/Exex";
import PreFooter2 from "../components/common/PreFooter2";

function page() {
  return (
    <>
      <Hero />

      <PreCons />

      <PetSurgery />

      <Exex />

      <PreFooter2 />
    </>
  );
}

export default page;
