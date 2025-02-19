import React from "react";
import Buttons from "../common/Buttons";
import Image from "next/image";
import Heading from "../common/Heading";
import Para from "../common/Para";
import HeroCom from "../common/HeroCom";

function Hero() {
  return (
    <>
      <HeroCom
        title={"Telemedicine"}
        para={
          "Nebula Vets' online telemedicine service is a convenient and innovative way to connect with our veterinary doctors from the comfort of your own home. Through this platform, you can have a virtual consultation with our experienced veterinarians, allowing you to receive timely and expert advice for your pet's health concerns without the need to physically visit our clinic."
        }
        path={"/home"}
        img1={"/assests/png/hero-telemedi.png"}
        imgW={600}
        imgH={500}
        alt1={"Telemedicine"}
        img2={"/assests/png/hero-telemedi.png"}
        imgW2={400}
        imgH2={300}
        alt2={"Telemedicine"}
      />
    </>
  );
}

export default Hero;
