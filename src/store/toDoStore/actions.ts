import * as actions from "./actionTypes";
export const addTask = (task: { title: string }) => ({
  type: actions.TASK_ADD,
  payload: task,
});
export const switchTask = (id: number) => ({
  type: actions.TASK_SWITCH,
  payload: id,
});
export const deleteTask = (id: number) => ({
  type: actions.TASK_DELETE,
  payload: id,
});
