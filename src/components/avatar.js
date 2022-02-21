import ImageWidget from "./imageWidget";
const Avatar = ({ size, isHighlight, img, isNFT }) => {
  isHighlight = isHighlight ?? false;
  isNFT = isNFT ?? true ? "mask mask-hexagon" : "";
  if (size == "56") {
    size = "!w-[56px] !h-[56px]";
  } else if (size == "32") {
    size = "!w-[32px] !h-[32px]";
  } else if (size == "20") {
    size = "!w-[20px] !h-[20px]";
  } else if (size == "40") {
    size = "!w-[40px] !h-[40px]";
  } else if (size == "44") {
    size = "!w-[44px] !h-[44px]";
  }else if (size == "24") {
    size = "!w-[24px] !h-[24px]";
  }else if (size == "28") {
    size = "!w-[28px] !h-[28px]";
  }
  return isHighlight ? (
    <div className="avatar carousel-item cursor-pointer">
      <div
        className={`rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-700`}
      >
        <div className={`p-[2px] bg-white rounded-full `}>
          <ImageWidget
            img={img}
            placeholder={
              <div
                className={`rounded-full bg-slate-200 animate-pulse ${size} ${isNFT}`}
              />
            }
            style={`rounded-full ${size} ${isNFT}`}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="avatar cursor-pointer">
      <ImageWidget
        img={img}
        placeholder={
          <div
            className={`rounded-full bg-slate-200 animate-pulse ${size} ${isNFT}`}
          />
        }
        style={`rounded-full ${size} ${isNFT}`}
      />
    </div>
  );
};

export default Avatar;
