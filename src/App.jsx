import { useState } from "react";
import Line from "./components/seat-section/Line";
import Modal from "./components/modal-section/Modal";
import { NameArrContext } from "./contexts/NameArrContext";
import { ModalContext } from "./contexts/ModalContext";

let initialNameArr = [
  [
    "구본훈",
    "김승호",
    "김소민",
    "김성준",
    "윤영찬",
    "김새봄",
    "권지윤",
    "권민지",
  ],
  [
    "서용준",
    "배승혁",
    "박찬진",
    "마서영",
    "노영재",
    "남승현",
    "김지연",
    "이정민",
  ],
  [
    "이서연",
    "윤태경",
    "윤예진",
    "윤선영",
    "유승한",
    "여은동",
    "신희원",
    "서채연",
  ],
  [
    "조현식",
    "조윤주",
    "임지섭",
    "이현경",
    "이한비",
    "이원빈",
    "이승준",
    "이소연",
  ],
  ["황혜영", "황유환", "허연규", "차승훈"],
];

let descriptionArr = [];

function App() {
  const iterator = [1, 2, 3, 4, 5];
  const [nameArr, setNameArr] = useState(initialNameArr);
  const [modal, setModal] = useState(true);
  const newNameArr = [...nameArr];
  const [modalData, setModalData] = useState({
    // TODO: 동적으로 행열 설정해주기
    col: 0,
    row: 0,
  });
  // const [isModalOn, setModal] = useState(false);
  let ind = 0;

  const seatSection = newNameArr.map(() => <Line order={iterator[ind++]} />);

  return (
    <ModalContext.Provider value={{ modalData, setModal, modal }}>
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
