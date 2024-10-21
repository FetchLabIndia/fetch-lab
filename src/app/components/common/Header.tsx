"use client";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { headerButtons } from "@/app/utils/lib/utils";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { MenuToggle } from "../ui/MenuToggle";
import useHideHeaderOnScroll from "@/app/hooks/useShowHeader";
import useNavigation from "@/app/hooks/useNavigation";
import Link from "next/link";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      // ...menuAnimations
    ]);
  }, [isOpen, animate]);

  return scope;
}

function Header() {
  const { showHeader } = useHideHeaderOnScroll();

  const [isOpen, setIsOpen] = useState(false);
  const { isAnimating, handleAnimationComplete, handleNavigate } =
    useNavigation();
  const scope = useMenuAnimation(isOpen);

  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed top-0  left-0 z-50 w-screen h-screen bg-cuPurple"
          initial={{ scaleX: 0 }} // Start off-screen
          animate={{ scaleX: 1 }} // Slide in from the right
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }} // Ensure it scales from the right
          onAnimationComplete={handleAnimationComplete} // Trigger navigation after animation
        />
      )}

      <motion.header
        className={`flex z-40 fixed max-md:px-4 max-md:left-0 top-0 max-md:w-full 
         py-9 items-center justify-between transition-transform duration-300 ${
           showHeader ? "translate-y-0" : "-translate-y-full"
         }`}
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
      >
        <div className=" cursor-pointer" onClick={() => handleNavigate("/")}>
          <Image
            className="max-md:hidden"
            src={"/logos/Logo(White).svg"}
            alt="fetchLab logo"
            height={110}
            width={110}
          />
          <Image
            className="hidden max-md:inline-block"
            src={"/logos/Monogram(White).svg"}
            alt="fetchLab logo"
            height={30}
            width={30}
          />
        </div>
        <div className="flex max-md:hidden items-center justify-center gap-6">
          {headerButtons.map(({ title, variant, className, link }) => (
            <Link
              href={link}
              onClick={(e) => (e.stopPropagation(), handleNavigate(link))}
              key={title}
            >
              <Button
                className={className}
                variant={
                  variant as "cuYellow" | "cuRed" | "cuGreen" | "cuPurple"
                }
              >
                {title}
              </Button>
            </Link>
          ))}
        </div>
        <div
          ref={scope}
          className="hidden max-md:flex items-center justify-center gap-6"
        >
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{
              top: "-100%",
            }}
            animate={{
              top: 0,
            }}
            exit={{
              top: "-100%",
            }}
            className="flex z-30 fixed bg-black flex-col h-screen w-screen items-center justify-center gap-y-10"
          >
            {headerButtons.map(({ title, link }) => (
              <Link
                href={link}
                onClick={(e) => (e.stopPropagation(), handleNavigate(link))}
                key={title}
              >
                <Button
                  className={"text-3xl text-white w-[240px]"}
                  variant={"cuPurple"}
                >
                  {title}
                </Button>
              </Link>
            ))}
            <motion.div
              animate={{ y: [0, -7, 0] }} // Moves up by 20px and then down
              transition={{
                duration: 1, // Duration for one full cycle (up and down)
                repeat: Infinity, // Infinite loop
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-full flex justify-center items-center"
            >
              <Image
                src="/home/up.png"
                height={45}
                width={45}
                alt=""
                className=""
              />
            </motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
