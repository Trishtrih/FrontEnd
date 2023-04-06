export const ImitationInfiniteFieldMax = (i: number, line: number) => {
  return i === 0 ? line : i;
};

export const ImitationInfiniteFieldMin = (i: number, line: number) => {
  return i === line - 1 ? -1 : i;
};
