import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className=" flex items-center max-md:overflow-hidden w-full justify-center py-7">
      <div className=" bg-cuPurple font-extrabold text-8xl rounded-3xl text-white w-11/12 flex-col max-md:h-[200px] flex text-center justify-center items-center h-[380px] leading-ms tracking-ms">
        <div className=" relative w-fit max-md:text-5xl">
          Got a project
          <Image
            src={"/project/laptop.svg"}
            height={70}
            width={70}
            alt="thinking"
            className=" absolute top-7 -left-[5rem] max-md:-top-7 -rotate-12"
          />
          <Image
            src={"/project/cloud.svg"}
            height={60}
            width={60}
            alt="thinking"
            className=" absolute top-16 -right-20 max-md:-right-16  max-md:-top-7 -rotate-12"
          />
        </div>
        <div className=" -mt-2 relative w-fit max-md:text-5xl">
          in mind
          <Image
            src={"/project/up.svg"}
            height={60}
            width={60}
            alt="thinking"
            className=" absolute top-7 -left-[4.5rem] -rotate-12"
          />
          <Image
            src={"/project/thinking.svg"}
            height={60}
            width={60}
            alt="thinking"
            className=" absolute top-7 -right-[4.5rem] -rotate-12"
          />
        </div>
        <div className=" -mt-12 max-md:-mt-11 relative w-fit">
          <motion.div
            whileHover={{
              transition: { duration: 0.25 },
              rotate: [0, 4, -4, 4, -4, 0],
              transformOrigin: "100% 100% 100% 100%",
            }}
          >
            <Button
              className=" text-4xl max-md:text-2xl leading-ms tracking-ms -rotate-6 hover:bg-cuGreen border-none text-black p-3 px-7 hover:text-black"
              variant="cuGreen"
            >
              Let&apos;s Connect
            </Button>
          </motion.div>
          <Image
            src={"/project/smart.svg"}
            height={55}
            width={55}
            alt="thinking"
            className=" absolute -bottom-9 left-1/2"
          />
        </div>
      </div>
    </div>
  );
}
