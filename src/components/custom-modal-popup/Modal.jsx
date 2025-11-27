import React from "react";
import style from "./modal.module.css";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className={style.modal}>
      <div className={style["modal-content"]}>
        <div className={style.header}>
          <span className={style["close-modal-icon"]} onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Default Header"}</h2>
        </div>
        <div className={style.body}>{body ? body : "Default Body"}</div>
        <div className={style.footer}>{footer ? footer : "Default Footer"}</div>
      </div>
    </div>
  );
};

export default Modal;
