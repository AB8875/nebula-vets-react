import Image from "next/image";
import React from "react";
import Buttons from "../common/Buttons";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { addData } from "../helper/Helper";

function AddCare() {
  return (
    <>
      <div
        id="additional"
        className="flex flex-col md:flex-row items-start justify-between gap-0 md:gap-5 2xl:max-w-[2000px] 2xl:justify-between"
      >
        <div className="pt-[130px] 2xl:ms-[250px]">
          <div className="-mb-12 md:mb-0 max-w-[240px] sm:max-w-[370px]">
            <Image
              className="w-full"
              src={"/assests/png/additonal-veternary.png"}
              width={370}
              height={309}
              alt="additonal-veternary"
            />
          </div>
          <div className="mt-0 md:mt-[90px] px-8 md:px-0">
            <SubHeading title={"Additional Services"} />
            <Para
              para={
                "Additional Services that Go Above and Beyond: Experience Exceptional Veterinary Care at Nebula Vets"
              }
              className={"max-w-none md:max-w-[518px] mt-6 roboto-mono"}
            />
            <Para
              para={
                "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs."
              }
              className={"max-w-none md:max-w-[481px] mt-9"}
            />
            <div className="mt-[100px] group">
              <Buttons button={"BOOK NOW"} path={"/"} />
            </div>
          </div>
        </div>
        <div className="bg-[rgba(215,217,221,0.50)] py-[60px] md:py-[80px] ps-8 md:ps-[100px] pe-8 mt-[60px] md:mt-0">
          {addData.map((item, index) => (
            <div key={index} className="max-w-[672px] mb-8">
              <SubHeading
                title={item.title}
                className={
                  "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
                }
              />
              <Para para={item.para} className={"mt-6"} />
              <div className="mt-10 group">
                <Buttons button={item.button} path={item.path} />
              </div>
              <div className="bg-black h-[1px] mt-[45px] md:mt-[60px] max-w-[633px]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddCare;
