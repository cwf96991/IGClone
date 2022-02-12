import { faker } from "@faker-js/faker";
import Avatar from "./avatar";
import {
  MoreSvg,
  FavSvg,
  CommentSvg,
  MsgSvg,
  BookmarkSvg,
  EmojiSvg,
  FavedSvg,
} from "./image";
import React, { useState, useEffect, useRef } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {ImgSlider} from "./slider";
import PostDesc from "./postDesc";
import InputEmoji from "react-input-emoji";
const Post = ({ data }) => {
  const { user, post } = data;
  const { imgList, isfav, commentCount, likeCount, postTime, isFdLiked } = post;
  const { username, avatar, isNFT, isHighlight, isFollowing, fd } = user;
  const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
  const [finalCommentCount, setFinalCommentCount] = useState(likeCount);
  const [isFav, setIsFav] = useState(isfav);

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
        <div className="btnText">
          <BookmarkSvg />
        </div>
      </div>
    );
  };
  const UserMoreBar = ({ user }) => {
    const { username, avatar, isNFT, isHighlight, isFollowing } = user;
    return (
      <div className="flex justify-between items-center my-2 mx-4 ">
        <div className="flex items-center">
          <Avatar
            size={"32"}
            isHighlight={isHighlight}
            img={avatar}
            isNFT={isNFT}
          />
          <div className="ml-4 text-black font-bold">{username}</div>
          <div className="text-bold text-2xl">．</div>
          {isFollowing ? (
            <div className="btnText font-bold">Following</div>
          ) : (
            <div className="btnText !text-lightBlue">Follow</div>
          )}
        </div>
        <div className="btnText">
          <MoreSvg />
        </div>
      </div>
    );
  };
  const LikeSession = ({ fd, isFdLiked }) => {
    return (
      <>
        {isFdLiked ? (
          <div className="flex items-center">
            {fd.isMultiple ? (
              <div className="-space-x-2 avatar-group">
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
  const EmojiTextPost = () => {
    const [commentInput, setCommentInput] = useState("");
    return (
      <div className=" mx-4 my-3 justify-between items-center hidden md:flex">
        <div className="flex items-center grow">
          <div className="btnText "><EmojiSvg /></div>
          <input
            type="text"
            value={commentInput}
            className="grow text-black  focus:outline-none  placeholder-gray-300 ml-4 font-semibold text-sm"
            placeholder="Add a comment..."
            onChange={(e) => setCommentInput(e.target.value)}
          />
        </div>
        <div
          onClick={() => {
            if (commentInput.length != 0) {
              setCommentInput("");
              setFinalCommentCount(finalCommentCount + 1);
            }
          }}
          className={`btnText font-bold text-sm !text-lightBlue ${
            commentInput.length != 0 ? "" : "opacity-30"
          }`}
        >
          Post
        </div>
      </div>
    );
  };
  const CommentSession = () => {
    return (
      <div className="text-gray-300 text-sm">
        View all {finalCommentCount} comments
      </div>
    );
  };
  return (
    <div className="border-gray-100 mt-4 border">
      <UserMoreBar user={user} />
      {imgList && (
        <div className="relative max-w-full md:max-w-[620px]">
          <ImgSlider imgList={imgList} />
        </div>
      )}

      <div className="flex flex-col  mx-4">
        <BtnList />
        <LikeSession fd={fd} isFdLiked={isFdLiked} />
        <div className="font-bold text-sm ">
          {username}
          <PostDesc />
        </div>
        <CommentSession />
        <div className="text-gray-300 text-2xs mb-3">{postTime} HOURS AGO</div>
      </div>
      <hr className="mb-3 hidden md:flex" />
      <EmojiTextPost />
    </div>
  );
};

export default Post;
