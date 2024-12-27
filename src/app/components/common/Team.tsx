import Image from "next/image";

function Team() {
  return (
    <div className=" flex w-full  max-md:mb-6 mb-8 items-center flex-col justify-center gap-7 text-white">
      <p className="font-extrabold text-4xl text-center leading-ms tracking-ms ">
        Meet the <br /> Visionaries
      </p>
      <div className=" flex items-center gap-6  text-base justify-center max-sm:flex-wrap max-sm:px-5">
        <div>
          <Image
            src={"/team/Datta.png"}
            width={500}
            height={500}
            className=" md:w-[186px] rounded-2xl md:h-[203px] w-full h-full"
            alt="Aniket Grover"
          />
          <div className=" mt-2">
            <p className=" font-medium max-md:text-sm">Aniket Grover</p>
            <p className=" font-sofiaSans font-light max-md:text-xs -mt-1 text-sm">
              Growth Consultant
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/team/Amit.png"}
            width={500}
            height={500}
            className=" md:w-[186px] rounded-2xl md:h-[203px] w-full h-full"
            alt="Amit kumar Gothwal"
          />
          <div className=" mt-2">
            <p className=" font-medium max-md:text-sm">Amit kumar Gothwal</p>
            <p className=" font-sofiaSans font-light max-md:text-xs -mt-1 text-sm">
              Sr. Brand Designer
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/team/HinaSharma.png"}
            width={500}
            height={500}
            className=" md:w-[186px] rounded-2xl md:h-[203px] w-full h-full"
            alt="Hina Sharma"
          />
          <div className=" mt-2">
            <p className=" font-medium max-md:text-sm">Heena Sharma</p>
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
