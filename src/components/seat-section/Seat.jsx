import React, { useContext, useState } from "react";
import imgLogo from "@/assets/images/pizza_box.png";
import { NameArrContext } from "../../contexts/NameArrContext";
import { ModalContext } from "../../contexts/ModalContext";

const Seat = ({ col, row }) => {
  console.log(`col: ${col}`);
  console.log(`row: ${row}`);

  const context = useContext(NameArrContext);
  const modalContext = useContext(ModalContext);
  const index = context.nameArr[col][row];

  return (
    <>
      <div className="seat">
        <img
          className="pizza_box"
          src={imgLogo}
          alt="closed pizza box"
          onClick={() => {
            modalContext.setModal(true);
            modalContext.setModalData({ col, row });
          }}
        />
        <div className="name_area">
          <div className="name_tag">{index.name}</div>
        </div>
      </div>
    </>
  );
};

export default Seat;
