import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import useNavigation from "@/app/hooks/useNavigation";

export default function Project() {
  const imageVariants = {
    hidden: { scale: 0 }, // Start hidden with scale 0 and opacity 0
    visible: {
      scale: 1,
    },
  };

  const { isAnimating, handleAnimationComplete, handleNavigate } =
    useNavigation();

  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed top-0 left-0 z-50 w-screen h-screen bg-cuPurple"
          initial={{ scaleX: 0 }} // Start off-screen
          animate={{ scaleX: 1 }} // Slide in from the right
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }} // Ensure it scales from the right
          onAnimationComplete={handleAnimationComplete} // Trigger navigation after animation
        />
      )}
      <div className="flex items-center w-full justify-center py-7">
        <div className="bg-cuPurple font-extrabold text-8xl max-md:text-6xl rounded-3xl max-md:rounded-2xl  text-white w-9/12 max-md:w-full max-md:mx-4 flex-col flex text-center justify-center items-center h-[380px] max-md:h-[200px]">
          <div className="relative w-fit max-md:text-[3.5rem]">
            Got a project
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...imageVariants.visible, delay: 0.1 }} // Delay for the first image
              className="absolute top-7 -left-[5rem] max-md:-left-2.5 max-md:-top-[3.3rem] max-md:h-[50px] -rotate-12"
            >
              <Image
                src={"/project/laptop.svg"}
                height={70}
                width={70}
                alt="laptop"
                className="top-7 -left-[5rem] max-md:-left-2.5 max-md:-top-[3.3rem] max-md:h-[50px] -rotate-12"
              />
            </motion.div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...imageVariants.visible, delay: 0.2 }} // Delay for the second image
              className="absolute top-16 -right-20 max-md:-top-[2rem] max-md:-right-[1rem] max-md:rotate-[27deg] max-md:h-[50px] -rotate-12"
            >
              <Image
                src={"/project/cloud.svg"}
                height={60}
                width={60}
                alt="cloud"
              />
            </motion.div>
          </div>

          <div className="-mt-2 relative w-fit">
            in mind
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...imageVariants.visible, delay: 0.3 }} // Delay for the third image
              className="absolute top-7 -left-[4.5rem] max-md:-bottom-[4rem] max-md:right-0 max-md:h-[50px] -rotate-12"
            >
              <Image src={"/project/up.svg"} height={60} width={60} alt="up" />
            </motion.div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...imageVariants.visible, delay: 0.4 }} // Delay for the fourth image
              className="absolute top-7 -right-[4.5rem] max-md:top-[2rem] max-md:-right-[4rem] max-md:h-[50px] -rotate-12 z-10"
            >
              <Image
                src={"/project/thinking.svg"}
                height={60}
                width={60}
                alt="thinking"
              />
            </motion.div>
          </div>

          <div className="-mt-12 relative w-fit">
            <motion.div className="shake">
              <Button
                onClick={() => handleNavigate("/contact-us")}
                className="relative text-4xl leading-ms tracking-ms -rotate-6 hover:bg-cuGreen border-none text-black p-3 px-7 hover:text-black max-md:top-[2.5rem] max-md:text-[1.7rem] max-md:p-2 max-md:px-7"
                variant="cuGreen"
              >
                Let&apos;s Connect
              </Button>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...imageVariants.visible, delay: 0.5 }} // Delay for the fifth image
              className="absolute -bottom-9 left-1/2 max-md:-bottom-[4.5rem] max-md:left-[6rem] max-md:h-[50px]"
            >
              <Image
                src={"/project/smart.svg"}
                height={55}
                width={55}
                alt="smart"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
