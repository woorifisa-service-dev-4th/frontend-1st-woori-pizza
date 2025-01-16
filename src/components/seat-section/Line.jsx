import React, { useContext, useState } from "react";
import Table from "./Table";
import { NameArrContext } from "../../contexts/NameArrContext";

const Line = ({ order }) => {
  const { nameArr, setNameArr } = useContext(NameArrContext);
  let id;

  switch (order) {
    case 1:
      id = "first_line";
      break;
    case 2:
      id = "second_line";
      break;
    case 3:
      id = "third_line";
      break;
    case 4:
      id = "fourth_line";
      break;
    case 5:
      id = "fifth_line";
      break;
    default:
      id = "";
      break;
  }

  const shuffleName = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const BellHandler = () => {
    const flattenedArray = nameArr.flat();

    const shuffledArray = shuffleName(flattenedArray);

    const updatedArr = [];
    let index = 0;
    for (let i = 0; i < nameArr.length; i++) {
      updatedArr.push(shuffledArray.slice(index, index + nameArr[i].length));
      index += nameArr[i].length;
    }

    setNameArr(updatedArr);
  }

  return (
    <div className="line" id={id}>
      <Table direction={"leftTable"} order={order} />
      {id === "fifth_line" && <div className="desk_bell" onClick={BellHandler}></div>}
      <Table direction={"rightTable"} order={order} />
    </div>
  );
};


export default Line;