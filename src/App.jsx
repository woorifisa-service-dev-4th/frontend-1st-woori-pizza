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

  const seatSection = newNameArr.map((_, ind) => <Line order={ind + 1} />);

  return (
    <ModalContext.Provider
      value={{ isModalOn, modalData, setModal, setModalData }}
    >
      <NameArrContext.Provider value={{ nameArr, setNameArr }}>
        {isModalOn && <Modal />}
        <div className="header">WOORI-PIZZA</div>
        <div className="body-section">
          <div className="seat-section">{seatSection}</div>
        </div>
      </NameArrContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
