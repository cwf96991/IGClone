import {
  CrossSvg,
  ImageVideoSvg,
  ImageVideoActiveSvg,
  UploadErrorSvg,
} from "../image";
import { enableBodyScroll } from "body-scroll-lock";
import { FileUploader } from "react-drag-drop-files";
import { useState, useEffect } from "react";
const fileTypes = ["JPG", "PNG", "GIF", "MP4"];

const NewPostModal = ({ modalRef, onClose }) => {
  const [file, setFile] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isError, setIsError] = useState(false);
  const [uploadUrl, setUploadUrl] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    let fileName = file.name;
    let list = fileName.split(".");
    let extension = list[list.length - 1];

    setIsError(!fileTypes.includes(extension.toUpperCase()));
  };
  useEffect(() => {
    if (file && !isError) {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(file);

      setUploadUrl(imageUrl);
    }
  }, [file]);
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
          className={`bg-white rounded-lg p-0 w-[541px]  h-[584px] border-hidden`}
        >
          <div className={`border-hidden`}>
            <div className="flex flex-col ">
              <div className="my-[9px] text-16 font-bold mx-auto">
                {isError ? "File couldn't be uploaded" : "Create new post"}
              </div>
              <div className="lightGrayDivider"></div>
              {uploadUrl != null && !isError ? (
                <div className="w-[541px] h-[541px]">
                  <img src={uploadUrl} className="w-full h-auto" />
                </div>
              ) : (
                <FileUploader
                  handleChange={handleChange}
                  hoverTitle=" "
                  classes="drop-area"
                  name="file"
                  // types={fileTypes}
                  onDraggingStateChange={(dragging) => {
                    setIsDrag(dragging);
                  }}
                >
                  <div className=" flex flex-col   w-[541px] h-[541px] items-center justify-center mx-auto my-auto">
                    <div className="">
                      {isError ? (
                        <UploadErrorSvg />
                      ) : isDrag ? (
                        <ImageVideoActiveSvg />
                      ) : (
                        <ImageVideoSvg />
                      )}
                    </div>
                    <div className="text-22 mt-4">
                      {isError
                        ? "This file is not supported"
                        : "Drag photos and videos here"}
                    </div>
                    {isError && (
                      <div className="text-gray-300 text-sm font-medium">
                        <div className="font-bold inline">{file.name}</div>
                        {` could not be uploaded.`}
                      </div>
                    )}
                    <label>
                      <input type="file" />
                      <div
                        className={`btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm !mt-4`}
                      >
                        {isError
                          ? "Select Other Files"
                          : "Select From Computer"}
                      </div>
                    </label>
                  </div>
                </FileUploader>
              )}
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
