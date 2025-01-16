import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { NameArrContext } from "../../contexts/NameArrContext";
import PROF_IMAGE_SRC from "../../constants/profileImgSrc";

export const Profile = () => {
  const modalContext = useContext(ModalContext);
  const nameArrContext = useContext(NameArrContext);

  return (
    <div className="flex">
      <img
        className=""
        src={PROF_IMAGE_SRC["PEPPERONI"].src} // TODO: 사용자 데이터로 변경
        alt={PROF_IMAGE_SRC["PEPPERONI"].alt} // TODO: 사용자 데이터로 변경
      />
      <div>
        {
          nameArrContext.nameArr[modalContext.modalData.col][
            modalContext.modalData.row
          ]
        }
      </div>
    </div>
  );
};
