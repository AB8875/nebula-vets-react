import React from "react";
import Aco2 from "../animal-health/Aco2";
import Aco3 from "../animal-health/Aco3";
import Aco4 from "../animal-health/Aco4";

function Accordion() {
  return (
    <>
      <div>
        <div class="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 lg:py-20">
          <div class="flex flex-col gap-y-8 w-full mt-10">
            <Aco2 />
            <Aco3 />
            <Aco4 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
