const Avatar = ({ size, isHighlight, img, isNFT }) => {
  isHighlight = isHighlight ?? false;
  isNFT = isNFT ?? true ? "mask mask-hexagon" : "";
  if (size == "56") {
    size = "!w-[56px] !h-[56px]";
  } else if (size == "32") {
    size = "!w-[32px] !h-[32px]";
  } else if (size=="20"){
    size = "!w-[20px] !h-[20px]";
  }else if (size=="40"){
    size = "!w-[40px] !h-[40px]";
  }
  return isHighlight ? (
    <div className="avatar carousel-item cursor-pointer">
      <div
        className={`rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-700`}
      >
        <div className={`p-[2px] bg-white rounded-full `}>
          <img src={img} className={`rounded-full ${size} ${isNFT}`} />
        </div>
      </div>
    </div>
  ) : (
    <div className="avatar cursor-pointer">
      <img src={img} className={`rounded-full !z-0 ${size} ${isNFT}`} />
    </div>
  );
};

export default Avatar;
