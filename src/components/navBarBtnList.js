import { HomeSvg, MessengerSvg, NewPostSvg, ExploreSvg, FavSvg } from "./image";
import { faker } from "@faker-js/faker";

const BtnList = [
  {
    icon: <HomeSvg />,
    link: "/",
  },
  {
    icon: <MessengerSvg />,
    link: "/direct/inbox",
  },
  {
    icon: <NewPostSvg />,
  },
  {
    icon: <ExploreSvg />,
    link: "/explore",
  },
  {
    icon: <FavSvg />,
  },
  {
    icon: (
      <div class="avatar">
        <div class="rounded-full w-[24px] h-[24px]">
          <img src={faker.image.avatar()} className="" />
        </div>
      </div>
    ),
  },
];
const NavbarBtnList = () => {
  return (
    <div className="flex w-[280px] justify-evenly items-center mr-auto">
      {BtnList.map((item, index) => {
        const { icon, link } = item;
        return (
          <div key="index" className="w-[24px] h-[24px] cursor-pointer">
            <a href={link} className="">{icon}</a>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarBtnList;
