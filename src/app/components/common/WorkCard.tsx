import { works } from "@/app/utils/lib/utils";
import Image from "next/image";
import Link from "next/link";
function WorkCard() {
  return (
    <div className=" grid grid-cols-2 w-full gap-y-10 gap-4">
      {works.map((data, i) => (
        <Link
          href={"/work/id"}
          key={i}
          className=" relative col-span-1 h-full w-full  rounded-2xl overflow-hidden"
        >
          <Image
            src={"/work/Maskgroup.png"}
            alt="project1"
            height={400}
            width={400}
            className=" h-full w-full object-cover"
          />
          <div className=" absolute flex items-center gap-2.5 bottom-6 left-5">
            {data.tags.map((data, i) => (
              <p
                key={i}
                className=" px-3 py-1 font-sofiaSans font-semibold text-xs  bg-white rounded-full"
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
