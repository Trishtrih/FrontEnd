import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import timerEndSound from "../../sound/TimerEndSound.mp3";
const Timer = () => {
  const [timerEnd] = useSound(timerEndSound);
  const [[activeHour, activeMinute, activeSecond], setActiveTime] = useState<
    Array<number>
  >([0, 0, 10]);
  const [[tempHour, tempMinute, tempSecond], setTempTime] = useState<
    Array<number>
  >([0, 0, 0]);
  const [[saveJobHour, saveJobMinute, saveJobSecond], setSaveJobTime] =
    useState<Array<number>>([0, 0, 10]);
  const [[saveRelaxHour, saveRelaxMinute, saveRelaxSecond], setSaveRelaxTime] =
    useState<Array<number>>([0, 0, 5]);
  const inputHourRef = useRef<HTMLInputElement>(null);
  const inputMinuteRef = useRef<HTMLInputElement>(null);
  const inputSecondRef = useRef<HTMLInputElement>(null);

  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [jobOrRelax, setJobOrRelax] = useState<boolean>(true);

  useEffect(() => {
    if (timerActive) {
      const startId = setInterval(() => tick(), 1000);
      return () => clearInterval(startId);
    }
  }, [timerActive, [activeHour, activeMinute, activeSecond]]);

  const tick = () => {
    if (!timerActive) {
      return;
    }
    if (activeHour === 0 && activeMinute === 0 && activeSecond === 0) {
      if (jobOrRelax) {
        setActiveTime([saveRelaxHour, saveRelaxMinute, saveRelaxSecond]);

        timerEnd();
      } else {
        setActiveTime([saveJobHour, saveJobMinute, saveJobSecond]);

        timerEnd();
      }
      setJobOrRelax(!jobOrRelax);
    } else if (activeMinute === 0 && activeSecond === 0) {
      setActiveTime([activeHour - 1, 59, 59]);
    } else if (activeSecond === 0) {
      setActiveTime([activeHour, activeMinute - 1, 59]);
    } else {
      setActiveTime([activeHour, activeMinute, activeSecond - 1]);
    }
  };

  const hourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempTime([
      Math.abs(Number(event.target.value)) < 60
        ? Math.abs(Number(event.target.value))
        : 59,
      tempMinute,
      tempSecond,
    ]);
  };

  const minuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempTime([
      tempHour,
      Math.abs(Number(event.target.value)) < 60
        ? Math.abs(Number(event.target.value))
        : 59,
      tempSecond,
    ]);
  };

  const secondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempTime([
      tempHour,
      tempMinute,
      Math.abs(Number(event.target.value)) < 60
        ? Math.abs(Number(event.target.value))
        : 59,
    ]);
  };

  const setTimer = (phaseWhileButtonPress: boolean) => {
    if (jobOrRelax == phaseWhileButtonPress) {
      setActiveTime([tempHour, tempMinute, tempSecond]);
    }

    phaseWhileButtonPress
      ? setSaveJobTime([tempHour, tempMinute, tempSecond])
      : setSaveRelaxTime([tempHour, tempMinute, tempSecond]);

    setTempTime([0, 0, 0]);
    if (
      inputHourRef.current != null &&
      inputMinuteRef.current != null &&
      inputSecondRef.current != null
    ) {
      inputHourRef.current.value = "";
      inputMinuteRef.current.value = "";
      inputSecondRef.current.value = "";
    }
  };

  const handleClick = () => {
    if (
      JSON.stringify([saveJobHour, saveJobMinute, saveJobSecond]) !=
        JSON.stringify([0, 0, 0]) &&
      JSON.stringify([saveRelaxHour, saveRelaxMinute, saveRelaxSecond]) !=
        JSON.stringify([0, 0, 0])
    ) {
      setTimerActive(!timerActive);
    }
  };

  const reset = () => {
    setTimerActive(false);
    setActiveTime([0, 0, 0]);
    setSaveJobTime([0, 0, 0]);
    setSaveRelaxTime([0, 0, 0]);
  };

  return (
    <div>
      <div className="Timers">
        <p className={"CurrentStatus"}>
          {jobOrRelax ? "Job Time !" : "Relax Time !"}
        </p>
        <p className="Timer">
          {activeHour.toString().padStart(2, "0")} :{" "}
          {activeMinute.toString().padStart(2, "0")} :{" "}
          {activeSecond.toString().padStart(2, "0")}
        </p>
        <p className={"CurrentStatus"}>
          {jobOrRelax ? "Relax Time !" : "Job Time !"}
        </p>
        <p className="Timer">
          {jobOrRelax
            ? `${saveRelaxHour.toString().padStart(2, "0")} : 
          ${saveRelaxMinute.toString().padStart(2, "0")} : 
          ${saveRelaxSecond.toString().padStart(2, "0")}`
            : `${saveJobHour.toString().padStart(2, "0")} : 
          ${saveJobMinute.toString().padStart(2, "0")} : 
          ${saveJobSecond.toString().padStart(2, "0")}`}
        </p>
      </div>

      <div>
        <div className="Inputs">
          <input
            type={"number"}
            min={0}
            max={59}
            ref={inputHourRef}
            className="Input"
            onChange={hourChange}
          />
          <input
            type={"number"}
            min={0}
            max={59}
            ref={inputMinuteRef}
            className="Input"
            onChange={minuteChange}
          />
          <input
            type={"number"}
            min={0}
            max={59}
            ref={inputSecondRef}
            className="Input"
            onChange={secondChange}
          />
        </div>

        <div className="Buttons">
          <button className="Button" onClick={() => setTimer(true)}>
            {" "}
            Set Job Time
          </button>
          <button className="Button" onClick={() => setTimer(false)}>
            {" "}
            Set Relax Time
          </button>
          <button className="Button" onClick={handleClick}>
            {timerActive ? "Stop" : "Start"}
          </button>
          <button className="Button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Timer;
