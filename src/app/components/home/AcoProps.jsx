import React from "react";
import { AcoIcon } from "../helper/Icon";

function AcoProps({ qustion }) {
  return (
    <>
      <div className="max-w-none md:max-w-[480px]">
        <div className="flex items-center justify-between">
          <h1 className="roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl leading-[150%] text-[#D7D9DD]">
            {qustion}
          </h1>
          <span className="size-6 sm:size-7 cursor-pointer rotate-0  transition-transform transform">
            <AcoIcon />
          </span>
        </div>
        <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9D9] to-100% h-[2px] mt-6"></div>
      </div>
    </>
  );
}

export default AcoProps;
