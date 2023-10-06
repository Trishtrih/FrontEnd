import React from "react";
import "../Task/style.css";
import { useDispatch } from "react-redux";
import * as actions from "../../../../store/toDoStore/actions";

const Task = ({ task }) => {
  const { id, title, done } = task;
  const classname = "toDo-task " + (done ? "toDo-task-done" : "");
  const dispatch = useDispatch();

  const doneTask = () => {
    dispatch(
      actions.switchTask({
        id,
      })
    );
  };

  const deleteTask = () => {
    dispatch(actions.deleteTask({ id }));
  };

  return (
    <div className={classname}>
      <p>{title}</p>
      <div className="toDo-action-btn">
        {!done ? <p onClick={doneTask}>+</p> : <p onClick={deleteTask}>x</p>}
      </div>
    </div>
  );
};

export default Task;
