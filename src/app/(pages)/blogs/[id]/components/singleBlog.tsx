"use client";
import StayEngaged from "@/app/components/common/StayEngaged";
import Footer from "@/app/components/common/Footer";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import Image from "next/image";
import transition from "@/app/components/custom/Transition";
import React from "react";
export interface blogsData {
  image: string;
  title: string;
  date: string;
  body: string;
}
function SingleBlog({ data }: { data: blogsData }) {
  return (
    <>
      <div className=" text-white max-md:w-full max-md:px-4  w-9/12 py-20 pt-32">
        <div className=" flex justify-between">
          <p className=" text-4xl max-md:text-xl font-extrabold w-7/12">
            {data.title}
          </p>

          <div className=" flex items-center gap-2  max-md:text-lg self-start text-3xl">
            <FaLinkedin />
            <FaXTwitter className=" ml-1.5" />
            <ImFacebook />
          </div>
        </div>

        <p className=" font-sofiaSans my-4 mb-5  max-md:text-base text-lg">
          {data.date}
        </p>
        <div className=" w-full h-full">
          <Image
            src={data.image}
            alt=""
            height={800}
            width={800}
            className=" w-full h-full object-cover"
          />
        </div>
        <section
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      </div>
      <StayEngaged />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </>
  );
}

export default transition(SingleBlog);
