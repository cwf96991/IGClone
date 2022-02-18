import Avatar from "../avatar";
import {
  MoreSvg,
  FavSvg,
  CommentSvg,
  MsgSvg,
  BookmarkSvg,
  BookmarkedSvg,
  EmojiSvg,
  VerifyIcon,
  FavedSvg,
} from "../image";
import React, { useState, useEffect, useRef, useReducer } from "react";
import { ImgSlider } from "../slider";
import { faker } from "@faker-js/faker";
import EmojiTextPost from "./emojiTextPost";
import MoreBtnWidget from "./moreBtnWidget";
import {
  LikeSection,
  PostDescWidget,
  UserMoreBar,
  PostTimeWidget,
  AvatarWithPopUp,
} from "./postWidget";
import CommentSection from "./commentSection";
const Post = ({ data, currentUser }) => {
  const { user, post } = data;
  const {
    imgList,
    isfav,
    isbookmark,
    commentCount,
    likeCount,
    postTime,
    isFdLiked,
    postDesc,
    commentList,
    likedUser,
    isAddress,
    address,
    postId,
  } = post;
  const { username, avatar, isNFT, isHighlight, isFollowing, fd, isVerify } =
    user;
  const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
  const [commentInput, setCommentInput] = useState("");
  const targetIndex = useRef(null);
  const [finalCommentCount, setFinalCommentCount] = useState(likeCount);
  const [showCommentList, setShowCommentList] = useState([]);
  const [finalCommentList, setFinalCommentList] = useState(commentList);
  const [isFollow, setIsFollow] = useState(isFollowing);
  const [isFav, setIsFav] = useState(isfav);
  const [isBookmark, setIsBookmark] = useState(isbookmark);
  const forceUpdate = useReducer(() => ({}))[1];
  const FavWidget = () => {
    return (
      <div
        onClick={() => {
          if (isFav) {
            setFinalLikeCount(finalLikeCount - 1);
          } else {
            setFinalLikeCount(finalLikeCount + 1);
          }
          setIsFav(!isFav);
        }}
        className="!mr-3 btnText"
      >
        {isFav ? <FavedSvg /> : <FavSvg />}
      </div>
    );
  };
  const BookmarkWidget = () => {
    return (
      <div
        onClick={() => {
          setIsBookmark(!isBookmark);
        }}
        className="!mr-3 btnText"
      >
        {isBookmark ? <BookmarkedSvg /> : <BookmarkSvg />}
      </div>
    );
  };
  const PopUpBtnList = () => {
    return (
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center">
          <FavWidget />
          <div className="!mr-3 btnText">
            <CommentSvg />
          </div>
          <div className="!mr-3 btnText">
            <MsgSvg />
          </div>
        </div>
        <BookmarkWidget />
      </div>
    );
  };

  function postCommentHandler(input) {
    let comment = {};
    comment.text = input;
    comment.isLike = false;
    comment.isReply = false;
    comment.replyList = [];
    comment.user = currentUser;
    comment.postTime = 0;
    comment.likeCount = 0;
    comment.isOwner = true;
    comment.commentId = faker.datatype.uuid();
    if (input.includes("@") && targetIndex.current != null) {
      let index = targetIndex.current;
      let replyList = finalCommentList[index].replyList;
      comment.parentId = finalCommentList[index].commentId;
      replyList.push(comment);
      let newCommentList = finalCommentList;
      newCommentList[index].replyList = replyList;
      setFinalCommentList(newCommentList);
    } else {
      setFinalCommentList([...finalCommentList, comment]);
    }

    setShowCommentList([...showCommentList, comment]);
    setFinalCommentCount(finalCommentCount + 1);
  }
  function replyCommentHandler(index) {
    targetIndex.current = index;
    let user = finalCommentList[index].user;
    console.log(user.username);
    setCommentInput(commentInput + ` @${user.username}`);
  }
  function deleteCommentHandler(index) {
    try {
      let comment = finalCommentList[index];

      let newCommentList = finalCommentList;
      newCommentList.splice(index, 1);

      setFinalCommentList(newCommentList);

      let newShowCommentList = showCommentList;
      const target = newShowCommentList.indexOf(comment);
      if (target > -1) {
        newShowCommentList.splice(target, 1); // 2nd parameter means remove one item only
      }

      for (let index = 0; index < newShowCommentList.length; index++) {
        const element = newShowCommentList[index];
        if (element.parentId == comment.commentId) {
          target = newShowCommentList.indexOf(element);
          if (target > -1) {
            newShowCommentList.splice(target, 1); // 2nd parameter means remove one item only
          }
        }
      }
      setShowCommentList(newShowCommentList);

      forceUpdate();
    } catch (e) {
      console.log(e);
    }
  }
  const LikeWidget = () => {
    return (
      <LikeSection
        fd={fd}
        postId={postId}
        likedUser={likedUser}
        isFdLiked={isFdLiked}
        finalLikeCount={finalLikeCount}
      />
    );
  };
  const BtnList = () => {
    return (
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center">
          <FavWidget />

          <CommentSection
            post={post}
            user={user}
            id={"btnComment"}
            finalCommentList={finalCommentList}
            finalCommentCount={finalCommentCount}
            showCommentList={[]}
            replyHandler={(index) => {
              replyCommentHandler(index);
            }}
            deleteHandler={(index) => {
              deleteCommentHandler(index);
            }}
            headBar={
              <UserMoreBar
                user={user}
                post={post}
                isFollow={isFollow}
                followCallback={() => {
                  setIsFollow(true);
                }}
              />
            }
            btnBar={<PopUpBtnList />}
            likeSection={
             <LikeWidget/>
            }
            userAvatar={
              <div className="w-[40px] h-[40px]">
                <AvatarWithPopUp
                  user={user}
                  isFollow={isFollow}
                  followCallback={() => {
                    setIsFollow(true);
                  }}
                />
              </div>
            }
            postDescWidget={
              <PostDescWidget
                user={user}
                postDesc={postDesc}
                isShowVerify={true}
              />
            }
            postTime={<PostTimeWidget postTime={postTime} />}
            emojiCommentBar={
              <EmojiTextPost
                callback={(input) => {
                  postCommentHandler(input);
                }}
                text={commentInput}
                setText={(text) => {
                  setCommentInput(text);
                }}
              />
            }
          >
            <div className="!mr-3 btnText">
              <CommentSvg />
            </div>
          </CommentSection>

          <div className="!mr-3 btnText">
            <MsgSvg />
          </div>
        </div>
        <BookmarkWidget />
      </div>
    );
  };
  return (
    <div className="border-gray-100 md:border-[0.5px] border-0 mt-4  bg-white">
      <UserMoreBar
        user={user}
        post={post}
        isFollow={isFollow}
        followCallback={() => {
          setIsFollow(true);
        }}
      />
      {imgList && (
        <div className="relative max-w-full md:max-w-[620px]">
          <ImgSlider imgList={imgList} />
        </div>
      )}

      <div className="flex flex-col  mx-4">
        <BtnList />
        <LikeWidget/>

        <PostDescWidget user={user} postDesc={postDesc} />
        <CommentSection
          post={post}
          user={user}
          id={"textComment"}
          finalCommentList={finalCommentList}
          finalCommentCount={finalCommentCount}
          showCommentList={showCommentList}
          replyHandler={(index) => {
            replyCommentHandler(index);
          }}
          deleteHandler={(index) => {
            deleteCommentHandler(index);
          }}
          headBar={
            <UserMoreBar
              user={user}
              post={post}
              isFollow={isFollow}
              followCallback={() => {
                setIsFollow(true);
              }}
            />
          }
          btnBar={<BtnList />}
          likeSection={
            <LikeWidget/>
          }
          userAvatar={
            <div className="w-[40px] h-[40px]">
              <AvatarWithPopUp
                user={user}
                isFollow={isFollow}
                followCallback={() => {
                  setIsFollow(true);
                }}
              />
            </div>
          }
          postDescWidget={
            <PostDescWidget
              user={user}
              postDesc={postDesc}
              isShowVerify={true}
            />
          }
          postTime={<PostTimeWidget postTime={postTime} />}
          emojiCommentBar={
            <EmojiTextPost
              callback={(input) => {
                postCommentHandler(input);
              }}
              text={commentInput}
              setText={(text) => {
                setCommentInput(text);
              }}
            />
          }
        >
          <div className="text-gray-300 text-sm cursor-pointer font-semibold">
            View all {finalCommentCount} comments
          </div>
        </CommentSection>
        <PostTimeWidget postTime={postTime} />
      </div>
      <hr className="mb-3 hidden md:flex" />
      <EmojiTextPost
        callback={(input) => {
          postCommentHandler(input);
        }}
        text={commentInput}
        setText={(text) => {
          setCommentInput(text);
        }}
      />
    </div>
  );
};

export default Post;
