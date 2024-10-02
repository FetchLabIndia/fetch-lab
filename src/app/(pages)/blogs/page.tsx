"use client";
import Footer from "@/app/components/common/Footer";
import Project from "@/app/components/common/Projects";
import StayEngaged from "@/app/components/common/StayEngaged";
import transition from "@/app/components/custom/Transition";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogs } from "@/app/utils/lib/utils";
import BlogCard, { blogsData } from "@/app/components/common/BlogCard";
import useNavigation from "@/app/hooks/useNavigation";
function Page() {
  const { scrollY } = useScroll();
  const { handleNavigate, handleAnimationComplete, isAnimating } =
    useNavigation();
  // Adjust the opacity range to go from 1 to 0.2
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed top-0 left-0 z-50 w-screen h-screen bg-green-500"
          initial={{ scaleX: 0 }} // Start off-screen
          animate={{ scaleX: 1 }} // Slide in from the right
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }} // Ensure it scales from the right
          onAnimationComplete={handleAnimationComplete} // Trigger navigation after animation
        />
      )}
      <div className="relative w-full flex flex-col justify-center items-center mx-auto">
        <div className="sticky w-10/12 top-0 py-14 max-md:pt-28 pt-36">
          <motion.div style={{ opacity }}>
            <Image
              src={"/blogs/blogs.svg"}
              height={500}
              width={500}
              className="w-full"
              alt="work"
            />
          </motion.div>
        </div>

        <div className=" w-10/12 max-md:w-full z-10 ">
          <div className="grid grid-cols-2 gap-10 max-md:gap-5 max-md:grid-cols-1">
            {blogs.map((data, i) => (
              <BlogCard
                data={data as blogsData}
                key={i}
                handleNavigate={handleNavigate}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" h-7"></div>
      <Project />
      <StayEngaged />
      <hr className="w-full border-t border-zinc-800" />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </>
  );
}

export default transition(Page);
