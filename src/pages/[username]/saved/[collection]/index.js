import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    if (window) {
      const url = location.href;
      const list = location.href.split("/");
      const last = list[list.length - 2];
      const newUrl = url.replace(`${last}/`, "");
      location.href = newUrl;
    }
  }, []);
  return <div></div>;
};
export default Index;
