import Base from "./Base";
import { StorySlider } from "../components/slider";
import { useMobile945 } from "../hook/useMobile";
import { useState, useEffect, useRef } from "react";
import PostList from "../components/postList";

const Index = () => {
  const isHideSidePanel = useMobile945();

  return (
    <Base>
      <div className="flex ">
        <div
          className={`${
            isHideSidePanel ? "mx-auto" : "ml-auto"
          } flex flex-col max-w-full md:max-w-[620px]`}
        >
          <StorySlider />
          <PostList />
        </div>
        {!isHideSidePanel && <div className="w-[325px] mr-auto">username</div>}
      </div>
    </Base>
  );
};
export default Index;
