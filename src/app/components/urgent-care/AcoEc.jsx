import React from "react";
import { AcoIcon } from "../helper/Icon";
import SubHeading from "../common/SubHeading";
import { ecAco } from "../helper/Helper";
import Qutions from "../common/Qutions";

function AcoEc() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
        <SubHeading
          title={"Why Choose Nebula Vets for Emergency and Urgent Care:"}
        />
        <div className="flex flex-col gap-y-8 w-full mt-10">
          {ecAco.map((item, index) => (
            <Qutions key={index} heading={item.heading} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AcoEc;
