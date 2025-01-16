import React, { useContext, useState, useEffect } from "react";
import { Profile } from "./Profile";
import Description from "./Description";
import { UserArrContext } from "../../contexts/UserArrContext";
import { ModalContext } from "../../contexts/ModalContext";

const Modal = () => {
  const modalContext = useContext(ModalContext);
  const userArrContext = useContext(UserArrContext);
  const { selectedUser, updateDescriptionURL } = userArrContext;

  const [description, setDescription] = useState(
    selectedUser?.description || ""
  );
  const [url, setURL] = useState(selectedUser?.url || "");

  // selectedUser가 변경되면 description과 url도 업데이트
  useEffect(() => {
    if (selectedUser) {
      setDescription(selectedUser.description || "");
      setURL(selectedUser.url || "");
    }
  }, [selectedUser]);

  const handleSave = () => {
    if (selectedUser) {
      updateDescriptionURL(selectedUser.id, description, url);
      modalContext.setModal(false); // 모달 닫기
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 ${modalContext.isModalOn ? "block" : "hidden"
        }`}
    >
      <div className="flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[450px] p-6 bg-white rounded-2xl">
        <button
          className="absolute top-2 right-2 w-[3vw] h-[3vw] rounded-full bg-red-500"
          onClick={() => modalContext.setModal(false)}
        ></button>
        <Profile />
        <Description
          text={description}
          setText={setDescription}
          url={url}
          setURL={setURL}
        />
        <button
          onClick={handleSave}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 mb-4"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default Modal;
