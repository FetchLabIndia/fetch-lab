function Team() {
  return (
    <div className=" flex w-full items-center flex-col justify-center gap-7 text-white">
      <p className="font-extrabold text-4xl leading-ms tracking-ms ">
        Meet the <span className=" text-cuGreen">Visionaries</span>
      </p>
      <div className=" flex max-sm:flex-wrap items-center gap-10 text-base justify-center">
        <div>
          <div className=" w-[200px] h-[203px] max-sm:w-[170px] max-sm:h-[173px] border rounded-2xl"></div>
          <div className=" mt-2">
            <p className=" font-bold ">Govind Singh Bisht</p>
            <p className=" font-sofiaSans  -mt-1 text-sm">
              Creative Director - Design
            </p>
          </div>
        </div>
        <div>
          <div className=" w-[200px] h-[203px] max-sm:w-[170px] max-sm:h-[173px] border rounded-2xl"></div>
          <div className=" mt-2">
            <p className=" font-bold ">Govind Singh Bisht</p>
            <p className=" font-sofiaSans -mt-1 text-sm">
              Creative Director - Design
            </p>
          </div>
        </div>
        <div>
          <div className=" w-[200px] h-[203px] max-sm:w-[170px] max-sm:h-[173px] border rounded-2xl"></div>
          <div className=" mt-2">
            <p className=" font-bold ">Govind Singh Bisht</p>
            <p className=" font-sofiaSans  -mt-1 text-sm">
              Creative Director - Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
