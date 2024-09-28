"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/ui/Button";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

function ContactForm() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const containerCenterX = rect.width / 2;
    const containerCenterY = rect.height / 2;

    // Calculate mouse position relative to container center
    const mouseX = event.clientX - rect.left - containerCenterX;
    const mouseY = event.clientY - rect.top - containerCenterY;

    // Move the eye slightly based on the mouse position, limit movement range
    const maxOffset = 11; // Maximum offset for the eye movement
    const newX = (mouseX / containerCenterX) * maxOffset;
    const newY = (mouseY / containerCenterY) * maxOffset;

    setEyePosition({ x: newX, y: newY });
    setCursorPos({ x: event.pageX, y: event.pageY });
  };

  return (
    <div
      className="flex w-full mt-28 py-11 border-b border-zinc-800 items-start justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-11/12 flex max-md:flex-col max-md:gap-y-6 items-start justify-between relative group">
        <div className="text-9xl max-sm:text-5xl font-extrabold text-white leading-ms tracking-ms flex flex-col max-md:flex-row max-md:items-baseline max-md:justify-center max-md:flex-wrap max-md:gap-x-4 transition-transform duration-300">
          <p>Let&apos;s</p>
          <p className="-mt-5">partner</p>
          <div className=" flex gap-4  -mt-4 items-center">
            <p className="">up</p>

            <div className=" relative h-full mb-7 max-md:hidden">
              <Image
                src="/contact/eye-cover.png"
                alt="eye cover"
                height={120}
                width={120}
                className=" h-full "
              />
              <Image
                src="/contact/eye.png"
                className=" absolute inset-0 m-auto"
                alt="eye"
                height={100}
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                }}
                width={100}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-md:w-full w-1/2 gap-4">
          <input
            type="text"
            className="bg-foreground  font-sofiaSans outline-none placeholder:text-base text-base font-normal text-white rounded-full p-3 w-full px-5"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-foreground font-sofiaSans  outline-none placeholder:text-base text-base font-normal text-white rounded-full p-3 w-full px-5"
            placeholder="Email"
          />
          <div className="relative w-full font-sofiaSans">
            <select className="bg-foreground outline-none placeholder:text-base text-base font-normal text-white relative appearance-none rounded-full p-3 w-full px-5 pr-10">
              <option value="">How can we help you?</option>
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
          </div>
          <textarea className="bg-foreground font-sofiaSans text-white outline-none placeholder:text-base text-base font-normal min-h-52 rounded-2xl p-3 w-full px-5"></textarea>
          <Button variant="cuGreen" className="text-xl py-1.5">
            Get in touch
          </Button>
        </div>

        {/* Image that follows the cursor, animated with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.3 }}
          className="absolute"
          style={{
            left: `${cursorPos.x - 80}px`,
            top: `${cursorPos.y - 170}px`,
            width: "50px", // Adjust size as needed
            height: "auto",
            pointerEvents: "none", // Ensures mouse events go through the image
            transform: "translate(-50%, -50%)", // Center the image on the cursor
          }}
        >
          <Image
            src="/cursor/pen.png" // Replace with your image path
            alt="Cursor Image"
            height={60}
            width={60}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
