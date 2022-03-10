import "./App.css";
import { FC, useState, ChangeEvent } from "react";
import { ITask } from "./Interfaces/Interfaces";
import TodoItem from "./components/TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealline(0);
  };

  const deleteCompletedTask = (text: string): void => {
    console.log("hi");
    const newList = todoList.filter((e) => e.taskName !== text);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            onChange={changeHandler}
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline (in days)"
            name="deadline"
            onChange={changeHandler}
            value={deadline}
          />
        </div>

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoItem key={key} task={task} onComplete={deleteCompletedTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
