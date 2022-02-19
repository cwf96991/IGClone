import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    if (window) {
      location.href = "/";
    }
  }, []);
  return <div></div>;
};
export default Index;
