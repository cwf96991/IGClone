import Avatar from "./avatar";
import { BlueTickSvg } from "../components/image";
import { useMobile768 } from "../hook/useMobile";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import ClipLoader from "react-spinners/ClipLoader";

const SwitchAccountItem = ({ user, isSelected, onClick }) => {
  const { avatar, isNFT, username } = user;
  // const isMobile = useMobile768()
  const [isLoad, setIsLoad] = useState(false);
  return (
    <div
      onClick={() => {
        if (!(isSelected ?? true)) {
          setIsLoad(true);
        }
        onClick();
        setIsLoad(false);
      }}
      className="normal-case btn btn-lg btn-ghost hover:bg-transparent flex items-center justify-between w-full mb-4 py-[8px] px-[16px]"
    >
      <div className="flex items-center">
        <Avatar size={"56"} isHighlight={false} img={avatar} isNFT={isNFT} />
        <div className="font-bold text-sm ml-4">{username}</div>
      </div>
      {isSelected ?? true ? (
        <BlueTickSvg />
      ) : (
        <ClipLoader name="circle" loading={isLoad ?? false} size={24} />
      )}
    </div>
  );
};
const SwitchAccountWidget = ({ closeModal }) => {
  const userInfo = useContext(UserContext).userContext;
  const userStore = useContext(UserContext);

  return (
    <div className="flex flex-col items-center ">
      <div className="font-bold py-[6px]">Switch accounts</div>
      <div className="lightGrayDivider" />
      {userInfo.user && (
        <SwitchAccountItem
          user={userInfo.user}
          onClick={() => {
            closeModal();
          }}
        />
      )}
      {userInfo.extraUser && (
        <SwitchAccountItem
          user={userInfo.extraUser}
          isSelected={false}
          ogUser={userInfo.user}
          onClick={() => {
            let user = userInfo.user;
            let extraUser = userInfo.extraUser;
            let tempUser = user;
            user = extraUser;
            extraUser = tempUser;

            userStore.setUserByDispatch({
              type: "switch",
              value: { user, extraUser },
            });

            closeModal();
          }}
        />
      )}
      <div className="lightGrayDivider" />
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
