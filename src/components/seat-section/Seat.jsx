import React, { useContext, useState } from "react";
import imgLogo from "@/assets/images/pizza_box.png";
import { NameArrContext } from "../../contexts/NameArrContext";

const Seat = ({ name }) => {
  const context = useContext(NameArrContext);

  const handleSeatClick = () => {
    const selectedUser = context.nameArr
      .flat() // 2D 배열을 1D 배열로 변환
      .find((user) => user.name === name); // 클릭된 name에 해당하는 유저 찾기
    if (selectedUser) {
      context.setSelectedUser(selectedUser); // selectedUser 설정
      context.setModal(true); // 모달 열기
    }
  };
  return (
    <>
      <div className="seat" id={name}>
        <img
          className="pizza_box"
          src={imgLogo}
          alt="closed pizza box"
          onClick={handleSeatClick}
        />
        <div className="name_area">
          <div className="name_tag">{name}</div>
        </div>
      </div>
    </>
  );
};

export default Seat;
