import React, { useRef, useState } from "react";
import "../TaskInput/style.css";
import { useDispatch } from "react-redux";
import * as actions from "../../../../store/toDoStore/actions";
const TaskInput = () => {
  const [task, setTask] = useState("");
  const inputTaskRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const getTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (inputTaskRef.current && task) {
      dispatch(
        actions.addTask({
          title: task,
        })
      );
      setTask("");
      inputTaskRef.current.value = "";
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className={"task-input"}>
      <input ref={inputTaskRef} onKeyPress={handleEnter} onChange={getTask} />
      <button onClick={addTask}>ADD</button>
    </div>
  );
};

export default TaskInput;
