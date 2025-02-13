import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

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
          <div className="max-w-[672px]">
            <SubHeading
              title={"Urgent & Emergency Care"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                " Whether your pet is sick or injured, we’re here to help get them the help they need. This includes telemedicine veterinary consults if you are unsure, and overnight care for 24-hour treatment."
              }
              className={"  mt-6"}
            />

            <div className="mt-10 group">
              <Buttons path={"/"} button={"LEARN MORE"} />
            </div>
            <div className="bg-black h-[1px] mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <h1 className="text-[#494336] roboto-mono text-base sm:text-[20px] md:text-[28px]"></h1>
            <SubHeading
              title={"Telemedicine consults"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />

            <Para
              para={
                "Nebula vets offers a fast telemedicine service, to help your pet without leaving the home"
              }
              className={" mt-6"}
            />
            <div className="mt-10 group">
              <Buttons path={"/"} button={"LEARN MORE"} />
            </div>
            <div className="bg-black h-[1px] mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <SubHeading
              title={"Diagnostics"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />

            <Para
              para={
                "Nebula vets has invested in the latest technology, equipped for all the diagnostic tests your pet needs to stay healthy, and to treat those that get sick. We’re able to run tests quickly in-house in situations where a rapid diagnosis is required and offer artificialintelligence alongside veterinary experts."
              }
              className={" mt-6"}
            />

            <div className="mt-10 group">
              <Buttons path={"/"} button={"LEARN MORE"} />
            </div>
            <div className="bg-black h-[1px] mt-[60px] max-w-[633px]"></div>
          </div>

          <div className="max-w-[672px] mt-8">
            <SubHeading
              title={"Pharmacy"}
              className={
                "roboto-mono !text-base sm:!text-[20px] md:!text-[28px]"
              }
            />
            <Para
              para={
                "Our highly stocked on-site pharmacy inlcudes a variety of prescription medications and pet health products for your pet. If a particular medication is unavailable, our compounding pharmacy can have it delivered to you within 24 hours."
              }
              className={" mt-6"}
            />

            <div className="mt-10 group">
              <Buttons path={"/"} button={"LEARN MORE"} />
            </div>
            <div className="bg-black h-[1px] mt-[60px] max-w-[633px]"></div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default SiCare;
