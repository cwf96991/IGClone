import React, { useState } from "react";
import ReactPlayer from "react-player";

import { MuteSvg, UnMuteSvg, PlayBtnSvg } from "../image";
const PostVideo = ({ video, height }) => {
  height = height ?? "600px";
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);
  return (
    <div
      onClick={(e) => {
        setIsPlaying(!isPlaying);
      }}
      className="relative cursor-pointer overflow-hidden bg-black  "
    >
      <div align="center">
        <ReactPlayer
          url={video.video}
          height={height}
          width={"auto"}
          playing={isPlaying}
          muted={isMute}
          loop={true}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {!isPlaying && <PlayBtnSvg size={"80"} style="opacity-80" />}
      </div>
      <div
        onClick={(e) => {
          setIsMute(!isMute);
        }}
        className="absolute right-4 bottom-4 svgBgBtn"
      >
        {isMute ? <UnMuteSvg /> : <MuteSvg />}
      </div>
    </div>
  );
};

export default PostVideo;
