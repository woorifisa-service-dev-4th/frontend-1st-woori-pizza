import { useState, useEffect } from "react";
import Line from "./components/seat-section/Line";
import Modal from "./components/modal-section/Modal";
import { UserArrContext } from "./contexts/UserArrContext";
import data from "./assets/data.json";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const initialUserArr = localStorage.getItem("userArr")
    ? JSON.parse(localStorage.getItem("userArr"))
    : data.users;

  const [userArr, setUserArr] = useState(initialUserArr);
  const [isModalOn, setModal] = useState(false);

  const newUsersArr = [...userArr];
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user

  const updateDescription = (id, newDescription) => {
    // id를 기준으로 해당 사용자의 description을 업데이트
    setUserArr((prevArr) => {
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

  useEffect(() => {
    localStorage.setItem("userArr", JSON.stringify(userArr));
  }, [userArr]);

  const seatSection = newUsersArr.map((_, ind) => <Line order={ind + 1} />);

  return (
    <ModalContext.Provider value={{ isModalOn, setModal }}>
      <UserArrContext.Provider
        value={{
          userArr,
          setUserArr,
          updateDescription,
          selectedUser,
          setSelectedUser,
        }}
      >
        {isModalOn && <Modal />}
        <div className="header">WOORI-PIZZA</div>
        <div className="body-section">
          <div className="seat-section">{seatSection}</div>
        </div>
      </UserArrContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
