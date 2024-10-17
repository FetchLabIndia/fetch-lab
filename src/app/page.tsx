"use client";

import Footer from "./components/common/Footer";
import OurServices from "./components/common/OurServices";
import Project from "./components/common/Projects";
import StayEngaged from "./components/common/StayEngaged";
import transition from "./components/custom/Transition";
import HeroSection from "./components/common/HeroSection";
import WorkCarousel from "./components/common/WorkCarousel";
import ClientMarquee from "./components/common/ClientMarquee";

function Home() {
  return (
    <>
      <HeroSection />
      <WorkCarousel />
      <ClientMarquee />
      <OurServices />
      <div className=" md:h-20 h-5"></div>
      <Project />
      <div className=" md:h-20 h-5"></div>
      <StayEngaged />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </>
  );
}

export default transition(Home);
