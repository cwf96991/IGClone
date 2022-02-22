import PostHover from "./postHover";
import { StackSvg, PlayBtnSvg } from "../image";
import PopUpPostWrapper from "./popUpPostWrapper";
import React, { useState } from "react";
import { useMobile768 } from "../../hook/useMobile";

const imgBaseStyle = "object-cover object-center ";
const imgStyle = "!w-full !aspect-square !block";

const PostWallItem = ({ post, user }) => {
  const { imgList, commentCount, likeCount, postId, isVideo, video } = post;
  const [finalLikeCount, setFinalLikeCount] = useState(likeCount);
  const [finalCommentCount, setFinalCommentCount] = useState(commentCount);
  const isMobile = useMobile768();
  return (
    <>
      {isVideo ? (
        <div className={`row-span-2 col-span-2 `}>
          <PopUpPostWrapper
            post={post}
            user={user}
            id={`postWallModal_${postId}`}
            setLikeCount={(count) => {
              setFinalLikeCount(count);
            }}
            setCommentCount={(count) => {
              setFinalCommentCount(count);
            }}
          >
            <PostHover
              post={post}
              likeCount={finalLikeCount}
              commentCount={finalCommentCount}
              tagWidget={
                <div className="absolute right-[15px] top-[15px] group group-hover:opacity-50">
                  <PlayBtnSvg />
                </div>
              }
            >
              <img
                src={video.placeholder}
                className={`${imgBaseStyle} ${imgStyle} `}
              />
            </PostHover>
          </PopUpPostWrapper>
        </div>
      ) : (
        <PopUpPostWrapper
          post={post}
          user={user}
          id={`postWallModal_${postId}`}
          setLikeCount={(count) => {
            setFinalLikeCount(count);
          }}
          setCommentCount={(count) => {
            setFinalCommentCount(count);
          }}
        >
          <PostHover
            post={post}
            likeCount={finalLikeCount}
            commentCount={finalCommentCount}
            tagWidget={
              imgList.length > 1 && (
                <div className="absolute right-[15px] top-[15px] group group-hover:opacity-50">
                  <StackSvg />
                </div>
              )
            }
          >
            <img src={imgList[0]} className={`${imgBaseStyle} ${imgStyle} `} />
          </PostHover>
        </PopUpPostWrapper>
      )}
    </>
  );
};

export default PostWallItem;
