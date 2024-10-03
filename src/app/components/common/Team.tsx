import Image from "next/image";

function Team() {
  return (
    <div className=" flex w-full items-center flex-col justify-center gap-7 text-white">
      <p className="font-extrabold text-4xl leading-ms tracking-ms ">
        Meet the <span className=" text-cuGreen">Visionaries</span>
      </p>
      <div className=" flex items-center gap-6  text-base justify-center max-sm:flex-wrap max-sm:px-2">
        <div>
          <div className="  max-sm:w-[140px] max-sm:h-[143px]  rounded-2xl">
            <Image
              src={"/team/Datta.png"}
              width={500}
              height={500}
              className=" w-full h-full"
              alt="Krish Datta"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-bold max-md:text-sm">Krish Datta</p>
            <p className=" font-sofiaSans max-md:text-xs -mt-1 text-sm">
              Growth Consultant
            </p>
          </div>
        </div>
        <div>
          <div className=" w-auto h-auto max-sm:w-[140px] max-sm:h-[143px]  rounded-2xl">
            <Image
              src={"/team/Amit.png"}
              width={500}
              height={500}
              className=" w-full h-full"
              alt="Amit kumar Gothwal"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-bold max-md:text-sm">Amit kumar Gothwal</p>
            <p className=" font-sofiaSans max-md:text-xs -mt-1 text-sm">
              Founder, Creative Director
            </p>
          </div>
        </div>
        <div>
          <div className="  max-sm:w-[140px] max-sm:h-[143px]  rounded-2xl">
            <Image
              src={"/team/Radha.png"}
              width={500}
              height={500}
              className=" w-full h-full"
              alt="Radha"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-bold max-md:text-sm">Radha</p>
            <p className=" font-sofiaSans max-md:text-xs -mt-1 text-sm">
              Creative Director - Copy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
