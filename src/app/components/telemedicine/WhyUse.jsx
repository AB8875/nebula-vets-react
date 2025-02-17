import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";

function WhyUse() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[150px] lg:pt-20">
          <div>
            <SubHeading title={"Why use Telemedicine"} />
            <Para
              para={
                "Nebula Vets' online telemedicine service is designed to provide immediate advice and guidance for various veterinary issues. Whether you're unsure about the severity of a symptom or need assistance in determining the best course of action for your pet, our experienced veterinarians can offer real-time advice through the telemedicine platform."
              }
              className={"mt-5"}
            />
          </div>
          <div className="mt-14">
            <SubHeading title={"During the online consultation"} />
            <Para
              para={
                "Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary."
              }
              className={"mt-5"}
            />
            <Para
              para={
                "This immediate access to professional veterinary advice can be particularly valuable in situations where you're unsure if a symptom or behavior is concerning enough to warrant a visit to the clinic. It can save you time and unnecessary stress by providing clarity and peace  of mind."
              }
              className={"mt-5"}
            />
            <Para
              para={
                "However, it's important to note that there are limitations to telemedicine, and certain cases may still require an in-person visit for a thorough examination or diagnostic tests. Our veterinarians will use their expertise to determine the most appropriate course of action based on the information provided during the telemedicine consultation."
              }
              className={"mt-5"}
            />
          </div>
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-emergency.png"}
          width={1440}
          height={470}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default WhyUse;
