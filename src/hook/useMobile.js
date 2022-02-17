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

export { useMobile945, useMobile768, useHeight953 };
