import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { NameArrContext } from "../../contexts/NameArrContext";
import PROF_IMAGE_SRC from "../../constants/profileImgSrc";
import { Description } from "./Description";

export const Profile = () => {
  const modalContext = useContext(ModalContext);
  const nameArrContext = useContext(NameArrContext);
  const index =
    nameArrContext.nameArr[modalContext.modalData.col][
      modalContext.modalData.row
    ];

  return (
    <div className="flex items-center">
      <img
        className="w-auto h-[5vh] pr-[3.5vw]"
        src={PROF_IMAGE_SRC[index.img].src}
        alt={PROF_IMAGE_SRC[index.img].alt}
        onClick={() => {
          // TODO: 이미지 변경 로직
        }}
      />
      <div className="mb-0 text-3xl font-bold text-black">{index.name}</div>
      <Description />
    </div>
  );
};
