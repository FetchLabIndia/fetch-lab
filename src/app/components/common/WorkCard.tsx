import { works } from "@/app/utils/lib/utils";
import Image from "next/image";
import Link from "next/link";
function WorkCard() {
  return (
    <div className=" grid grid-cols-2 max-sm:grid-cols-1 w-full gap-y-10 gap-4">
      {works.map((data, i) => (
        <Link
          href={"/work/id"}
          key={i}
          className=" relative col-span-1 h-full w-full  rounded-2xl overflow-hidden"
        >
          <Image
            src={"https://i.pinimg.com/564x/9b/0a/77/9b0a7733a806580064500181bc0a9e2d.jpg"}
            alt="project1"
            height={400}
            width={400}
            className=" h-full w-full object-cover max-sm:h-[350px]"
          />
          <div className=" absolute flex max-sm:flex-wrap items-center gap-2.5 bottom-6 left-5">
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
