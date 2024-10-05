"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export interface blogsData {
  image: string;
  title: string;
  alt: string;
  id?: string;
}

function BlogCard({
  data,
  handleNavigate,
}: {
  data: blogsData;
  handleNavigate: (id: string) => void;
}) {
  const imageRef = useRef<HTMLDivElement>(null);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    // Get the position relative to the image div instead of the page
    const rect = imageRef.current?.getBoundingClientRect();
    if (rect) {
      setCursorPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  return (
    <>
      <div
        onClick={() => handleNavigate(`/blogs/${data?.id}`)}
        className=" text-white w-full col-span-1 font-extrabold max-md:p-4 rounded-2xl cursor-none"
      >
        <div className="flex flex-col w-full">
          {/* Only apply hover and cursor tracking on the image div */}
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-[27rem] max-md:h-60 w-auto rounded-xl overflow-hidden"
          >
            <Image
              src={data?.image}
              alt={data?.alt}
              height={900}
              width={900}
              className="h-full object-cover w-full"
            />

            {/* Motion div inside the image div, follows the cursor only within this div */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.3 }}
              className="absolute max-md:hidden pointer-events-none"
              style={{
                left: `${cursorPos.x}px`,
                top: `${cursorPos.y}px`,
                transform: "translate(-50%, -50%)", // Center the image on the cursor
              }}
            >
              <Image
                src="/blogs/readnow.svg"
                alt="read now Image"
                height={150}
                width={150}
                className="rotate-3"
              />
            </motion.div>
          </div>

          <h2 className="text-xl max-md:text-base max-md:w-full mt-4">
            {data?.title}
          </h2>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
