import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className=" flex items-center w-full  justify-center  py-7">
      <div className=" bg-cuPurple font-extrabold text-8xl max-md:text-6xl rounded-3xl text-white w-10/12 max-md:w-full max-md:mx-4 flex-col flex text-center justify-center items-center h-[380px] max-md:h-[200px] ">
        <div className=" relative w-fit max-md:text-[3.5rem]">
          Got a project
          <Image
            src={"/project/laptop.svg"}
            height={70}
            width={70}
            alt="laptop"
            className=" absolute top-7 -left-[5rem] max-md:-left-2.5 max-md:-top-[3.3rem] max-md:h-[50px] -rotate-12"
          />
          <Image
            src={"/project/cloud.svg"}
            height={60}
            width={60}
            alt="cloud"
            className=" absolute top-16 -right-20 max-md:-top-[2rem] max-md:-right-[1rem] max-md:rotate-[27deg] max-md:h-[50px] -rotate-12"
          />
        </div>
        <div className=" -mt-2 relative w-fit">
          in mind
          <Image
            src={"/project/up.svg"}
            height={60}
            width={60}
            alt="up"
            className=" absolute top-7 -left-[4.5rem] max-md:-bottom-[4rem] max-md:right-0 max-md:h-[50px] -rotate-12"
          />
          <Image
            src={"/project/thinking.svg"}
            height={60}
            width={60}
            alt="thinking"
            className=" absolute top-7 -right-[4.5rem] max-md:top-[2rem] max-md:-right-[4rem] max-md:h-[50px] -rotate-12 z-10"
          />
        </div>
        <div className=" -mt-12 relative w-fit">
          <motion.div
            whileHover={{
              transition: { duration: 0.25 },
              rotate: [0, 4, -4, 4, -4, 0],
              transformOrigin: "100% 100% 100% 100%",
            }}
          >
            <Button
              className=" relative text-4xl leading-ms tracking-ms -rotate-6 hover:bg-cuGreen border-none text-black p-3 px-7 hover:text-black max-md:top-[2.5rem] max-md:text-[1.7rem] max-md:p-2 max-md:px-7"
              variant="cuGreen"
            >
              Let&apos;s Connect
            </Button>
          </motion.div>
          <Image
            src={"/project/smart.svg"}
            height={55}
            width={55}
            alt="smart"
            className=" absolute -bottom-9 left-1/2 max-md:-bottom-[4.5rem] max-md:left-[6rem] max-md:h-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
