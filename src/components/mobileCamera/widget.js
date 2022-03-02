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
  LeftArrowSvg,
  StickerSvg,
  EffectSvg,
  MoreSvg,
  StarSvg,
  RightArrow,
  MsgSvg,
  ArrowRight,
} from "../image";
import Avatar from "../avatar";
import ModalWrapper from "../modal/modalWrapper";

const CaptureBtn = ({ webcamRef, onCapture }) => {
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
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
  "absolute w-[96%] flex pl-5 justify-between items-center";
const FlashLightBtn = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? <FlashLightSvg /> : <FlashLightOffSvg />}
    </div>
  );
};
const HeaderBtnList = ({ swipeableRef }) => {
  return (
    <div className={`top-5  ${btnListBasicStyle}`}>
      <div
        onClick={() => {
          swipeableRef.current.setIndexCurrent(1);
        }}
      >
        <CrossSvg color="stroke-white" size="24" />
      </div>
      <FlashLightBtn />
      <SettingSvg size="24" />
    </div>
  );
};
const PhotoHeaderBtnList = ({ onBack }) => {
  return (
    <div className={`top-5  ${btnListBasicStyle}`}>
      <div
        onClick={() => {
          onBack();
        }}
        className="svgBgBtn"
      >
        <LeftArrowSvg />
      </div>

      <div className="flex item-center">
        <div className="svgBgBtn">
          <LetterASvg />
        </div>
        <div className="svgBgBtn ml-2">
          <StickerSvg />
        </div>
        <div className="svgBgBtn ml-2">
          <EffectSvg />
        </div>
        <div className="svgBgBtn ml-2">
          <MoreSvg />
        </div>
      </div>
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
const BottomBtnList = ({ onSwitch }) => {
  return (
    <div className={`bottom-[35px] ${btnListBasicStyle}`}>
      <SquareSvg />
      <div className=" ">
        <SectionSlider />
      </div>
      <div
        onClick={() => {
          onSwitch();
        }}
        className="svgBgBtn"
      >
        <SwitchSvg size="24" />
      </div>
    </div>
  );
};
const StoryOptionBtn = ({ icon, text }) => {
  return (
    <div className="flex items-center svgBgBtn !py-1 w-[50%] justify-center">
      <div className="p-[1px] bg-white rounded-full avatar">{icon}</div>
      <div className="text-white text-2xs mx-4">{text}</div>
    </div>
  );
};
const PhotoBottomBtnList = ({ user, onNext }) => {
  return (
    <div className={`bottom-[35px] absolute w-[96%] flex pl-5 items-center`}>
      <StoryOptionBtn
        icon={
          user != null && (
            <Avatar
              size={"24"}
              isNFT={user.isNFT}
              img={user.avatar}
              user={user}
              onClick={() => {}}
            />
          )
        }
        text="Your Story"
      />
      <StoryOptionBtn
        icon={
          <div className="bg-green-400 rounded-full avatar w-6 h-6 ">
            <div align="center" className="mt-[5px]">
              <StarSvg />
            </div>
          </div>
        }
        text="Close Friends"
      />

      <div
        onClick={() => {
          onNext();
        }}
        className="w-12 h-12 ml-2"
      >
        <RightArrow />
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
const ShareModal = ({ user }) => {
  const [isStory, setIsStory] = useState(true);
  const OptionWidget = ({ icon, text, desc, trailing, onClick }) => {
    return (
      <div
        onClick={() => {
          onClick();
        }}
        className="flex w-full m-2 items-center justify-between px-3"
      >
        <div className="flex items-center">
          {icon}
          <div className="text-white text-sm ml-2">
            <div>{text}</div>
            <div className="text-gray-300">{desc}</div>
          </div>
        </div>
        {trailing}
      </div>
    );
  };
  const OnOffBtn = ({ isOn }) => {
    return isOn ? (
      <div className="w-6 h-6 bg-lightBlue rounded-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-2 h-2 rounded-full"></div>
      </div>
    ) : (
      <div className="w-6 h-6 border border-gray-100 rounded-full" />
    );
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[40px] h-[4px] rounded-lg bg-slate-300 mt-3 mb-5"></div>
      <div className="textBlack font-medium text-lg mb-3">Share</div>

      <div className="lightGrayDivider-xs "></div>
      <OptionWidget
        onClick={() => {
          setIsStory(true);
        }}
        icon={
          user && (
            <Avatar
              size={"40"}
              isNFT={user.isNFT}
              img={user.avatar}
              user={user}
              onClick={() => {}}
            />
          )
        }
        text="Your story"
        desc="Sharing options >"
        trailing={<OnOffBtn isOn={isStory} />}
      />
      <OptionWidget
        onClick={() => {
          setIsStory(false);
        }}
        icon={
          <div className="bg-green-400 rounded-full avatar w-10 h-10 relative">
            <div
              align="center"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <StarSvg />
            </div>
          </div>
        }
        text="Close friends"
        desc={user != null ? `${user.extraFollower} people >` : ""}
        trailing={<OnOffBtn isOn={!isStory} />}
      />
      <OptionWidget
        onClick={() => {}}
        icon={
          <div className="border-gray-100 border-[0.5px] rounded-full avatar w-10 h-10 relative">
            <div
              align="center"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[2px]"
            >
              <MsgSvg />
            </div>
          </div>
        }
        text="Message"
        trailing={
          <div className="-translate-x-1">
            <ArrowRight />
          </div>
        }
      />
    </div>
  );
};
const NextModal = ({ nextModalRef, user }) => {
  return (
    <ModalWrapper
      modalRef={nextModalRef}
      id={"nextModal"}
      width={"w-[98%]"}
      bgColor="bg-lightBlack"
      content={<ShareModal user={user} />}
    />
  );
};
export {
  CaptureBtn,
  HeaderBtnList,
  BottomBtnList,
  SideBtnList,
  MultiCapture,
  SectionSlider,
  PhotoHeaderBtnList,
  PhotoBottomBtnList,
  ShareModal,NextModal
};
