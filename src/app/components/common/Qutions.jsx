import React from "react";
import SubHeading from "./SubHeading";
import { AcoIcon } from "../helper/Icon";

function Qutions({ heading }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <SubHeading
          title={heading}
          className={"roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl"}
        />
        <span>
          <AcoIcon />
        </span>
      </div>

      <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
    </div>
  );
}

export default Qutions;
