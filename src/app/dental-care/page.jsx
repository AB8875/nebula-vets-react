import React from "react";
import Hero from "../components/dental-care/Hero";
import DentScale from "../components/dental-care/DentScale";
import DcAco from "../components/dental-care/DcAco";
import Exex from "../components/common/Exex";
import PreFooter2 from "../components/common/PreFooter2";

function page() {
  return (
    <>
      <Hero />

      <DentScale />

      <DcAco />

      <Exex />

      <PreFooter2 />
    </>
  );
}

export default page;
