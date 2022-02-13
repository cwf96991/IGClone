import ModalWrapper from "../modal/modalWrapper";
import { MoreSvg } from "../image";
const moreOptionList = [
  {
    text: "Report",
    isRed: true,
    handler: () => {
      console.log("hihi");
    },
  },
  { text: "Unfollow", isRed: true },
  { text: "Go to post" },
  { text: "Share to..." },
  { text: "Copy link" },
  { text: "Embed" },
  { text: "Cancel" },
];
const basicOptionStyle =
  "text-center font-bold text-sm px-[8px] py-[4px] h-[40px] border border-y-[0.5px] border-gray-100 flex justify-center items-center";
const MoreBtnWidget = () => {
  return (
    <ModalWrapper
      id={"moreModal"}
      content={
        <div className="flex flex-col">
          {moreOptionList.map((option, index) => {
            const { text, isRed, handler } = option;
            return (
              <div
                key={index}
                className={`${
                  isRed ? "text-[#ED4956]" : ""
                } ${basicOptionStyle}`}
                onClick={() => {
                  handler();
                  const modal = document.getElementById("moreModal");
                  modal.checked = false;
                }}
              >
                {text}
              </div>
            );
          })}
        </div>
      }
    >
      <div className="btnText">
        <MoreSvg />
      </div>
    </ModalWrapper>
  );
};

export default MoreBtnWidget;
