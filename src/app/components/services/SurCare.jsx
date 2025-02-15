import Image from "next/image";
import React from "react";
import Buttons from "../common/Buttons";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { surData } from "../helper/Helper";

function SurCare() {
  return (
    <>
      <div
        id="surgery"
        className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between"
      >
        <div className="mt-[120px] md:mt-0 2xl:ms-[250px]">
          <div className="-mb-12 md:mb-0 max-w-[220px] sm:max-w-[356px]">
            <Image
              className="w-full"
              src={"/assests/png/surgery-veternary.png"}
              width={356}
              height={345}
              alt="surgery-veternary"
            />
          </div>
          <div className="mt-0 md:mt-[100px] px-8 md:px-0">
            <SubHeading title={"Surgery"} className={"lg:text-5xl"} />
            <Para
              para={
                "Highly experienced surgeons -dedicated to delivering outstanding care for your pet."
              }
              className={"max-w-none md:max-w-[518px] mt-6 roboto-mono"}
            />

            <Para
              para={
                "At Nebula Vets, we are equipped to handle a wide range of veterinary services, from emergency surgeries to routine procedures like neuters. Our team of skilled veterinarians is committed to providing the highest level of care to your pets."
              }
              className={"max-w-none md:max-w-[481px] mt-9"}
            />

            <div className="mt-10 group">
              <Buttons path={"/"} button={"BOOK NOW"} />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(215,217,221,0.50)] pt-[60px] pb-[80px] md:pt-[80px] md:pb-[150px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0">
          {surData.map((item, index) => (
            <div key={index} className="max-w-[672px] mb-8">
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
              <div className="bg-black h-[1px] mt-[60px] max-w-[633px]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SurCare;
