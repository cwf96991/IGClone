import { GridSvg, BookmarkSmallSvg, TaggedSvg, VideoSvg } from "../image";
import { UserSlider } from "../slider";
const Tab = ({ tab, selectedTab, onClick }) => {
  const { icon, text, unSelect } = tab;
  const isSelected = selectedTab == text;
  return (
    <div
      onClick={() => {
        onClick(text);
      }}
      className={`flex items-center mr-12 h-[53px] cursor-pointer ${
        isSelected ? "border-t border-black" : ""
      }`}
    >
      {isSelected ? icon : unSelect}
      <div
        className={`ml-2 font-medium text-xs ${
          isSelected ? "textBlack" : "text-gray-300"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
const tabsList = [
  {
    icon: <GridSvg />,
    text: "POSTS",
    unSelect: <GridSvg stroke={"stroke-gray-300"} />,
  },
  {
    icon: <BookmarkSmallSvg />,
    text: "SAVED",
    unSelect: <BookmarkSmallSvg stroke={"stroke-gray-300"} />,
  },
  {
    icon: <TaggedSvg />,
    text: "TAGGED",
    unSelect: <TaggedSvg stroke={"stroke-gray-300"} />,
  },
];
const otherTabsList = [
  {
    icon: <GridSvg />,
    text: "POSTS",
    unSelect: <GridSvg stroke={"stroke-gray-300"} />,
  },

  {
    icon: <TaggedSvg />,
    text: "TAGGED",
    unSelect: <TaggedSvg stroke={"stroke-gray-300"} />,
  },
];
const videoTabsList = [
  {
    icon: <GridSvg />,
    text: "POSTS",
    unSelect: <GridSvg stroke={"stroke-gray-300"} />,
  },
  {
    icon: <VideoSvg />,
    text: "VIDEOS",
    unSelect: <VideoSvg color={"fill-gray-300"} />,
  },
  {
    icon: <TaggedSvg />,
    text: "TAGGED",
    unSelect: <TaggedSvg stroke={"stroke-gray-300"} />,
  },
];
const PrivateView = () => {
  return (
    <div>
      <div className="flex flex-col items-center bgWhite  md:border-[0.5px] border-gray-100 border-t-0 py-10 textBlack">
        <div className="font-medium ">This account is private</div>
        <div className="mt-[16px]">Follow to see their photos and </div>
        <div>videos.</div>
      </div>
      <div className="flex justify-between items-center mt-10 mx-5 mb-2">
        <div className="font-bold text-white md:text-gray-300 text-sm ">
          Suggestions for you
        </div>
        <div className="flex md:hidden text-lightBlue text-sm font-bold">
          See All
        </div>
      </div>

      <div className="mb-20 ">
        <UserSlider />
      </div>
    </div>
  );
};
const ProfileTab = ({
  selectedTab,
  onClick,
  isOwner,
  isVideo,
  isPrivate,
  isFollowing,
}) => {
  return (
    <div>
      <div className="lightGrayDivider hidden md:flex"></div>

      {!isFollowing && isPrivate ? (
        <PrivateView />
      ) : (
        <div className="flex items-center justify-center">
          {(isOwner ? tabsList : isVideo ? videoTabsList : otherTabsList).map(
            (tab, index) => {
              return (
                <Tab
                  tab={tab}
                  key={index}
                  selectedTab={selectedTab}
                  onClick={onClick}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileTab;
