import { CrossSvg, ImageVideoSvg, ImageVideoActiveSvg } from "../image";
import { enableBodyScroll } from "body-scroll-lock";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
const fileTypes = ["JPG", "PNG", "GIF", "MP4"];

const NewPostModal = ({ modalRef, onClose }) => {
  const [file, setFile] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };
  const handleError = (error) => {
    setFile(file);
    console.log(file);
  };

  return (
    <>
      <input type="checkbox" id={"newPostModal"} className="modal-toggle" />
      <div
        ref={modalRef}
        id={"newPostModal"}
        className={`modal w-screen h-screen `}
        onClick={(event) => {
          const element = event.target;

          if (!element.classList.contains("modal")) {
            return;
          }
          const modal = document.getElementById("newPostModal");

          modal.checked = false;
          enableBodyScroll(modalRef.current);
          onClose();
        }}
      >
        <div
          className={`bg-white rounded-lg p-0 h-[476px] w-[433px] border-hidden`}
        >
          <div className={`border-hidden`}>
            <div className="flex flex-col ">
              <div className="my-[9px] text-16 font-bold mx-auto">
                Create new post
              </div>
              <div className="lightGrayDivider"></div>
              <FileUploader
                handleChange={handleChange}
                hoverTitle=" "
                onTypeError={handleError}
                classes="drop-area"
                name="file"
                types={fileTypes}
                onDraggingStateChange={(dragging) => {
                  console.log(dragging);
                  setIsDrag(dragging);
                }}
              >
                <div className=" flex flex-col  w-[433px] h-[433px] items-center justify-center ">
                  <div className="">
                    {isDrag ? <ImageVideoActiveSvg /> : <ImageVideoSvg />}
                  </div>
                  <div className="text-22 my-4">
                    Drag photos and videos here
                  </div>
                  <label>
                    <input type="file" />
                    <div
                      className={`btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm `}
                    >
                      Select From Computer
                    </div>
                  </label>
                </div>
              </FileUploader>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            const modal = document.getElementById("newPostModal");
            modal.checked = false;
            enableBodyScroll(modalRef.current);
            onClose();
          }}
          className="fixed top-4 right-4 w-[24px] h-[24px] cursor-pointer"
        >
          <CrossSvg color="stroke-white" />
        </div>
      </div>
    </>
  );
};

export default NewPostModal;
