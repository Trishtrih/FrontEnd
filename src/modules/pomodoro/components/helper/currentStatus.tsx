import React from "react";

import "./currentStatus.css";
const CurrentStatus = ({ jobOrRelax }: { jobOrRelax: boolean }) => {
  return (
    <p className={"CurrentStatus"}>
      {jobOrRelax ? "Job Time !" : "Relax Time !"}
    </p>
  );
};

export default CurrentStatus;
