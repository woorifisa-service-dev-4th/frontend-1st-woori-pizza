import React, { useContext, useState } from "react";
import imgLogo from "@/assets/images/pizza_box.png";
import { UserArrContext } from "../../contexts/UserArrContext";
import { ModalContext } from "../../contexts/ModalContext";

const Seat = ({ name }) => {
  const userArrContext = useContext(UserArrContext);
  const modalContext = useContext(ModalContext);

  const handleSeatClick = () => {
    const selectedUser = userArrContext.userArr
      .flat() // 2D 배열을 1D 배열로 변환
      .find((user) => user.name === name); // 클릭된 name에 해당하는 유저 찾기
    if (selectedUser) {
      userArrContext.setSelectedUser(selectedUser); // selectedUser 설정
      modalContext.setModal({ isModalOn: true, modalType: "PROFILE" }); // 모달 열기
    }
  };

  return (
    <>
      <div
        className={`flex-col items-center mt-[1vh] ml-[1vw] mr-[1vw] ${
          name === "빈자리" && "opacity-0"
        }`}
      >
        <img
          className="pizza_box"
          src={imgLogo}
          alt="closed pizza box"
          onClick={() => {
            if (name !== "빈자리") {
              handleSeatClick();
              modalContext.setModal({ isModalOn: true, modalType: "PROFILE" });
            }
          }}
        />
        <div className="flex items-center justify-center w-full height-full m-0 pt-[1vh]">
          <div className="flex items-center justify-center pl-[10%] pr-[10%] pt-[1%] pb-[1%] bg-white border-2 border-black border-solid text-[2.5vh] font-woorifont">
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default Seat;
