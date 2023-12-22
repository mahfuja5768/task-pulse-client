/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import axiosSecure from "../api";
import Swal from "sweetalert2";
import TaskHeader from "./TaskHeader";
import Task from "./Task";

const TaskPosition = ({
  status,
  tasks,
  todos,
  refetch,
  onGoing,
  completed,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => {
      // console.log(item);
      addItemToTaskPosition(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-[#9A208C]";
  let tasksToMap = todos;

  if (status === "onGoing") {
    text = "On Going";
    bg = "bg-[#E11299]";
    tasksToMap = onGoing;
  }
  if (status === "completed") {
    text = "Completed";
    bg = "bg-[#1F4172]";
    tasksToMap = completed;
  }

  const addItemToTaskPosition = async (id) => {
    // console.log("drop", id, status);
    const update = await axiosSecure.put(`/update-status/${id}`, {
      status,
    });
    Swal.fire({
      title: "Success!",
      text: `Successfully Task added to ${status}!`,
      icon: "success",
    });
    refetch();
  };

  return (
    <div
      ref={drop}
      className={`w-64 ${isOver ? "bg-primary rounded p-2" : ""}`}
    >
      <TaskHeader text={text} bg={bg} count={tasksToMap?.length} />
      {tasksToMap?.length > 0 &&
        tasksToMap?.map((task) => (
          <Task key={task._id} task={task} tasks={tasks} refetch={refetch} />
        ))}
    </div>
  );
};

export default TaskPosition;
