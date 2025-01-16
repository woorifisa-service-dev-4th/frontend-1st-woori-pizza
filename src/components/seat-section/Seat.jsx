import React, { useContext, useState } from "react";
import imgLogo from "@/assets/images/pizza_box.png";
import { NameArrContext } from "../../contexts/NameArrContext";

const Seat = ({ name }) => {
  const context = useContext(NameArrContext);
  return (
    <>
      <div className="seat" id={name}>
        <img
          className="pizza_box"
          src={imgLogo}
          alt="closed pizza box"
          onClick={() => {
            context.setModal(true);
          }}
        />
        <div className="name_area">
          <div className="name_tag">{name}</div>
        </div>
      </div>
    </>
  );
};

export default Seat;
