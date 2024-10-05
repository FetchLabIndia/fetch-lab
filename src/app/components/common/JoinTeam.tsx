import Button from "@/app/components/ui/Button";
import useNavigation from "@/app/hooks/useNavigation";
// import Image from "next/image";
import { motion } from "framer-motion";
function JoinTeam() {
  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.3 } },
  };
  const { isAnimating, handleAnimationComplete, handleNavigate } =
    useNavigation();
  return (
    <>
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

      <div className=" w-9/12 max-md:w-11/12 uppercase rounded-3xl pt-24 mt-4 bg-cuGreen leading-ms tracking-ms text-center flex flex-col items-center justify-center font-extrabold relative text-7xl">
        <div className=" -mt-4 absolute top-16 max-sm:-top-[1rem] flex items-center justify-between w-6/12">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            src={"/team/yummy.png"}
            height={70}
            width={70}
            alt="thinking"
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            src={"/team/happy.png"}
            height={80}
            width={80}
            alt="thinking"
          />
        </div>
        <p className="max-sm:text-7xl text-[#151515]">Join the </p>
        <div className=" -mt-4 relative w-fit">
          <p className="max-sm:text-7xl">Team</p>
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            src={"/team/leftDown.png"}
            height={100}
            width={100}
            alt="thinking"
            className=" -mt-4 absolute -bottom-8 max-sm:left-[8rem] -left-28"
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            src={"/team/rightDown.png"}
            height={70}
            width={70}
            alt="thinking"
            className=" -mt-4 absolute -bottom-4 z-10 -right-24 max-sm:right-[5rem] max-sm:-bottom-[11rem]"
          />
        </div>
        <div className=" flex max-sm:flex-col items-center gap-16 w-full justify-center">
          <motion.div className="shake">
            <Button
              onClick={() => handleNavigate("/contact-us")}
              variant="cuRed"
              className=" bg-cuRed ml-20 hover:bg-cuRed hover:text-black border-none rotate-12 text-4xl p-3 px-6"
            >
              Reach out
            </Button>
          </motion.div>
          <motion.div className="shake">
            <Button
              onClick={() =>
                window.open(`https://www.linkedin.com/company/fetchlab/jobs`)
              }
              className=" -rotate-12 hover:text-black hover:bg-cuYellow border-none text-4xl p-3 px-6"
            >
              See the openings
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default JoinTeam;
