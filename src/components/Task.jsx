/* eslint-disable react/prop-types */
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { removeTask, taskDetails } from "../api/task";
import { useDrag } from "react-dnd";
import { FaEye } from "react-icons/fa6";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Task = ({ task, refetch }) => {
  const [detail, setDetail] = useState([]);

  const { deadline, description, priority, taskAddedTime, title, status } =
    detail || {};

  const handleDetail = async (id) => {
    const getTask = await taskDetails(id);
    console.log(getTask);
    setDetail(getTask[0]);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // console.log(isDragging);

  const handleRemove = async (id) => {
    console.log(id);
    try {
      const review = await removeTask(id);
      // console.log(review);
      Swal.fire({
        title: "Success!",
        text: "Task deleted successfully !",
        icon: "success",
        confirmButtonText: "Done",
      });
      refetch();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };
  return (
    <>
      <div
        ref={drag}
        className={`relative p-4 bg-white mt-8 shadow-md border-4 border-[#5F0F40] rounded-md cursor-grab flex flex-col justify-between ${
          isDragging ? "opacity-25" : "opacity-100"
        }`}
      >
        <div className="w-full">
          <p className="md:text-xl text-xl w-full">Title: {task?.title}</p>{" "}
        </div>
        <div className="flex   text-lg justify-evenly items-center my-3 gap-4">
          <Link onClick={() => handleDetail(task?._id)}>
            <button
              className="flex   justify-center items-center "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <FaEye />
            </button>
          </Link>

          <Link to={`/updateTask/${task._id}`}>
            <button className="flex   justify-center items-center ">
              <MdEdit />
            </button>
          </Link>

          <button
            onClick={() => handleRemove(task._id)}
            className="flex   justify-center items-center "
          >
            <MdDelete />
          </button>
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Title: {title}</h3>
          <p className="py-4">Description: {description}</p>
          <p className="py-4">
            Deadline: {new Date(deadline).toLocaleString()}
          </p>
          <p className="py-4">
            Task Created in: {new Date(taskAddedTime).toLocaleString()}
          </p>
          <p className="py-4">Task update: In {status} list</p>
          <p className="py-4">
            Priority:
            {priority}
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Task;
