"use client";
import Footer from "@/app/components/common/Footer";
import Project from "@/app/components/common/Projects";
import StayEngaged from "@/app/components/common/StayEngaged";
import WorkImages from "@/app/components/common/WorkImages";
import WorkInfo from "@/app/components/common/WorkInfo";
import transition from "@/app/components/custom/Transition";
import { works } from "@/app/utils/lib/utils";
import Image from "next/image";
import Link from "next/link";
export interface SlugProg {
  title: string;
  desc: string;
  tags: string[];
  heading: string;
  images: string[];
  gif: string;
}
function RenderWork({ slug }: { slug: SlugProg }) {
  return (
    <div className="w-full mt-32 transition-all duration-300 max-md:mt-28 flex flex-col items-center justify-center">
      <WorkInfo
        title={slug?.title}
        desc={slug?.desc}
        tags={slug?.tags}
        heading={slug?.heading}
      />
      <WorkImages images={[slug.gif]} className="-mb-2.5" />
      <WorkImages images={slug?.images} className=" columns-2" />
      <hr className="w-full border-t border-zinc-800" />
      <div className=" text-white border-zinc-800 w-full flex justify-center items-center">
        <div className=" w-9/12 max-md:w-full max-md:px-4 max-md:text-3xl text-4xl py-11">
          <p>See More</p>
          <div className="flex overflow-x-scroll snap-x snap-mandatory scroll-snap-x max-md:gap-2.5 gap-7 mt-7">
            {works.slice(0, 2).map((data, i) => (
              <Link
                href={`/work/${data?.slug}`}
                key={i}
                className="relative aspect-ratio-[3/2]  flex-shrink-0 h-[45dvh] max-md:h-[25dvh] w-1/2 max-md:w-11/12 snap-center rounded-2xl overflow-hidden"
              >
                <Image
                  src={data?.image}
                  alt="project1"
                  height={400}
                  width={400}
                  className="h-full w-full object-cover   "
                />
                <div className="absolute text-black flex max-sm:flex-wrap items-center gap-2.5 bottom-5 left-4">
                  {data.tags.map((tag, j) => (
                    <p
                      key={j}
                      className={`${
                        tag.includes("Coming") && "opacity-70"
                      } px-3 py-1 font-sofiaSans font-semibold text-xs bg-white rounded-full`}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Project />
      <StayEngaged />
      <hr className="w-full border-t border-zinc-800" />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </div>
  );
}

export default transition(RenderWork);
