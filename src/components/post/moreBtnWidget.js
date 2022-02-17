import ModalWrapper from "../modal/modalWrapper";
import { MoreSvg } from "../image";
import OptionListModal from "../modal/optionListModal";
import React, { useRef } from "react";

const moreOptionList = [
  {
    text: "Report",
    isRed: true,
    handler: () => {},
  },
  { text: "Unfollow", isRed: true },
  { text: "Go to post" },
  { text: "Share to..." },
  { text: "Copy link" },
  { text: "Embed" },
  { text: "Cancel" },
];

const MoreBtnWidget = () => {
  const ref = useRef(null);
  return (
    <ModalWrapper
      id={"moreModal"}
      zIndex={"z-[1000]"}
      modalRef={ref}
      content={
        <OptionListModal
        modalRef={ref}
          id={"moreModal"}
          optionList={moreOptionList}
        />
      }
    >
      <div className="btnText">
        <MoreSvg />
      </div>
    </ModalWrapper>
  );
};

export default MoreBtnWidget;
