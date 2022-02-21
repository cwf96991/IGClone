import {
  CrossSvg,
  ImageVideoSvg,
  ImageVideoActiveSvg,
  UploadErrorSvg,
} from "../image";
import { enableBodyScroll } from "body-scroll-lock";
import { FileUploader } from "react-drag-drop-files";
import { useState, useEffect } from "react";
import NewPostDiscardModal from "./newPostDiscardModal";
import { Header, Content } from "./newPostModalWidget";
const fileTypes = ["JPG", "PNG", "GIF", "MP4"];

const NewPostModal = ({ modalRef, onClose }) => {
  const [file, setFile] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isError, setIsError] = useState(false);
  const [step, setStep] = useState(1);
  const [uploadUrl, setUploadUrl] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    let fileName = file.name;
    let list = fileName.split(".");
    let extension = list[list.length - 1];

    setIsError(!fileTypes.includes(extension.toUpperCase()));
  };
  const handleDrag = (dragging) => {
    setIsDrag(dragging);
  };
  useEffect(() => {
    if (file && !isError) {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(file);

      setUploadUrl(imageUrl);
      setStep(2);
    }
  }, [file]);
  function openDiscardModal() {
    const modal = document.getElementById("newPostModal_discard");

    modal.checked = true;
  }
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
          openDiscardModal();
        }}
      >
        <div
          className={`bg-white rounded-lg p-0 ${
            step >= 3 ? "max-w-[917px]" : "max-w-[541px] mx-20"
          }   max-h-[584px] min-w-[348px] min-h-[391px] border-hidden `}
        >
          <div className={`border-hidden`}>
            <div className="flex flex-col ">
              <Header
                isError={isError}
                step={step}
                onBack={() => {
                  if (step != 1) {
                    if (step == 2) {
                      setFile(null);
                      setUploadUrl(null);
                    }
                    setStep(step - 1);
                  }
                }}
                onNext={() => {
                  if (step == 4) {
                    setFile(null);
                    setStep(1);
                    setUploadUrl(null);
                    const modal = document.getElementById("newPostModal");
                    modal.checked = false;
                    enableBodyScroll(modalRef.current);
                    onClose();
                    return;
                  }
                  if (step != 1) {
                    setStep(step + 1);
                  }
                }}
              />
              <div className="lightGrayDivider"></div>
              <Content
                uploadUrl={uploadUrl}
                isError={isError}
                isDrag={isDrag}
                step={step}
                handleChange={handleChange}
                handleDrag={handleDrag}
                openDiscardModal={openDiscardModal}
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            openDiscardModal();
          }}
          className="fixed top-4 right-4 w-[24px] h-[24px] cursor-pointer"
        >
          <CrossSvg color="stroke-white" />
        </div>
      </div>
      <NewPostDiscardModal
        onDiscard={() => {
          setFile(null);
          setStep(1);
          setUploadUrl(null);
          enableBodyScroll(modalRef.current);
          onClose();
        }}
      />
    </>
  );
};

export default NewPostModal;
