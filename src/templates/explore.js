import Base from "./base";
import PostWallet from "../components/post/postWallList";
const Explore = () => {
  return (
    <Base>
      <div className="flex max-w-full md:max-w-[945px]  mx-auto ">
        <div className="overflow-x-hidden p-0 m-0 noScrollBar   w-full">
          <PostWallet />
        </div>
        <div className="md:min-w-[16px]"></div>
      </div>
    </Base>
  );
};
export default Explore;
