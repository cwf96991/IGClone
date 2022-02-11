import { faker } from "@faker-js/faker";
import Avatar from "./avatar";
import {
  MoreSvg,
  FavSvg,
  CommentSvg,
  MsgSvg,
  BookmarkSvg,
  FavedSvg,
} from "./image";
import React, { useState, useEffect } from "react";
import { emojis } from "../utils/constant";

function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}
function getRandomUsername() {
  const name = faker.name.findName();
  const username = faker.internet.userName(name);
  return username;
}
function getRandomHashTag() {
  let tempHashTag = faker.word.noun();
  return '#'+faker.word.adjective() +tempHashTag.charAt(0).toUpperCase() + tempHashTag.slice(1);
}
const Post = ({ user }) => {
  const { username, avatar, img, isfav } = user;
  const [isFav, setIsFav] = useState(isfav);
  const BtnList = () => {
    return (
      <div className="my-4 flex justify-between items-center">
        <div className="flex items-center">
          <div
            onClick={() => {
              setIsFav(!isFav);
            }}
            className="mr-3 btn btn-sm btn-ghost m-0 p-0"
          >
            {isFav ? <FavedSvg /> : <FavSvg />}
          </div>
          <div className="mr-3">
            <CommentSvg />
          </div>
          <div className="mr-3">
            <MsgSvg />
          </div>
        </div>
        <BookmarkSvg />
      </div>
    );
  };
  return (
    <div className="border-[#dbdbdb] mt-4 border">
      <div className="flex justify-between items-center my-2 mx-3">
        <div className="flex items-center">
          <Avatar size={"32"} isHighlight={true} img={avatar} />
          <div className="ml-4 text-black font-bold">{username}</div>
        </div>
        <MoreSvg />
      </div>
      <img
        src={img}
        className="w-full object-cover object-center aspect-square"
      />

      <div className="flex flex-col  mx-3">
        <BtnList />
        <div className="font-bold text-sm">{faker.datatype.number()} likes</div>
        <div className=" ">
          <div className="font-bold text-sm">
            {username}
            <div className="font-normal inline ml-1">{`${faker.lorem.lines()} ${randomEmoji()}`}</div>
            <div className="font-normal inline ml-1 text-[#00376B]">{`@${getRandomUsername()}`}</div>
            <div className="font-normal inline ml-1 text-[#00376B]">
            <div className="inline ml-1">{`${getRandomHashTag()}`}</div>
              
            </div>
          </div>
          <div className="text-[#8E8E8E] text-sm">View all {faker.datatype.number(1000)} comments</div>
          <div className="text-[#8E8E8E] text-2xs">{faker.datatype.number(23,{ min: 1 })} HOURS AGO</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
