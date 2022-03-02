import Webcam from "react-webcam";
import { useRef, useState, useContext, useEffect } from "react";
import { useWindowSize } from "../../hook/useMobile";
import {
  CaptureBtn,
  HeaderBtnList,
  BottomBtnList,
  SideBtnList,
  PhotoHeaderBtnList,
  PhotoBottomBtnList,
  NextModal,
} from "./widget";
import { UserContext } from "../UserContext";
import useUser from "../../hook/useUser";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
const CameraMain = ({ webcamRef, swipeableRef }) => {
  const [isFront, setIsFront] = useState(true);
  const [imgData, setImgData] = useState(null);
  const nextModalRef = useRef(null);
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
  const userInfo = useContext(UserContext);
  const user = useUser();

  useEffect(() => {
    if (user) {
      userInfo.setUserByDispatch({ type: "switch", value: user });
    }
  }, [user]);
  return (
    <div
      onDoubleClick={() => {
        setIsFront(!isFront);
      }}
      className="w-screen bg-black h-screen relative "
    >
      {imgData == null ? (
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          audio={false}
          height={finalHeight ?? 0}
          width={finalWidth ?? 0}
          className={"w-full px-2 my-2 rounded-2xl"}
          videoConstraints={isFront ? frontVideoConstraints : videoConstraints}
        />
      ) : (
        <img src={imgData}></img>
      )}
      {imgData == null ? (
        <>
          <HeaderBtnList swipeableRef={swipeableRef} />
          <SideBtnList />
          <CaptureBtn
            webcamRef={webcamRef}
            onCapture={(capture) => {
              setImgData(capture);
            }}
          />
        </>
      ) : (
        <>
          <PhotoHeaderBtnList
            onBack={() => {
              setImgData(null);
            }}
          />
        </>
      )}
      {imgData == null ? (
        <BottomBtnList
          onSwitch={() => {
            setIsFront(!isFront);
          }}
        />
      ) : (
        <PhotoBottomBtnList
          user={user.user}
          onNext={() => {
            let modal2 = document.getElementById("nextModal");

            modal2.checked = true;
            disableBodyScroll(nextModalRef.current);
          }}
        />
      )}
      <NextModal nextModalRef={nextModalRef} user={user.user} />
    </div>
  );
};
export default CameraMain;
