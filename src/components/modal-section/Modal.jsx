import React, { useContext } from "react";
import { Profile } from "./Profile";
import { NameArrContext } from "../../contexts/NameArrContext";
import { ModalContext } from "../../contexts/ModalContext";

const Modal = () => {
  const context = useContext(NameArrContext);
  const modalContext = useContext(ModalContext);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          context.modal ? "block" : "hidden"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] p-6 bg-white rounded-2xl">
          <button
            className="absolute top-2 right-2 w-[1.5vw] h-[1.5vw] rounded-full bg-red-500"
            onClick={() => context.setModal(false)}
          ></button>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Modal;
