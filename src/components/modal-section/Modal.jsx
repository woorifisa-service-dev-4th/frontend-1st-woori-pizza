import React, { useContext, useState, useEffect } from "react";
import { NameArrContext } from "../../contexts/NameArrContext";
import Description from "./Description";

const Modal = () => {
  const context = useContext(NameArrContext);
  const { selectedUser, updateDescription } = context;

  const [description, setDescription] = useState(
    selectedUser?.description || ""
  ); // description 상태

  // selectedUser가 변경되면 description도 업데이트
  useEffect(() => {
    if (selectedUser) {
      setDescription(selectedUser.description);
    }
  }, [selectedUser]);

  const handleSave = () => {
    if (selectedUser) {
      updateDescription(selectedUser.id, description);
      // description을 업데이트
      context.setModal(false); // 모달 닫기
    }
  };

  return (
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
        <Description text={description} setText={setDescription} />
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
