import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import { headerButtons } from "@/app/utils/lib/utils";
const bottomNav = [
  {
    title: "Work with us",
    mail: "hello@fetchlab.com",
  },
  {
    title: "join us",
    mail: "careers@fetchlab.com",
  },
];
function Footer() {
  return (
    <footer className=" flex max-md:w-full w-11/12 py-9 flex-col font-medium items-center justify-center">
      <div className=" flex max-md:flex-col max-md:gap-7 max-md:px-4 w-full mb-8 justify-between">
        <div className=" flex flex-wrap items-center max-md:gap-1.5 gap-2">
          {headerButtons.map(({ title, variant, className }) => (
            <Button
              className={className + " text-base"}
              key={title}
              //@ts-expect-error:ignore variants
              variant={variant}
            >
              {title}
            </Button>
          ))}
        </div>
        <div className=" flex flex-wrap max-md:flex-col max-md:items-start items-center justify-evenly flex-grow max-md:gap-2.5">
          {bottomNav.map(({ title, mail }) => (
            <div
              key={title}
              className=" flex text-white flex-col items-start gap-1.5"
            >
              <p className="  font-extrabold text-lg ">{title}</p>
              <Link
                className=" font-sofiaSans text-lg text-zinc-200"
                href={`mailto:${mail}`}
              >
                {mail}
              </Link>
            </div>
          ))}
          <div className=" flex text-white flex-col items-start gap-2.5">
            <p className="  font-extrabold text-lg ">follow us</p>
            <div className=" flex items-center text-2xl gap-2">
              <FiInstagram />
              <RiTwitterXFill />
              <FaLinkedin />
              <FaMedium />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full max-md:px-2">
        <Image
          src={"/logos/Logo(White).svg"}
          alt="fetchLab logo"
          height={500}
          width={500}
          className=" h-full w-full"
        />
      </div>
      <p className=" font-sofiaSans font-medium text-zinc-100 ">
        Copyright {new Date().getFullYear()} © fetchlab
      </p>
    </footer>
  );
}

export default Footer;
