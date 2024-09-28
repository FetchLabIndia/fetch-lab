"use client";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { headerButtons } from "@/app/utils/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextLink, setNextLink] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavigate = useCallback((link: string) => {
    setNextLink(link); // Store the link to navigate
    setIsAnimating(true); // Start the animation
  }, []);

  // Handle the animation end and navigate
  const handleAnimationComplete = () => {
    if (nextLink) {
      window.location.href = nextLink;
      setNextLink(null); // Reset the link after navigation
    }
  };

  // Track scroll direction
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {isAnimating && (
        <motion.div
          className="fixed top-0  left-0 z-50 w-screen h-screen bg-green-500"
          initial={{ scaleX: 0 }} // Start off-screen
          animate={{ scaleX: 1 }} // Slide in from the right
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }} // Ensure it scales from the right
          onAnimationComplete={handleAnimationComplete} // Trigger navigation after animation
        />
      )}

      <motion.header
        className={`flex z-40 fixed max-md:px-4 max-md:left-0 top-0 max-md:w-full w-11/12 py-9 items-center justify-between transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
      >
        <div onClick={() => handleNavigate("/")}>
          <Image
            src={"/logos/Logo(White).svg"}
            alt="fetchLab logo"
            height={110}
            width={110}
          />
        </div>
        <div className="flex max-sm:hidden items-center justify-center gap-6">
          {headerButtons.map(({ title, variant, className, link }) => (
            <div onClick={() => handleNavigate(link)} key={title}>
              <Button
                className={className}
                variant={
                  variant as "cuYellow" | "cuRed" | "cuGreen" | "cuPurple"
                }
              >
                {title}
              </Button>
            </div>
          ))}
        </div>
      </motion.header>
    </>
  );
}

export default Header;
