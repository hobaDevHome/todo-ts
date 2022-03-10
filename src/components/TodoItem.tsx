import React from "react";
import { ITask } from "../Interfaces/Interfaces";

const TodoItem: React.FC<{
  task: ITask;
  onComplete: (text: string) => void;
}> = (props) => {
  const submitHandler = () => {
    props.onComplete(props.task.taskName);
    console.log("su");
  };
  return (
    <div className="task">
      <div className="content">
        <span>{props.task.taskName}</span>
        <span>{props.task.deadLine}</span>
      </div>
      <button onClick={submitHandler}>X</button>
    </div>
  );
};

export default TodoItem;
