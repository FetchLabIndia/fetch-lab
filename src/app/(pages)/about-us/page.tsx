"use client";
import Footer from "@/app/components/common/Footer";
import HelloThere from "@/app/components/common/HelloThere";
import JoinTeam from "@/app/components/common/JoinTeam";
import OurServices from "@/app/components/common/OurServices";
import StayEngaged from "@/app/components/common/StayEngaged";
import Team from "@/app/components/common/Team";
import transition from "@/app/components/custom/Transition";

function page() {
  return (
    <>
      <HelloThere />
      <div className=" h-20"></div>
      <Team />
      <div className=" h-20"></div>
      <OurServices />
      <div className=" h-2"></div>
      <JoinTeam />
      <div className=" h-20 max-md:h-7"></div>
      <StayEngaged />
      <hr className="w-full border-t border-zinc-800" />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </>
  );
}

export default transition(page);
