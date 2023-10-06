import * as actions from "./actionTypes";
let lastId = 0;
const defaultState = [
  {
    id: 999,
    title: "Close this task",
    done: false,
  },
];

export default function reducer(
  state = defaultState,
  action: {
    type: string;
    payload: { title: string; id: number; done: boolean };
  }
) {
  switch (action.type) {
    case actions.TASK_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          done: false,
        },
      ];
    case actions.TASK_SWITCH:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    case actions.TASK_DELETE:
      return state.filter((task) => action.payload.id !== task.id);
    default:
      return state;
  }
}
