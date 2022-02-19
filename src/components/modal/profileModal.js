import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { ProfileSvg, BookmarkSvg, SettingSvg, SwitchSvg } from "../image";
import { useContext, useRef } from "react";
import { UserContext } from "../UserContext";
import ModalWrapper from "./modalWrapper";
import SwitchAccountWidget from "../switchAccountWidget";

const ProfileModal = ({ modalRef, onClose, contentRef, arrowRef }) => {
  const userInfo = useContext(UserContext).userContext;
  const switchModalRef = useRef(null);

  const itemList = [
    {
      icon: <ProfileSvg />,
      text: "Profile",
      handler: () => {
        location.href = `/${userInfo.user.username}`;
      },
    },
    {
      icon: <BookmarkSvg size="16" />,
      text: "Saved",
      handler: () => {
        location.href = `/${userInfo.user.username}/saved`;
      },
    },
    {
      icon: <SettingSvg />,
      text: "Settings",
      handler: () => {
        location.href = `/accounts/edit/`;
      },
    },
    {
      icon: <SwitchSvg />,
      text: "Switch accounts",
      handler: () => {
        let modal = document.getElementById("profileModal");

        modal.checked = false;
        enableBodyScroll(modalRef.current);
        onClose();
        let modal2 = document.getElementById("profileSwitchModal");

        modal2.checked = true;
        disableBodyScroll(switchModalRef.current);
      },
    },
    {
      text: "Log out",
      handler: () => {
        location.href = `/${userInfo.username}`;
      },
    },
  ];
  const ItemWidget = ({ item }) => {
    const { icon, text, handler } = item;
    return (
      <div
        onClick={() => {
          handler();
        }}
        className={`flex items-center px-4 py-2 h-[37px] hover:bg- cursor-pointer ${
          icon == null ? " border-t-[1px] border-t-gray-200" : ""
        }`}
      >
        {icon && <div className="mr-3">{icon}</div>}

        <div className={"text-black text-sm"}>{text}</div>
      </div>
    );
  };
  return (
    <>
      <input type="checkbox" id={"profileModal"} className="modal-toggle" />
      <div
        ref={modalRef}
        id={"profileModal"}
        className={`modal w-screen h-screen !bg-transparent`}
        onClick={(event) => {
          const element = event.target;

          if (!element.classList.contains("modal")) {
            return;
          }
          const modal = document.getElementById("profileModal");

          modal.checked = false;
          enableBodyScroll(modalRef.current);
          onClose();
        }}
      >
        <div
          ref={contentRef}
          className={`bg-white rounded-lg p-0 w-[230px] h-[194px] noScrollBar overflow-y-auto border-hidden fixed top-0 right-0 drop-shadow-black `}
        >
          <div className={`border-hidden`}>
            <div className="flex flex-col">
              {itemList.map((item, index) => {
                return <ItemWidget item={item} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div
          ref={arrowRef}
          className="bg-white w-[20px] h-[20px] rotate-[225deg] drop-shadow-top fixed top-0 right-0 -translate-x-[2px] "
        ></div>
      </div>
      <ModalWrapper
        modalRef={switchModalRef}
        id={"profileSwitchModal"}
        content={
          <SwitchAccountWidget
            closeModal={() => {
              const modal = document.getElementById("profileSwitchModal");
              modal.checked = false;
              enableBodyScroll(switchModalRef.current);
            }}
          />
        }
      />
    </>
  );
};

export default ProfileModal;
