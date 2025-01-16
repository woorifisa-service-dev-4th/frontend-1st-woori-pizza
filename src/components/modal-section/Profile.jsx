import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { NameArrContext } from "../../contexts/NameArrContext";
import PROF_IMAGE_SRC from "../../constants/profileImgSrc";

export const Profile = () => {
  const modalContext = useContext(ModalContext);
  const nameArrContext = useContext(NameArrContext);

  return (
    <div className="flex items-center">
      <img
        className="w-auto h-[5vh] pr-[3.5vw]"
        src={PROF_IMAGE_SRC["PEPPERONI"].src} // TODO: 사용자 데이터로 변경
        alt={PROF_IMAGE_SRC["PEPPERONI"].alt} // TODO: 사용자 데이터로 변경
        onClick={() => {}}
      />
      <div className="mb-0 text-3xl font-bold text-black">
        {
          nameArrContext.nameArr[modalContext.modalData.col][
            modalContext.modalData.row
          ]
        }
      </div>
    </div>
  );
};
