/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaRemoveFormat } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const TaskList = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const getTodos = tasks.filter((task) => task.status === "todo");
    const getOnGoing = tasks.filter((task) => task.status === "onGoing");
    const getCompleted = tasks.filter((task) => task.status === "completed");
    console.log(getCompleted, getOnGoing);
    setTodos(getTodos);
    setOnGoing(getOnGoing);
    setCompleted(getCompleted);
  }, [tasks]);

  const status = ["todo", "onGoing", "completed"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
      {status.map((status, idx) => (
        <Section
          key={idx}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          onGoing={onGoing}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default TaskList;

const Section = ({ status, tasks, setTasks, todos, onGoing, completed }) => {
  let text = "Todo";
  let bg = "bg-red-700";
  let tasksToMap = todos;

  if (status === "onGoing") {
    text = "On Going";
    bg = "bg-yellow-700";
    tasksToMap = onGoing;
  }
  if (status === "completed") {
    text = "On Going";
    bg = "bg-green-700";
    tasksToMap = completed;
  }

  return (
    <div className="w-64">
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task, idx) => (
          <Task key={idx} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};
const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}{" "}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
  return (
    <div
      className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab flex justify-between items-center`}
    >
      <p>{task?.status}</p>{" "}
      <div className="flex justify-between items-center flex-col gap-2">
        {task?.status === "todo" && (
          <button className="">
            <MdEdit />
          </button>
        )}
        <button onClick={()=> handleRemove(task)} className="">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
