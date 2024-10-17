import Image from "next/image";

function Team() {
  return (
    <div className=" flex w-full mb-8 items-center flex-col justify-center gap-7 text-white">
      <p className="font-extrabold text-4xl leading-ms tracking-ms ">
        Meet the <span className=" text-white">Visionaries</span>
      </p>
      <div className=" flex items-center gap-6  text-base justify-center max-sm:flex-wrap max-sm:px-2">
        <div>
          <div className="  max-sm:w-[180px] max-sm:h-auto  rounded-2xl">
            <Image
              src={"/team/Datta.png"}
              width={500}
              height={500}
              className=" w-[186px] h-[203px]"
              alt="Aniket Grover"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-medium max-md:text-sm">Aniket Grover</p>
            <p className=" font-sofiaSans font-light max-md:text-xs -mt-1 text-sm">
              Growth Consultant
            </p>
          </div>
        </div>
        <div>
          <div className=" w-auto h-auto max-sm:w-[180px] max-sm:h-auto  rounded-2xl">
            <Image
              src={"/team/Amit.png"}
              width={500}
              height={500}
              className=" w-[186px] h-[203px]"
              alt="Amit kumar Gothwal"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-medium max-md:text-sm">Amit kumar Gothwal</p>
            <p className=" font-sofiaSans font-light max-md:text-xs -mt-1 text-sm">
              Founder, Creative Director
            </p>
          </div>
        </div>
        <div>
          <div className="  max-sm:w-[180px] max-sm:h-auto  rounded-2xl">
            <Image
              src={"/team/Radha.png"}
              width={500}
              height={500}
              className=" w-[186px] h-[203px]"
              alt="Radha"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-medium max-md:text-sm">Radha</p>
            <p className=" font-sofiaSans font-light max-md:text-xs -mt-1 text-sm">
              Creative Director - Copy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
