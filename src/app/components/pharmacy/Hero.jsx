import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Pharmacy"}
        para={
          "At Nebula Vets, we understand the importance of convenient access to necessary medications and pet health products for your furry companions. That's why we have an on-site pharmacy stocked with a wide range of prescription medications, prescription diets, and other pet health products."
        }
        path={"/home"}
        img1={"/assests/png/hero-pharmacy.png"}
        imgW={526}
        imgH={451}
        alt1={"Pharmacy"}
        img2={"/assests/png/hero-pharmacy.png"}
        imgW2={350}
        imgH2={260}
        alt2={"Pharmacy"}
      />
    </>
  );
}

export default Hero;
