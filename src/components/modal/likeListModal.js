import ModalWrapper from "./modalWrapper";
import { CrossSvg } from "../image";
import { useState } from "react";

import { AvatarUsernameActionRow } from "../post/postWidget";
import faker from "@faker-js/faker";
import { closeModal } from "../../utils/function";
const UserRowList = ({ likedUserList }) => {
  let limit = faker.datatype.number(5);
  return likedUserList.map((user, index) => {
    const [isFollow, setIsFollow] = useState(user.isFollowing);
    return (
      <div className="h-[60px] py-[8px] mx-[16px]">
        <AvatarUsernameActionRow
          user={user}
          isfollow={index < limit ? isFollow : false}
          size={"44"}
          key={index}
          followCallback={(output) => {
            setIsFollow(output);
          }}
          descWidget={
            <div className="text-gray-300 text-xs font-bold">{user.name}</div>
          }
          actionBtn={
            <div
              onClick={() => {
                if (!isFollow) {
                  setIsFollow(true);
                }
              }}
              className={`btnText !py-[5px] !px-[9px] font-bold ${
                isFollow
                  ? " !border !border-gray-100"
                  : "!bg-lightBlue !text-white"
              } !text-xs`}
            >
              {isFollow ? "Following" : "Follow"}
            </div>
          }
        />
      </div>
    );
  });
};
const LikeListModal = ({ id, children, likedUserList, getLikeList }) => {
  return (
    <ModalWrapper
      width={"w-[600px] "}
      id={"likeListModal_" + id}
      content={
        <div className="flex flex-col ">
          <div className="flex justify-between items-center !mr-2">
            <div></div>
            <div className="my-2">Likes</div>
            <div
              onClick={() => {
                closeModal("likeListModal_" + id);
              }}
              className=" cursor-pointer btnText"
            >
              <CrossSvg />
            </div>
          </div>
          <div className="lightGrayDivider-sm" />

          <div className="max-h-[420px] noScrollBar !overflow-visible !overflow-y-scroll mt-2">
            <UserRowList likedUserList={likedUserList} />
          </div>
        </div>
      }
      style={"inline"}
      onClick={() => {
        if (likedUserList.length == 0) {
          getLikeList();
        }
      }}
    >
      {children}
    </ModalWrapper>
  );
};
export default LikeListModal;
