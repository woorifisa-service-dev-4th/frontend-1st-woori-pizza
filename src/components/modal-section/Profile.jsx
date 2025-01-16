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

  const images = ["PEPPERONI", "BACON", "CHEESE", "TOMATO"];
  const ind = images.indexOf(index.img);

  return (
    <div className="flex items-center">
      <button
        className="pr-[1vw]"
        onClick={() => {
          const newArr = [...nameArrContext.nameArr];
          newArr[modalContext.modalData.col][modalContext.modalData.row].img =
            images[ind === 0 ? 3 : (ind - 1) % 4];
          nameArrContext.setNameArr(newArr);
        }}
      >
        {" "}
        &lt;{" "}
      </button>
      <img
        className="w-auto h-[5vh]"
        src={PROF_IMAGE_SRC[index.img].src}
        alt={PROF_IMAGE_SRC[index.img].alt}
        onClick={() => {}}
      />
      <button
        className="pl-[1vw] pr-[3.5vw]"
        onClick={() => {
          const newArr = [...nameArrContext.nameArr];
          newArr[modalContext.modalData.col][modalContext.modalData.row].img =
            images[(ind + 1) % 4];
          nameArrContext.setNameArr(newArr);
        }}
      >
        {" "}
        &gt;{" "}
      </button>
      <div className="mb-0 text-3xl font-bold text-black">{index.name}</div>
      <Description />
    </div>
  );
};
