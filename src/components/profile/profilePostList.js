import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { getRandomProfilePost } from "../../utils/random";
import PostWallItem from "../post/postWallItem";
import { PostWallLoader3 } from "../post/postWallLoader";
import { useMobile768 } from "../../hook/useMobile";

const ProfilePostList = ({ postUser }) => {
  const [postList, SetPostList] = useState([]);
  const isMobile = useMobile768();
  async function fetchData() {
    let list = await getRandomProfilePost(isMobile ? 2 : 1);
    SetPostList(list);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <InfiniteScroll
      dataLength={postList.length}
      next={async () => {
        try {
          let list = await getRandomProfilePost(isMobile ? 2 : 1);
          SetPostList([...postList, ...list]);
        } catch (e) {
          console.log(e);
        }
      }}
      hasMore={true}
      loader={
        isMobile ? (
          <div>
            <PostWallLoader3 />
            <PostWallLoader3 />
          </div>
        ) : (
          <PostWallLoader3 />
        )
      }
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-4 mb-4">
        {postList.map((data, index) => {
          const { user, post } = data;
          return (
            <PostWallItem post={post} key={index} user={postUser ?? user} />
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default ProfilePostList;
