import Image from "next/image";

function HelloThere() {
  return (
    <div className=" flex p-7 pt-52 max-md:pt-32 text-white w-full justify-center gap-11 max-sm:flex-col max-sm:items-center">
      <div className=" text-8xl font-bold ">
        <div className="  flex w-full">
          <p>Hello </p>
          <Image
            src={"/about/hello.svg"}
            height={100}
            width={100}
            alt="thinking"
            className="-ml-11  mb-8 mr-11 wave"
          />
        </div>
        <p className=" -mt-10 ml-10">There</p>
      </div>
      <p className=" w-1/3 ml-14 font-light max-sm:w-full text-xl font-sofiaSans">
        At our core, we are a creative agency that specializes in branding and
        design, with a focus on authenticity and impact. We believe in
        challenging the status quo, shaping brands that stand out, and forming
        meaningful connections through a thoughtful and collaborative process.
        <br />
        <br />
        Every project we undertake is guided by strategic insight and a passion
        for solving problems through well-rounded systems. Our mission is to
        partner with you to create something truly remarkable—no matter what
        form it takes.
      </p>
    </div>
  );
}

export default HelloThere;
