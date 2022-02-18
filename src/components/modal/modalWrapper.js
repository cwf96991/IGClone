import React, { useRef } from "react";
import { CrossSvg } from "../image";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const ModalWrapper = (props) => {
  let bgColor = props.bgColor ?? "!bg-white";
  let width = props.width ?? "w-[400px]";
  let height = props.height ?? "";
  let isCross = props.isCross ?? false;
  let style = props.style??""
  const modalRef = props.modalRef?? useRef(null);

  return (
    <div className={style}>
      <div
        onClick={() => {
          const modal = document.getElementById(props.id);
          modal.checked = true;
          if (props.onClick) props.onClick();
          disableBodyScroll(modalRef.current);
        }}
        className={`cursor-pointer ${style}`}
      >
        {props.children}
      </div>

      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div
        ref={modalRef}
        id={props.id}
        className={`modal w-screen h-screen `}
        onClick={(event) => {
          
          const element = event.target;
         
          if (!element.classList.contains("modal")||element.id!=props.id) {
            return;
          }
          const modal = document.getElementById(props.id);
          
          modal.checked = false;
          enableBodyScroll(modalRef.current);
          if (props.onClose) props.onClose();
          
        }}
      >
        <div className={`${bgColor} rounded-lg p-0 ${width} ${height} border-hidden`}>
          <div className={`border-hidden`}>{props.content}</div>
        </div>
        {isCross && (
          <div
            onClick={() => {
              const modal = document.getElementById(props.id);
              modal.checked = false;
              if (props.onClose) props.onClose();
              enableBodyScroll(modalRef.current);
            }}
            className="fixed top-4 right-4 w-[24px] h-[24px] cursor-pointer"
          >
            <CrossSvg />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalWrapper;