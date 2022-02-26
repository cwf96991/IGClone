import Avatar from "../avatar";
import { SettingSvg, ProfileSvg, ArrowDownSvg, MoreSvg } from "../image";
import { truncateName } from "../../utils/function";
import { StorySlider } from "../slider";
import { useMobile768 } from "../../hook/useMobile";
const InfoItem = ({ count, text }) => {
  return (
    <div className="flex md:flex-row flex-col mr-5 md:mr-10 textBlack items-center">
      <div className="font-bold">{count}</div>
      <div className="inline ml-1">{text}</div>
    </div>
  );
};
const OwnerBtnList = () => {
  return (
    <div className="flex items-center">
      <div className="!h-[30px] !mx-5 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
        Edit Profile
      </div>
      <SettingSvg size="24" />
    </div>
  );
};
const FollowingBtnList = () => {
  return (
    <div className="flex items-center">
      <div className="!h-[30px] !ml-5 !mr-1 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
        Message
      </div>
      <div className="!h-[30px] !w-[74px] !mx-1 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
        <ProfileSvg />
      </div>
      <div className="!h-[30px] !w-[34px] !ml-1 !mr-3 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
        <ArrowDownSvg size="12" />
      </div>
      <MoreSvg size="32" />
    </div>
  );
};
const NotYetFollowBtnList = () => {
  return (
    <div className="flex items-center">
      <div className="!bg-lightBlue !text-white !h-[30px] !ml-5 !mr-1 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-6">
        Follow
      </div>

      <div className="!bg-lightBlue !h-[30px] !w-[34px] !ml-1 !mr-3 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
        <ArrowDownSvg size="12" color="fill-white" />
      </div>
      <MoreSvg size="32" />
    </div>
  );
};
const PrivateBtnList = () => {
  return (
    <div className="flex items-center">
      <div className="!bg-lightBlue !text-white !h-[30px] !ml-5 !mr-1 !border-[0.5px] !border-gray-100 btnText !rounded-md !px-2">
        Follow
      </div>

      <MoreSvg size="32" />
    </div>
  );
};
const ProfileHeader = ({ user, isOwner }) => {
  const isMobile = useMobile768();
  const {
    username,
    avatar,
    isNFT,
    isFollowing,
    name,
    follower,
    extraFollower,
    isPrivate,
    postCount,
    followerCount,
    followingCount,
    bio,
  } = user;
  return (
    <div className="flex flex-col mb-11">
      {isMobile ? (
        <div className="mx-3 mt-4">
          <div className="flex items-center mb-5">
          <Avatar size={"80"} isNFT={isNFT} img={avatar} />

            <div className={`flex flex-col max-w-[60%] ${isOwner ? "" : ""} `}>
              <div className="flex  ml-5">
                <InfoItem count={postCount} text="posts" />
                <InfoItem count={followerCount} text="followers" />
                <InfoItem count={followingCount} text="following" />
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold textBlack">{name}</div>
            <div className="font-medium textBlack">{bio}</div>
          </div>
          {!isOwner && (
            <div className="flex">
              <div className="text-gray-300 text-xs font-bold mt-5">{`Followed by`}</div>
              <div className="textBlack text-xs font-bold mt-5 inline mx-1">{`${truncateName(
                follower
              )} `}</div>
              <div className="text-gray-300 text-xs font-bold mt-5 inline">{`+ ${extraFollower} more`}</div>
            </div>
          )}
          <div className="flex items-center mb-5">
            {/* <div className="font-medium text-xl textBlack">{username}</div> */}
            {isOwner ? (
              <OwnerBtnList />
            ) : isFollowing ? (
              <FollowingBtnList />
            ) : isPrivate ? (
              <PrivateBtnList />
            ) : (
              <NotYetFollowBtnList />
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center ">
          <div className="m-8">
            <Avatar size={"150"} isNFT={isNFT} img={avatar} />
          </div>

          <div
            className={`flex flex-col max-w-[60%] ${isOwner ? "" : "pt-10"} `}
          >
            <div className="flex items-center mb-5">
              <div className="font-medium text-xl textBlack">{username}</div>
              {isOwner ? (
                <OwnerBtnList />
              ) : isFollowing ? (
                <FollowingBtnList />
              ) : isPrivate ? (
                <PrivateBtnList />
              ) : (
                <NotYetFollowBtnList />
              )}
            </div>
            <div className="flex mb-5">
              <InfoItem count={postCount} text="posts" />
              <InfoItem count={followerCount} text="followers" />
              <InfoItem count={followingCount} text="following" />
            </div>
            <div className="font-bold textBlack">{name}</div>
            <div className="font-medium textBlack">{bio}</div>
            {!isOwner && (
              <div className="flex">
                <div className="text-gray-300 text-xs font-bold mt-5">{`Followed by`}</div>
                <div className="textBlack text-xs font-bold mt-5 inline mx-1">{`${truncateName(
                  follower
                )} `}</div>
                <div className="text-gray-300 text-xs font-bold mt-5 inline">{`+ ${extraFollower} more`}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {!isOwner && !isPrivate && (
        <StorySlider
          style=""
          storySize="!w-[77px] !h-[77px]"
          isMarginT={false}
        />
      )}
    </div>
  );
};

export default ProfileHeader;
