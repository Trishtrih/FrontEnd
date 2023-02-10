import React, { Component } from "react";
import "../styles/GameLive.less";

class GameLive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldWidth: 300,
      fieldHeight: 300,
      gameFieldHeight: 300,
      gameFieldWidth: 300,
      started: true,
      idInterval: null,
      GameField: [],
    };

    const { GameField } = this.state;

    const { gameFieldHeight, gameFieldWidth } = this.state;

    for (let i = 0; i < gameFieldHeight; i++) {
      GameField[i] = [];
      for (let j = 0; j < gameFieldWidth; j++) {
        GameField[i][j] = 0;
      }
    }

    this.getCoordinate = this.getCoordinate.bind(this);
    this.startStopSimulation = this.startStopSimulation.bind(this);
  }

  getCoordinate(event) {
    const { GameField } = this.state;

    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.pageX - currentTargetRect.left;
    const eventOffsetY = event.pageY - currentTargetRect.top;
    const x = Math.floor(eventOffsetX / 10);
    const y = Math.floor(eventOffsetY / 10);
    GameField[x][y] = GameField[x][y] === 0 ? 1 : 0;
    this.setState({ GameField });
    this.drawSell();
  }

  drawSell = () => {
    // eslint-disable-next-line react/no-string-refs
    const { canvas } = this.refs;
    const ctx = canvas.getContext("2d");
    const { GameField } = this.state;
    ctx.clearRect(0, 0, 300, 300);
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 30; j++) {
        if (GameField[i][j] === 1) ctx.fillRect(i * 10, j * 10, 10, 10);
      }
    }
  };

  startStopSimulation() {
    const { started, idInterval } = this.state;
    if (started) {
      const a = setInterval(() => this.simulation(), 500); // rename
      this.setState({
        idInterval: a,
        started: false,
      });
    } else {
      clearInterval(idInterval);
      this.setState({
        started: true,
      });
    }
  }

  simulation() {
    const mass2 = [];
    const { mass } = this.state;
    for (let i = 0; i < 30; i++) {
      mass2[i] = [];
      for (let j = 0; j < 30; j++) {
        const neighbours = this.countNeighbours(i, j);
        mass[i][j] =
          mass[i][j] === 1 ? this.alive(neighbours) : this.born(neighbours);
      }
    }

    this.setState({ mass: mass2 });
    this.drawSell();
  }

  born(neighbours) {
    return neighbours === 3 ? 1 : 0;
  }

  alive(neighbours) {
    return neighbours === 3 || neighbours === 2 ? 1 : 0;
  }

  countNeighbours(i, j) {
    let neighbours = 0;
    const { mass } = this.state;
    if (mass[this.infiniteFieldMax(i) - 1][j] === 1) {
      neighbours++;
    }
    if (mass[i][this.infiniteFieldMin(j) + 1] === 1) {
      neighbours++;
    }
    if (mass[this.infiniteFieldMin(i) + 1][j] === 1) {
      neighbours++;
    }
    if (mass[i][this.infiniteFieldMax(j) - 1] === 1) {
      neighbours++;
    }
    if (
      mass[this.infiniteFieldMax(i) - 1][this.infiniteFieldMin(j) + 1] === 1
    ) {
      neighbours++;
    }
    if (
      mass[this.infiniteFieldMin(i) + 1][this.infiniteFieldMin(j) + 1] === 1
    ) {
      neighbours++;
    }
    if (
      mass[this.infiniteFieldMin(i) + 1][this.infiniteFieldMax(j) - 1] === 1
    ) {
      neighbours++;
    }
    if (
      mass[this.infiniteFieldMax(i) - 1][this.infiniteFieldMax(j) - 1] === 1
    ) {
      neighbours++;
    }

    return neighbours;
  }

  infiniteFieldMax(i) {
    return i === 0 ? 30 : i;
  }

  infiniteFieldMin(i) {
    return i === 29 ? -1 : i;
  }

  changeFieldWidth(event) {
    const newFieldWidth = event.target.value;
    this.setState({ fieldWidth: newFieldWidth });
  }

  changeFieldHeight(event) {
    const newFieldHeight = event.target.value;
    this.setState({ fieldHeight: newFieldHeight });
  }

  render() {
    const { fieldWidth, fieldHeight } = this.state;
    return (
      <div className="main">
        <h1> Game live</h1>

        <canvas
          /* eslint-disable-next-line */
          ref="canvas"
          className="field"
          onClick={this.getCoordinate}
          width={fieldWidth}
          height={fieldHeight}
        />
        <div className="GameControl">
          <input
            type="range"
            min="300"
            max="700"
            step="10"
            onInput={this.changeFieldWidth}
          />
          <input
            type="range"
            min="300"
            max="500"
            step="10"
            onInput={this.changeFieldHeight}
          />
          <button
            type="button"
            className="StartSimulation"
            onClick={this.startStopSimulation}
          >
            StartSimulation
          </button>
        </div>
      </div>
    );
  }
}
export default GameLive;
