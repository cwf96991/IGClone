import {
  HomeSvg,
  UnHomeSvg,
  SearchSvg,
  UnMessengerSvg,
  UnFavSvg,
  NewPostSvg,
} from "./image";
import { UserContext } from "../components/UserContext";
import { useContext } from "react";
import React, { useEffect, useState, useRef } from "react";

import Avatar from "./avatar";

const MobileNavBar = () => {
  const user = useContext(UserContext);

  const [focus, setFocus] = useState("mainPage");
  const BtnList = [
    {
      icon: <HomeSvg />,
      link: "/",
      focusString: "mainPage",
      unSelectedIcon: <UnHomeSvg />,
    },
    {
      icon: <SearchSvg size={"24"} color="fillBlack" stroke="strokeBlack" />,
      link: "/explore",
      focusString: "explore",
      unSelectedIcon: (
        <SearchSvg size={"24"} color="fillBlack" stroke="strokeBlack" />
      ),
    },
    {
      icon: <NewPostSvg />,
      link: "/",
      focusString: "newPost",
      unSelectedIcon: <NewPostSvg />,
    },
    {
      icon: <UnFavSvg />,
      link: "/",
      focusString: "fav",
      unSelectedIcon: <UnFavSvg />,
    },
    {
      icon: (
        <div className=" p-[1px] border border-black rounded-full  ">
          <div className="w-[24px] h-[24px]">
            <Avatar
              size={"24"}
              isNFT={user.isNFT}
              img={user.avatar}
              user={user}
            />
          </div>
        </div>
      ),
      unSelectedIcon: (
        <div className=" p-[1px] border border-black rounded-full  ">
          <div className="w-[24px] h-[24px]">
            <Avatar
              size={"24"}
              isNFT={user.isNFT}
              img={user.avatar}
              user={user}
            />
          </div>
        </div>
      ),
      focusString: "profile",
      link: "/direct/inbox",
    },
  ];
  function checkFocus() {
    var baseurl = window.location.origin;
    baseurl = baseurl + "/";

    if (baseurl == location.href) {
      setFocus("mainPage");
    } else if (location.href.includes("direct")) {
      setFocus("inbox");
    } else if (location.href.includes("explore")) {
      setFocus("explore");
    }
  }
  useEffect(() => {
    if (window) {
      checkFocus();
    }
  }, []);
  return (
    <div className="fixed w-screen  z-10 bottom-0 bgWhite flex md:hidden justify-around py-2">
      {BtnList.map((item, index) => {
        const { icon, link, unSelectedIcon, focusString } = item;
        return focusString == "profile" ? (
          <div
            key={index}
            className="w-[24px] btnText h-[24px] cursor-pointer my-4"
          >
            {focusString == focus ? icon : unSelectedIcon}
          </div>
        ) : (
          <a
            key={index}
            href={link}
            className="hover:border-0 w-[24px] btnText h-[24px] cursor-pointer my-4"
          >
            {focusString == focus ? icon : unSelectedIcon}
          </a>
        );
      })}
    </div>
  );
};
export default MobileNavBar;
