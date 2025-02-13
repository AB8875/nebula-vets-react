import Image from "next/image";
import React from "react";
import Accordion from "./Accordion";
import Aco2 from "./Aco2";
import Aco3 from "./Aco3";
import Aco4 from "./Aco4";
import Aco5 from "./Aco5";
import Aco6 from "./Aco6";
import Aco7 from "./Aco7";

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
                <Accordion />
                <Aco2 />
                <Aco3 />
                <Aco4 />
                <Aco5 />
                <Aco6 />
                <Aco7 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckMatter;
