import React, { useState, useEffect, useRef } from "react";

const ModalWrapper = (props) => {
  let bgColor = props.bgColor ??'!bg-white'
  let width = props.width ?? 'w-[400px]'
  return (
    <div>
      <label htmlFor={props.id} className="modal-button">
        {props.children}
      </label>

      <input type="checkbox" id={props.id} className="modal-toggle" />
      <div
        className="modal"
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
        <div
          className={`modal-box ${bgColor} p-0 ${width}`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
