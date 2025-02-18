import React from "react";

import CheckExam from "../components/animal-health/CheckExam";
import CheckMatter from "../components/animal-health/CheckMatter";
import Exex from "../components/common/Exex";
import PreFooter2 from "../components/common/PreFooter2";

import Hero from "../components/animal-health/Hero";

function page() {
  return (
    <>
      <Hero />

      <CheckExam />

      <CheckMatter />

      <Exex />

      <PreFooter2 />
    </>
  );
}

export default page;
