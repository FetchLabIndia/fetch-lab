import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
function JoinTeam() {
  return (
    <div className=" w-11/12 rounded-3xl pt-10 mt-4 bg-cuGreen leading-ms tracking-ms text-center flex flex-col items-center justify-center font-extrabold relative text-7xl">
      <div className=" -mt-4 absolute top-16 flex items-center justify-between w-6/12">
        <Image src={"/team/yummy.png"} height={70} width={70} alt="thinking" />
        <Image src={"/team/happy.png"} height={80} width={80} alt="thinking" />
      </div>
      <p>Join the </p>
      <div className=" -mt-4 relative w-fit">
        <p>Team</p>
        <Image
          src={"/team/leftDown.png"}
          height={100}
          width={100}
          alt="thinking"
          className=" -mt-4 absolute -bottom-11 -left-28"
        />
        <Image
          src={"/team/rightDown.png"}
          height={70}
          width={70}
          alt="thinking"
          className=" -mt-4 absolute -bottom-8 z-10  -right-24"
        />
      </div>
      <div className=" flex items-center gap-16 w-full justify-center">
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
            Reach OUT
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
            SEE OPENINGS
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default JoinTeam;
