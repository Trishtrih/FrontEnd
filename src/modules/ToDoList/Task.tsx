import React from 'react';

const Task = ({ task, ...props }) => {
  const Actionbtn = () => (
    <div className={'action-btn'}>
      {!task.done ? <p onClick={props.doneTask}> + </p> : <p onClick={props.deleteTask}> x </p>}
    </div>
  );

  const className = `task ${task.done ? 'task-done' : ''}`;
  return (
    <div className={className}>
      <p>{task.title}</p>
      <Actionbtn/>
    </div>
  );
}

export default Task;
