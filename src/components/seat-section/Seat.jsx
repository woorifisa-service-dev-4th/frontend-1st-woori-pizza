import React, { useContext, useState } from "react";
import imgLogo from "@/assets/images/pizza_box.png";
import { NameArrContext } from "../../contexts/NameArrContext";
import { ModalContext } from "../../contexts/ModalContext";

const Seat = ({ col, row }) => {
  const context = useContext(NameArrContext);
  const modalContext = useContext(ModalContext);
  const index = context.nameArr[col][row];

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
      <div
        className={`flex-col items-center mt-[1vh] ml-[1vw] mr-[1vw] ${
          index.name === "빈자리" && "opacity-0"
        }`}
      >
        <img
          className="pizza_box"
          src={imgLogo}
          alt="closed pizza box"
          onClick={() => {
            handleSeatClick;
            if (index.name !== "빈자리") {
              modalContext.setModal(true);
              modalContext.setModalData({ col, row });
            }
          }}
        />
        <div className="flex items-center justify-center w-full height-full m-0 pt-[1vh]">
          <div className="flex items-center justify-center pl-[10%] pr-[10%] pt-[1%] pb-[1%] bg-white border-2 border-black border-solid text-[2.5vh] font-woorifont">
            {index.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default Seat;
