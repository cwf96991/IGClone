import {
  ImageVideoSvg,
  ImageVideoActiveSvg,
  UploadErrorSvg,
  BackBtnSvg,
  SelectCropSvg,
  ZoomSvg,
  GallerySvg,
  OriginalSvg,
  SquareSvg,
  PortraitSvg,
  LandscapeSvg,
  PlusSvg,
  CrossSvg,
  LocationPinSvg,
  ArrowDownSvg,
} from "../image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { UserContext } from "../UserContext";
import Avatar from "../avatar";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ImageFilter from "../imageFilter";
import { FileUploader } from "react-drag-drop-files";
import EmojiTextPost from "../post/emojiTextPost";
function getTitle(step) {
  if (step == 1) {
    return "Create new post";
  } else if (step == 2) {
    return "Crop";
  } else if (step == 3) {
    return "Edit";
  } else if (step == 4) {
    return "Create new post";
  }
  return "";
}
const Header = ({ isError, step, onBack, onNext }) => {
  return (
    <div className="flex justify-between items-center h-[42px] mx-4">
      <div>
        {step != 1 && (
          <div onClick={onBack} className="btnText">
            <BackBtnSvg />
          </div>
        )}
      </div>
      <div className=" font-bold mx-auto">
        {isError ? "File couldn't be uploaded" : getTitle(step)}
      </div>
      <div>
        {step != 1 && (
          <div
            onClick={onNext}
            className="btnText !text-lightBlue font-bold !text-sm"
          >
            {step == 4 ? "Share" : "Next"}
          </div>
        )}
      </div>
    </div>
  );
};
function getBtnStyle(focus, target) {
  if (focus == "") {
    return "svgBgBtn";
  } else if (focus == target) {
    return "selectedSvgBgBtn";
  } else {
    return "unselectedSvgBgBtn";
  }
}
const FuncSvgBtn = ({
  focus,
  target,
  isEnd,
  activeSvg,
  svg,
  content,
  onClick,
}) => {
  isEnd = isEnd ?? false ? "dropdown-end" : "";
  return (
    <div
      className={`dropdown dropdown-top ${isEnd} ${
        focus == target ? "dropdown-open" : "dropdown-close"
      }`}
    >
      <div
        onClick={() => {
          if (focus == target) {
            onClick("");
          } else {
            onClick(target);
          }
        }}
        className={`${getBtnStyle(focus, target)} mr-2`}
      >
        {focus == target ? activeSvg : svg}
      </div>
      <ul
        tabindex="0"
        class=" shadow menu dropdown-content bg-lightBlack !opacity-80 rounded-lg mb-5"
      >
        {content}
      </ul>
    </div>
  );
};
const cropOptionList = [
  {
    text: "Original",
    icon: <OriginalSvg />,
    unSelect: <OriginalSvg color="fill-gray-300" stroke="stroke-gray-300" />,
  },
  {
    text: "1:1",
    icon: <SquareSvg />,
    unSelect: <SquareSvg color="fill-gray-300" />,
  },
  {
    text: "4:5",
    icon: <PortraitSvg />,
    unSelect: <PortraitSvg color="fill-gray-300" />,
  },
  {
    text: "16:9",
    icon: <LandscapeSvg />,
    unSelect: <LandscapeSvg color="fill-gray-300" />,
  },
];
const CropWidget = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="flex flex-col w-[120px] ">
      {cropOptionList.map((options, index) => {
        const { text, icon, unSelect } = options;
        let isSelected = option == index;
        return (
          <div key={index} className="flex flex-col">
            <div
              onClick={() => {
                setOption(index);
              }}
              className="text-white h-[48px] cursor-pointer flex justify-between items-center px-3"
            >
              <div
                className={`${
                  isSelected ? "text-white" : "text-gray-300"
                } font-bold text-sm`}
              >
                {text}
              </div>

              {isSelected ? icon : unSelect}
            </div>
            {index != cropOptionList.length - 1 && (
              <div className="lightGrayDivider-sm" />
            )}
          </div>
        );
      })}
    </div>
  );
};
const ZoomWidget = () => {
  // const [value, setValue] = useState(0);
  return (
    <div className="w-[132px] h-[32px] px-3 py-2">
      <Slider
        trackStyle={{ backgroundColor: "white", height: 5 }}
        handleStyle={{
          borderColor: "white",
          height: 16,
          width: 16,
          "box-shadow": "unset",
          backgroundColor: "white",
        }}
        railStyle={{ backgroundColor: "black", height: 5 }}
      />
    </div>
  );
};
const GalleryWidget = ({ uploadUrl, openDiscardModal }) => {
  return (
    <div className="w-[180px] h-[118px] flex p-2 items-center opacity-unset">
      <div className="relative">
        <img src={uploadUrl} className="w-[106px] h-[96px] !opacity-unset " />
        <div
          onClick={() => {
            openDiscardModal();
          }}
          className="svgBgBtn absolute top-0 right-0 m-1 !bg-black !p-1"
        >
          <CrossSvg color={"stroke-white"} size={"12"} />
        </div>
      </div>
      <FileUploader hoverTitle=" " classes="drop-area" name="file">
        <div className="cursor-pointer ml-2 w-[46px] h-[46px] px-auto py-auto rounded-full border border-white ">
          <div className="my-auto translate-y-1/2 center" align="center">
            <PlusSvg />
          </div>
        </div>
      </FileUploader>
    </div>
  );
};
const BtnBar = ({ focus, onClick, uploadUrl, openDiscardModal }) => {
  return (
    <div className="absolute bottom-0 left-0 p-4 flex justify-between items-center w-full">
      <div className="flex ">
        <FuncSvgBtn
          focus={focus}
          onClick={onClick}
          target="crop"
          activeSvg={<SelectCropSvg color="fill-black" />}
          svg={<SelectCropSvg />}
          content={<CropWidget />}
        />
        <FuncSvgBtn
          focus={focus}
          onClick={onClick}
          target="zoom"
          activeSvg={<ZoomSvg color="fill-black" />}
          svg={<ZoomSvg />}
          content={<ZoomWidget />}
        />
      </div>
      <FuncSvgBtn
        focus={focus}
        onClick={onClick}
        target="stack"
        isEnd={true}
        activeSvg={<GallerySvg color="fill-black" />}
        svg={<GallerySvg />}
        content={
          <GalleryWidget
            uploadUrl={uploadUrl}
            openDiscardModal={openDiscardModal}
          />
        }
      />
    </div>
  );
};
const filterList = [
  "Original",
  "Clarendon",
  "Gingham",
  "Moon",
  "Lark",
  "Reyes",
  "Juno",
  "Slumber",
  "Crema",
  "Ludwig",
  "Aden",
  "Perpetua",
];
const FilterPanel = () => {
  const [filters,setFilters] = useState("Original")
  return (
    <div className="flex flex-col">
      <div className="overflow-y-scroll max-h-[438px]">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 px-4 my-4 ">
          {filterList.map((filter, index) => {
            return <ImageFilter text={filter} key={index} filters={filters} setFilters={(filter)=>{
              setFilters(filter)
            }}/>;
          })}
        </div>
      </div>
      <div className="lightGrayDivier-sm"></div>
      <div className="h-[50px] w-full px-4 py-auto">
        <div className="">
          <Slider
            className="my-[25px] -translate-y-1/2"
            align="center"
            trackStyle={{ backgroundColor: "black", height: 5 }}
            handleStyle={{
              borderColor: "black",
              height: 20,
              width: 20,
              marginTop: -7,
              "box-shadow": "unset",
              backgroundColor: "black",
            }}
            railStyle={{ backgroundColor: "#8E8E8E", height: 5 }}
          />
        </div>
      </div>
    </div>
  );
};
const Step3PanelTab = ({ isFilter, text, setIsFilter }) => {
  isFilter = text == "Filters" ? isFilter : !isFilter;
  let filter = text == "Filters";
  return (
    <div
      onClick={() => {
        setIsFilter(filter);
      }}
      className={`font-bold  text-center   h-[53px]  ${
        isFilter ? "border-b border-b-black" : ""
      }  `}
    >
      <div
        className={`translate-y-1/2 ${
          isFilter ? "text-black" : "text-gray-300"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
const AdjSliderItem = ({ text }) => {
  const [value, setValue] = useState(50);
  return (
    <div className="flex flex-col mt-[14px] mx-4 group">
      <div className="flex justify-between items-center ">
        <div className="font-medium ">{text}</div>
        {value != 50 && (
          <div
            onClick={() => {
              setValue(50);
            }}
            className="text-sm font-bold cursor-pointer !text-lightBlue group-hover:flex hidden"
          >
            Reset
          </div>
        )}
      </div>
      <div className="flex items-center">
        <Slider
          className="my-[25px] -translate-y-1/2 mr-2 translate-x-0"
          align="center"
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
          startPoint={50}
          trackStyle={{ backgroundColor: "black", height: 5 }}
          handleStyle={{
            borderColor: "black",
            height: 20,
            width: 20,
            marginTop: -7,
            "box-shadow": "unset",
            backgroundColor: "black",
          }}
          railStyle={{ backgroundColor: "#8E8E8E", height: 5 }}
        />
        <div className="text-xs -translate-y-[6px]">{value - 50}</div>
      </div>
    </div>
  );
};
const AdjList = [
  "Brightness",
  "Contrast",
  "Saturation",
  "Temperature",
  "Fade",
  "Vignette",
];
const Step3SidePanel = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <div className=" flex flex-col max-w-[339px] border-l-gray-300 border-l-[0.5px] ">
      <div className="grid grid-cols-2 h-[53px] border-b-[0.5px] border-b-gray-300 cursor-pointer">
        <Step3PanelTab
          isFilter={isFilter}
          text={"Filters"}
          setIsFilter={(filter) => {
            setIsFilter(filter);
          }}
        />
        <Step3PanelTab
          isFilter={isFilter}
          text={"Adjuestments"}
          setIsFilter={(filter) => {
            setIsFilter(filter);
          }}
        />
      </div>
      {isFilter ? (
        <FilterPanel />
      ) : (
        <div className="flex flex-col w-[339px] overflow-y-scroll max-h-[488px]">
          {AdjList.map((adj, index) => {
            return <AdjSliderItem key={index} text={adj} />;
          })}
        </div>
      )}
    </div>
  );
};
const Step4Panel = ({ uploadUrl }) => {
  const userInfo = useContext(UserContext).userContext;
  const [text, setText] = useState("");
  const [openEmoji,setOpenEmoji] = useState(false)
  return (
    <div className=" flex flex-col w-[339px]  border-l-gray-300 border-l-[0.5px] border-t-gray-300 border-t-[0.5px] ">
     <div className={`${openEmoji?"":"overflow-y-scroll"} max-h-[541px]`}>
     <div className="flex flex-col mx-4">
        {userInfo && (
          <div className="flex my-4">
            <Avatar
              size={"28"}
              isNFT={userInfo.user.isNFT}
              img={userInfo.user.avatar}
            />
            <div className="text-black font-bold ml-2">
              {userInfo.user.username}
            </div>
          </div>
        )}
        <div className="">
          <textarea
            class="textarea"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Write a option"
            className="bg-transparent focus:outline-none w-full h-[168px] placeholder:text-gray-300"
          ></textarea>
        </div>
      </div>
      <EmojiTextPost
        text={text}
        size={"20"}
        color={"fill-gray-300"}
        setText={(text) => {
          setText(text);
        }}
        centerWidget={<div></div>}
        trailingWidget={
          <div className="text-xs text-gray-100">{`${text.length}/2,200`}</div>
        }
        emojiHandler={(isOpen)=>{
          setOpenEmoji(isOpen);
        }}
      />
      <div className="">
        <div className="lightGrayDivider"></div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add Location"
            class="input w-full max-w-xs bg-transparent focus:outline-none focus:border-0 placeholder:text-gray-300"
          />
          <div className="pr-4">
            <LocationPinSvg />
          </div>
        </div>
        <div className="lightGrayDivider"></div>
        <div tabindex="0" class="collapse ">
          <input type="checkbox" />
          <div class="collapse-title  font-bold p-0 m-0">
            <div className="py-auto flex items-center h-[44px] justify-between px-4">
              <div>Accessibility</div>
              <div>
                <ArrowDownSvg size={"16"} />
              </div>
            </div>
          </div>
          <div class="collapse-content p-0  ">
            <div className="px-4 text-xs text-gray-300  ">
              Alt text describes your photos for people with visual impairments.
              Alt text will be automatically created for your photos or you can
              choose to write your own.
            </div>
            <div className="flex items-center mx-4">
              <img src={uploadUrl} className="w-[44px] h-[44px] mr-2" />
              <input
                type="text"
                placeholder="Write alt text..."
                class="input w-full max-w-xs bg-transparent focus:outline-none focus:border-0 placeholder:text-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="lightGrayDivider"></div>
        <div tabindex="0" class="collapse">
          <input type="checkbox" />
          <div class="collapse-title  font-bold p-0 m-0">
            <div className="flex items-center h-[44px] justify-between px-4">
              <div>Advanced Settings</div>
              <div>
                <ArrowDownSvg size={"16"} />
              </div>
            </div>
          </div>
          <div class="collapse-content p-0 m-0 -translate-y-4">
            <div className="flex flex-col mx-4">
              <div className="flex items-center justify-between">
                <div>Turn off commenting</div>
                <input type="checkbox" class="toggle" />
              </div>
              <div className="text-xs text-gray-300 ">
                You can change this later by going to the ··· menu at the top of
                your post.
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
      
    </div>
  );
};
const Content = ({
  width,
  uploadUrl,
  isError,
  isDrag,
  handleChange,
  handleDrag,
  step,
  openDiscardModal,
}) => {
  width = width ?? "w-[541px]";
  const [focus, setFocus] = useState("");
  return uploadUrl != null && !isError ? (
    <div className="flex">
      <div className={`${width} h-[541px] relative grow`}>
        <img
          onClick={() => {
            if (step == 2) {
              setFocus("");
            }
          }}
          src={uploadUrl}
          className="w-full h-full"
        />
        {step == 2 && (
          <BtnBar
            focus={focus}
            uploadUrl={uploadUrl}
            openDiscardModal={openDiscardModal}
            onClick={(text) => {
              setFocus(text);
            }}
          />
        )}
      </div>
      {step == 3 && <Step3SidePanel />}
      {step == 4 && <Step4Panel uploadUrl={uploadUrl} />}
    </div>
  ) : (
    <FileUploader
      handleChange={handleChange}
      hoverTitle=" "
      classes="drop-area"
      name="file"
      onDraggingStateChange={handleDrag}
    >
      <div
        className={`flex flex-col   ${width} h-[541px] items-center justify-center mx-auto my-auto`}
      >
        <div className="">
          {isError ? (
            <UploadErrorSvg />
          ) : isDrag ? (
            <ImageVideoActiveSvg />
          ) : (
            <ImageVideoSvg />
          )}
        </div>
        <div className="text-22 mt-4">
          {isError
            ? "This file is not supported"
            : "Drag photos and videos here"}
        </div>
        {isError && (
          <div className="text-gray-300 text-sm font-medium">
            <div className="font-bold inline">{file.name}</div>
            {` could not be uploaded.`}
          </div>
        )}
        <label>
          <input type="file" />
          <div
            className={`btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm !mt-4`}
          >
            {isError ? "Select Other Files" : "Select From Computer"}
          </div>
        </label>
      </div>
    </FileUploader>
  );
};

export { Header, Content };
