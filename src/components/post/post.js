import {
  UnFavSvg,
  CommentSvg,
  MsgSvg,
  BookmarkSvg,
  BookmarkedSvg,
  FavedSvg,
} from "../image";
import memoize from "fast-memoize";

import React, { useState, useRef, useReducer, useCallback } from "react";
import EmojiTextPost from "./emojiTextPost";
import {
  LikeSection,
  PostDescWidget,
  UserMoreBar,
  PostTimeWidget,
  PostMediaWidget,
} from "./postWidget";
import { postCommentFunc, deleteCommentFunc } from "../../utils/postFunc";
import CommentSection from "./commentSection";
const Post = ({ data, currentUser }) => {
  const { user, post } = data;
  const {
    isfav,
    isbookmark,
    likeCount,
    postTime,
    isFdLiked,
    postDesc,
    commentList,
    likedUser,
    postId,
  } = post;
  const { isFollowing, fd } = user;
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
  const changeCommentInput = useCallback(
    memoize((event) => {
      setCommentInput(event);
    }),
    [commentInput]
  );

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
        {isFav ? <FavedSvg /> : <UnFavSvg />}
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

  function postCommentHandler(input) {
    postCommentFunc(
      input,
      targetIndex.current,
      finalCommentList,
      setFinalCommentList,
      showCommentList,
      setShowCommentList,
      finalCommentCount,
      setFinalCommentCount,
      currentUser
    );
    setCommentInput("");
  }

  const PostPopUpWrapper = ({ isShowComment, id, children }) => {
    isShowComment = isShowComment ?? false;
    return (
      <CommentSection
        post={post}
        user={user}
        id={id}
        commentList={finalCommentList}
        setCommentList={(list) => {
          setFinalCommentList(list);
        }}
        commentCount={finalCommentCount}
        setCommentCount={(count) => {
          setFinalCommentCount(count);
        }}
        showCommentList={isShowComment ? showCommentList : []}
        setShowCommentList={(list) => {
          setShowCommentList(list);
        }}
        isFollow={isFollow}
        followHandler={() => {
          setIsFollow(true);
        }}
        commentInput={commentInput}
        setCommentInput={(text) => {
          changeCommentInput(text);
        }}
        isFav={isFav}
        onFavClick={(isFav) => {
          setIsFav(isFav);
        }}
        finalLikeCount={finalLikeCount}
        setFinalLikeCount={(count) => {
          setFinalLikeCount(count);
        }}
        bookmark={isBookmark}
        onBookmarkClick={(isBookmark) => {
          setIsBookmark(isBookmark);
        }}
      >
        {children}
      </CommentSection>
    );
  };
  const BtnList = () => {
    return (
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center">
          <FavWidget />

          <PostPopUpWrapper id={"btnComment"}>
            <div className="!mr-3 btnText">
              <CommentSvg />
            </div>
          </PostPopUpWrapper>

          <div className="!mr-3 btnText">
            <MsgSvg />
          </div>
        </div>
        <BookmarkWidget />
      </div>
    );
  };
  return (
    <div className="border-gray-100 md:border-[0.5px] border-0 mt-4 bgWhite">
      <UserMoreBar
        user={user}
        post={post}
        isFollow={isFollow}
        followCallback={() => {
          setIsFollow(!isFollow);
        }}
      />
      <PostMediaWidget
        post={post}
        likeHandler={() => {
          //
          if (!isFav) {
            setIsFav(true);
            setFinalLikeCount(finalLikeCount + 1);
          }
        }}
      />

      <div className="flex flex-col  mx-4">
        <BtnList />
        <LikeSection
          fd={fd}
          postId={postId}
          likedUser={likedUser}
          isFdLiked={isFdLiked}
          finalLikeCount={finalLikeCount}
        />

        <PostDescWidget user={user} postDesc={postDesc} />
        <PostPopUpWrapper id={"textComment"} isShowComment={true}>
          <div className="text-gray-300 text-sm cursor-pointer font-semibold">
            View all {finalCommentCount} comments
          </div>
        </PostPopUpWrapper>

        <PostTimeWidget postTime={postTime} />
      </div>
      <hr className="mb-3 hidden md:flex" />
      <EmojiTextPost
        callback={(input) => {
          postCommentHandler(input);
        }}
        text={commentInput}
        setText={(text) => {
          changeCommentInput(text);
        }}
      />
    </div>
  );
};

export default Post;
