"use client";

// import Footer from "./components/common/Footer";
// import OurServices from "./components/common/OurServices";
// import Project from "./components/common/Projects";
// import StayEngaged from "./components/common/StayEngaged";
// import transition from "./components/custom/Transition";
// import HeroSection from "./components/common/HeroSection";
// import WorkCarousel from "./components/common/WorkCarousel";
// import ClientMarquee from "./components/common/ClientMarquee";
import Image from "next/image";
import Button from "./components/ui/Button";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [sender, setSender] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const senMail = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ sender }),
      });
      if (res.ok) {
        setStatus("Form submitted successfully");
        const t = setTimeout(() => {
          setStatus("");
        }, 2000);
        return () => clearTimeout(t);
      }
    } catch (err) {
      console.log(err);
      setStatus("Error submitting...");
      const t = setTimeout(() => {
        setStatus("");
      }, 2000);
      return () => clearTimeout(t);
    } finally {
      setSender("");
      setLoading(false);
    }
  };
  return (
    <div className="  h-screen max-md:w-full  flex flex-col items-center justify-center">
      <header className=" w-full fixed top-12 flex items-center justify-center ">
        <Image
          className="max-md:px-5"
          src={"/logos/Logo(White).svg"}
          alt="fetchLab logo"
          height={350}
          width={350}
        />
      </header>
      <div className=" w-full max-md:px-5 flex-col text-white mt-20 flex items-center justify-center">
        <Button
          className=" text-7xl hover:bg-cuPurple cursor-default max-md:py-2.5 max-md:w-full max-md:text-2xl px-14 py-4"
          variant="cuPurple"
        >
          Coming Soon
        </Button>
        <h1 className=" font-sofiaSans font-light text-pxl my-8 max-md:mb-2 mb-4">
          Sign up to be the first to get updates.
        </h1>
        <form onSubmit={senMail} className=" w-full">
          <input
            onChange={(e) => setSender(e.target.value)}
            type="email"
            value={sender}
            className="bg-foreground  font-sofiaSans outline-none placeholder:text-base text-base font-normal text-white rounded-full p-3 w-full px-5"
            placeholder="Email"
          />
          <Button
            disabled={loading || status.length > 0}
            className=" w-full max-md:py-1.5  mt-4 py-2 text-xl"
            variant={status == "Error submitting..." ? "cuRed" : "cuGreen"}
          >
            {loading
              ? "Please wait..."
              : status.length > 0
              ? status
              : "Get in touch"}
          </Button>
        </form>
      </div>
      <footer className=" uppercase font-sofiaSans gap-1.5 flex-col text-lg text-white font-normal w-full fixed bottom-12 flex items-center justify-center ">
        <p className="  font-normal text-lg text-center">follow us</p>
        <div className=" flex text-white flex-col justify-center items-start gap-2">
          <div className=" flex items-center text-2xl gap-2.5">
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
            <Link href={"https://flames.design/fetchlab2024"} target="_blank">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.169 2.33729C12.0844 2.40032 12.0247 2.56519 11.9152 3.02587C11.8356 3.36045 11.6912 3.85991 11.5918 4.14116C11.4922 4.42241 11.2782 4.91218 11.119 5.23222C10.9547 5.55226 10.6711 6.02263 10.4869 6.27479C10.2978 6.52694 9.90466 6.98276 9.60108 7.28341C9.29751 7.5889 8.65054 8.1708 8.15785 8.57328C7.66515 8.97576 7.07293 9.48006 6.84401 9.69343C6.61508 9.90678 6.29658 10.2462 6.12737 10.445C5.96314 10.6439 5.75412 10.9251 5.66454 11.0609C5.56999 11.2015 5.42068 11.4634 5.32612 11.6427C5.23655 11.827 5.08725 12.1714 5.00264 12.409C4.91307 12.6466 4.78864 13.1073 4.72395 13.4272C4.65925 13.7473 4.57963 14.2613 4.55474 14.5668C4.52488 14.8723 4.5 15.4251 4.5 15.7888C4.5 16.1574 4.52488 16.6714 4.55474 16.9283C4.57963 17.1902 4.66423 17.6558 4.7339 17.9612C4.80358 18.2667 4.928 18.7031 5.00762 18.9311C5.08725 19.159 5.26143 19.5614 5.3958 19.8281C5.52519 20.0949 5.76904 20.5119 5.9283 20.7495C6.09253 20.9871 6.34634 21.3265 6.49564 21.5011C6.63996 21.6756 6.91866 21.9666 7.11275 22.1509C7.30186 22.3351 7.60544 22.6018 7.7846 22.7376C7.96376 22.8734 8.27729 23.0965 8.48133 23.2274C8.68537 23.3631 9.02378 23.562 9.22784 23.6687C9.43188 23.7753 9.85987 23.9644 10.1734 24.0857C10.4869 24.2069 10.9597 24.3669 11.2185 24.4348C11.4773 24.5027 11.9949 24.5997 12.3631 24.653C12.7314 24.7064 13.2788 24.75 13.5825 24.75C13.886 24.75 14.3985 24.716 14.727 24.6724C15.0555 24.6287 15.5383 24.5415 15.797 24.4784C16.0558 24.4154 16.4838 24.2845 16.7426 24.1875C17.0013 24.0954 17.4493 23.8966 17.7379 23.7463C18.0266 23.6007 18.4048 23.3777 18.584 23.2565C18.7631 23.1353 19.0618 22.9122 19.2558 22.757C19.4499 22.6067 19.8281 22.2576 20.1018 21.9763C20.3755 21.6999 20.7488 21.2684 20.933 21.0161C21.117 20.764 21.4008 20.2937 21.565 19.9736C21.7293 19.6535 21.9332 19.1832 22.0178 18.9311C22.1075 18.6788 22.2318 18.2183 22.2966 17.9127C22.3613 17.6073 22.4359 17.0496 22.4708 16.6762C22.5106 16.167 22.5106 15.8276 22.4658 15.3185C22.4359 14.9451 22.3662 14.4116 22.3165 14.1303C22.2617 13.8491 22.1622 13.4224 22.0925 13.1848C22.0178 12.9472 21.8835 12.5399 21.7839 12.2877C21.6844 12.0356 21.5053 11.6282 21.3808 11.3906C21.2614 11.153 21.0574 10.799 20.933 10.6148C20.8135 10.4305 20.5995 10.1444 20.4651 9.98438C20.3258 9.82436 20.1815 9.67888 20.1466 9.65464C20.1068 9.63524 19.9924 9.62553 19.8928 9.63038C19.7236 9.64494 19.6838 9.67403 19.5544 9.88254C19.4748 10.0086 20.1783 10.7079 19.3471 12.4656C19.0005 12.9911 18.885 13.2543 18.5199 13.6812C18.1547 14.1082 17.7545 14.5344 17.2236 14.5344C16.6929 14.5344 17.2236 12.9827 17.3399 11.6234C17.3647 11.2937 17.3896 10.7602 17.3896 10.4305C17.3896 10.1056 17.3547 9.55765 17.3149 9.20852C17.2751 8.85938 17.1855 8.35991 17.1208 8.09322C17.0561 7.82651 16.9167 7.39009 16.8173 7.12339C16.7128 6.85668 16.5336 6.4542 16.4192 6.22629C16.2997 5.99839 16.0707 5.62015 15.9114 5.37769C15.7473 5.13524 15.4486 4.74731 15.2396 4.50485C15.0356 4.26239 14.6872 3.90841 14.4732 3.70959C14.2593 3.51563 13.901 3.21983 13.6819 3.05011C13.463 2.88524 13.1146 2.63309 12.9106 2.49731C12.6916 2.35184 12.4825 2.25 12.408 2.25C12.3333 2.25 12.2288 2.28879 12.169 2.33244V2.33729Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
    // // <>
    //   {/* <HeroSection />

    //   <WorkCarousel />

    //   <ClientMarquee />
    //   <OurServices />
    //   <div className=" md:h-20 h-5"></div>
    //   <Project />
    //   <div className=" md:h-20 h-5"></div>
    //   <StayEngaged />
    //   <hr className="w-full border-t border-zinc-800" />
    //   <Footer /> */}

    // {/* </> */}
  );
}

export default Home;
