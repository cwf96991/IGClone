import Avatar from "./avatar";
import { BlueTickSvg } from "../components/image";
const SwitchAccountItem = ({ user, isSelected, ogUser, onClick }) => {
  const { avatar, isNFT, username } = user;
  return (
    <div
      onClick={() => {
       if (!isSelected) {
           onClick();
       }
       
      }}
      className="normal-case btn btn-lg btn-ghost hover:bg-transparent flex items-center justify-between w-full mb-4 py-[8px] px-[16px]"
    >
      <div className="flex items-center">
        <Avatar size={"56"} isHighlight={false} img={avatar} isNFT={isNFT} />
        <div className="font-bold text-sm ml-4">{username}</div>
      </div>
      {(isSelected ?? true) && <BlueTickSvg />}
    </div>
  );
};
const SwitchAccountWidget = ({ user, extraAccount, onClick,closeModal }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="font-bold py-[6px]">Switch accounts</div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <SwitchAccountItem
        user={user}
        onClick={() => {
          onClick();
        }}
      />
      {extraAccount && (
        <SwitchAccountItem
          user={extraAccount}
          isSelected={false}
          ogUser={user}
          onClick={() => {
            onClick();
          }}
        />
      )}
      <div className="h-[1px] bg-gray-100 w-full" />
      <div
        onClick={() => {
          closeModal();
        }}
        className="text-sm cursor-pointer text-lightBlue font-bold py-[12px]"
      >
        Log In to an Existing Account{" "}
      </div>
    </div>
  );
};
export default SwitchAccountWidget;
