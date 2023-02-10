import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [jobHour, setJobHour] = useState(0);
  const [jobMinute, setJobMinute] = useState(0);
  const [jobSecond, setJobSecond] = useState(5);

  const [relaxHour, setRelaxHour] = useState(0);
  const [relaxMinute, setRelaxMinute] = useState(0);
  const [relaxSecond, setRelaxSecond] = useState(10);

  const [tempHour, setTempHour] = useState(0);
  const [tempMinute, setTempMinute] = useState(0);
  const [tempSecond, setTempSecond] = useState(0);

  const inputHourRef = useRef();
  const inputMinuteRef = useRef();
  const inputSecondRef = useRef();

  const [timerActive, setTimerActive] = useState(false);

  const tick = () => {
    if (timerActive) {
      return;
    }
    if (jobHour === 0 && jobMinute === 0 && jobSecond === 0) {
      setTimerActive(!timerActive);
    } else if (jobMinute === 0 && jobSecond === 0) {
      setJobHour(jobHour - 1);
      setJobMinute(59);
      setJobSecond(59);
    } else if (jobSecond === 0) {
      setJobMinute(jobMinute - 1);
      setJobSecond(59);
    } else {
      setJobSecond(jobSecond - 1);
    }
  };

  useEffect(() => {
    let startId;
    if (timerActive) {
      startId = setInterval(tick, 1000);
    } else {
      clearInterval(startId);
    }
  }, [timerActive]);

  const hourChange = (event: any) => {
    setTempHour(event.target.value || "0");
  };

  const minuteChange = (event: any) => {
    setTempMinute(event.target.value || 0);
  };

  const secondChange = (event: any) => {
    setTempSecond(event.target.value || 0);
  };

  const setJobTime = () => {
    setJobHour(tempHour);
    setJobMinute(tempMinute);
    setJobSecond(tempSecond);
    setTempHour(0);
    setTempMinute(0);
    setTempSecond(0);
        inputHourRef.current.value = "";
    inputMinuteRef.current.value = "";
    inputSecondRef.current.value = "";
  };

  const setRelaxTime = () => {
    setRelaxHour(tempHour);
    setRelaxMinute(tempMinute);
    setRelaxSecond(tempSecond);

    setTempHour(0);
    setTempMinute(0);
    setTempSecond(0);
    inputHourRef.current.value = "";
    inputMinuteRef.current.value = "";
    inputSecondRef.current.value = "";
  };



  const handleClick = () => {
    setTimerActive(!timerActive);
  };

  return (
    <div>
      <div className="Timers">
          <p className="Timer">
          {jobHour} : {jobMinute} : {jobSecond}
        </p>
        <p className="Timer">
          {" "}
          {relaxHour} : {relaxMinute} : {relaxSecond}
        </p>
      </div>

      <div>
        <div className="Inputs">
          <input ref={inputHourRef} className="Input" onChange={hourChange} />
          <input
            ref={inputMinuteRef}
            className="Input"
            onChange={minuteChange}
          />
          <input
            ref={inputSecondRef}
            className="Input"
            onChange={secondChange}
          />
        </div>

        <div className="Buttons">
          <button className="Button" onClick={setJobTime}>
            {" "}
            Set Job Time
          </button>
          <button className="Button" onClick={setRelaxTime}>
            {" "}
            Set Relax Time
          </button>
          <button className="Button" onClick={handleClick}>
            {" "}
            {timerActive ? "Stop" : "Start"}
          </button>
          <button className="Button">Reset</button>
        </div>
      </div>
    </div>
  );
};
export default Timer;
