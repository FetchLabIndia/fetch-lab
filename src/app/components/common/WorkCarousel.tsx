import React, { useRef, useState } from "react";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";
function WorkCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 900;
    }
  };
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 900;
    }
  };
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPos({ x: event.pageX, y: event.pageY });
  };
  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" relative flex w-full cursor-none transition-all duration-200 scroll-smooth overflow-scroll snap-mandatory snap-x gap-6 p-4 px-14 mb-11"
      >
        <Image
          src={
            "https://cdn.prod.website-files.com/65216c593b21383af2b0b7e5/652ed3b80941ed09c5d8a2e5_Cover.jpeg"
          }
          width={800}
          height={800}
          className=" h-[90dvh] snap-center w-dvw object-cover object-center rounded-xl"
          alt="image"
        />
        <Image
          src={
            "https://cdn.prod.website-files.com/65216c593b21383af2b0b7e5/652ed3b80941ed09c5d8a2e5_Cover.jpeg"
          }
          width={800}
          height={800}
          className="h-[90dvh] w-dvw  snap-center object-cover object-center rounded-xl"
          alt="image"
        />
      </div>

      <div className=" flex -mt-10 text-white text-2xl w-full px-14 justify-between items-center ">
        <div
          onClick={handleScrollLeft}
          className=" rounded-full border-zinc-500 hover:border-zinc-100 transition-all duration-500 cursor-pointer border p-3"
        >
          <IoChevronBack />
        </div>
        <div
          onClick={handleScrollRight}
          className=" rounded-full border-zinc-500 hover:border-zinc-100 transition-all duration-500 cursor-pointer border p-3"
        >
          <IoChevronBack className=" rotate-180" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.3 }}
          className="absolute"
          style={{
            left: `${cursorPos.x - 0}px`,
            top: `${cursorPos.y - 0}px`,

            pointerEvents: "none", // Ensures mouse events go through the image
            transform: "translate(-50%, -50%)", // Center the image on the cursor
          }}
        >
          <Image
            src="/button.svg" // Replace with your image path
            alt="Cursor Image"
            height={800}
            width={800}
            className=" size-8 rotate-3 w-full"
          />
        </motion.div>
      </div>
    </>
  );
}

export default WorkCarousel;
