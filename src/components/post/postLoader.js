import { MoreSvg, FavedSvg, CommentSvg, MsgSvg, BookmarkedSvg } from "../image";
const Avatar = () => (
  <div className="rounded-full bg-slate-200 h-[32px] w-[32px]"></div>
);
const MoreWidget = () => (
  <div>
    <MoreSvg color={"fill-slate-200"} />
  </div>
);
const Dot = () => <div className="text-bold text-2xl text-slate-200">．</div>;
const UserInfo = () => (
  <div className="flex items-center ">
    <Avatar />
    <div className="flex flex-col  ml-4">
      <div className="flex  items-center ">
        <div className="rounded-lg bg-slate-200 h-[21px] w-[80px]"></div>
        <div className="rounded-full bg-slate-200 h-[14px] w-[14px] ml-1"></div>
      </div>
      <div className="rounded-lg bg-slate-200 h-[18px] w-[100px] mt-1"></div>
    </div>
    <Dot />
    <div className="rounded-lg bg-slate-200 h-[21px] w-[80px]"></div>
  </div>
);
const BtnRow = () => (
  <div className="my-4 flex justify-between items-center">
    <div className="flex !mr-3 items-center ">
      <div className="!mr-3 ">
        <FavedSvg color={"fill-slate-200"} />
      </div>
      <div className="!mr-3 ">
        <CommentSvg isLoad={true} />
      </div>
      <div className="!mr-3 ">
        <MsgSvg isLoad={true} />
      </div>
    </div>
    <BookmarkedSvg isLoad={true} />
  </div>
);
const CommentWidget = () => (
  <div className="flex text-sm font-semibold text-slate-200 mt-2">
    <div>View all</div>
    <div className="rounded-lg bg-slate-200 h-[21px] w-[50px] mx-2"></div>
    <div>comments</div>
  </div>
);
const EmojiSvg = () => {
  return (
    <svg
      aria-label="Emoji"
      className="fill-slate-200"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
    </svg>
  );
};
const PostLoader = () => {
  return (
    <div className="border-gray-100 mt-4 md:border bgWhite shadow flex animate-pulse flex-col max-w-full md:max-w-[620px] ">
      <div className="flex justify-between items-center my-2 mx-4 ">
        <UserInfo />
        <MoreWidget />
      </div>

      <div className="w-full   aspect-square  bg-slate-200"></div>
      <div className="flex flex-col mx-4">
        <BtnRow />
        <div className="flex ">
          <div className="rounded-lg bg-slate-200 h-[21px] w-[50px]"></div>
          <div className="font-bold text-sm text-slate-200 ml-2">likes</div>
        </div>
        <div className="flex  mt-2">
          <div className="rounded-lg bg-slate-200 h-[21px] w-[50px]"></div>
          <div className="rounded-lg bg-slate-200 h-[21px] w-full ml-2"></div>
        </div>
        <CommentWidget />
        <div className="flex">
          <div className="rounded-lg bg-slate-200 h-[18px] w-[20px] mr-2"></div>
          <div className="text-slate-200 text-2xs mb-3 font-semibold">
            HOURS AGO
          </div>
        </div>
      </div>
      <hr className="mb-3 hidden md:flex bg-slate-200" />
      <div className=" mx-4 my-3 justify-between items-center hidden md:flex">
        <div className="flex items-center">
          <EmojiSvg />
          <div className="text-slate-200 ml-5 font-semibold text-sm">
            Add a comment ...
          </div>
        </div>
        <div className="text-slate-200  font-semibold text-sm">Post</div>
      </div>
    </div>
  );
};

export default PostLoader;
