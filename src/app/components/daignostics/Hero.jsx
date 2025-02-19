import React from "react";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Diagnostics"}
        para={
          "At Nebula Vets, we are committed to providing comprehensive and advanced diagnostic testing to ensure the well-being of your cherished pet. Our state-of-the-art veterinary hospital offers a range of diagnostic tests that empower us to gain precise insights into your pet's health. Here are some of the key diagnostic tests available at Nebula Vets for the benefit of our clients and their beloved pets:"
        }
        path={"/home"}
        img1={"/assests/png/diagnostic.png"}
        imgW={500}
        imgH={450}
        alt1={"Diagonstics"}
        img2={"/assests/png/diagnostic.png"}
        imgW2={400}
        imgH2={350}
        alt2={"Diagnostics"}
      />
    </>
  );
}

export default Hero;
