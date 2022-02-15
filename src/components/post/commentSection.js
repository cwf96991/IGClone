import ModalWrapper from "../modal/modalWrapper";
import { ImgSlider } from "../slider";
import { CommentItem, CommentListWidget } from "./commentWidget";
const ImgSliderWidget = ({ imgList }) => {
  return (
    <div className="grow bg-black min-h-[450px] max-h-[953px]">
      <div className="relative top-1/2 -translate-y-1/2">
        <ImgSlider
          imgList={imgList}
          isInside={true}
          imgStyle={"w-full h-auto"}
        />
      </div>
    </div>
  );
};
const CommentSection = ({
  post,
  headBar,
  btnBar,
  likeSection,
  userAvatar,
  postDescWidget,
  postTime,
  emojiCommentBar,
  finalCommentList,
  showCommentList,
  replyHandler,
  children,
}) => {
  const { imgList, postHash } = post;
  const PanelFooter = () => {
    return (
      <div className="flex flex-col">
        <div className="mx-4">{btnBar}</div>
        <div className="mx-4">{likeSection}</div>
        <div className="mx-4">{postTime}</div>
        <div>{emojiCommentBar}</div>
      </div>
    );
  };
  const CommentPanel = () => {
    return (
      <div className="max-w-[618px] min-w-[405px] hidden md:flex min-h-[450px] max-h-[953px]">
        <div className="flex flex-col w-full ">
          <div className="flex flex-col ">
            <div>{headBar}</div>
            <div className="lightGrayDivider-sm" />
          </div>

          <div className="grow  pt-4 mx-4 overflow-y-auto  ">
            <CommentItem
              userAvatar={userAvatar}
              postDescWidget={postDescWidget}
              postTime={post.postTime}
            />

            <CommentListWidget list={finalCommentList} />
          </div>

          <PanelFooter />
        </div>
      </div>
    );
  };
  return (
    <ModalWrapper
      id={`commentModal_${postHash}`}
      width={"!w-[80%] max-w-[1380px]"}
      height={"min-h-[450px] max-h-[953px] "}
      onClose={() => {
        window.history.replaceState(window.history.state, "", "/");
      }}
      onClick={() => {
        window.history.replaceState(window.history.state, "", `/p/${postHash}`);
      }}
      content={
        <div className="flex ">
          <ImgSliderWidget imgList={imgList} />
          <CommentPanel />
        </div>
      }
    >
      {children}
      {showCommentList != null && showCommentList.length > 0 && (
        <CommentListWidget
          list={showCommentList}
          isHideBtnList={true}
          replyHandler={replyHandler}
        />
      )}
    </ModalWrapper>
  );
};

export default CommentSection;
