import ModalWrapper from "./modalWrapper";

const NewPostDiscardModal = ({onDiscard}) => {
  return (
    <ModalWrapper
      id="newPostModal_discard"
      width="w-[400px]"
      height="h-[200px]"
      content={
        <div className="flex flex-col items-center">
          <div className="text-16 font-bold mt-5">Discard post?</div>
          <div className="mt-2 text-gray-300 text-sm">
            If you leave, your edits won't be saved.
          </div>

          <div className="lightGrayDivider-sm mt-5"></div>
          <div
            onClick={() => {
              const modal = document.getElementById("newPostModal_discard");
              modal.checked = false;
              onDiscard()
              
              modal = document.getElementById("newPostModal");
              modal.checked = false;
            }}
            className="!h-[48px] btnText w-full"
          >
            <div className=" !text-[#ED4956] font-bold !my-auto">Discard</div>
          </div>
          <div className="lightGrayDivider-sm"></div>
          <div
            onClick={() => {
              const modal = document.getElementById("newPostModal_discard");
              modal.checked = false;
            }}
            className="!h-[48px] btnText w-full"
          >
            <div className="btnText my-auto ">Cancel</div>
          </div>
        </div>
      }
    ></ModalWrapper>
  );
};

export default NewPostDiscardModal;
