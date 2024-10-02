import { cn } from "@/app/utils/lib/cn";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "cuYellow" | "cuRed" | "cuGreen" | "cuPurple"; // Optional prop for color variants
  className?: string; // Optional custom className prop
};

function Button({
  children,
  variant = "cuYellow",
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    cuYellow: "bg-cuYellow hover:border-cuYellow",
    cuRed: "bg-cuRed hover:border-cuRed",
    cuGreen: "bg-cuGreen hover:border-cuGreen",
    cuPurple: "bg-cuPurple hover:border-cuPurple",
  };

  return (
    <button
      {...props}
      className={cn(
        "  text-sm font-[900] p-[0.27rem] px-3  rounded-full border-transparent border-2 transition-all duration-500",
        "hover:bg-transparent hover:text-white",
        variantClasses[variant], // Apply variant classes
        className // Merge in custom className if provided
      )}
    >
      {children}
    </button>
  );
}

export default Button;
