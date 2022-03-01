import Avatar from "../avatar";
import { VerifyIcon } from "../image";
import MoreBtnWidget from "./moreBtnWidget";
import { abbreviateNumber, truncateName } from "../../utils/function";
import React, { useRef, useState, useEffect } from "react";
import { useMobile768 } from "../../hook/useMobile";
import PostDesc from "./postDesc";
import ImageWidget from "../imageWidget";
import PostVideo from "./postVideo";
import LikeSection from "./likeSection";
import { ImgSlider } from "../slider";
import {
  UnFavSvg,
  FavedSvg,
  BookmarkSvg,
  BookmarkedSvg,
  CommentSvg,
  MsgSvg,
  WhiteFavSvg,
} from "../image";
import ProfileWrapper from "../profileWrapper";
const UserPostFollowerCol = ({ count, text, img }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col my-3 text-sm font-semibold">
        <div> {abbreviateNumber(count)}</div>
        <div className="text-gray-300">{text}</div>
      </div>
      <div className="lightGrayDivider" />
      <ImageWidget
        img={img}
        placeholder={
          <div className="w-full   aspect-square  bg-slate-200 animate-pulse"></div>
        }
        style={
          "!w-full object-cover object-center !aspect-square !block cursor-pointer hover:opacity-80"
        }
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
          user={user}
        />
        <div className="flex flex-col ml-2 font-semibold text-sm justify-start">
          <div className="flex items-center">
          <ProfileWrapper user={user}>
            <div className=" text-navyBlue cursor-pointer h-[16px]">
              {username}
            </div>
            </ProfileWrapper>
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
      <div className="lightGrayDivider mt-3" />
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
      {isFollow ? (
        <div className="grid grid-cols-2 mx-4 my-3 gap-1">
          <div className="btnText w-full font-bold border  rounded-lg !border-gray-100">
            Message
          </div>
          <div className="btnText font-bold border rounded-lg !border-gray-100">
            {"Following"}
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            followCallback();
          }}
          className="btnText font-bold !text-white rounded-lg !bg-lightBlue !my-2 !mx-4"
        >
          {"Follow"}
        </div>
      )}
    </div>
  );
};
const UserInfoPopUp = (props) => {
  let ref = useRef(null);
  const isMobile = useMobile768();
  const [isDown, setIsDown] = useState(true);
  const [isRight, setIsRight] = useState(true);
  function onScroll() {
    if (ref.current) {
      let target = ref.current.getBoundingClientRect();
      let isRight = window.innerWidth - target.left >= 398;
      let isDown = window.innerHeight - target.bottom >= 357;
      setIsRight(isRight);
      setIsDown(isDown);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  let style = isDown ? "" : "dropdown-top";
  isRight = isRight ? "" : "dropdown-end";
  return isMobile ? (
    props.children
  ) : (
    <div className={`dropdown dropdown-hover ${style} ${isRight} `}>
      <div tabIndex="0">
        <div
          onClick={() => {
            onScroll();
          }}
          ref={ref}
          className="cursor-pointer"
        >
          {props.children}
        </div>
        <ul
          tabIndex="0"
          className=" shadow menu  dropdown-content bg-white rounded-box w-[400px] border border-gray-100"
        >
          <UserHoverPopUp
            user={props.user}
            isFollow={props.isFollow}
            followCallback={() => {
              props.followCallback();
            }}
          />
        </ul>
      </div>
    </div>
  );
};
const PostDescWidget = ({ user, postDesc, isShowVerify }) => {
  isShowVerify = isShowVerify ?? false;
  const { username, isVerify } = user;
  return (
    <div className="font-bold text-sm textBlack">
      <UserInfoPopUp user={user} style={"dropdown-top"}>
        <ProfileWrapper user={user}>
          <div className="hover:underline inline">{username}</div>
        </ProfileWrapper>
      </UserInfoPopUp>
      {isVerify && isShowVerify && (
        <div className="ml-1 -translate-y-[2px] inline">
          <VerifyIcon />
        </div>
      )}
      <div className="inline">
        <PostDesc desc={postDesc} isExpanded={true} />
      </div>
    </div>
  );
};
const AvatarWithPopUp = ({ user, isFollow, followCallback, size, mode }) => {
  const { avatar, isNFT, isHighlight } = user;
  return (
    <UserInfoPopUp
      user={user}
      isFollow={isFollow}
      followCallback={() => {
        followCallback();
      }}
    >
      <Avatar
        size={size ?? "32"}
        isHighlight={isHighlight}
        img={avatar}
        isNFT={isNFT}
        user={user}
      />
    </UserInfoPopUp>
  );
};
const UserMoreBar = ({
  user,
  post,
  isFollow,
  followCallback,
  isHideAddress,
}) => {
  isHideAddress = isHideAddress ?? false;
  const { username, isVerify } = user;
  const [showisFollow, setShowIsFollow] = useState(!isFollow);
  const { isAddress, address, postId } = post;
  const isMobile = useMobile768();
  return (
    <div className="flex justify-between items-center my-2 mx-4 ">
      <div className="flex items-center">
        <AvatarWithPopUp
          user={user}
          isFollow={isFollow}
          followCallback={() => {
            followCallback();
          }}
        />
        <div className="flex flex-col  ml-4">
          <div className="flex items-center">
            <UserInfoPopUp
              user={user}
              isFollow={isFollow}
              followCallback={() => {
                followCallback();
              }}
            >
              <ProfileWrapper user={user}>
                <div className=" textBlack font-bold text-sm">
                  {isMobile ? truncateName(username) : username}
                </div>
              </ProfileWrapper>
            </UserInfoPopUp>

            {isVerify && (
              <div className="ml-1 -translate-y-[2px]">
                <VerifyIcon />
              </div>
            )}
          </div>
          {isAddress && !isHideAddress && (
            <div className=" text-gray-300 text-ssm">{address}</div>
          )}
        </div>

        {showisFollow && <div className="text-bold text-2xl textBlack">．</div>}
        {isFollow ? (
          showisFollow && (
            <div
              onClick={() => {
                followCallback();
              }}
              className="btnText font-bold text-sm textBlack"
            >
              Following
            </div>
          )
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
      <MoreBtnWidget id={postId} />
    </div>
  );
};
const PostTimeWidget = ({ postTime }) => {
  return (
    <div className="text-gray-300 text-2xs mb-3 font-semibold">
      {postTime} HOURS AGO
    </div>
  );
};

const AvatarUsernameActionRow = ({
  user,
  isfollow,
  descWidget,
  actionBtn,
  followCallback,
  isHide,
  size,
  isTruncateName,
  textLimit,
}) => {
  const { avatar, isNFT, username } = user;
  isTruncateName = isTruncateName ?? false;
  return (
    <div className="flex items-center justify-between mb-3 ">
      <div className="flex items-center ">
        {isHide ?? false ? (
          <Avatar
            size={size ?? "32"}
            isHighlight={false}
            img={avatar}
            isNFT={isNFT}
            user={user}
          />
        ) : (
          <UserInfoPopUp
            user={user}
            isFollow={isfollow}
            isFollowOnly={true}
            isHide={isHide}
            followCallback={() => {
              followCallback(true);
            }}
          >
            <Avatar
              size={size ?? "32"}
              isHighlight={false}
              img={avatar}
              isNFT={isNFT}
              user={user}
            />
          </UserInfoPopUp>
        )}

        <div className="flex flex-row items-center justify-between grow">
          <div className="flex flex-col text-sm ml-4 grow">
            {isHide ?? false ? (
              <div className="font-bold ">
                {isTruncateName ? truncateName(username, textLimit) : username}
              </div>
            ) : (
              <UserInfoPopUp
                user={user}
                isFollow={isfollow}
                isFollowOnly={true}
                followCallback={() => {
                  followCallback(true);
                }}
              >
                <ProfileWrapper user={user}>
                  <div className="font-bold textBlack">
                    {isTruncateName
                      ? truncateName(username, textLimit)
                      : username}
                  </div>
                </ProfileWrapper>
              </UserInfoPopUp>
            )}

            {descWidget}
          </div>
        </div>
      </div>
      {actionBtn}
    </div>
  );
};
const FavBtnWidget = ({ onClick, isFav }) => {
  return (
    <div
      onClick={(e) => {
        onClick();
      }}
      className="!mr-3 btnText"
    >
      {isFav ? <FavedSvg /> : <UnFavSvg />}
    </div>
  );
};
const BookmarkBtnWidget = ({ onClick, isBookmark }) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="!mr-3 btnText"
    >
      {isBookmark ? <BookmarkedSvg /> : <BookmarkSvg />}
    </div>
  );
};
const PopUpBtnListWidget = ({
  onFavClick,
  isFav,
  onBookmarkClick,
  isBookmark,
}) => {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex items-center">
        <FavBtnWidget onClick={onFavClick} isFav={isFav} />
        <div className="!mr-3 btnText">
          <CommentSvg />
        </div>
        <div className="!mr-3 btnText">
          <MsgSvg />
        </div>
      </div>
      <BookmarkBtnWidget isBookmark={isBookmark} onClick={onBookmarkClick} />
    </div>
  );
};
const PostMediaWidget = ({ post, likeHandler, imgStyle, style, height }) => {
  const { imgList, isVideo, video } = post;
  const [isLike, setIsLike] = useState(false);
  style = style ?? "max-w-full md:max-w-[620px] ";
  return (
    <div className={style}>
      {isVideo ? (
        <PostVideo video={video} height={height} />
      ) : (
        imgList && (
          <div
            onDoubleClick={() => {
              likeHandler();
              setIsLike(true);
              setTimeout(() => {
                setIsLike(false);
              }, 1000);
            }}
            className="relative "
          >
            <ImgSlider imgList={imgList} imgStyle={imgStyle} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-boundceInFadeOut">
              {isLike && <WhiteFavSvg size={"80"} style="opacity-80" />}
            </div>
          </div>
        )
      )}
    </div>
  );
};
export {
  LikeSection,
  FavBtnWidget,
  BookmarkBtnWidget,
  PopUpBtnListWidget,
  UserPostFollowerCol,
  UserHoverPopUp,
  AvatarWithPopUp,
  PostDescWidget,
  PostTimeWidget,
  UserInfoPopUp,
  AvatarUsernameActionRow,
  PostMediaWidget,
  UserMoreBar,
};
