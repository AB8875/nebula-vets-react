import React from "react";
import { animalAco } from "../helper/Helper";
import AcoProps2 from "../common/AcoProps2";
import SubHeading from "../common/SubHeading";
function CheckMatter() {
  return (
    <>
      <div className="relative ">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-14 md:py-20">
          <div>
            <SubHeading title={"Why Animal Health Checks Matter:"} />
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
