import { useState } from "react";
import Line from "./components/seat-section/Line";
import Modal from "./components/modal-section/Modal";
import { NameArrContext } from "./contexts/NameArrContext";
import data from "./assets/data.json";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const [nameArr, setNameArr] = useState(data.users);
  const [isModalOn, setModal] = useState(false);
  const [modalData, setModalData] = useState({ col: 0, row: 0 });

  const newNameArr = [...nameArr];
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user

  let ind = 0;
  const updateDescription = (id, newDescription) => {
    // id를 기준으로 해당 사용자의 description을 업데이트
    setNameArr((prevArr) => {
      const updatedArr = prevArr.map((group) => {
        return group.map((user) => {
          if (user.id === id) {
            return { ...user, description: newDescription }; // description을 업데이트
          }
          return user;
        });
      });
      return updatedArr;
    });
  };

  const seatSection = newNameArr.map(() => <Line order={iterator[ind++]} />);

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
