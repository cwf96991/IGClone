import { useState, useEffect, useRef } from "react";
import Post from "./post";
import InfiniteScroll from "react-infinite-scroll-component";
import PostLoader from "./postLoader";
import { getRandomPostList } from "../../utils/random";
const PostList = ({ currentUser }) => {
  const [postList, SetPostList] = useState([]);
  async function fetchData() {
    let list = await getRandomPostList();
    SetPostList(list);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-full md:max-w-[620px] overflow-x-hidden p-0 m-0 noScrollBar">
      <InfiniteScroll
        dataLength={postList.length} //This is important field to render the next data
        next={async () => {
          try {
            let list = await getRandomPostList();
            SetPostList([...postList, ...list]);
          } catch (e) {
            console.log(e);
          }
        }}
        hasMore={true}
        loader={<PostLoader />}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // below props only if you need pull down functionality
        // refreshFunction={fetchData}
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
          return <Post key={key} data={item} currentUser={currentUser} />;
        })}
      </InfiniteScroll>
      {/* {postList != null && (
        <Post data={postList[0]} currentUser={currentUser} />
      )} */}
    </div>
  );
};

export default PostList;
