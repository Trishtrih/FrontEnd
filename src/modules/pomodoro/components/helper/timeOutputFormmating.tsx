import React from "react";
import "./timeOutputFormatting.css";
const TimeOutputFormating = ({
  hour,
  minute,
  second,
}: {
  hour: number;
  minute: number;
  second: number;
}) => {
  return (
    <p className={"Timer"}>
      {hour.toString().padStart(2, "0")} {" : "}{" "}
      {minute.toString().padStart(2, "0")}
      {" : "} {second.toString().padStart(2, "0")}
    </p>
  );
};

export default TimeOutputFormating;
