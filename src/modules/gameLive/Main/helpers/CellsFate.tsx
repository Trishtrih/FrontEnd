export const isCellBorn = (neighbours: number) => {
  return neighbours === 3 ? 1 : 0;
};

export const isCellAlive = (neighbours: number) => {
  return neighbours === 2 || neighbours === 3 ? 1 : 0;
};
