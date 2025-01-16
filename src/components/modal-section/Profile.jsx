import { useContext } from "react";
import { UserArrContext } from "../../contexts/UserArrContext";
import PROF_IMAGE_SRC from "../../constants/profileImgSrc";

export const Profile = () => {
  const userArrContext = useContext(UserArrContext);
  const selectedUser = userArrContext.selectedUser;
  const images = ["PEPPERONI", "BACON", "CHEESE", "TOMATO"];
  const ind = images.indexOf(selectedUser.img);

  return (
    <div className="flex items-center">
      <button
        className="pr-[1vw]"
        onClick={() => {
          const newArr = [...userArrContext.userArr];
          const selected = newArr
            .flat()
            .find((user) => user.id === selectedUser.id);

          const flattedNewArr = newArr.flat();

          flattedNewArr[flattedNewArr.indexOf(selected)].img =
            images[ind === 0 ? 3 : (ind - 1) % 4];

          userArrContext.setUserArr(newArr);
        }}
      >
        {" "}
        &lt;{" "}
      </button>
      <img
        className="w-auto h-[5vh]"
        src={PROF_IMAGE_SRC[selectedUser.img].src}
        alt={PROF_IMAGE_SRC[selectedUser.img].alt}
        onClick={() => { }}
      />
      <button
        className="pl-[1vw] pr-[1vw]"
        onClick={() => {
          const newArr = [...userArrContext.userArr];
          const selected = newArr
            .flat()
            .find((user) => user.id === selectedUser.id);

          const flattedNewArr = newArr.flat();

          flattedNewArr[flattedNewArr.indexOf(selected)].img =
            images[(ind + 1) % 4];

          userArrContext.setUserArr(newArr);
        }}
      >
        {" "}
        &gt;{" "}
      </button>
      <div className="mb-0 text-3xl font-bold text-black">
        {selectedUser.name}
      </div>
    </div>
  );

};

export default Profile;
