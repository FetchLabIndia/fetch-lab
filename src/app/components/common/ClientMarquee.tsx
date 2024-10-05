import Marquee from "@/app/components/common/Marquee";
import Image from "next/image";
const images = [
  "/company/Sony_Music_Entertainment_Logo_2023.svg(1).svg",
  "/company/baba-elaichi_owler_20160229_000815_large1.svg",
  "/company/T-series-logo.svg(1).svg",
  "/company/Group15.svg",
  "/company/Group16.svg",
  "/company/Group9.svg",
];
const revers = [
  "/company/Group5.svg",
  "/company/Group4.svg",
  "/company/Group6.svg",
  "/company/Group10.svg",
  "/company/Group11.svg",
];
function ClientMarquee() {
  return (
    <div className=" w-full flex-col flex text-white my-20 max-md:my-7 items-center justify-center">
      <div className=" max-md:text-3xl w-1/5 max-md:w-9/12  text-4xl font-extrabold  text-center ">
        <p>Clients we&apos;ve partnered with</p>
      </div>
      <div className=" w-full mt-20">
        <Marquee className="[--duration:40s]">
          {images.map((url) => (
            <Image
              key={url}
              height={500}
              className=" mx-5 size-11 w-auto"
              width={500}
              alt="client-logo-image"
              src={url}
            />
          ))}
        </Marquee>
      </div>
      <div className=" w-full mt-10 mb-12">
        <Marquee reverse className="[--duration:40s]">
          {revers.map((url) => (
            <Image
              key={url}
              height={500}
              className=" mx-5 size-9 w-auto"
              width={500}
              alt="client-logo-image"
              src={url}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default ClientMarquee;
