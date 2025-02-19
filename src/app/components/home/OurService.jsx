import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";

function OurService() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-7 md:px-7 lg:px-10 xl:px-12 pt-[80px] pb-[90px] lg:pb-[140px]">
          <div className="max-w-[770px] pl-0 lg:pl-[95px]">
            <SubHeading title={"Our Services"} />
            <Para
              para={
                "We are proud to offer a comprehensive range of exceptional clinical services to cater to all your pet's needs. From routine wellness health checks to prompt and efficient urgent care, our team is here to provide the highest level of support and assistance. Count on us to be there for you and your beloved companion every step of the way"
              }
              className={"mt-7"}
            />
            <div className="mt-10 ">
              <Buttons path={"/services"} button={"BOOK NOW"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurService;
