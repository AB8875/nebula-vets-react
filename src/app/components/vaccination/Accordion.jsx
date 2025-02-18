import React from "react";
import { AcoIcon } from "../helper/Icon";
import SubHeading from "../common/SubHeading";
import { vacAco } from "../helper/Helper";
import AcoProps2 from "../common/AcoProps2";

function Accordion() {
  return (
    <>
      <div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div className="flex flex-col gap-y-8 w-full mt-10">
            {vacAco.map((item, index) => (
              <AcoProps2 key={index} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
