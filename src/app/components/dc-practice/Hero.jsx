import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Our Washington DC Practice"}
        headclass={" max-w-[250px] sm:max-w-[769px]"}
        para={
          "We take great pride in our state-of-the-art, AAHA-accredited facilities that are meticulously designed to provide a stress-free experience for our patients and human clients alike. Equipped with modern technology and advanced resources, our practices ensure the highest standard of veterinary care."
        }
        path={"/home"}
        img1={"/assests/png/hero-dc.png"}
        imgW={"528"}
        imgH={"450"}
        alt1={"Hero-DC"}
        img2={"/assests/png/hero-dc.png"}
        imgW2={"400"}
        imgH2={"300"}
        alt2={"Hero-DC"}
      />
    </>
  );
}

export default Hero;
