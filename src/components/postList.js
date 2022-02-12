import { useState, useEffect, useRef } from "react";
import Post from "./post";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./loader";
import { getRandomPostList } from "../utils/random";
const PostList = () => {
  const [postList, SetPostList] = useState([]);
  async function fetchData() {
    let list = await getRandomPostList();
    SetPostList(list);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <InfiniteScroll
        dataLength={postList.length} //This is important field to render the next data
        next={async () => {
          let list = await getRandomPostList();

          SetPostList([...postList, ...list]);
        }}
        hasMore={true}
        loader={<Loader />}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // below props only if you need pull down functionality
        refreshFunction={fetchData}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        // }
      >
        {postList.map((item, key) => {

          return <Post key={key} data={item} />;
        })}
      </InfiniteScroll>
    </>
  );
};

export default PostList;
