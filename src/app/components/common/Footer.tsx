"use client";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import { headerButtons } from "@/app/utils/lib/utils";
import useNavigation from "@/app/hooks/useNavigation";
import { motion } from "framer-motion";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
const bottomNav = [
  {
    title: "Work with us",
    mail: "hello@fetchlab.com",
  },
  {
    title: "Join us",
    mail: "careers@fetchlab.com",
  },
];
function Footer() {
  const { handleNavigate, handleAnimationComplete, isAnimating } =
    useNavigation();
  return (
    <footer className=" flex max-md:w-full w-9/12 py-9 flex-col font-medium items-center justify-center">
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

      <div className=" flex max-md:flex-col max-md:gap-7 max-md:px-4 w-full mb-8 justify-between">
        <div className=" flex flex-wrap items-center gap-4">
          {headerButtons.map(({ title, variant, link, className }) => (
            <Button
              onClick={() => handleNavigate(link)}
              className={className + " text-base"}
              key={title}
              //@ts-expect-error:ignore variants
              variant={variant}
            >
              {title}
            </Button>
          ))}
        </div>
        <div className=" flex max-md:flex-col max-md:items-start items-center justify-evenly flex-grow max-md:gap-2.5">
          {bottomNav.map(({ title, mail }) => (
            <div
              key={title}
              className=" flex text-white flex-col items-start gap-1.5"
            >
              <p className="  font-extrabold text-lg ">{title}</p>
              <Link
                className=" font-light font-sofiaSans text-lg text-zinc-200"
                href={`mailto:${mail}`}
              >
                {mail}
              </Link>
            </div>
          ))}
          <div className=" flex text-white flex-col items-start gap-2">
            <p className="  font-extrabold text-lg ">follow us</p>
            <div className=" flex items-center text-2xl gap-2">
              <Link
                href={"https://www.instagram.com/fetchlab.in/"}
                target="_blank"
              >
                <FiInstagram />
              </Link>
              <RiTwitterXFill />
              <Link
                href={"https://www.linkedin.com/company/fetchlab/"}
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <BsMedium />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/logos/Logo(White).svg"}
        alt="fetchLab logo"
        height={500}
        width={500}
        className=" h-full w-full md:-ml-5 max-sm:h-auto max-md:px-3"
      />
      <p className=" font-sofiaSans font-normal text-zinc-100 ">
        Copyright {new Date().getFullYear()} © fetchlab
      </p>
    </footer>
  );
}

export default Footer;
