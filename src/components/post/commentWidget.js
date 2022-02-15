import React, { useState } from "react";
import { FavSvg, FavedSvg, MoreSvg } from "../image";
import { AvatarWithPopUp, PostDescWidget } from "./postWidget";
const CommentItem = ({
  userAvatar,
  postDescWidget,
  replyList,
  postTime,
  isLike,
  likeCount,
  isHideBtnList,
  index,
  isOwner,
  replyHandler,
}) => {
  const [liked, setLiked] = useState(isLike);
  const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
  const [isExpandReply, setIsExpandReply] = useState(false);
  return (
    <div
      className={`flex ${
        isHideBtnList ? "items-center mb-2" : "items-start"
      }  group pr-4 relative`}
    >
      <div className={`flex  ${isHideBtnList ? "items-center my-auto" : ""}`}>
        <div>{userAvatar}</div>
        <div className="ml-4 ">
          {postDescWidget}

          {!isHideBtnList && (
            <div className="flex items-baseline my-2">
              <div className="text-gray-300 text-2xs  font-semibold ">
                {postTime == 0 ? "now" : `${postTime} h`}{" "}
              </div>
              {finalLikeCount != 0 && finalLikeCount != null && (
                <div className="text-gray-300 text-2xs cursor-pointer font-extrabold ml-3">{`${finalLikeCount}like${
                  finalLikeCount > 1 ? "s" : ""
                }`}</div>
              )}
              {replyList != null && (
                <div
                  onClick={() => {
                    replyHandler(index);
                  }}
                  className="!text-gray-300 !text-2xs  font-extrabold !ml-3  btnText"
                >
                  Reply
                </div>
              )}
              <div className="cursor-pointer group-hover:flex hidden ml-3 translate-y-[1px]">
                <MoreSvg color={"fill-gray-300"} size="12" />
              </div>
            </div>
          )}
          {replyList != null && replyList.length != 0 && (
            <div className="flex items-center mb-4">
              <div className="w-[36px] h-[0.5px] bg-gray-300"></div>
              <div
                onClick={() => {
                  setIsExpandReply(!isExpandReply);
                }}
                className="text-gray-300 text-2xs  font-extrabold ml-3 cursor-pointer"
              >
                {isExpandReply
                  ? "Hide replies"
                  : `View replies(${replyList.length})`}
              </div>
            </div>
          )}
          {isExpandReply && replyList.length != 0 && (
            <CommentListWidget list={replyList} />
          )}
        </div>
      </div>
      {isLike != null && (
        <div
          onClick={() => {
            if (liked) {
              setFinalLikeCount(finalLikeCount - 1);
            } else {
              setFinalLikeCount(finalLikeCount + 1);
            }
            setLiked(!liked);
          }}
          className="inline cursor-pointer w-[20px]  absolute top-[10px] right-[0px]"
        >
          {liked ? <FavedSvg size={"12"} /> : <FavSvg size={"12"} />}
        </div>
      )}
    </div>
  );
};
const CommentListWidget = ({ list, isHideBtnList, replyHandler }) => {
  return list.map((comment, index) => {
    const {
      text,
      isLike,
      isReply,
      replyList,
      user,
      postTime,
      likeCount,
      isOwner,
    } = comment;
    return (
      <CommentItem
        key={index}
        index={index}
        replyHandler={replyHandler}
        isHideBtnList={isHideBtnList}
        isLike={isLike}
        postTime={postTime}
        replyList={replyList}
        likeCount={likeCount}
        isOwner={isOwner}
        userAvatar={
          <div className="w-[40px] h-[40px]" align="center">
            <AvatarWithPopUp
              user={user}
              isFollow={user.isFollowing}
              followCallback={() => {
                // followCallback();
              }}
            />
          </div>
        }
        postDescWidget={
          <PostDescWidget user={user} postDesc={text} isShowVerify={true} />
        }
      />
    );
  });
};
export { CommentItem, CommentListWidget };
