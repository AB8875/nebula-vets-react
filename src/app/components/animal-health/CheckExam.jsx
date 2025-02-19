import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { animalData } from "../helper/Helper";

function CheckExam() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-14 lg:py-20">
          <div>
            <SubHeading title={"Animal Health Check Exam"} />
            <Para
              para={
                "During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements."
              }
              className={"mt-5"}
            />
            <div>
              <Para
                para={
                  "In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of your pets:"
                }
                className={"mt-5"}
              />
              <ul className="*:text-[#494336] *:text-sm *:sm:text-base *:md:text-lg *:lg:text-xl">
                {animalData.map((item, index) => (
                  <li key={index} className="avanttTRIAL-Normal">
                    {item.list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image
          className="absolute bottom-0 -z-10 w-full"
          src={"/assests/png/abs-1-animalhealth.png"}
          width={1440}
          height={450}
          alt="animal"
        />
      </div>
    </>
  );
}

export default CheckExam;
