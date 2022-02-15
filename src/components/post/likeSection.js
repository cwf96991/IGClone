import faker from "@faker-js/faker";
import { getRandomUser } from "../../utils/random";
import React, { useState } from "react";
import Avatar from "../avatar";
import { UserInfoPopUp } from "./postWidget";
import LikeListModal from "../modal/likeListModal";

const LikeSection = ({ fd, isFdLiked, finalLikeCount, likedUser }) => {
  const [likedUserList, setLikedUserList] = useState([]);
  function getRandomLikeList() {
    let list = [];
    for (let index = 0; index < 20; index++) {
      let user = getRandomUser();
      list.push(user);
    }
    for (let index = 0; index < faker.datatype.number(5); index++) {
      list[index].isFollowing = true;
    }
    setLikedUserList(list);
  }
  return (
    <>
      {isFdLiked ? (
        <div className="flex items-center">
          {fd.isMultiple ? (
            <div className="-space-x-2 cursor-pointer translate-y-1">
              <Avatar
                size={"20"}
                isNFT={likedUser.isNFT}
                img={likedUser.avatar}
              />
              <Avatar size={"20"} isNFT={fd.isNFT} img={fd.avatar2} />
              <Avatar size={"20"} isNFT={fd.isNFT} img={fd.avatar3} />
            </div>
          ) : (
            <Avatar
              size={"20"}
              isNFT={likedUser.isNFT}
              img={likedUser.avatar}
            />
          )}
          <div className="font-bold text-sm inline ml-2">
            <div className="font-normal inline ">Liked by</div>
            <div className="mx-1 inline">
              <UserInfoPopUp
                user={likedUser}
                isFollow={true}
                getLikeList={() => {
                  getRandomLikeList();
                }}
              >
                {` ${likedUser.username} `}
              </UserInfoPopUp>
            </div>

            <div className="font-normal inline">and</div>
            <LikeListModal
              id={likedUser.username}
              likedUserList={likedUserList}
              getLikeList={() => {
                getRandomLikeList();
              }}
            >
              {` ${finalLikeCount} others`}
            </LikeListModal>
          </div>
        </div>
      ) : (
        <LikeListModal
          id={likedUser.username}
          likedUserList={likedUserList}
          getLikeList={() => {
            getRandomLikeList();
          }}
        >
          <div className="font-bold text-sm">{finalLikeCount} likes</div>
        </LikeListModal>
      )}
    </>
  );
};

export default LikeSection;
