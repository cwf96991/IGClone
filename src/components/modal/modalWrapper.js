import React, { useState, useEffect, useRef } from "react";
import { CrossSvg } from "../image";
const ModalWrapper = (props) => {
  let bgColor = props.bgColor ?? "!bg-white";
  let width = props.width ?? "w-[400px]";
  let height = props.height ?? "";
  return (
    <div>
      <label htmlFor={props.id} className="modal-button">
        {props.children}
      </label>

      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div
        className="modal w-screen h-screen p-0 m-0"
        onClick={(event) => {
          const element = event.target;
          if (!element.classList.contains("modal")) {
            return;
          }
          const modal = document.getElementById(props.id);
          modal.checked = false;
          if (props.onClose) props.onClose();
        }}
      >
        <div className={`${bgColor} rounded-lg p-0 ${width} ${height}`}>
          <div className={``}>{props.content}</div>
        </div>
        <div
          onClick={() => {
            const modal = document.getElementById(props.id);
            modal.checked = false;
            if (props.onClose) props.onClose();
          }}
          className="fixed top-4 right-4 w-[24px] h-[24px] cursor-pointer"
        >
          <CrossSvg />
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
