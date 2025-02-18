import React from "react";
import { acoDaigno2 } from "../helper/Helper";
import SubHeading from "../common/SubHeading";
import { AcoIcon } from "../helper/Icon";
import AcoProps2 from "../common/AcoProps2";

function BloodAco2() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div className="flex flex-col gap-y-8 w-full mt-10">
            {acoDaigno2.map((item, index) => (
              <AcoProps2 key={index} title={item.heading} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BloodAco2;
