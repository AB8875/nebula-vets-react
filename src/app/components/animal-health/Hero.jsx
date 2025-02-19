import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Animal Health Check"}
        para={
          "This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due."
        }
        path={"/home"}
        img1={"/assests/png/hero-animalcheck.png"}
        imgW={527}
        imgH={500}
        alt1={"Animal-Health"}
        img2={"/assests/png/hero-animalcheck-2.png"}
        imgW2={400}
        imgH2={350}
        alt2={"Animal-Health"}
        imgclass2={"!max-w-[220px]"}
        mainclass={"flex-col-reverse"}
      />
    </>
  );
}

export default Hero;
