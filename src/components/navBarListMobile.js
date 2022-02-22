import { UnMessengerSvg, UnFavSvg } from "./image";

import React from "react";

const NavbarBtnListMobile = () => {
  const BtnList = [
    {
      icon: <UnFavSvg  />,
      link: "/",
    },
    {
      icon: <UnMessengerSvg  />,
      link: "/direct/inbox",
    },
  ];

  return (
    <div className="flex  w-[325px] mr-auto justify-end items-center ">
      {BtnList.map((item, index) => {
        const { icon, link } = item;
        return (
          <div
            key={index}
            className="w-[24px] btnText h-[24px] cursor-pointer !ml-4"
          >
            <a href={link} className="hover:border-0">
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarBtnListMobile;
