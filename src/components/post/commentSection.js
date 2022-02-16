import ModalWrapper from "../modal/modalWrapper";
import { ImgSlider } from "../slider";
import { AvatarWithPopUp, PostDescWidget } from "./postWidget";
import { FavSvg, FavedSvg, MoreSvg } from "../image";
import React, { useState, useEffect, useRef } from "react";
import OptionListModal from "../modal/optionListModal";
import { useHeight953 } from "../../hook/useMobile";
const CommentSection = ({
  post,
  user,
  finalCommentCount,
  headBar,
  btnBar,
  likeSection,
  userAvatar,
  postDescWidget,
  postTime,
  emojiCommentBar,
  finalCommentList,
  showCommentList,
  replyHandler,
  deleteHandler,
  id,
  children,
}) => {
  const { imgList, postHash, commentList } = post;
  const { username, avatar, isNFT, isHighlight, isFollowing, fd, isVerify } =
    user;
  const isHeight953 = useHeight953();
  const CommentItem = ({
    userAvatar,
    postDescWidget,
    replyList,
    postTime,
    isLike,
    likeCount,
    isHideBtnList,
    index,
    commentId,
    parentModalId,
    isOwner,
  }) => {
    const [liked, setLiked] = useState(isLike);
    const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
    const [isExpandReply, setIsExpandReply] = useState(false);
    function closeModal() {
      const modal = document.getElementById(
        `more_${postTime}_${commentId}_${parentModalId}`
      );
      modal.checked = false;
    }
    const moreOptionOwnList = [
      {
        text: "Report",
        isRed: true,
        handler: () => {
          console.log("Report");
          closeModal();
        },
      },
      {
        text: "Delete",
        isRed: true,
        handler: () => {
          deleteHandler(index);
          closeModal();
        },
      },
      {
        text: "Cancel",
        handler: () => {
          closeModal();
        },
      },
    ];
    const moreOptionList = [
      {
        text: "Report",
        isRed: true,
        handler: () => {
          console.log("Report");
          closeModal();
        },
      },
      {
        text: "Cancel",
        handler: () => {
          closeModal();
        },
      },
    ];
    return (
      <div
        className={`flex ${
          isHideBtnList ? "items-center mb-2" : "items-start"
        }  group pr-[18px] relative`}
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
                <ModalWrapper
                  id={`more_${postTime}_${commentId}_${parentModalId}`}
                  content={
                    <OptionListModal
                      id={`more_${postTime}_${commentId}_${parentModalId}`}
                      optionList={isOwner ? moreOptionOwnList : moreOptionList}
                    />
                  }
                >
                  <div className="cursor-pointer group-hover:flex hidden ml-3 translate-y-[1px]">
                    <MoreSvg color={"fill-gray-300"} size="12" />
                  </div>
                </ModalWrapper>
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
            className=" cursor-pointer w-[20px]  absolute top-[10px] right-[0px]"
          >
            {liked ? <FavedSvg size={"12"} /> : <FavSvg size={"12"} />}
          </div>
        )}
      </div>
    );
  };
  const CommentListWidget = ({ list, isHideBtnList, parentModalId }) => {
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
        commentId,
      } = comment;

      return (
        <CommentItem
          key={index}
          index={index}
          commentId={commentId}
          isHideBtnList={isHideBtnList}
          isLike={isLike}
          postTime={postTime}
          replyList={replyList}
          likeCount={likeCount}
          isOwner={isOwner}
          parentModalId={parentModalId}
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
  return (
    <ModalWrapper
      id={`commentModal_${postHash}_${id}`}
      width={"!w-[80%] max-w-[1380px]"}
      height={"min-h-[450px] max-h-[953px] "}
      onClose={() => {
        window.history.replaceState(window.history.state, "", "/");
      }}
      onClick={() => {
        window.history.replaceState(window.history.state, "", `/p/${postHash}`);
      }}
      content={
        <div className="flex ">
          <div className="grow bg-black min-h-[450px] max-h-[953px]">
            <div className="relative top-1/2 -translate-y-1/2">
              <ImgSlider
                imgList={imgList}
                isInside={true}
                imgStyle={"w-full h-auto"}
              />
            </div>
          </div>
          <div className="max-w-[618px] min-w-[405px] hidden md:flex min-h-[450px] !max-h-[953px]">
            <div className="flex flex-col w-full ">
              <div className="">{headBar}</div>
              <div className="lightGrayDivider-sm" />

              <div
                className={`grow flex flex-col pt-4 mx-4 overflow-y-auto noScrollBar overflow-hidden ${
                  isHeight953 ? "!max-h-[723px]" : "!max-h-[calc(90vh-229px)]"
                } `}
              >
                <CommentItem
                  userAvatar={userAvatar}
                  postDescWidget={postDescWidget}
                  postTime={post.postTime}
                />
                <CommentListWidget
                  list={finalCommentList}
                  parentModalId={`commentModal_${postHash}_${id}`}
                />
              </div>

              <div className="flex flex-col">
                <div className="mx-4">{btnBar}</div>
                <div className="mx-4">{likeSection}</div>
                <div className="mx-4">{postTime}</div>
                <div>{emojiCommentBar}</div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      {children}
      {showCommentList != null && showCommentList.length > 0 && (
        <CommentListWidget list={showCommentList} isHideBtnList={true} />
      )}
    </ModalWrapper>
  );
};

export default CommentSection;
