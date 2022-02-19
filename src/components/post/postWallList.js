import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRandomPostWall } from "../../utils/random";
import { PostWallLoader, PostWallLoader2 } from "./postWallLoader";
import PostWallItem from "./postWallItem";

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
            return <PostWallItem post={post} key={index} user={user} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default PostWallet;
