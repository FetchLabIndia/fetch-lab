import { useCallback, useState } from "react";

function useNavigation() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextLink, setNextLink] = useState<string | null>(null);
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

  return { handleNavigate, handleAnimationComplete, isAnimating };
}

export default useNavigation;
