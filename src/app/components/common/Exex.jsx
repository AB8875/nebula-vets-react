import React from "react";
import SubHeading from "./SubHeading";
import Para from "./Para";

function Exex() {
  return (
    <>
      <div className="bg-[rgba(215,217,221,0.50)]  relative">
        <div className="max-w-[1200px] mx-auto px-4 md:px-7 lg:px-10 xl:px-12 py-11 md:py-20">
          <SubHeading
            title={
              " Experience Exceptional Animal Health Checks at Nebula Vets:"
            }
          />
          <Para
            para={
              "At Nebula Vets, we are committed to providing exceptional animal health checks that go beyond the basics. Our thorough evaluations, personalized care, and commitment to preventive medicine set us apart. Trust us to be your partner in ensuring your pet's well-being and delivering the highest standard of veterinary care."
            }
            className={"mt-10"}
          />
        </div>
      </div>
    </>
  );
}

export default Exex;
