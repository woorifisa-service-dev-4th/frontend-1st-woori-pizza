import React from "react";
import Table from "./Table";

const Line = ({ order }) => {
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
  return (
    <div className="line" id={id}>
      <Table direction={"leftTable"} order={order} />
      {id === "fifth_line" && <div className="desk_bell"></div>}
      <Table direction={"rightTable"} order={order} />
    </div>
  );
};

export default Line;
