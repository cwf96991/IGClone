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
import Avatar from "./avatar";
import NewPostModal from "./modal/newPostModal";
import FavModal from "./modal/favModal";
import ProfileModal from "./modal/profileModal";
import React, { useEffect, useState, useRef } from "react";
import { getRandomUser } from "../utils/random";
import { disableBodyScroll } from "body-scroll-lock";
const NavbarBtnList = ({ user }) => {
  const newPostModalRef = useRef(null);

  const favModalRef = useRef(null);
  const favModalContextRef = useRef(null);
  const favArrowRef = useRef(null);
  const profileModalRef = useRef(null);
  const profileContextRef = useRef(null);
  const profileArrowRef = useRef(null);
  const favBtn = useRef(null);
  const profileBtn = useRef(null);

  const [focus, setFocus] = useState("");
  const [prevFocus, setPrevFocus] = useState("");
  const [favUserList, setFavUserList] = useState([]);
  useEffect(() => {
    let list = [];
    for (let index = 0; index < 4; index++) {
      let user = getRandomUser();
      list.push(user);
    }
    setFavUserList(list);
  }, []);
  const BtnList = [
    {
      icon: <HomeSvg />,
      link: "/",
      focusString: "mainPage",
      unSelectedIcon: <UnHomeSvg />,
    },
    {
      icon: <MessengerSvg />,
      link: "/direct/inbox",
      unSelectedIcon: <UnMessengerSvg />,
      focusString: "inbox",
    },
    {
      icon: <NewPostSvg />,
      unSelectedIcon: <UnNewPostSvg />,
      focusString: "newPost",
      handler: () => {
        setPrevFocus(focus);
        setFocus("newPost");
        const modal = document.getElementById("newPostModal");

        modal.checked = true;
        disableBodyScroll(newPostModalRef.current);
      },
    },
    {
      icon: <ExploreSvg />,
      link: "/explore",
      focusString: "explore",
      unSelectedIcon: <UnExploreSvg />,
    },
    {
      icon: <FavSvg />,
      focusString: "favourite",
      unSelectedIcon: <UnFavSvg />,
      handler: () => {
        let bottom = favBtn.current.getBoundingClientRect().bottom;
        let arrowRight = favBtn.current.getBoundingClientRect().right;
        let right = profileBtn.current.getBoundingClientRect().right;
        setPrevFocus(focus);
        setFocus("favourite");
        const modal = document.getElementById("favModal");

        favModalContextRef.current.style.top = `${bottom + 20}px`;

        favModalContextRef.current.style.right = `${
          window.innerWidth - right
        }px`;
        favArrowRef.current.style.top = `${bottom + 10}px`;
        favArrowRef.current.style.right = `${window.innerWidth - arrowRight}px`;

        modal.checked = true;
        disableBodyScroll(favModalRef.current);
      },
    },
    {
      icon: (
        <div className=" p-[1px] border border-black rounded-full  ">
          <div className="w-[24px] h-[24px]">
            <Avatar size={"24"} isNFT={user.isNFT} img={user.avatar} />
          </div>
        </div>
      ),
      focusString: "profile",
      handler: () => {
        let bottom = profileBtn.current.getBoundingClientRect().bottom;
        let arrowRight = profileBtn.current.getBoundingClientRect().right;
        let right = profileBtn.current.getBoundingClientRect().right;
        setPrevFocus(focus);
        setFocus("profile");
        const modal = document.getElementById("profileModal");

        profileContextRef.current.style.top = `${bottom + 20}px`;

        profileContextRef.current.style.right = `${
          window.innerWidth - right
        }px`;

        profileArrowRef.current.style.top = `${bottom + 10}px`;
        profileArrowRef.current.style.right = `${
          window.innerWidth - arrowRight + 12
        }px`;

        modal.checked = true;
        disableBodyScroll(profileModalRef.current);
      },
      unSelectedIcon: (
        <div className="translate-y-[1px]">
          <Avatar size={"24"} isNFT={user.isNFT} img={user.avatar} />
        </div>
      ),
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

  function closeModal() {
    setFocus(prevFocus);
  }
  return (
    <div className="flex  w-[325px] mr-auto justify-end items-center ">
      {BtnList.map((item, index) => {
        const { icon, link, focusString, unSelectedIcon, handler } = item;
        return focusString != "profile" ? (
          <div
            key={index}
            className="w-[24px] btnText h-[24px] cursor-pointer !mr-4"
          >
            {link ? (
              <a href={link} className="hover:border-0">
                {focusString == focus ? icon : unSelectedIcon}
              </a>
            ) : (
              <div
                ref={focusString == "favourite" ? favBtn : null}
                onClick={() => {
                  handler();
                }}
              >
                {focusString == focus ? icon : unSelectedIcon}
              </div>
            )}
          </div>
        ) : (
          <div
            ref={profileBtn}
            key={index}
            className=" btnText cursor-pointer !mr-4 w-[25px] h-[25px]"
          >
            <div
              onClick={() => {
                handler();
              }}
            >
              {focusString == focus ? icon : unSelectedIcon}
            </div>
          </div>
        );
      })}
      <NewPostModal
        modalRef={newPostModalRef}
        onClose={() => {
          closeModal();
        }}
      />
      <FavModal
        modalRef={favModalRef}
        contentRef={favModalContextRef}
        arrowRef={favArrowRef}
        userList={favUserList}
        onClose={() => {
          closeModal();
        }}
      />
      <ProfileModal
        modalRef={profileModalRef}
        contentRef={profileContextRef}
        arrowRef={profileArrowRef}
        onClose={() => {
          closeModal();
        }}
      />
    </div>
  );
};

export default NavbarBtnList;
