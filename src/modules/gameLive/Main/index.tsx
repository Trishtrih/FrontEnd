import React, { useEffect, useState } from "react";
import "../Main/style.css";
``;
import produce from "immer";
import { countNeighbours } from "./helpers/countNeighbours";
import { isCellBorn, isCellAlive } from "./helpers/CellsFate";

const GameLive = () => {
  const [gameField, setGameField] = useState<number[][]>(() => {
    const Brows = [];
    for (let i = 0; i < 10; i++) {
      Brows.push(Array.from(Array(10), () => 0));
    }
    return Brows;
  });

  const [gameFieldRows, setGameFieldRows] = useState<number>(10);
  const [gameFieldCols, setGameFieldCols] = useState<number>(10);
  const [gameFieldWidth, setGameFieldWidth] = useState<number>(100);
  const [gameFieldHeight, setGameFieldHeight] = useState<number>(100);
  const [simulationActive, setSimulationActive] = useState<boolean>(false);

  useEffect(() => {
    const rows = [];
    for (let i = 0; i < gameFieldRows; i++) {
      rows.push(Array.from(Array(gameFieldCols), () => 0));
    }
    setGameField(rows);
  }, [gameFieldRows, gameFieldCols]);

  useEffect(() => {
    setGameFieldCols(gameFieldWidth / 10);
    setGameFieldRows(gameFieldHeight / 10);
  }, [gameFieldWidth, gameFieldHeight]);

  useEffect(() => {
    if (simulationActive) {
      const simulation = setInterval(() => nextStep(), 500);
      return () => clearInterval(simulation);
    }
  }, [simulationActive, gameField]);

  const changeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameFieldWidth(Number(event.target.value));
  };

  const changeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameFieldHeight(Number(event.target.value));
  };

  const startSimulation = () => {
    setSimulationActive((prevState) => !prevState);
  };

  const nextStep = () => {
    const nextStepField = produce(gameField, (gameFieldCopy) => {
      for (let i = 0; i < gameFieldRows; i++) {
        for (let j = 0; j < gameFieldCols; j++) {
          const neighbour = countNeighbours(
            gameField,
            gameFieldRows,
            gameFieldCols,
            i,
            j
          );
          if (gameFieldCopy[i][j] === 1) {
            gameFieldCopy[i][j] = isCellAlive(neighbour);
          } else {
            gameFieldCopy[i][j] = isCellBorn(neighbour);
          }
        }
      }
    });

    setGameField(nextStepField);
    if (!simulationActive) {
      return;
    }
  };

  return (
    <div>
      <input
        type={"range"}
        min="30"
        max="200"
        step="10"
        value={gameFieldWidth}
        onChange={changeWidth}
      />
      <input
        type={"range"}
        min="30"
        max="200"
        step="10"
        value={gameFieldHeight}
        onChange={changeHeight}
      />
      <button onClick={startSimulation}>
        {simulationActive ? "Stop" : "Start"}
      </button>
      <button onClick={nextStep}>Next step</button>
      <div
        className={"game-field"}
        style={{
          gridTemplateColumns: `repeat(${gameFieldCols}, 20px)`,
        }}
      >
        {gameField.map((rows, i) =>
          rows.map((col, j) => (
            <div
              className={"cell"}
              key={`${i}-${j}`}
              onClick={() => {
                const tempField = produce(gameField, (gameFieldCopy) => {
                  gameFieldCopy[i][j] = gameFieldCopy[i][j] ? 0 : 1;
                });
                setGameField(tempField);
              }}
              style={{
                backgroundColor: gameField[i][j] ? "red" : "aqua",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameLive;
