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
import React, { useState, useEffect, useRef } from "react";
import { ImgSlider } from "../slider";

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
    isAddress,
    address,
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
  const BtnList = () => {
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
    if (input.includes("@") && targetIndex.current != null) {
      let index = targetIndex.current;
      let replyList = finalCommentList[index].replyList;
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
  return (
    <div className="border-gray-100 mt-4 border bg-white">
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
        <LikeSection
          fd={fd}
          isFdLiked={isFdLiked}
          finalLikeCount={finalLikeCount}
        />
        <PostDescWidget user={user} postDesc={postDesc} />
        <CommentSection
          post={post}
          user={user}
          finalCommentList={finalCommentList}
          finalCommentCount={finalCommentCount}
          showCommentList={showCommentList}
          replyHandler={(index) => {
            targetIndex.current = index;
            let user = finalCommentList[index].user;
            console.log(user.username);
            setCommentInput(commentInput + ` @${user.username}`);
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
            <LikeSection
              fd={fd}
              isFdLiked={isFdLiked}
              finalLikeCount={finalLikeCount}
            />
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
        />
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
