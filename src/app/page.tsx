"use client";

import Footer from "./components/common/Footer";
import OurServices from "./components/common/OurServices";
import Project from "./components/common/Projects";
import StayEngaged from "./components/common/StayEngaged";
import transition from "./components/custom/Transition";
import HeroSection from "./components/common/HeroSection";
import WorkCarousel from "./components/common/WorkCarousel";
import ClientMarquee from "./components/common/ClientMarquee";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPos({ x: event.pageX, y: event.pageY });
  };
  return (
    <div
      className=" flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.3 }}
        className="absolute max-md:hidden"
        style={{
          left: `${cursorPos.x - 15}px`,
          top: `${cursorPos.y - 10}px`,
          width: "10px", // Adjust size as needed
          height: "auto",
          pointerEvents: "none", // Ensures mouse events go through the image
          transform: "translate(-50%, -50%)", // Center the image on the cursor
        }}
      >
        <Image
          src="/cursordot.svg"
          alt="Cursor Image"
          height={10}
          width={10}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}

export default transition(Home);
