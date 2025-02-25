import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Surgery"}
        para={
          "In our state-of-the-art surgery suite, equipped with advanced technology and facilities, our highly experienced veterinarians are proficient in performing a wide range of surgical procedures. From routine surgeries like spays and neuters to more specialized soft tissue surgeries such as mass removals, laceration repair, abscess treatment, and dental procedures, we offer comprehensive surgical care for your pet."
        }
        path={"/home"}
        img1={"/assests/png/hero-surgery.png"}
        imgW={"445"}
        imgH={"440"}
        imgclass={"!max-w-[440px]"}
        alt1={"Hero-Surgery"}
        img2={"/assests/png/hero-surgery.png"}
        imgW2={"300"}
        imgH2={"300"}
        imgclass2={"!max-w-[300px]"}
        alt2={"Hero-Surgery"}
      />
    </>
  );
}

export default Hero;
