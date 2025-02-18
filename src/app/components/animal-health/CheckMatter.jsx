import React from "react";
import { animalAco } from "../helper/Helper";
import AcoProps2 from "../common/AcoProps2";
function CheckMatter() {
  return (
    <>
      <div className="relative ">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-14 md:py-20">
          <div>
            <h1 className="text-[#494336] avanttTRIAL-Normal text-2xl sm:text-3xl md:text-4xl">
              Why Animal Health Checks Matter:
            </h1>
            <div>
              <div className="flex flex-col gap-y-8 w-full mt-10">
                {animalAco.map((item, index) => (
                  <AcoProps2 key={index} title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckMatter;
