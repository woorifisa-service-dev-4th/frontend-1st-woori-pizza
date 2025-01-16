import React, { useContext } from "react";
import { Profile } from "./Profile";
import { NameArrContext } from "../../contexts/NameArrContext";

const Modal = () => {
  const context = useContext(NameArrContext);
  return (
    <>
      <div className="modal on">
        <div className="modal_popup">
          <button
            className="close_btn"
            id="circle"
            onClick={() => context.setModal(false)}
          ></button>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Modal;
