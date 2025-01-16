import { useState } from "react";
import Line from "./components/seat-section/Line";
import Modal from "./components/modal-section/Modal";
import { NameArrContext } from "./contexts/NameArrContext";
import data from "./assets/data.json";
import { ModalContext } from "./contexts/ModalContext";

function App() {
  const iterator = [1, 2, 3, 4, 5];
  const [nameArr, setNameArr] = useState(data.users);
  const [modal, setModal] = useState(false);
  const newNameArr = [...nameArr];
  const [modalData, setModalData] = useState({
    col: 0,
    row: 0,
  });
  // const [isModalOn, setModal] = useState(false);
  let ind = 0;

  const seatSection = newNameArr.map(() => <Line order={iterator[ind++]} />);

  return (
    <ModalContext.Provider value={{ modalData, setModal, modal, setModalData }}>
      <NameArrContext.Provider value={{ nameArr, setNameArr }}>
        {modal && <Modal />}
        <div className="header">WOORI-PIZZA</div>
        <div className="body-section">
          <div className="seat-section">{seatSection}</div>
        </div>
      </NameArrContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
