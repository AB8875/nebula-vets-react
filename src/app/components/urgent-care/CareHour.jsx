import Image from "next/image";
import React from "react";
import SubHeading from "../common/SubHeading";
import Para from "../common/Para";
import { listEC } from "../helper/Helper";

function CareHour() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[150px] lg:pt-20">
          <div>
            <SubHeading title={"Urgent & Emergency Care during open hours"} />
            <Para
              para={
                "At Nebula Vets, we understand that emergencies can happen at any time, and your pet's health and well-being are our top priority. We have convenient operating hours to ensure that we are available when you need us."
              }
              className={"mt-5"}
            />
            <Para
              para={
                <>
                  "Our clinic is open from
                  <span className="!avanttTRIAL-bold font-bold">
                    8am to 6pm on weekdays and from 9am to 5pm on Saturdays.
                  </span>
                  During these hours, our team of veterinarians and staff are
                  ready to provide care for your pets"{" "}
                </>
              }
              className={"mt-5"}
            />
            <Para
              para={
                "If you have an urgent situation and require immediate advice or first aid instructions while you're on your way to our practice, you can contact us at 1234567. Our knowledgeable staff will assist you and provide guidance to help you manage the situation until you arrive."
              }
              className={"mt-5"}
            />
            <SubHeading title={"Outside open hours"} className={"mt-7"} />
            <Para
              para={
                "The closest 24hr emergency veterinary hospital to our practice is: Their number is 123456"
              }
              className={"mt-5 max-w-[600px]"}
            />

            <div>
              <SubHeading
                title={"Reasons to seek Urgent or Emergency care"}
                className={"mt-7"}
              />

              <ul className="*:text-[#494336] *:text-sm *:sm:text-base *:md:text-lg *:lg:text-xl mt-6 list-disc list-inside">
                {listEC.map((item, index) => (
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
          src={"/assests/png/abs-1-emergency.png"}
          width={1440}
          height={469}
          alt="abs-1-emergency"
        />
      </div>
    </>
  );
}

export default CareHour;
