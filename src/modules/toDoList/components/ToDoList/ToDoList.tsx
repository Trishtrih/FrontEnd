import React from "react";
import "../ToDoList/style.css";
import { useSelector } from "react-redux";

import TaskInput from "../TaskInput/TaskInput";
import Task from "../Task/Task";

const ToDoList = () => {
  const tasks = useSelector((state) => state.toDo);
  const activeTasks = tasks.filter((task: { done: boolean }) => !task.done);
  const doneTasks = tasks.filter((task: { done: boolean }) => task.done);
  return (
    <div className="toDoList">
      <h1 className="toDoList-top">Active Task : {activeTasks.length}</h1>
      {[...activeTasks, ...doneTasks].map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <TaskInput />
    </div>
  );
};

export default ToDoList;
