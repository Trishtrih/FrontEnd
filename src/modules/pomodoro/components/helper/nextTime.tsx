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
}: {
  jobOrRelax: boolean;
  saveRelaxHour: number;
  saveRelaxMinute: number;
  saveRelaxSecond: number;
  saveJobHour: number;
  saveJobMinute: number;
  saveJobSecond: number;
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
