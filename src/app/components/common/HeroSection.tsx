"use client";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import useNavigation from "@/app/hooks/useNavigation";
function HeroSection() {
  const { isAnimating, handleAnimationComplete, handleNavigate } =
    useNavigation();
  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed top-0  left-0 z-50 w-screen h-screen bg-green-500"
          initial={{ scaleX: 0 }} // Start off-screen
          animate={{ scaleX: 1 }} // Slide in from the right
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }} // Ensure it scales from the right
          onAnimationComplete={handleAnimationComplete} // Trigger navigation after animation
        />
      )}

      <div className="section-home-hero text-white">
        <div className="home-hero-component">
          <div className="container-home-hero">
            <div className="home-hero-content flex justify-center ">
              <h1 className="hero-header w-11/12  max-md:text-3xl font-extrabold text-6xl text-balance">
                We develop innovative solutions to your most difficult problems
                using precise planning and extreme imagination
              </h1>
              <div className="scroll-down-button w-full max-md:mb-28 flex justify-center items-center">
                <Image
                  src="/home/up.png"
                  height={55}
                  width={55}
                  alt=""
                  loading="lazy"
                  sizes="(max-width: 767px) 32px, (max-width: 991px) 40px, 56px"
                  className="hand-emoji  down   rotate-180 max-sm:h-[50px] max-sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero-button-wrapper">
          <div className="rotate-button">
            <motion.div className="shake">
              <Button
                onClick={() => handleNavigate("/contact-us")}
                className=" text-4xl max-sm:text-[1.5rem] max-sm:p-2 max-sm:px-10  -rotate-6 hover:bg-cuPurple border-none p-3 px-7"
                variant="cuPurple"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
