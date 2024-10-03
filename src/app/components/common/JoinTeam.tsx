import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
function JoinTeam() {
  return (
    <div className=" w-9/12 max-md:w-11/12 uppercase rounded-3xl pt-24 mt-4 bg-cuGreen leading-ms tracking-ms text-center flex flex-col items-center justify-center font-extrabold relative text-7xl">
      <div className=" -mt-4 absolute top-16 max-sm:-top-[1rem] flex items-center justify-between w-6/12">
        <Image src={"/team/yummy.png"} height={70} width={70} alt="thinking" />
        <Image src={"/team/happy.png"} height={80} width={80} alt="thinking" />
      </div>
      <p className="max-sm:text-7xl">Join the </p>
      <div className=" -mt-4 relative w-fit">
        <p className="max-sm:text-7xl">Team</p>
        <Image
          src={"/team/leftDown.png"}
          height={100}
          width={100}
          alt="thinking"
          className=" -mt-4 absolute -bottom-8 max-sm:left-[8rem] -left-28"
        />
        <Image
          src={"/team/rightDown.png"}
          height={70}
          width={70}
          alt="thinking"
          className=" -mt-4 absolute -bottom-4 z-10 -right-24 max-sm:right-[5rem] max-sm:-bottom-[11rem]"
        />
      </div>
      <div className=" flex max-sm:flex-col items-center gap-16 w-full justify-center">
        <motion.div
          whileHover={{
            rotate: [0, 4, -4, 4, -4, 0],
            transition: { duration: 0.25 },
            transformOrigin: "100% 100% 100% 100%",
          }}
        >
          <Button
            variant="cuRed"
            className=" bg-cuRed hover:bg-cuRed hover:text-black border-none rotate-12 text-4xl p-3 px-6"
          >
            Reach out
          </Button>
        </motion.div>
        <motion.div
          whileHover={{
            rotate: [0, 4, -4, 4, -4, 0],
            transition: { duration: 0.25 },
            transformOrigin: "100% 100% 100% 100%",
          }}
        >
          <Button className=" -rotate-12 hover:text-black hover:bg-cuYellow border-none text-4xl p-3 px-6">
            See the openings
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default JoinTeam;
