import React from "react";
import { useState, useContext } from "react";
import UserArrContext from "../../contexts/UserArrContext";

const UserEdit = () => {
  const userArrContext = useContext(UserArrContext);
  const nameArr = userArrContext.userArr
    .flat()
    .map((user) => user.name)
    .filter((name) => name !== "빈자리");
  const nameString = nameArr.toString();
  const [users, setUsers] = useState(nameString);

  const onChange = (e) => {
    setUsers(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-2.5 w-[93%] h-[65%] max-w-[300px] mx-auto pt-[5%]">
        <div className="text-l flex justify-center">
          {" "}
          공백없이 ,로 구분해서 입력하기{" "}
        </div>
        <textarea
          className="h-full w-full p-2 bg-gray-200 text-gray-900 border-2 border-black rounded-lg outline-none shadow-none"
          id="user_edit"
          onChange={onChange}
          value={users}
          placeholder=""
        />
      </div>

      <button
        onClick={() => {
          const newNameArr = users.split(",");

          for (let index = newNameArr.length; index < 36; index++) {
            newNameArr.push("빈자리");
          }

          const newUserArr = newNameArr.map((name, index) => ({
            id: index + 1,
            name,
            img: "PEPPERONI",
            description: "",
          }));

          const groupSizes = [8, 8, 8, 8, 4];
          const twoDimension = [];
          let startIndex = 0;

          for (const size of groupSizes) {
            const group = newUserArr.slice(startIndex, startIndex + size); // 부분 배열 생성
            twoDimension.push(group); // 결과 배열에 추가
            startIndex += size; // 다음 그룹의 시작 인덱스로 이동
          }

          userArrContext.setUserArr(twoDimension);
        }}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4 mb-4"
      >
        명단 변경
      </button>
    </>
  );
};

export default UserEdit;
