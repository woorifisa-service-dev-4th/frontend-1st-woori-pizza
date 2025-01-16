import React from "react";
import Seat from "./Seat";
import { useContext } from "react";
import { NameArrContext } from "@/contexts/NameArrContext";

const Table = ({ direction, order }) => {
  const { nameArr, setNameArr } = useContext(NameArrContext);

  const originArr = nameArr[order - 1];
  let ind = direction === "leftTable" ? 0 : originArr.length / 2;
  let len =
    direction === "leftTable"
      ? originArr.length / 2
      : nameArr[order - 1].length;

  const names = [];

  for (ind; ind < len; ind += 1) {
    names.push(originArr[ind]);
  }

  return (
    <div className={direction}>
      {names.map((name) => {
        return <Seat name={name.name} />;
      })}
    </div>
  );
};

export default Table;
