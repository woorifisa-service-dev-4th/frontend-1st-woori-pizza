import React from "react";
import Seat from "./Seat";
import { useContext } from "react";
import { UserArrContext } from "@/contexts/UserArrContext";

const Table = ({ direction, order }) => {
  const { userArr, setUserArr } = useContext(UserArrContext);

  const originArr = userArr[order - 1];
  let ind = direction === "leftTable" ? 0 : originArr.length / 2;
  let len =
    direction === "leftTable"
      ? originArr.length / 2
      : userArr[order - 1].length;

  const newUsersArr = [];

  for (ind; ind < len; ind += 1) {
    newUsersArr.push(originArr[ind]);
  }

  ind = direction === "leftTable" ? 0 : originArr.length / 2;

  return (
    <div className={direction}>
      {newUsersArr.map((user) => {
        return <Seat name={user.name} />;
      })}
    </div>
  );
};

export default Table;
