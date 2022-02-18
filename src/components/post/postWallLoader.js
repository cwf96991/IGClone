const PostWallLoader = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-4 mb-4 animate-pulse">
      <div className="w-full   aspect-square  bg-slate-200"></div>
      <div className="w-full  col-span-2 row-span-2 aspect-square  bg-slate-200 "></div>
      <div className="w-full   aspect-square  bg-slate-200"></div>
    </div>
  );
};

const PostWallLoader2 = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1 md:gap-4 mb-4  animate-pulse">
      <div className="w-full  col-span-2 row-span-2 aspect-square  bg-slate-200 "></div>
      <div className="w-full   aspect-square  bg-slate-200 "></div>
      <div className="w-full   aspect-square  bg-slate-200 "></div>
    </div>
  );
};
export { PostWallLoader, PostWallLoader2 };
