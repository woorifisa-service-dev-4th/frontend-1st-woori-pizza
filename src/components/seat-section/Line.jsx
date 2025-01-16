import React, { useContext, useState } from "react";
import Table from "./Table";
import { LINE_NUMBER } from "../../constants/lineNumber";
import { UserArrContext } from "../../contexts/UserArrContext";

const Line = ({ order }) => {
  const { userArr, setUserArr } = useContext(UserArrContext);

  const shuffleName = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const BellHandler = () => {
    const flattenedArray = userArr.flat();

    const shuffledArray = shuffleName(flattenedArray);

    const updatedArr = [];
    let index = 0;
    for (let i = 0; i < userArr.length; i++) {
      updatedArr.push(shuffledArray.slice(index, index + userArr[i].length));
      index += userArr[i].length;
    }

    setUserArr(updatedArr);
  };

  return (
    <div className="line" id={LINE_NUMBER[order]}>
      <Table direction={"leftTable"} order={order} />
      {LINE_NUMBER[order] === "fifth_line" && (
        <div className="desk_bell" onClick={BellHandler}></div>
      )}
      <Table direction={"rightTable"} order={order} />
    </div>
  );
};

export default Line;
