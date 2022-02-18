import { FavedSvg, CommentSvg, PlayBtnSvg, CommentFillSvg } from "../image";
const PostHover = ({ children, post, tagWidget }) => {
  const { commentCount, likeCount, isVideo, viewCount } = post;
  return (
    <div className="group relative cursor-pointer">
      <div className="absolute w-full h-full bg-black opacity-50 hidden group-hover:flex"></div>
      <div className=" absolute w-full h-full center top-0  hidden group-hover:flex">
        <div className="flex flex-col md:flex-row w-full items-center  md:justify-around">
          <div className="flex text-white -translate-y-2 md:translate-y-0">
            {isVideo ? <PlayBtnSvg /> : <FavedSvg color="fill-white" />}
            <div className="ml-2">{isVideo ? viewCount : likeCount}</div>
          </div>
          <div className="flex text-white  md:mt-0">
            <CommentFillSvg />
            <div className="ml-2">{commentCount}</div>
          </div>
        </div>
      </div>
      {tagWidget}
      {children}
    </div>
  );
};

export default PostHover;
