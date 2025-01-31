/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
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
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const sendMail = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      setLoading(true);

      const res = await fetch(
        "https://email-sender-beta-henna.vercel.app/api/mail",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setSubmitted(true);
      if (res.ok) {
        const t = setTimeout(() => {
          setLoading(false);
          setSubmitted(false);
        }, 3000);
        return () => clearTimeout(t);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <div className=" flex items-center w-9/12 max-md:w-full max-md:px-4 py-9 justify-between">
      <div className=" gap-5 text-white flex w-full max-md:flex-col max-md:items-center">
        <div className=" w-10/12  max-md:w-full rounded-2xl overflow-hidden">
          <Image
            unoptimized
            src={"/engaged/StayEngaged.gif"}
            alt="engaged"
            height={500}
            width={500}
            className="subscribe-image"
          />
        </div>
        <form
          onSubmit={sendMail}
          className=" flex flex-col text-6xl max-md:text-5xl items-start justify-between font-extrabold w-full gap-8"
        >
          <p>
            Stay engaged <br /> with us
          </p>

          <div
            className={` flex flex-col ${
              submitted && "justify-between h-full"
            }  w-full gap-4`}
          >
            {submitted ? (
              <div className=" border-2 text-xl rounded-[1.6rem] text-center border-cuPurple px-4 py-3">
                Thank you! Your Submission has <br /> been received
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  name="sender"
                  id="sender"
                  className=" bg-foreground font-normal outline-none placeholder:text-base text-lg font-sofiaSans rounded-full p-3 w-full px-5"
                  placeholder="Enter your email address"
                />
                <Button
                  disabled={loading}
                  variant="cuPurple"
                  className=" w-fit max-md:w-full p-2 px-5 hover:border-[0.2rem] hover:-mt-0.5 text-lg"
                >
                  {loading ? "Please wait..." : "Sign Up"}
                </Button>
              </>
            )}
          </div>
        </form>
        <div className=" w-7/12 max-md:mt-5 max-md:w-full max-md:justify-center px-10 flex justify-end items-center">
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
                className="max-md:h-[120px] max-md:w-auto"
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
                className="max-md:h-[45px] max-md:w-auto"
                src={"/footer/up.png"}
                height={55}
                width={55}
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
