import Footer from "@/app/components/common/Footer";
import PlanCard from "@/app/components/common/PlanCard";
import StayEngaged from "@/app/components/common/StayEngaged";
import { plans } from "@/app/utils/lib/utils";
import React from "react";

function page() {
  return (
    <>
      <div className=" flex w-full flex-col mt-32 items-center justify-center">
        <div className="bg-[#AEFBBE] flex flex-col gap-7 rounded-xl w-11/12 p-11">
          <h1 className=" text-4xl">Brand Logo Design</h1>

          {/* pa */}
          <div className=" w-full flex flex-col mt-5">
            <h2 className=" text-2xl">Particulars</h2>
            <ol className=" font-sofiaSans font-semibold mt-2">
              <li>1. Logo Design (Primary, Secondary & Submark)</li>
              <li>2. Brand Colour Palette</li>
            </ol>
          </div>

          {/* pr */}
          <div className=" w-full flex flex-col ">
            <h2 className=" text-2xl">Process</h2>
            <ol className=" font-sofiaSans flex flex-col gap-4 mt-2 font-semibold">
              <li>
                <span className=" font-extrabold">#1 Brand Briefing</span>
                <br /> We will start with a thorough understanding of your
                company&lsquo;s values and vision,to establish a strong
                foundation for your brand identity.
              </li>
              <li>
                <span className=" font-extrabold">#2 Concepts Phase</span>
                <br /> Once the brief is perfectly understood, we will start the
                design phase and present 2 distinct options for the brand logo
                in 5-8 Business Days.
                <br />
                If required, we&apos;ll repeat the above cycle and create 2 new
                distinct options. Once we&apos;ve decided on the logo concept,
                we&apos;ll make any necessary revisions as needed.
              </li>
              <li>
                <span className=" font-extrabold">#3 Polishing Phase</span>
                <br /> Once the concept is shortlisted, we will start the
                polishing process and evolve different aspects (Shape, Colour
                Palette and Typography) of the brand logo with mutual
                discussions.
              </li>
            </ol>
          </div>

          {/* de */}
          <div className=" w-full flex flex-col">
            <h2 className=" text-2xl">Deliverables</h2>
            <ol className=" font-sofiaSans font-semibold mt-2">
              <li>Editable and High Resolution Files of the Final Design</li>
            </ol>
          </div>
          {/* iv */}
          <div className=" w-full flex flex-col">
            <h2 className=" text-2xl">Deliverables</h2>
            <div
              className={`hover:bg-[#6B34CD] bg-black  px-4 p-2 transition-all duration-300 cursor-pointer text-white w-fit mt-4 font-extrabold text-sm rounded-full`}
            >
              ₹30,000/-
            </div>
          </div>
          {/* pa */}
          <div className=" w-full flex flex-col">
            <h2 className=" text-2xl">Payment Terms</h2>
            <ol className=" font-sofiaSans font-semibold mt-2">
              <li>Advance: 50%</li>
              <li>
                After finalisation of design and before transfer of final files:
                50%
              </li>
            </ol>
          </div>
        </div>
        <div className=" text-3xl w-full flex  text-white items-center justify-center my-10">
          <p>You might want to check</p>
        </div>
      </div>
      <div className=" w-11/12 z-10 ">
        <div className=" flex gap-10 flex-col">
          <PlanCard data={plans[1]} />
          <PlanCard data={plans[2]} />
        </div>
      </div>
      <div className=" h-10"></div>
      <StayEngaged />
      <Footer />
    </>
  );
}

export default page;
