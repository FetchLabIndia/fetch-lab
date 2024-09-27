"use client";
import Footer from "@/app/components/common/Footer";
import PlanCard from "@/app/components/common/PlanCard";
import Project from "@/app/components/common/Projects";
import StayEngaged from "@/app/components/common/StayEngaged";
import transition from "@/app/components/custom/Transition";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { plans } from "@/app/utils/lib/utils";
function Page() {
  const { scrollY } = useScroll();
  // Adjust the opacity range to go from 1 to 0.2
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  return (
    <>
      <div className="relative w-full flex flex-col justify-center items-center mx-auto">
        <div className="sticky w-11/12 top-0 py-20 pt-36 pb-24">
          <motion.div style={{ opacity }}>
            <Image
              src={"/work/plans.svg"}
              height={500}
              width={500}
              className="w-full"
              alt="work"
            />
          </motion.div>
        </div>

        <div className=" w-11/12 z-10 ">
          <p className=" text-white text-center mb-16 font-extrabold leading-ms tracking-ms text-6xl">
            At Fetch Lab, we believe in transparency from the start.
          </p>
          <div className=" flex gap-10 flex-col">
            {plans.map((data, i) => (
              <PlanCard data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className=" h-7"></div>
      <Project />
      <StayEngaged />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </>
  );
}

export default transition(Page);
