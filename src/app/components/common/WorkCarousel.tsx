import React, { useRef, useState } from "react";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { motion } from "framer-motion";
import useNavigation from "@/app/hooks/useNavigation";
// hello@fetchlab.in
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
      <div
        onMouseMove={handleMouseMove}
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" relative flex w-full cursor-none transition-all duration-200 scroll-smooth overflow-scroll snap-mandatory snap-x gap-6 p-4 px-28 mb-11 max-md:px-4"
      >
        {[
          {
            slug: "/work/brew_mingle",
            link: "/home/Maskgroup.webp",
          },
          {
            slug: "/work/moodrobe",
            link: "/home/Maskgroup(1).webp",
          },
          {
            slug: "/work/iccs",
            link: "/home/Maskgroup(2).webp",
          },
          {
            slug: "/work/amythstore",
            link: "/home/Maskgroup(3).webp",
          },
        ].map((work) => (
          <Image
            onClick={() => handleNavigate(work.slug)}
            key={work.link}
            src={work.link}
            width={800}
            height={800}
            className=" h-[87dvh] snap-center w-dvw object-cover object-center rounded-[1.75rem] max-md:h-[65dvh]"
            alt="image"
          />
        ))}
      </div>

      <div className=" max-md:hidden flex -mt-10 max-md:px-3 text-white text-2xl w-full px-28 justify-between items-center ">
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
            src="/button.svg"
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
