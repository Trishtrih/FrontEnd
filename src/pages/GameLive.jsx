import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import '/src/Styles/GameLive.less';
class GameLive extends Component {
    constructor(props) {
        super(props);
        const mass = [];
        for (let i = 0; i < 30; i++) {
            mass[i] = [];
            for (let j = 0; j < 30; j++) {
                mass[i][j] = 0;
            }
        }
        let idInterval;
        this.state = {
            started: true,
            idInterval,
            mass, // rename
        };

        this.GetCoordinate = this.GetCoordinate.bind(this);
        this.StartStopSimulation = this.StartStopSimulation.bind(this);
    }

    GetCoordinate(event) {
        const currentTargetRect = event.currentTarget.getBoundingClientRect();
        const event_offsetX = event.pageX - currentTargetRect.left,
            event_offsetY = event.pageY - currentTargetRect.top;

        const x = Math.floor(event_offsetX / 10);
        const y = Math.floor(event_offsetY / 10);

        this.state.mass[x][y] === 0
            ? (this.state.mass[x][y] = 1)
            : (this.state.mass[x][y] = 0);
        this.drawSell();
    }

    drawSell() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 300, 300);
        for (let i = 0; i < 30; i++) {
            for (let j = 0; j < 30; j++) {
                if (this.state.mass[i][j] === 1)
                    ctx.fillRect(i * 10, j * 10, 10, 10);
            }
        }
    }

    StartStopSimulation() {
        if (this.state.started) {
            this.state.idInterval = setInterval(() => this.Simulation(), 500);
            this.state.started = false;
        } else {
            clearInterval(this.state.idInterval);
            this.state.started = true;
        }
    }

    Simulation() {
        const mass2 = [];

        for (let i = 0; i < 30; i++) {
            mass2[i] = [];
            for (let j = 0; j < 30; j++) {
                const neighbours = this.CountNeighbours(i, j);
                this.state.mass[i][j] === 1
                    ? (mass2[i][j] = this.Alive(neighbours))
                    : (mass2[i][j] = this.Born(neighbours));
            }
        }

        this.state.mass = mass2;
        this.drawSell();
    }
    Born(neighbours) {
        if (neighbours === 3) return neighbours === 3 ? 1 : 0;
    }
    Alive(neighbours) {
        return neighbours === 3 || neighbours === 2 ? 1 : 0;
    }
    CountNeighbours(i, j) {
        let neighbours = 0;
        if (this.state.mass[this.infiniteFieldMax(i) - 1][j] === 1)
            neighbours++; //up
        if (this.state.mass[i][this.infiniteFieldMin(j) + 1] === 1)
            neighbours++; //right
        if (this.state.mass[this.infiniteFieldMin(i) + 1][j] === 1)
            neighbours++; //down
        if (this.state.mass[i][this.infiniteFieldMax(j) - 1] === 1)
            neighbours++; //left
        if (
            this.state.mass[this.infiniteFieldMax(i) - 1][
                this.infiniteFieldMin(j) + 1
            ] === 1
        )
            neighbours++; // up-right
        if (
            this.state.mass[this.infiniteFieldMin(i) + 1][
                this.infiniteFieldMin(j) + 1
            ] === 1
        )
            neighbours++; //down-right
        if (
            this.state.mass[this.infiniteFieldMin(i) + 1][
                this.infiniteFieldMax(j) - 1
            ] === 1
        )
            neighbours++; // down-left
        if (
            this.state.mass[this.infiniteFieldMax(i) - 1][
                this.infiniteFieldMax(j) - 1
            ] === 1
        )
            neighbours++; //up-left

        return neighbours;
    }
    infiniteFieldMax(i) {
        return i === 0 ? 30 : i;
    }
    infiniteFieldMin(i) {
        return i === 29 ? -1 : i;
    }

    render() {
        const fieldWidth = 300;
        const fieldHeight = 300;

        return (
            <div className={'main'}>
                <h1> Game live</h1>

                <canvas
                    ref={'canvas'}
                    className={'field'}
                    onClick={this.GetCoordinate}
                    width={fieldWidth}
                    height={fieldHeight}
                />
                <button
                    className={'StartSimulation'}
                    onClick={this.StartStopSimulation}
                >
                    StartSimulation
                </button>
            </div>
        );
    }
}
export default GameLive;
