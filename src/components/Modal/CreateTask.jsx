/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { postATask } from "../../api/task";
import useAuth from "../../hooks/useAuth";

const CreateTask = ({ refetch }) => {

  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    const status = "todo";
    const email = user?.email;
    const taskAddedTime = new Date();
    console.log(title, email, description, deadline, priority, status);
    const newTask = {
      title,
      description,
      deadline,
      priority,
      status,
      taskAddedTime,
      email,
    };

    const taskPost = await postATask(newTask);

    console.log(taskPost);

    Swal.fire({
      title: "Success!",
      text: "Successfully Task added!",
      icon: "success",
    });
    refetch();
    reset();
  };

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn bg-textBlue px-4 text-white hover:bg-white hover:border-4 hover:border-textBlue hover:text-textBlue"
      >
        Add New Task
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Type here"
                className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
              />
              {errors.title?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Title is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                {...register("description", { required: true })}
                placeholder="Type here"
                className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
              />
              {errors.description?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Description is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="datetime-local"
                {...register("deadline", { required: true })}
                placeholder="Type here"
                className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
              />
              {errors.deadline?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Deadline is required
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              {/* <input
                type="text"
                {...register("priority", { required: true })}
                placeholder="Type here"
                className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
              /> */}
              <select
                {...register("priority", { required: true })}
                defaultValue="Low"
                className="select select-bordered w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>

              {errors.priority?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Priority is required
                </p>
              )}
            </div>

            <div className="form-control mt-6 flex justify-between">
              <input
                htmlFor="confirmation-modal"
                className="btn  text-white bg-textBlue hover:bg-gray-400 hover:text-black hover:border-transparent"
                type="submit"
                value="Add"
              />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CreateTask;
