import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Spay & Neuter"}
        para={
          "Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia.Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia."
        }
        path={"/home"}
        img1={"/assests/png/hero-spay.png"}
        imgW={"440"}
        imgH={"420"}
        imgclass={"!max-w-[420px]"}
        alt1={"Hero-Spay"}
        img2={"/assests/png/hero-spay.png"}
        imgW2={"300"}
        imgH2={"300"}
        imgclass2={"!max-w-[320px]"}
        alt2={"Hero-Spay"}
      />
    </>
  );
}

export default Hero;
