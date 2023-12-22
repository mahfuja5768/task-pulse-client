import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import axiosSecure from "../../api";

const UpdateTask = () => {
  const task = useLoaderData();
  // console.log(task);
  const { _id, description, title, deadline, priority} =
    task[0] || {};
  //  console.log(task.title);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const title = data.title;
      const description = data.description;
      const deadline = data.deadline;
      const priority = data.priority;
      console.log(title, description, deadline, priority);
      const newTask = {
        title,
        description,
        deadline,
        priority,
      };
      console.log(newTask);
        const updateTask = await axiosSecure.patch(
          `/update-task/${_id}`,
          newTask
        );
      Swal.fire({
        title: "Success!",
        text: "Task updated successfully!",
        icon: "success",
        confirmButtonText: "Done",
      });
      navigate("/");
      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Done",
      });
      reset();
    }
  };

  return (
    <div className="my-32 container mx-auto">
      <SectionTitle title={"Update your task"}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            defaultValue={title}
            {...register("title", { required: true })}
            placeholder="Type here"
            className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-700"
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
            defaultValue={description}
            {...register("description", { required: true })}
            placeholder="Type here"
            className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-700"
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
            defaultValue={deadline}
            type="datetime-local"
            {...register("deadline", { required: true })}
            placeholder="Type here"
            className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-700"
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
          <select
            defaultValue={priority}
            {...register("priority", { required: true })}
            className="select select-bordered w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-700"
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
            className="btn  text-white bg-textBlue hover:bg-gray-400 hover:text-black hover:border-transparent"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
