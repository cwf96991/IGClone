import Webcam from "react-webcam";
import { useRef, useState, useCallback, useEffect } from "react";
import { useWindowSize } from "../../hook/useMobile";
import {
  CaptureBtn,
  HeaderBtnList,
  BottomBtnList,
  SideBtnList,
} from "./widget";
const CameraMain = ({ webcamRef,swipeableRef }) => {
  const [isFront, setIsFront] = useState(true);
  const size = useWindowSize();
  const isLandscape = size.height <= size.width;
  let finalHeight = size.height - 100;
  let finalWidth = size.width - 8;
  const ratio = isLandscape
    ? finalWidth / finalHeight
    : finalHeight / finalWidth;
  const frontVideoConstraints = {
    facingMode: "user",
    aspectRatio: ratio,
  };
  const videoConstraints = {
    facingMode: { exact: "environment" },
    aspectRatio: ratio,
  };
  
  return (
    <div
      onDoubleClick={() => {
        setIsFront(!isFront);
      }}
      className="w-screen bg-black h-screen relative "
    >
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        audio={false}
        height={finalHeight ?? 0}
        width={finalWidth ?? 0}
        className={"w-full px-2 my-2 rounded-2xl"}
        videoConstraints={isFront ? frontVideoConstraints : videoConstraints}
      />
      <HeaderBtnList swipeableRef={swipeableRef} />
      <SideBtnList />
      <CaptureBtn webcamRef={webcamRef} />
      <BottomBtnList
        onSwitch={() => {
          setIsFront(!isFront);
        }}
      />
    </div>
  );
};
export default CameraMain;
