import React, { useEffect, useState } from "react";
import {
  HomeSvg,
  UnHomeSvg,
  MessengerSvg,
  UnMessengerSvg,
  NewPostSvg,
  UnNewPostSvg,
  ExploreSvg,
  UnExploreSvg,
  FavSvg,
  UnFavSvg,
} from "./image";
const BtnList = [
  {
    icon: <HomeSvg />,
    focusString: "mainPage",
    unSelectedIcon: <UnHomeSvg />,
  },
  {
    icon: <MessengerSvg />,
    unSelectedIcon: <UnMessengerSvg />,
    focusString: "inbox",
  },
  {
    icon: <NewPostSvg />,
    unSelectedIcon: <UnNewPostSvg />,
    focusString: "newPost",
  },
  {
    icon: <ExploreSvg />,
    focusString: "explore",
    unSelectedIcon: <UnExploreSvg />,
  },
  {
    icon: <FavSvg />,
    focusString: "favourite",
    unSelectedIcon: <UnFavSvg />,
  },
  {
    icon: (
      <div className="w-[24px] h-[24px] rounded-full bg-slate-200 animate-pulse"></div>
    ),
    focusString: "profile",

    unSelectedIcon: (
      <div className="w-[24px] h-[24px] rounded-full bg-slate-200 animate-pulse"></div>
    ),
  },
];

const NavbarBtnPlaceholder = () => {
  const [focus, setFocus] = useState("");
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
    <div className="flex  w-[325px] mr-auto justify-end items-center ">
      {BtnList.map((item, index) => {
        const { icon, focusString, unSelectedIcon } = item;
        return (
          <div
            key={index}
            className=" btnText cursor-pointer !mr-4 w-[25px] h-[25px]"
          >
            <div>{focusString == focus ? icon : unSelectedIcon}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarBtnPlaceholder;
