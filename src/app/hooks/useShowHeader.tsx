import { useCallback, useEffect, useState } from "react";

const useHideHeaderOnScroll = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop;

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
    const handleTouchMove = () => {
      // Treat touch movements as scrolling on mobile devices
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleScroll]);

  return { showHeader };
};

export default useHideHeaderOnScroll;
