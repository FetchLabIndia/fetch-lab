/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Accordion({
  Data,
  index,
  title,
}: {
  Data: any[];
  index: number;
  title: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full items-center mb-4 justify-center">
      <div
        className="text-5xl max-sm:text-3xl border-t-2 max-md:w-full max-md:py-4 py-7 pb-3 max-md:pb-1.5 flex w-9/12 justify-between cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="font-extrabold max-md:w-full max-md:text-2xl">{title}</p>
        <div className="flex items-center gap-5">
          <motion.div
            animate={{
              rotate: isExpanded ? 180 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={"/accordion/emoji.png"}
              width={55}
              height={55}
              alt="down"
              className="opacity-0 group-hover:opacity-100 max-sm:group-hover:hidden transition-opacity duration-500"
            />
          </motion.div>
          <p className="font-sofiaSans font-light ">0{index}</p>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expand flex flex-wrap w-9/12 max-md:w-full overflow-hidden"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <div className="flex flex-wrap gap-2 gap-y-3 max-md:w-full w-9/12 ">
              {Data.map(({ title, bg }) => (
                <div
                  key={title}
                  style={{
                    backgroundColor: bg,
                    color: bg === "#6B34CD" ? "white" : "black",
                  }}
                  className=" text-2xl max-md:text-base font-[900] p-[0.20rem] px-4 leading-ms rounded-full border-transparent border-2 transition-all max-md:px-2.5 duration-500 text-black"
                >
                  {title}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
