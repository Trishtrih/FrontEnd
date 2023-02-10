import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.inputHourRef = React.createRef();
    this.inputMinuteRef = React.createRef();
    this.inputSecondRef = React.createRef();
    this.state = {
      timerActive: false,
      jobHour: 0,
      jobMinute: 0,
      jobSecond: 5,
      relaxHour: 0,
      relaxMinute: 0,
      relaxSecond: 10,
      tempHour: 0,
      tempMinute: 0,
      tempSecond: 0,
    };
  }

  start = () => {
    const { timerActive } = this.state;
    console.log('in start : ' + timerActive);
    let startId;
    if (timerActive) {
      startId = setInterval(this.tick, 1000);
    } else {
      clearInterval(startId);
    }
  };

  tick = () => {
    const { jobHour, jobMinute, jobSecond, timerActive } = this.state;
    console.log('in tick : ' + timerActive);
    if (timerActive) {
      return;
    }
    if (jobHour === 0 && jobMinute === 0 && jobSecond === 0) {
      this.setState((prevState) => ({ timerActive: !prevState.timerActive }));
    } else if (jobMinute === 0 && jobSecond === 0) {
      this.setState((prevState) => ({ jobHour: prevState.jobHour - 1, jobMinute: 59, jobSecond: 59 }));
    } else if (jobSecond === 0) {
      this.setState((prevState) => ({ jobMinute: prevState.jobMinute - 1, jobSecond: 59 }));
    } else {
      this.setState((prevState) => ({ jobSecond: prevState.jobSecond - 1 }));
    }
  };

  // ToDo проверки на число, сделать вложенный setTimeout
  hourChange = (event) => {
    if (event.target.value) this.setState({ tempHour: event.target.value });
    else this.setState({ tempHour: '00' });
  };

  minuteChange = (event) => {
    if (event.target.value) this.setState({ tempMinute: event.target.value });
    else this.setState({ tempMinute: '00' });
  };

  secondChange = (event) => {
    if (event.target.value) this.setState({ tempSecond: event.target.value });
    else this.setState({ tempSecond: '00' });
  };

  setJobTime = () => {
    const { tempHour, tempMinute, tempSecond } = this.state;
    this.setState({
      jobHour: tempHour,
      jobMinute: tempMinute,
      jobSecond: tempSecond,
      tempHour: '00',
      tempMinute: '00',
      tempSecond: '00',
    });
    this.inputHourRef.current.value = '';
    this.inputMinuteRef.current.value = '';
    this.inputSecondRef.current.value = '';
  };

  setRelaxTime = () => {
    const { tempHour, tempMinute, tempSecond } = this.state;
    this.setState({
      relaxHour: tempHour,
      relaxMinute: tempMinute,
      relaxSecond: tempSecond,
      tempHour: '00',
      tempMinute: '00',
      tempSecond: '00',
    });

    this.inputHourRef.current.value = '';
    this.inputMinuteRef.current.value = '';
    this.inputSecondRef.current.value = '';
  };

  changeTimerActive = () => {
    this.setState((state) => ({ timerActive: !state.timerActive }));
  };

  handleClick = () => {
    this.changeTimerActive();
    this.start();
  };

  render() {
    const { jobHour, jobMinute, jobSecond, relaxHour, relaxMinute, relaxSecond, timerActive } = this.state;
    console.log('in render : ' + timerActive);
    return (
      <div>
        <div className={'Timers'}>
          <p className={'Timer'}>
            {jobHour} : {jobMinute} : {jobSecond}
          </p>
          <p className={'Timer'}>
            {' '}
            {relaxHour} : {relaxMinute} : {relaxSecond}
          </p>
        </div>

        <div>
          <div className={'Inputs'}>
            <input className={'Input'} ref={this.inputHourRef} onChange={this.hourChange} />
            <input className={'Input'} ref={this.inputMinuteRef} onChange={this.minuteChange} />
            <input className={'Input'} ref={this.inputSecondRef} onChange={this.secondChange} />
          </div>

          <div className={'Buttons'}>
            <button className={'Button'} onClick={this.setJobTime}>
              {' '}
              Set Job Time
            </button>
            <button className={'Button'} onClick={this.setRelaxTime}>
              {' '}
              Set Relax Time
            </button>
            <button className={'Button'} onClick={this.handleClick}>
              {' '}
              {timerActive ? 'Stop' : 'Start'}
            </button>
            <button className={'Button'}> Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
