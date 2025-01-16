import React from "react";
import Table from "./Table";
import { LINE_NUMBER } from "../../constants/lineNumber";

const Line = ({ order }) => {
  return (
    <div className="line" id={LINE_NUMBER[order]}>
      <Table direction={"leftTable"} order={order} />
      {LINE_NUMBER[order] === "fifth_line" && <div className="desk_bell"></div>}
      <Table direction={"rightTable"} order={order} />
    </div>
  );
};

export default Line;
