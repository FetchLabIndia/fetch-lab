"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { ComponentType, useState, useEffect } from "react";

const transition = <P extends object>(Component: ComponentType<P>) => {
  const WithTransition = (props: P) => {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Matches the transition duration

      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        <Component {...props} />
        {/* AnimatePresence to control the exit animation */}
        <AnimatePresence mode="wait">
          {isAnimating && (
            <>
              {/* Slide-out animation */}
              <motion.div
                className="fixed top-0 left-0 w-screen h-screen z-50 bg-green-500"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "right" }} // Ensure it scales from the top
              />
            </>
          )}
        </AnimatePresence>
      </>
    );
  };

  // Add display name to avoid the eslint warning
  WithTransition.displayName = `WithTransition(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithTransition;
};

export default transition;
