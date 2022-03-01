import React, { useState, useEffect } from "react";

const useMobile945 = () => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 1020);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  return isMobile;
};
const useMobile768 = () => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  return isMobile;
};
const useHeight953 = () => {
  const handleResize = () => {
    setIsMobile(window.innerHeight > 953);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  return isMobile;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export { useMobile945, useMobile768, useHeight953, useWindowSize };
