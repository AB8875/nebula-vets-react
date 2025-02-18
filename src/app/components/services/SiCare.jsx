import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { sickData } from "../helper/Helper";
import SubPara from "./SubPara";

function SiCare() {
  return (
    <>
      <div
        id="sick"
        className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between"
      >
        <div className="mt-[120px] md:mt-0 2xl:ms-[250px]">
          <div className="-mb-12 md:mb-0 max-w-[220px] sm:max-w-[356px]">
            <Image
              className="w-full"
              src={"/assests/png/sick-care.png"}
              width={356}
              height={359}
              alt="sick care"
            />
          </div>
          <div className="mt-0 md:mt-[80px] px-8 md:px-0">
            <SubHeading title={"Sick Patient Care"} className={"lg:text-5xl"} />
            <Para
              para={
                "Delivering exceptional care for sick patients, combining the virtues of efficiency and expertise"
              }
              className={"max-w-none md:max-w-[518px] mt-6 roboto-mono"}
            />

            <Para
              para={
                "At Nebula Vets, we are fully equipped with advanced diagnostic tools and a wide range of treatment options to address any health issue your pet may be facing. Our commitment to comprehensive care means that we have the expertise and resources to provide accurate diagnoses and effective treatments."
              }
              className={"max-w-none md:max-w-[481px] mt-9"}
            />
            <div className="mt-10 group">
              <Buttons path={"/"} button={"LEARN MORE"} />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(215,217,221,0.50)] py-[60px] md:py-[80px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0">
          {sickData.map((item, index) => (
            <SubPara
              key={index}
              title={item.title}
              para={item.para}
              button={item.button}
              path={item.path}
            />
          ))}
        </div>
      </div>{" "}
    </>
  );
}

export default SiCare;
