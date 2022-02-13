import Avatar from "../avatar";
import { VerifyIcon } from "../image";
import MoreBtnWidget from "./moreBtnWidget";
import { abbreviateNumber, truncateName } from "../../utils/function";

const LikeSection = ({ fd, isFdLiked, finalLikeCount }) => {
  return (
    <>
      {isFdLiked ? (
        <div className="flex items-center">
          {fd.isMultiple ? (
            <div className="-space-x-2 cursor-pointer">
              <Avatar size={"20"} isNFT={fd.isNFT} img={fd.avatar} />
              <Avatar size={"20"} isNFT={fd.isNFT} img={fd.avatar2} />
              <Avatar size={"20"} isNFT={fd.isNFT} img={fd.avatar3} />
            </div>
          ) : (
            <Avatar size={"20"} isNFT={fd.isNFT} img={fd.avatar} />
          )}
          <div className="font-bold text-sm inline ml-2">
            <div className="font-normal inline">Liked by</div>
            {` ${fd.username} `}
            <div className="font-normal inline">and</div>
            {` ${finalLikeCount} others`}
          </div>
        </div>
      ) : (
        <div className="font-bold text-sm">{finalLikeCount} likes</div>
      )}
    </>
  );
};
const UserPostFollowerCol = ({ count, text, img }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col my-3 text-sm font-semibold">
        <div> {abbreviateNumber(count)}</div>
        <div className="text-gray-300">{text}</div>
      </div>
      <div className="h-[1px] bg-gray-100 w-full " />
      <img
        src={img}
        className="!w-full object-cover object-center !aspect-square !block cursor-pointer hover:opacity-80"
      />
    </div>
  );
};
const UserHoverPopUp = ({ user, isFollow, followCallback }) => {
  const {
    username,
    avatar,
    isNFT,
    isHighlight,
    isFollowing,
    isVerify,
    name,
    follower,
    extraFollower,
    isWebsite,
    website,
    isNew,
    postCount,
    followerCount,
    followingCount,
    postImages,
  } = user;
  return (
    <div className="flex flex-col">
      <div className="flex items-center p-4">
        <Avatar
          size={"56"}
          isHighlight={isHighlight}
          img={avatar}
          isNFT={isNFT}
        />
        <div className="flex flex-col ml-2 font-semibold text-sm">
          <div className="flex items-center">
            <div className=" text-navyBlue cursor-pointer h-[16px]">
              {username}
            </div>
            {isVerify && (
              <div className="ml-1 -translate-y-[2px]">
                <VerifyIcon />
              </div>
            )}
          </div>

          <div className=" text-gray-300 tracking-tight">{name}</div>
          {(isWebsite || !isNew) && (
            <div className="flex flex-col mt-2">
              {isWebsite && (
                <div className=" text-navyBlue cursor-pointer h-[16px]">
                  {website}
                </div>
              )}
              {!isNew && (
                <div className=" text-gray-300 ">{`Followed by ${truncateName(
                  follower
                )} and ${extraFollower} others`}</div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="h-[1px] bg-gray-100 w-full mt-3" />
      <div className="grid grid-cols-3">
        <UserPostFollowerCol
          count={postCount}
          img={postImages[0]}
          text={"posts"}
        />
        <UserPostFollowerCol
          count={followerCount}
          img={postImages[1]}
          text={"follower"}
        />
        <UserPostFollowerCol
          count={followingCount}
          img={postImages[2]}
          text={"following"}
        />
      </div>
      <div className="grid grid-cols-2 mx-4 my-3 gap-1">
        <div className="btnText w-full font-bold border  rounded-lg !border-gray-100">
          Message
        </div>
        {isFollow ? (
          <div className="btnText font-bold border rounded-lg !border-gray-100">
            {"Following"}
          </div>
        ) : (
          <div
            onClick={() => {
              followCallback();
            }}
            className="btnText font-bold !text-lightBlue border rounded-lg !border-gray-100"
          >
            {"Follow"}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};
const UserInfoPopUp = (props) => {
  let style = props.style ?? "";
  return (
    <div className={`dropdown dropdown-hover ${style}`}>
      <div tabIndex="0">
        <div className="cursor-pointer">{props.children}</div>
        <div
          tabIndex="0"
          className=" shadow menu dropdown-content bg-white rounded-box w-[400px]"
        >
          <UserHoverPopUp
            user={props.user}
            isFollow={props.isFollow}
            followCallback={() => {
              props.followCallback();
            }}
          />
        </div>
      </div>
    </div>
  );
};
const UserMoreBar = ({ user, post, isFollow, followCallback }) => {
  const { username, avatar, isNFT, isHighlight, isFollowing, isVerify } = user;
  const {
    imgList,
    isfav,
    isbookmark,
    commentCount,
    likeCount,
    postTime,
    isFdLiked,
    isAddress,
    address,
  } = post;
  return (
    <div className="flex justify-between items-center my-2 mx-4 ">
      <div className="flex items-center">
        <UserInfoPopUp
          user={user}
          isFollow={isFollow}
          followCallback={() => {
            followCallback();
          }}
        >
          <Avatar
            size={"32"}
            isHighlight={isHighlight}
            img={avatar}
            isNFT={isNFT}
          />
        </UserInfoPopUp>
        <div className="flex flex-col  ml-4">
          <div className="flex items-center">
            <UserInfoPopUp
              user={user}
              isFollow={isFollow}
              followCallback={() => {
                followCallback();
              }}
            >
              <div className=" text-black font-bold text-sm">{username}</div>
            </UserInfoPopUp>

            {isVerify && (
              <div className="ml-1 -translate-y-[2px]">
                <VerifyIcon />
              </div>
            )}
          </div>
          {isAddress && (
            <div className=" text-gray-300 text-ssm">{address}</div>
          )}
        </div>

        <div className="text-bold text-2xl">．</div>
        {isFollow ? (
          <div className="btnText font-bold text-sm">Following</div>
        ) : (
          <div
            onClick={() => {
              followCallback();
            }}
            className="btnText !text-lightBlue text-sm"
          >
            Follow
          </div>
        )}
      </div>
      <MoreBtnWidget />
    </div>
  );
};
export {
  LikeSection,
  UserPostFollowerCol,
  UserHoverPopUp,
  UserInfoPopUp,
  UserMoreBar,
};
