import PreFooter from "./components/common/PreFooter";
import Swiper from "./components/home/Swiperr";
import AboutNebulaVets from "./components/home/AboutNebulaVets";
import AccordionHome from "./components/home/AccordionHome";
import Hero from "./components/home/Hero";
import OurApproach from "./components/home/OurApproach";
import OurService from "./components/home/OurService";

export default function Home() {
  return (
    <>
      <Hero />

      <OurApproach />

      <AccordionHome />

      <OurService />

      <Swiper />

      <AboutNebulaVets />

      <PreFooter />
    </>
  );
}
