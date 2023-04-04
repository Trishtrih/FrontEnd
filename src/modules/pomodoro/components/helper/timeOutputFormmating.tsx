import React from "react";
import "./timeOutputFormatting.css";
const TimeOutputFormmating = ({ hour, minute, second }) => {
  return (
    <p className={"Timer"}>
      {hour.toString().padStart(2, "0")} {" : "}{" "}
      {minute.toString().padStart(2, "0")}
      {" : "} {second.toString().padStart(2, "0")}
    </p>
  );
};

export default TimeOutputFormmating;
