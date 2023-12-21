/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TaskPosition from "./TaskPosition";

const TaskList = ({ tasks, refetch }) => {
  console.log(tasks);
  const [todos, setTodos] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    refetch();
    const getTodos = tasks?.filter((task) => task?.status === "todo");
    const getOnGoing = tasks?.filter((task) => task?.status === "onGoing");
    const getCompleted = tasks?.filter((task) => task?.status === "completed");
    console.log(getCompleted, getOnGoing);
    setTodos(getTodos);
    setOnGoing(getOnGoing);
    setCompleted(getCompleted);
  }, [tasks]);

  const status = ["todo", "onGoing", "completed"];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 gap-16 ">
      {status.map((status, idx) => (
        <TaskPosition
          key={idx}
          status={status}
          tasks={tasks}
          todos={todos}
          refetch={refetch}
          onGoing={onGoing}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default TaskList;





