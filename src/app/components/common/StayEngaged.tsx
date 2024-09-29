"use client";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { motion } from "framer-motion";
function StayEngaged() {
  function scrollToTop() {
    const duration = 2000; // Duration of the scroll animation in milliseconds (adjust as needed)
    const start = window.scrollY;
    const end = 0;
    const startTime = performance.now();

    function scrollStep(timestamp: number) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);

      window.scrollTo(0, start + (end - start) * progress);

      if (currentTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  return (
    <div className=" flex items-center max-md:px-4 w-11/12 max-md:w-full py-9 justify-between">
      <div className=" gap-10 text-white max-md:flex-col flex w-full">
        <div className=" w-10/12 max-md:w-full rounded-2xl overflow-hidden">
          <Image
            src={
              "https://cdn.prod.website-files.com/651a6d7ba44b12668a58a7cf/651e6e4c799bcbc1409f67d0_cta-image.gif"
            }
            alt="engaged"
            height={500}
            width={500}
            className=" object-cover h-full w-full"
          />
        </div>
        <div className=" flex flex-col text-6xl items-start justify-between font-extrabold w-full max-md:text-5xl gap-8">
          <p>
            Stay engaged <br /> with us
          </p>
          <div className=" flex flex-col w-full gap-4">
            <input
              type="text"
              className=" bg-foreground outline-none placeholder:text-base text-lg font-sofiaSans font-normal rounded-full p-3 w-full px-5"
              placeholder="Enter your email address"
            />
            <Button
              variant="cuGreen"
              className=" w-fit max-md:w-full p-2 px-5 text-lg text-black"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className=" w-7/12 max-md:w-full max-md:justify-center px-10 flex justify-end items-center">
          <div
            onClick={scrollToTop}
            className="relative cursor-pointer flex justify-center items-center"
          >
            <motion.div
              animate={{ rotate: 360 }} // Rotates the image by 360 degrees
              transition={{
                duration: 10, // Duration of 10 seconds for a slow spin
                ease: "linear", // Keeps the spin constant, without acceleration/deceleration
                repeat: Infinity, // Infinite rotation
              }}
            >
              <Image
                src={"/footer/rotate.svg"}
                height={177}
                width={177}
                alt="rotate"
                className=" flex max-md:hidden"
              />
              <Image
                src={"/footer/rotate.svg"}
                height={120}
                width={120}
                alt="rotate"
                className=" hidden max-md:flex"
              />
            </motion.div>
            <motion.div
              className="absolute"
              animate={{ y: [0, -7, 0] }} // Moves up by 20px and then down
              transition={{
                duration: 1, // Duration for one full cycle (up and down)
                repeat: Infinity, // Infinite loop
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/footer/up.png"}
                className=" flex max-md:hidden"
                height={55}
                width={55}
                alt="up"
              />
              <Image
                src={"/footer/up.png"}
                className=" hidden max-md:flex"
                height={30}
                width={30}
                alt="up"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayEngaged;
