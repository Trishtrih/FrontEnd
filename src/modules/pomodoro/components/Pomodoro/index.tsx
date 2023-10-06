import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import "./style.css";
import timerEndSound from "../../../../sound/TimerEndSound.mp3";
import TimeOutputFormatting from "../helper/timeOutputFormmating";
import InputTime from "../helper/inputTime";
import CurrentStatus from "../helper/currentStatus";
import NextTime from "../helper/nextTime";

const Pomodoro = () => {
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

  const handleHourChange = (inputHour: number) => {
    setTempTime([inputHour, tempMinute, tempSecond]);
  };

  const handleMinuteChange = (inputMinute: number) => {
    setTempTime([tempHour, inputMinute, tempSecond]);
  };

  const handleSecondChange = (inputSecond: number) => {
    setTempTime([tempHour, tempMinute, inputSecond]);
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
      inputHourRef.current &&
      inputMinuteRef.current &&
      inputSecondRef.current
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
    <div className={"PomodoroApp"}>
      <div className={"Timers"}>
        <CurrentStatus jobOrRelax={jobOrRelax} />

        <TimeOutputFormatting
          hour={activeHour}
          minute={activeMinute}
          second={activeSecond}
        />
        <CurrentStatus jobOrRelax={!jobOrRelax} />
        <NextTime
          jobOrRelax={jobOrRelax}
          saveRelaxHour={saveRelaxHour}
          saveRelaxMinute={saveRelaxMinute}
          saveRelaxSecond={saveRelaxSecond}
          saveJobHour={saveJobHour}
          saveJobMinute={saveJobMinute}
          saveJobSecond={saveJobSecond}
        />
      </div>

      <div>
        <div className="Inputs">
          <InputTime onChange={handleHourChange} inputRef={inputHourRef} />
          <InputTime onChange={handleMinuteChange} inputRef={inputMinuteRef} />
          <InputTime onChange={handleSecondChange} inputRef={inputSecondRef} />
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
export default Pomodoro;
