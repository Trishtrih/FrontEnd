import React from "react";
import PropTypes from "prop-types";
import "./currentStatus.css";
const CurrentStatus = ({ jobOrRelax }) => {
  return (
    <p className={"CurrentStatus"}>
      {jobOrRelax ? "Job Time !" : "Relax Time !"}
    </p>
  );
};

export default CurrentStatus;
