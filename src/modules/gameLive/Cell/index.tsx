import React from "react";
import "../Cell/style.css";

const Cell = ({ filled }) => {
  const className = `cell ${filled ? "cell-filled" : ""}`;
  return <div className={className} />;
};

export default Cell;
