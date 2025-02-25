import React from "react";
import SubHeading from "../common/SubHeading";
import { spayAco } from "../helper/Helper";
import AcoProps2 from "../common/AcoProps2";

function SpayAco() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
        <SubHeading
          title={"Why Choose Nebula Vets for Spay and Neuter"}
          className={"roboto-mono text-[#494336] text-2xl md:text-[28px]"}
        />
        <div className="flex flex-col gap-y-8 w-full mt-10">
          {spayAco.map((item, index) => (
            <AcoProps2 key={index} title={item.heading} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SpayAco;
