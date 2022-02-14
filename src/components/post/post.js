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
import PostDesc from "./postDesc";
import EmojiTextPost from "./emojiTextPost";
import MoreBtnWidget from "./moreBtnWidget";
import {
  LikeSection,
  UserInfoPopUp,
  UserMoreBar,
  PostTimeWidget,
} from "./postWidget";
import CommentSection from "./commentSection";
const Post = ({ data }) => {
  const { user, post } = data;
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
  const { username, avatar, isNFT, isHighlight, isFollowing, fd, isVerify } =
    user;
  const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
  const [finalCommentCount, setFinalCommentCount] = useState(likeCount);
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

  return (
    <div className="border-gray-100 mt-4 border">
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
        <div className="font-bold text-sm ">
          <UserInfoPopUp user={user} style={"dropdown-top"}>
            <div className="hover:underline inline">{username}</div>
          </UserInfoPopUp>

          <div className="inline">
            <PostDesc />
          </div>
        </div>
        <CommentSection
          post={post}
          user={user}
          finalCommentCount={finalCommentCount}
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
          postTime={<PostTimeWidget postTime={postTime} />}
          emojiCommentBar={
            <EmojiTextPost
              callback={() => {
                setFinalCommentCount(finalCommentCount + 1);
              }}
            />
          }
        />
        <PostTimeWidget postTime={postTime} />
      </div>
      <hr className="mb-3 hidden md:flex" />
      <EmojiTextPost
        callback={() => {
          setFinalCommentCount(finalCommentCount + 1);
        }}
      />
    </div>
  );
};

export default Post;
