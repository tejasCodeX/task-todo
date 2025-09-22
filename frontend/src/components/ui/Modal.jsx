import React from "react";

const isOpen = true;
const Modal = ({ isOpen, children }) => {
  return isOpen ? (
    <div>
      <div className="overlay-style"></div>
      <div className="modal-style">{children}</div>
    </div>
  ) : null;
};

export default Modal;
