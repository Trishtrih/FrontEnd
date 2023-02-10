import React, { Component } from 'react';
import "../styles/Pomodoro.css"
import Timer from './Timer';

class PomodoroClock extends Component {
  render() {
    return (
      <div className={"PomodoroApp"}>
        <Timer />
      </div>
    );
  }
}

export default PomodoroClock;
