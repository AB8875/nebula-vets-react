import React from "react";
import { AcoIcon } from "../helper/Icon";
import SubHeading from "../common/SubHeading";
import { vacAco } from "../helper/Helper";

function Accordion() {
  return (
    <>
      <div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div className="flex flex-col gap-y-8 w-full mt-10">
            {vacAco.map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center justify-between">
                  <SubHeading
                    title={item.title}
                    className={
                      "roboto-mono text-base sm:text-lg md:text-xl lg:text-2xl "
                    }
                  />
                  <span>
                    <AcoIcon />
                  </span>
                </div>

                <div className="bg-gradient-to-r from-[#FFA280] from-0% to-[#8FD9CB] to-100% h-[2px] mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
