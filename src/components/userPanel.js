import Avatar from "./avatar";
import { useState, useEffect, useRef } from "react";
import { getRandomUser } from "../utils/random";
import { truncateName } from "../utils/function";
import { personalWebsite, footerList } from "../utils/constant";
import ModalWrapper from "../components/modal/modalWrapper";
import SuggestionSection from "./suggestionSection";
import { BlueTickSvg } from "../components/image";
import FooterSection from "./footerSection";
import SwitchAccountWidget from "./switchAccountWidget";
const UserPanel = ({ user, setUser }) => {
  const { avatar, isNFT, username, name, isNew, follower, extraFollower } =
    user;
  const [isShowModel, setIsShowModel] = useState(false);
  const [extraAccount, setExtraAccount] = useState();
  const ref = useRef(null);
  useEffect(() => {
    setExtraAccount(getRandomUser());
  }, []);
  useEffect(() => {
    if (ref.current) {
      if (ref.current.classList.contains("relative")) {
        ref.current.classList.add("fixed");
        ref.current.style.top = `${window.pageYOffset}px`;
      } else {
        ref.current.style.top = null;
      }
    }
  }, [isShowModel]);
  function closeModal() {
    setIsShowModel(false);
    const modal = document.getElementById("switchModal");
    modal.checked = false;
  }

  return (
    <div
      ref={ref}
      className={`mt-8  ml-6 ${isShowModel ? "relative" : "fixed"}  w-full`}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center w-[325px]">
          <Avatar size={"56"} isHighlight={false} img={avatar} isNFT={isNFT} />
          <div className="flex flex-row items-center justify-between grow">
            <div className="flex flex-col text-sm ml-4 grow">
              <div className="font-bold ">{truncateName(username)}</div>
              <div>{name}</div>
            </div>

            <ModalWrapper
              id={"switchModal"}
              content={
                <SwitchAccountWidget
                  user={user}
                  extraAccount={extraAccount}
                  onClick={() => {
                    closeModal();
                    setUser(extraAccount);
                    setExtraAccount(user);
                  }}
                  closeModal={() => {
                    closeModal();
                  }}
                />
              }
              onClose={() => {
                setIsShowModel(false);
              }}
            >
              <div
                onClick={() => {
                  setIsShowModel(true);
                }}
                className="btnText !text-lightBlue !text-xs"
              >
                Switch
              </div>
            </ModalWrapper>
          </div>
        </div>
      </div>
      <SuggestionSection />

      <FooterSection />
      <div className="text-gray-100 text-2xs font-bold">
        © 2022 CWFGRAM FROM CWF
      </div>
    </div>
  );
};
export default UserPanel;
