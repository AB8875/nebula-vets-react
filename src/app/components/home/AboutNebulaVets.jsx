import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";

function AboutNebulaVets() {
  return (
    <>
      <div className="relative bg-[rgba(215,217,221,0.50)] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-[80px] pb-[80px]">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
            <div className="xl:max-w-[591px] w-full justify-center flex">
              <Image
                src={"/assests/png/dog-car.png"}
                width={591}
                height={550}
                alt="dog-cat"
              />
            </div>
            <div className="max-w-none lg:max-w-[639px]">
              <SubHeading title={" About Nebula Vets ?"} />
              <Para
                para={
                  "Founded on a strong set of core values, the story of Nebula Vets began with Daniel Hodnett-Lewis, a visionary veterinary surgeon from England, UK. Fueled by a deep passion for animals and a desire to elevate the standard of care, Daniel embarked on a mission to create a veterinary practice that would revolutionize the way pets are treated and cared for. Here's the story of Nebula Vets"
                }
                paraClass={"mt-3 sm:mt-6"}
              />

              <div className="mt-10 md:mt-13 group">
                <Buttons path={"/"} button={"LEARN MORE"} />
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute h-full hidden lg:block right-0 bottom-0 lg:bottom-100 lg:top-0"
          src={"/assests/png/abs-nebula.png"}
          height={611}
          width={392}
          alt="abs-nebula"
        />
      </div>
    </>
  );
}

export default AboutNebulaVets;
