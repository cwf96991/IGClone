import React, { useState } from "react";
import CommentSection from "./commentSection";
const PopUpPostWrapper = ({
  post,
  user,
  children,
  id,
  isShowComment,
  setLikeCount,
  setCommentCount,
}) => {
  const { isfav, isbookmark, commentCount, likeCount, commentList } = post;
  const { isFollowing } = user;
  const [finalCommentList, setFinalCommentList] = useState(commentList);
  const [finalCommentCount, setFinalCommentCount] = useState(commentCount);
  const [showCommentList, setShowCommentList] = useState([]);
  const [isFollow, setIsFollow] = useState(isFollowing);
  const [commentInput, setCommentInput] = useState("");
  const [isFav, setIsFav] = useState(isfav);
  const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
  const [isBookmark, setIsBookmark] = useState(isbookmark);

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
        setCommentCount(count);
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
        setCommentInput(text);
      }}
      isFav={isFav}
      onFavClick={(isFav) => {
        setIsFav(isFav);
      }}
      finalLikeCount={finalLikeCount}
      setFinalLikeCount={(count) => {
        setFinalLikeCount(count);
        setLikeCount(count);
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

export default PopUpPostWrapper;
