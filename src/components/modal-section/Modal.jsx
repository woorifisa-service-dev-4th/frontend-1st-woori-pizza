import React from "react";
import { Profile } from "./Profile";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal_popup">
        <button className="close_btn" id="circle"></button>
        <Profile />
      </div>
    </div>
  );
};

export default Modal;
