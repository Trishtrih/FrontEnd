import {
  ImitationInfiniteFieldMax,
  ImitationInfiniteFieldMin,
} from "./imitationInfinteField";

export const countNeighbours = (
  gameField: number[][],
  gameFieldRows: number,
  gameFieldCols: number,
  i: number,
  j: number
) => {
  let neighbours = 0;

  if (gameField[ImitationInfiniteFieldMax(i, gameFieldRows) - 1][j] === 1) {
    neighbours++;
  }
  if (gameField[i][ImitationInfiniteFieldMin(j, gameFieldCols) + 1] === 1) {
    neighbours++;
  }
  if (gameField[ImitationInfiniteFieldMin(i, gameFieldRows) + 1][j] === 1) {
    neighbours++;
  }
  if (gameField[i][ImitationInfiniteFieldMax(j, gameFieldCols) - 1] === 1) {
    neighbours++;
  }
  if (
    gameField[ImitationInfiniteFieldMax(i, gameFieldRows) - 1][
      ImitationInfiniteFieldMin(j, gameFieldCols) + 1
    ] === 1
  ) {
    neighbours++;
  }
  if (
    gameField[ImitationInfiniteFieldMin(i, gameFieldRows) + 1][
      ImitationInfiniteFieldMin(j, gameFieldCols) + 1
    ] === 1
  ) {
    neighbours++;
  }
  if (
    gameField[ImitationInfiniteFieldMin(i, gameFieldRows) + 1][
      ImitationInfiniteFieldMax(j, gameFieldCols) - 1
    ] === 1
  ) {
    neighbours++;
  }
  if (
    gameField[ImitationInfiniteFieldMax(i, gameFieldRows) - 1][
      ImitationInfiniteFieldMax(j, gameFieldCols) - 1
    ] === 1
  ) {
    neighbours++;
  }

  return neighbours;
};
