import React from "react";
import Puppy from "./Puppy";
import Kitten from "./Kitten";
import AdultDog from "./AdultDog";
import AdultCat from "./AdultCat";
import SubHeading from "../common/SubHeading";

function WhenVac() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12">
        <SubHeading title={"When to vaccinate?"} />

        <div className="mt-10   grid grid-cols-1 sm:grid-cols-2 gap-4 pb-[50px] sm:pb-[80px] ">
          <Puppy />
          <Kitten />
          <AdultDog />
          <AdultCat />
        </div>
      </div>
    </>
  );
}

export default WhenVac;
