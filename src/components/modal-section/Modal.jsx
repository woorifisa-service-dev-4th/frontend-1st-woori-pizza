import React, { useContext } from "react";
import { Profile } from "./Profile";
import { NameArrContext } from "../../contexts/NameArrContext";
import { ModalContext } from "../../contexts/ModalContext";

const Modal = () => {
  const context = useContext(NameArrContext);
  const modalContext = useContext(ModalContext);
  return (
    <>
      <div className="modal on">
        <div className="modal_popup">
          <button
            className="close_btn"
            id="circle"
            onClick={() => modalContext.setModal(false)}
          ></button>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Modal;
