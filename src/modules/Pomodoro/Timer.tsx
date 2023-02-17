import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import timerEndSound from "../../sound/TimerEndSound.mp3";
const Timer = () => {
  const [timerEnd] = useSound(timerEndSound);
  const [[activeHour, activeMinute, activeSecond], setActiveTime] = useState([
    0, 0, 10,
  ]);
  const [[nextHour, nextMinute, nextSecond], setNextTime] = useState([0, 0, 5]);
  const [[tempHour, tempMinute, tempSecond], setTempTime] = useState([0, 0, 0]);
  const [[saveJobHour, saveJobMinute, saveJobSecond], setSaveJobTime] =
    useState([0, 0, 10]);
  const [[saveRelaxHour, saveRelaxMinute, saveRelaxSecond], setSaveRelaxTime] =
    useState([0, 0, 5]);
  const inputHourRef = useRef();
  const inputMinuteRef = useRef();
  const inputSecondRef = useRef();

  const [timerActive, setTimerActive] = useState(false);
  const [jobOrRelax, setJobOrRelax] = useState(true);

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
        setNextTime([saveJobHour, saveJobMinute, saveJobSecond]);
        timerEnd();
      } else {
        setActiveTime([saveJobHour, saveJobMinute, saveJobSecond]);
        setNextTime([saveRelaxHour, saveRelaxMinute, saveRelaxSecond]);
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

  const hourChange = (event: any) => {
    setTempTime([
      Math.abs(event.target.value) < 60 ? Math.abs(event.target.value) : 59,
      tempMinute,
      tempSecond,
    ]);
  };

  const minuteChange = (event: any) => {
    setTempTime([
      tempHour,
      Math.abs(event.target.value) < 60 ? Math.abs(event.target.value) : 59,
      tempSecond,
    ]);
  };

  const secondChange = (event: any) => {
    setTempTime([
      tempHour,
      tempMinute,
      Math.abs(event.target.value) < 60 ? Math.abs(event.target.value) : 59,
    ]);
  };

  const setActiveTimer = () => {
    setActiveTime([tempHour, tempMinute, tempSecond]);
    setSaveJobTime([tempHour, tempMinute, tempSecond]);
    setTempTime([0, 0, 0]);
    inputHourRef.current.value = "";
    inputMinuteRef.current.value = "";
    inputSecondRef.current.value = "";
  };

  const setRelaxTimer = () => {
    setNextTime([tempHour, tempMinute, tempSecond]);
    setSaveRelaxTime([tempHour, tempMinute, tempSecond]);
    setTempTime([0, 0, 0]);
    inputHourRef.current.value = "";
    inputMinuteRef.current.value = "";
    inputSecondRef.current.value = "";
  };

  const handleClick = () => {
    setTimerActive(!timerActive);
  };

  const reset = () => {
    setActiveTime([0, 0, 0]);
    setSaveJobTime([0, 0, 0]);
    setNextTime([0, 0, 0]);
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
          {nextHour.toString().padStart(2, "0")} :{" "}
          {nextMinute.toString().padStart(2, "0")} :{" "}
          {nextSecond.toString().padStart(2, "0")}
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
          <button className="Button" onClick={setActiveTimer}>
            {" "}
            Set Job Time
          </button>
          <button className="Button" onClick={setRelaxTimer}>
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
