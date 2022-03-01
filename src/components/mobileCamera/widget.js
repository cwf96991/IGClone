import { useRef, useState, useCallback, useEffect } from "react";
import {
  CrossSvg,
  SwitchSvg,
  SquareSvg,
  FlashLightSvg,
  FlashLightOffSvg,
  SettingSvg,
  LetterASvg,
  InfiniteSvg,
  LayoutSvg,
  HandFreeSvg,
  ArrowDownSvg,
  MultiCapture,
  LevelSvg,
} from "../image";
const CaptureBtn = ({ webcamRef }) => {
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);
  return (
    <div
      onClick={() => {
        capture();
      }}
      className="absolute bottom-[120px] left-1/2 -translate-x-1/2 "
    >
      <div className={`rounded-full  border-4 border-white`}>
        <div className={`p-[2px] bg-white rounded-full  m-[1.5px]`}>
          <div className=" w-[56px] h-[56px] "></div>
        </div>
      </div>
    </div>
  );
};
const btnListBasicStyle =
  "absolute w-[95%] flex mx-4 justify-between items-center";
const FlashLightBtn = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    // <label class="swap">
    //   <input type="checkbox" />
    //   <div class="swap-on">
    //   <FlashLightSvg />
    //   </div>
    //   <div class="swap-off">
    //     <FlashLightOffSvg />
    //   </div>
    // </label>
    <div
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? <FlashLightSvg /> : <FlashLightOffSvg />}
    </div>
  );
};
const HeaderBtnList = () => {
  return (
    <div className={`top-5  ${btnListBasicStyle}`}>
      <CrossSvg color="stroke-white" size="24" />
      <FlashLightBtn />
      <SettingSvg size="24" />
    </div>
  );
};
const SideBtnList = () => {
  const [isExpand, setIsExpaned] = useState(false);
  const btnList = [
    { text: "Create", icon: <LetterASvg /> },
    { text: "Boomerang", icon: <InfiniteSvg /> },
    { text: "Layout", icon: <LayoutSvg /> },
    { text: "Hands-free", icon: <HandFreeSvg />, showIsExpanded: true },
    { text: "Multi-capture", icon: <MultiCapture />, showIsExpanded: true },
    { text: "Level", icon: <LevelSvg />, showIsExpanded: true },
  ];
  const BtnOption = ({ btn }) => {
    const { text, icon, showIsExpanded } = btn;
    showIsExpanded = showIsExpanded ?? false;
    return (
      <div
        className={
          showIsExpanded
            ? `${
                isExpand ? " opacity-100 " : "opacity-0 "
              } transform transition-opacity flex items-center my-1`
            : "flex items-center my-1"
        }
      >
        {icon}
        {isExpand && <div className="text-white ml-2">{text}</div>}
      </div>
    );
  };
  return (
    <div
      className={`${btnListBasicStyle} ${
        isExpand ? "left-9" : "left-5"
      } !flex-col  top-1/2 -translate-y-1/2 -translate-x-1/2 `}
    >
      <div className={`flex flex-col ${isExpand ? "ml-[75px]" : ""} `}>
        {btnList.map((btn, index) => {
          return <BtnOption btn={btn} key={index} />;
        })}
      </div>

      <div className={`flex ${isExpand ? "ml-4" : ""}`}>
        <div
          onClick={() => {
            setIsExpaned(!isExpand);
          }}
          className={`${
            isExpand ? "rotate-180" : "-translate-y-[85px]"
          } transform transition-transform `}
        >
          <ArrowDownSvg size="24" />
        </div>
        {isExpand && <div className="text-white ml-2">Close</div>}
      </div>
    </div>
  );
};
const BottomBtnList = () => {
  return (
    <div className={`bottom-[35px] ${btnListBasicStyle}`}>
      <SquareSvg />
      <div className=" ">
        <SectionSlider />
      </div>
      <div className="svgBgBtn">
        <SwitchSvg size="24" />
      </div>
    </div>
  );
};
const SectionSlider = () => {
  const sectionList = ["POST", "STORY", "REELS", "LIVE"];
  return (
    <div className="flex carousel w-[80%] mx-auto">
      {sectionList.map((section, index) => {
        return (
          <div key={index} className="text-white mr-3 carousel-item">
            {section}
          </div>
        );
      })}
    </div>
  );
};
export {
  CaptureBtn,
  HeaderBtnList,
  BottomBtnList,
  SideBtnList,
  MultiCapture,
  SectionSlider,
};
