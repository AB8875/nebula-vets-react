import React from "react";
import PreCare from "./PreCare";
import SickCare from "../home/ SickCare";
import SiCare from "./SiCare";
import SurCare from "./SurCare";
import AddCare from "./AddCare";

function AllCare() {
  return (
    <>
      <div className="md:ps-7 lg:ps-10 xl:ps-12">
        <PreCare />
        <SiCare />
        <SurCare />
        <AddCare />
      </div>
    </>
  );
}

export default AllCare;
