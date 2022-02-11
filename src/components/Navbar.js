import { SearchSvg, CloseSvg } from "./image";

import NavbarBtnList from "./navBarBtnList";
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-2 border-b border border-[#dbdbdb]">
      <div className="max-w-[620px] flex justify-between items-center grow ml-auto">
        <div className="text-3xl font-bold font-playball ">CWFgram</div>
        <div className="flex relative items-center ">
          <input
            type="text"
            class="peer  h-[30px] w-[236px] grow-0 pl-[36px]  focus:pl-[16px] pr-[16px] py-[3px] rounded-lg placeholder-[#383838] bg-[#efefef] text-black focus:outline-none"
            placeholder="Search"
          />
          <div className="absolute left-[11px]  peer-focus:invisible">
            <SearchSvg />
          </div>
          <div className="absolute right-[11px] invisible h-[30px] my-auto peer-focus:visible">
            <CloseSvg />
          </div>
        </div>
      </div>
      <NavbarBtnList />
    </div>
  );
};
export default Navbar;
