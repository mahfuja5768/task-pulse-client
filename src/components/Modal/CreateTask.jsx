import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

let i = document.getElementById("confirmation-modal");

const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const title = data.title;
    const description = data.description;
    const deadline = data.deadline;
    const priority = data.priority;
    console.log(title, description, deadline, priority);
    //TODO : set status

    Swal.fire({
      title: "Success!",
      text: "Successfully Task added!",
      icon: "success",
    });
    // i.setAttribute('disabled', true);
    reset();
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="confirmation-modal"
        className="btn bg-textBlue px-4 text-white hover:bg-white hover:border-4 hover:border-textBlue hover:text-textBlue"
      >
        Add New Task
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
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
              {errors.name?.type === "required" && (
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
              {errors.name?.type === "required" && (
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
                type="text"
                {...register("deadline", { required: true })}
                placeholder="Type here"
                className="w-full px-3 py-2 border-4 rounded-md border-black focus:outline-gray-400 bg text-gray-400"
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Deadline is required
                </p>
              )}
            </div>

            <div className="form-control mt-6 flex justify-between">
              {/* <input   htmlFor="confirmation-modal"
                className="btn btn-primary text-white bg-textBlue hover:bg-gray-400 hover:text-black hover:border-transparent"
                type="submit"
                value="Sign up"
              /> */}
              <label
                htmlFor="confirmation-modal"
                className="btn w-full h-12 mt-3 btn-sm text-textBlue hover:bg-transparent border-2 bg-transparent  border-textBlue rounded-md"
              >
                add
              </label>
            </div>
          </form>

          <div className="modal-action">
            <button className="btn btn-sm text-white  btn-error">Add</button>
            <label
              htmlFor="confirmation-modal"
              className="btn  btn-sm text-white btn-primary"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
