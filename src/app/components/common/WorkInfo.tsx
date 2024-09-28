"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

function WorkInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex max-md:flex-col max-md:gap-y-4 items-start w-11/12 justify-between">
      <div className=" font-extrabold gap-4 flex flex-col text-5xl text-white ">
        <p>MoodRobe</p>
        <div className=" flex font-sofiaSans items-center gap-2">
          <p className=" border w-fit font-extrabold tracking-ms leading-ms border-white rounded-full px-3 py-1 text-sm">
            Branding & Design
          </p>
          <p className=" border w-fit font-extrabold tracking-ms leading-ms border-white rounded-full px-3 py-1 text-sm">
            merchandise
          </p>
        </div>
      </div>
      <div className="text-white flex flex-col gap-7 text-2xl leading-ms">
        <div className="flex font-sofiaSans font-semibold items-center gap-4">
          <p>Moodrobe: A Blank Canvas for Minimalist Fashion</p>
          <CiCirclePlus
            className="size-8 cursor-pointer"
            onClick={toggleAccordion}
          />
        </div>

        <motion.div
          initial={{ height: "110px" }}
          animate={{ height: isOpen ? "auto" : "110px" }}
          exit={{ height: 0, opacity: 1 }}
          transition={{
            height: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.3, ease: "easeInOut" },
          }}
          className="overflow-hidden"
        >
          <p className="max-w-lg max-md:max-w-screen-md font-sofiaSans text-justify text-lg font-light">
            Minimalism in fashion isn’t just a trend—it’s a lifestyle. That’s
            the foundation Moodrobe was built on, offering blank, stylish
            T-shirts that let individuality shine through simplicity. When
            Moodrobe approached us to create their complete branding and
            guidelines, the challenge was to design an identity that felt as
            versatile as the product itself, yet bold enough to stand out in the
            world of minimalist fashion.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default WorkInfo;
