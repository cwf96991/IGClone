import { enableBodyScroll } from "body-scroll-lock";
import Avatar from "../avatar";
import { ArrowRight } from "../image";

const FavModal = ({ modalRef, onClose, contentRef, arrowRef, userList }) => {
  const FollowRequestRow = () => {
    return (
      <div className="flex justify-between items-center mx-4 my-3">
        <div className="flex">
          <div className="-space-x-6">
            <Avatar
              size={"32"}
              isNFT={userList[0].isNFT}
              img={userList[0].avatar}
              user={userList[0]}
            />
            <div className="avatar translate-y-[8px]">
              <Avatar
                size={"32"}
                isNFT={userList[1].isNFT}
                img={userList[1].avatar}
                user={userList[1]}
              />
            </div>
          </div>
          <div className="flex flex-col text-sm ml-4">
            <div className="font-bold translate-y-[3px]">Follow requests</div>
            <div className="text-gray-300 -translate-y-[3px]">{`${userList[0].username} + ${userList[0].username.length} others`}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[8px] h-[8px] bg-lightBlue rounded-full m-3"></div>
          <ArrowRight />
        </div>
      </div>
    );
  };
  const TitleRow = ({ title, user, isFollow }) => {
    return (
      <div className="flex flex-col mx-4 my-3">
        <div className="text-sm font-bold">{title}</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <div className="!w-[44px] !h-[44px] min-w-[44px] ">
              <Avatar size={"44"} isNFT={user.isNFT} img={user.avatar} user={user}/>
            </div>
            <div className=" ">
              {isFollow ? (
                <div className="leading-none text-sm ml-4 ">
                  <div className=" font-bold  text-black -translate-y-[3px] inline">
                    {user.username}
                  </div>{" "}
                  started following you.
                </div>
              ) : (
                <div className="leading-none text-16 ml-4">
                  Your contact {user.name} is on Instagram as{" "}
                  <div className="text-sm font-bold  text-black -translate-y-[3px] inline">
                    {user.username}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => {}}
            className={`btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm `}
          >
            Follow
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <input type="checkbox" id={"favModal"} className="modal-toggle" />
      <div
        ref={modalRef}
        id={"favModal"}
        className={`modal w-screen h-screen !bg-transparent`}
        onClick={(event) => {
          const element = event.target;

          if (!element.classList.contains("modal")) {
            return;
          }
          const modal = document.getElementById("favModal");

          modal.checked = false;
          enableBodyScroll(modalRef.current);
          onClose();
        }}
      >
        <div
          ref={contentRef}
          className={`bg-white rounded-lg p-0 w-[500px] min-h-[362px] noScrollBar overflow-y-auto border-hidden fixed top-0 right-0 drop-shadow-black `}
        >
          {userList.length != 0 && (
            <div className={`border-hidden`}>
              <div className="flex flex-col">
                <FollowRequestRow />
                <div className="lightGrayDivider"></div>
                <TitleRow title={"This week"} user={userList[2]} />
                <div className="lightGrayDivider"></div>
                <TitleRow
                  title={"This month"}
                  user={userList[3]}
                  isFollow={true}
                />
              </div>
            </div>
          )}
        </div>
        <div
          ref={arrowRef}
          className="bg-white w-[20px] h-[20px] rotate-[225deg] drop-shadow-top fixed top-0 right-0 -translate-x-[2px]"
        ></div>
      </div>
    </>
  );
};

export default FavModal;
