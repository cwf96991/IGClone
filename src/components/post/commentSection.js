import ModalWrapper from "../modal/modalWrapper";
import { ImgSlider } from "../slider";

const CommentSection = ({
  post,
  user,
  finalCommentCount,
  headBar,
  btnBar,
  likeSection,
  creatTime,
  emojiCommentBar,
}) => {
  const {
    imgList,
    isfav,
    isbookmark,
    commentCount,
    likeCount,
    postTime,
    isFdLiked,
    isAddress,
    address,
  } = post;
  const { username, avatar, isNFT, isHighlight, isFollowing, fd, isVerify } =
    user;
  return (
    <ModalWrapper
      id={`commentModal_${username}_${creatTime}`}
      width={"!w-[80%] max-w-[1380px]"}
      height={"min-h-[450px] max-h-[953px]"}
      content={
        <div className="flex ">
          {/* max-height: 773px; max-width: 618.4px; aspect-ratio: 1080 / 1350; flex-basis: 618.4px; */}
          {/* max-height: 953px; max-width: 762.4px; aspect-ratio: 1440 / 1800; flex-basis: 762.4px; */}

          <div className="grow bg-black min-h-[450px] max-h-[953px]">
            <div className="relative top-1/2 -translate-y-1/2">
              <ImgSlider
                imgList={imgList}
                isInside={true}
                imgStyle={"w-full h-auto"}
              />
            </div>
          </div>
          <div className="max-w-[618px] min-w-[405px] hidden md:flex">
            <div className="flex flex-col w-full justify-between">
              <div className="">{headBar}</div>
              <div className="flex flex-col">
                <div className="mx-4">{btnBar}</div>
                <div className="mx-4">{likeSection}</div>
                <div>{emojiCommentBar}</div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="text-gray-300 text-sm cursor-pointer font-semibold">
        View all {finalCommentCount} comments
      </div>
    </ModalWrapper>
  );
};

export default CommentSection;
