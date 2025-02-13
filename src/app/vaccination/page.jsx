import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/vaccination/Hero";
import Petvac from "../components/vaccination/Petvac";
import Accordion from "../components/vaccination/Accordion";
import WhenVac from "../components/vaccination/WhenVac";

function page() {
  return (
    <>
      <Hero />

      <Petvac />

      <Accordion />

      <WhenVac />
    </>
  );
}

export default page;
