import { works } from "@/app/utils/lib/utils";
import Image from "next/image";
import Link from "next/link";
function WorkCard() {
  return (
    <div className=" grid grid-cols-2 max-sm:grid-cols-1 w-full gap-y-5 gap-4">
      {works.map((data, i) => (
        <Link
          href={`/work/${data?.slug}`}
          key={i}
          className=" max-md:h-fit relative col-span-1  w-full  rounded-2xl overflow-hidden"
        >
          <Image
            src={data.image}
            alt="project1"
            height={400}
            width={400}
            className=" h-full w-full object-cover "
          />
          <div className=" absolute  flex-wrap text-black flex max-sm:flex-wrap items-center gap-2.5 bottom-5 left-4">
            {data.tags.map((data, i) => (
              <p
                key={i}
                className={`${
                  data.includes("Coming") && "opacity-70"
                } px-2 py-1 font-sofiaSans font-semibold text-xs  bg-white rounded-full`}
              >
                {data}
              </p>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WorkCard;
