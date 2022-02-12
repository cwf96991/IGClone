import { SearchSvg, CloseSvg } from "./image";

import NavbarBtnList from "./navBarBtnList";
const SearchBar = () => {
  return (
    <div className="md:flex relative items-center hidden">
      <input
        type="text"
        className="peer  h-[30px] w-[236px] grow-0 pl-[36px]  focus:pl-[16px] pr-[16px] py-[3px] rounded-lg placeholder-[#383838] bg-[#efefef] text-black focus:outline-none"
        placeholder="Search"
      />
      <div className="absolute left-[11px]  peer-focus:invisible">
        <SearchSvg />
      </div>
      <div className="absolute right-[11px] invisible h-[30px] my-auto peer-focus:visible">
        <CloseSvg />
      </div>
    </div>
  );
};
const Navbar = ({user}) => {
  
  return (
    <div className="fixed w-screen flex z-10 bg-white py-2 border-b border border-gray-100">
      <div className="max-w-[620px] flex justify-between items-center grow ml-auto">
        <div className="text-3xl font-bold font-playball ">CWFgram</div>
        <SearchBar />
      </div>
      <NavbarBtnList user={user}/>
    </div>
  );
};
export default Navbar;
