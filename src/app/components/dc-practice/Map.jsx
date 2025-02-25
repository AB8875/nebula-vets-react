import React from "react";
import SubHeading from "../common/SubHeading";
import Link from "next/link";
import Image from "next/image";

function Map() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-0  md:px-7 lg:px-10 xl:px-12 pt-11 pb-[60px] lg:pb-[140px] lg:pt-20">
          <div className="flex items-start flex-col-reverse lg:flex-row">
            <div className="max-w-none lg:max-w-[420px] px-4 lg:px-0 w-full mt-12 lg:mt-0 ">
              <SubHeading title={" Downtown"} />
              <p className="text-[#494336] text-sm sm:text-base md:text-lg lg:text-2xl leading-[150%] mt-8 roboto-mono">
                2468 18th Street, SW <br />
                Washington DC, 20003
              </p>
              <h1 className="text-[#494336] avanttTRIAL-Normal text-2xl sm:text-3xl md:text-4xl mt-10">
                Opening Hours
              </h1>
              <p className="text-[#494336] text-sm sm:text-base md:text-lg lg:text-2xl leading-[150%] mt-8 roboto-mono">
                Monday - Friday: 8AM - 6PM <br />
                Saturday: 9AM - 5PM <br />
                Sunday: Closed
              </p>
              <h1 className="text-[#494336] avanttTRIAL-Normal text-2xl sm:text-3xl md:text-4xl mt-10">
                Contact
              </h1>
              <p className="text-[#494336] text-sm sm:text-base md:text-lg lg:text-2xl leading-[150%] mt-8 roboto-mono">
                <Link href={"tel: +1 (212) 123-4567"}>
                  Phone: (212) 123-4567
                </Link>
                <br />
                <Link href={"mailto:hello@nebulavets.com"}>
                  {" "}
                  hello@nebulavets.com{" "}
                </Link>
              </p>
            </div>

            <div className="relative text-end sm:!h-[570px] w-full !max-w-[750px] lg:right-[-80px] mx-auto">
              <div className="overflow-hidden bg-none w-full !max-w-[800px] h-[570px]">
                <iframe
                  className="h-[570px] w-full !max-w-[800px]"
                  width="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=782&amp;height=570&amp;hl=en&amp;q=lazybinary&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <Link href={"https://sprunkiphasez.com/"}>Sprunki Phase</Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute w-full bottom-0 -z-10"
          src={"/assests/png/abs-1-travel.png"}
          width={1440}
          height={520}
          alt="abs-1-vaccinations"
        />
      </div>
    </>
  );
}

export default Map;
