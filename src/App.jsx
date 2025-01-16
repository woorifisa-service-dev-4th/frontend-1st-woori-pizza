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
  const [modalData, setModal] = useState({ isModalOn: false, modalType: null });

  const newUsersArr = [...userArr];
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user

  const updateDescriptionURL = (id, newDescription, newURL) => {
    // id를 기준으로 해당 사용자의 description을 업데이트
    setUserArr((prevArr) => {
      const updatedArr = prevArr.map((group) => {
        return group.map((user) => {
          if (user.id === id) {
            return { ...user, description: newDescription, url: newURL }; // description, url 업데이트
          }
          return user;
        });
      });
      return updatedArr;
    });
  };

  useEffect(() => {
    console.log(`useEffect: ${userArr}`);
    localStorage.setItem("userArr", JSON.stringify(userArr));
  }, [userArr]);

  const seatSection = newUsersArr.map((_, ind) => <Line order={ind + 1} />);

  return (
    <ModalContext.Provider value={{ modalData, setModal }}>
      <UserArrContext.Provider
        value={{
          userArr,
          setUserArr,
          updateDescriptionURL,
          selectedUser,
          setSelectedUser,
        }}
      >
        {modalData.isModalOn && <Modal />}
        <div className="flex justify-between w-full h-[10vh] text-[10vh] font-woorifont pb-[15vh] pl-[2.5vw] pr-[2.5vw]">
          {}
          <button disabled className="opacity-0">
            &#128203;
          </button>
          WOORI-PIZZA{" "}
          <button
            onClick={() => {
              setModal({ isModalOn: true, modalType: "EDIT" });
            }}
          >
            &#128203;
          </button>
        </div>
        <div className="body-section">
          <div className="seat-section">{seatSection}</div>
        </div>
      </UserArrContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
