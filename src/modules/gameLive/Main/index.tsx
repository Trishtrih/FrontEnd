import React, { useEffect, useState } from "react";
import "../Main/style.css";
import produce from "immer";
import Cell from "../Cell";

const GameLive = () => {
  const initialState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const [gameFieldWidth, setGameFieldWidth] = useState<number>(200);
  const [gameFieldHeight, setGameFieldHeight] = useState<number>(200);
  const [gameField, setGameField] = useState(initialState);
  const rows = 10;
  const cols = 10;

  const changeWidth = (e) => {
    setGameFieldWidth(e.target.value);
  };

  const changeHeight = (e) => {
    setGameFieldHeight(e.target.value);
  };

  const fillRandomField = () => {
    const tempField = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if (Array.isArray(tempField[i])) {
          tempField[i][j] = Math.round(Math.random());
        } else {
          tempField[i] = [Math.round(Math.random())];
        }
      }
    }
    console.log(tempField);
  };

  return (
    <div>
      <div className={"game-field"}>
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
      <input
        type={"range"}
        min="20"
        max="500"
        step="20"
        value={gameFieldWidth}
        onChange={changeWidth}
      />
      <input
        type={"range"}
        min="20"
        max="500"
        step="20"
        value={gameFieldHeight}
        onChange={changeHeight}
      />
      <button>start</button>
      <button>next step</button>
      <button>reset</button>
    </div>
  );
};

export default GameLive;
