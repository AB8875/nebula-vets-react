import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { preCareData } from "../helper/Helper";

function PreCare() {
  return (
    <>
      <div
        id="preventive"
        className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between  "
      >
        <div className="pt-[80px] 2xl:ms-[250px]  ">
          <div className="-mb-12 md:mb-0 max-w-[220px] sm:max-w-[376px] ">
            <Image
              className="w-full"
              src={"/assests/png/preventive-care.png"}
              width={376}
              height={304}
              alt="preventive care"
            />
          </div>
          <div className="px-8 md:px-0">
            <SubHeading title={" Preventive Care"} />
            <Para
              para={"Your pet's well-being at the forefront of our practice."}
              className={"roboto-mono max-w-[520px] mt-4"}
            />

            <Para
              para={
                "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages."
              }
              className={"max-w-[480px] mt-8"}
            />

            <div className="mt-10 group hidden sm:block">
              <Buttons button={"BOOK NOW"} path={"/"} />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(215,217,221,0.50)] py-[60px] md:py-[80px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0">
          {preCareData.map((item, index) => (
            <div key={index} className="max-w-[672px] mb-8">
              <div>
                <SubHeading
                  title={item.title}
                  className={
                    "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
                  }
                />
                <Para para={item.para} className={"mt-6"} />

                <div className="mt-10 group">
                  <Buttons path={item.path} button={item.button} />
                </div>
                <div className="bg-black h-[1px] mt-11 md:mt-15 max-w-[633px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PreCare;
