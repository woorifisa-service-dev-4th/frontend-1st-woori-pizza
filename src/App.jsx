import { useState, useEffect } from "react";
import Line from "./components/seat-section/Line";
import Modal from "./components/modal-section/Modal";
import { NameArrContext } from "./contexts/NameArrContext";
import data from "./assets/data.json";

function App() {
  const iterator = [1, 2, 3, 4, 5];

  // 로컬 스토리지에서 nameArr를 불러옴, 없으면 초기 data.users 사용
  const initialNameArr = localStorage.getItem("nameArr")
    ? JSON.parse(localStorage.getItem("nameArr"))
    : data.users;

  const [nameArr, setNameArr] = useState(initialNameArr);
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자 저장

  let ind = 0;

  // 사용자의 description을 업데이트하는 함수
  const updateDescription = (id, newDescription) => {
    setNameArr((prevArr) => {
      const updatedArr = prevArr.map((group) => {
        return group.map((user) => {
          if (user.id === id) {
            return { ...user, description: newDescription }; // description 업데이트
          }
          return user;
        });
      });
      return updatedArr;
    });
  };

  // nameArr가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("nameArr", JSON.stringify(nameArr));
  }, [nameArr]);

  const seatSection = nameArr.map(() => <Line order={iterator[ind++]} />);

  return (
    <NameArrContext.Provider
      value={{
        nameArr,
        setNameArr,
        modal,
        setModal,
        updateDescription,
        selectedUser,
        setSelectedUser,
      }}
    >
      {modal && <Modal />}
      <div className="header">WOORI-PIZZA</div>
      <div className="body-section">
        <div className="seat-section">{seatSection}</div>
      </div>
    </NameArrContext.Provider>
  );
}

export default App;
