import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getRandomPostWall } from "../../utils/random";
import { PostWallLoader, PostWallLoader2 } from "./postWallLoader";
import PostWallItem from "./postWallItem";
import { useMobile768 } from "../../hook/useMobile";
import { SearchSvg, CloseSvg } from "../image";
const SearchBar = () => {
  return (
    <div className="flex relative items-center md:hidden">
      <input
        type="text"
        className="peer  h-[30px] w-full mx-2 grow-0 pl-[36px] my-1 focus:pl-[16px] pr-[16px] py-[2px] rounded-lg placeholder-gray-300 md:placeholder-[#383838] bg-[#383838] md:bg-[#efefef] text-black focus:outline-none"
        placeholder="Search"
      />
      <div className="absolute left-[11px]  peer-focus:invisible">
        <SearchSvg />
      </div>
      <div className="absolute right-[11px] invisible h-[30px] my-auto peer-focus:visible">
        <CloseSvg />
      </div>
    </div>
  );
};
const PostWallet = ({  }) => {
  const isMobile = useMobile768();

  const [postList, SetPostList] = useState([]);
  function checkIsOdd() {
    return (postList.length / 9 + 1) % 2;
  }
  async function fetchData() {
    let list = await getRandomPostWall(isMobile ? 2 : 1, checkIsOdd());
    SetPostList(list);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-0 md:my-8">
       <SearchBar />
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
        loader={
          isMobile ? (
            <div>
              <PostWallLoader />
              <PostWallLoader2 />
              <PostWallLoader />
            </div>
          ) : checkIsOdd() ? (
            <PostWallLoader />
          ) : (
            <PostWallLoader2 />
          )
        }
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
