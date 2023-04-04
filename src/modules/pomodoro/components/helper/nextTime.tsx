import React from "react";
import TimeOutputFormmating from "./timeOutputFormmating";

const NextTime = ({
  jobOrRelax,
  saveRelaxHour,
  saveRelaxMinute,
  saveRelaxSecond,
  saveJobHour,
  saveJobMinute,
  saveJobSecond,
}) => {
  return jobOrRelax ? (
    <TimeOutputFormmating
      hour={saveRelaxHour}
      minute={saveRelaxMinute}
      second={saveRelaxSecond}
    />
  ) : (
    <TimeOutputFormmating
      hour={saveJobHour}
      minute={saveJobMinute}
      second={saveJobSecond}
    />
  );
};

export default NextTime;
