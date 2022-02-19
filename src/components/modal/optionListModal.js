const basicOptionStyle =
  "text-center font-bold text-sm  border-none  cursor-pointer px-[8px] py-[4px] h-[40px] flex justify-center items-center";
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.checked = false;
}
const OptionListModal = ({ optionList, id, modalRef }) => {
  return (
    <div className="flex flex-col ">
      {optionList.map((option, index) => {
        const { text, isRed, handler } = option;
        return (
          <div className="flex flex-col" key={index}>
            <div
              className={`${
                isRed ? "!text-[#ED4956]" : ""
              } ${basicOptionStyle}`}
              onClick={() => {
                if (handler) {
                  handler();
                } else {
                  closeModal(id);
                  if (modalRef) {
                    enableBodyScroll(modalRef.current);
                  }
                }
              }}
            >
              {text}
            </div>
            <div className="lightGrayDivider-sm" />
          </div>
        );
      })}
    </div>
  );
};

export default OptionListModal;
