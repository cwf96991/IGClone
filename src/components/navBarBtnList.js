import { HomeSvg, MessengerSvg, NewPostSvg, ExploreSvg, FavSvg } from "./image";
import Avatar from "./avatar";
const NavbarBtnList = ({ user }) => {
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
        <Avatar size={"24"} isNFT={user.isNFT} img={user.avatar} />
      ),
    },
  ];
  return (
    <div className="flex w-[325px] mr-auto justify-evenly items-center ">
      {BtnList.map((item, index) => {
        const { icon, link } = item;
        return (
          <div key={index} className="w-[24px] h-[24px] cursor-pointer">
            <a href={link} className="hover:border-0">
              {icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarBtnList;
