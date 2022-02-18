import { useState, useEffect, useRef } from "react";
import Post from "./post";
import InfiniteScroll from "react-infinite-scroll-component";
import PostLoader from "./postLoader";
import { getRandomPostWall } from "../../utils/random";
import { StackSvg, PlayBtnSvg } from "../image";
import { PostWallLoader, PostWallLoader2 } from "./postWallLoader";
import PostHover from "./postHover";
const imgBaseStyle = "object-cover object-center ";
const imgStyle = "!w-full !aspect-square !block";

const PostWallet = ({ currentUser }) => {
  const [postList, SetPostList] = useState([]);
  function checkIsOdd() {
    return (postList.length / 9 + 1) % 2;
  }
  async function fetchData() {
    let list = await getRandomPostWall(1, checkIsOdd());
    SetPostList(list);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-0 md:my-8">
      <InfiniteScroll
        dataLength={postList.length} //This is important field to render the next data
        next={async () => {
          try {
            let list = await getRandomPostWall(1, checkIsOdd());
            SetPostList([...postList, ...list]);
          } catch (e) {
            console.log(e);
          }
        }}
        hasMore={true}
        loader={checkIsOdd() ? <PostWallLoader /> : <PostWallLoader2 />}
      >
        <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-4 mb-4">
          {postList.map((data, index) => {
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
              isVideo,
              video,
            } = post;
            return (
              //   <div key={index}>
              isVideo ? (
                <div className={`row-span-2 col-span-2 `}>
                  <PostHover
                    post={post}
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
                </div>
              ) : (
                <PostHover
                  post={post}
                  tagWidget={
                    imgList.length > 1 && (
                      <div className="absolute right-[15px] top-[15px] group group-hover:opacity-50">
                        <StackSvg />
                      </div>
                    )
                  }
                >
                  <img
                    src={imgList[0]}
                    className={`${imgBaseStyle} ${imgStyle} `}
                  />
                </PostHover>
              )
              //   </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PostWallet;
