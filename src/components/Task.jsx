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
    setDetail(getTask);
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
        className={`relative p-4 mt-8 shadow-md bg-white rounded-md cursor-grab flex flex-col justify-between items-center ${
          isDragging ? "opacity-25" : "opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <p className="md:text-2xl text-xl">Title: {task?.title}</p>{" "}
        </div>
        <div className="flex  text-lg justify-center items-center my-2 gap-4">
          <Link onClick={() => handleDetail(task?._id)}>
            <button
              className=""
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <FaEye />
            </button>
          </Link>

          <Link to={`/updateTask/${task._id}`}>
            <button className="">
              <MdEdit />
            </button>
          </Link>

          <button onClick={() => handleRemove(task._id)} className="">
            <MdDelete />
          </button>
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default Task;
