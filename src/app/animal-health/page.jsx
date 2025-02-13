import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/animal-health/Hero";
import CheckExam from "../components/animal-health/CheckExam";
import CheckMatter from "../components/animal-health/CheckMatter";
import Exex from "../components/common/Exex";
import PreFooter2 from "../components/common/PreFooter2";
import Footer from "../components/common/Footer";

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
