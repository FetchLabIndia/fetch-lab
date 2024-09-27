"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
export interface plansData {
  title: string;
  desc: string;
  price: string;
  bg: string;
}
function PlanCard({ data }: { data: plansData }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPos({ x: event.pageX, y: event.pageY });
  };
  return (
    <Link
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={"/plan/card"}
      style={{ backgroundColor: data?.bg }}
      className=" relative font-extrabold p-10 rounded-2xl"
    >
      <p className=" text-4xl">{data?.title}</p>
      <p className=" mt-0.5 font-sofiaSans w-7/12 mb-2">{data?.desc}</p>

      <div
        className={`hover:bg-[#6B34CD] bg-black ${
          data?.price?.toLocaleLowerCase() == "coming soon" && " opacity-25"
        } px-4 p-2 transition-all duration-300 cursor-pointer text-white w-fit mt-4 font-extrabold text-sm rounded-full`}
      >
        {data?.price}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 0.3 }}
        className="absolute z-50"
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
          className=" size-8 z-50 rotate-3 w-full"
        />
      </motion.div>
    </Link>
  );
}

export default PlanCard;
