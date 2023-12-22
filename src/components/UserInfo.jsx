import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FaBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axiosSecure from "../api";
import Loading from "./Shared/Loading";

const UserInfo = () => {
  const { user, loading } = useAuth();
  //   console.log(user?.email);
  if (loading) {
    return (
      <p>
        <Loading />
      </p>
    );
  }

  const [detail, setDetail] = useState([]);

  const { deadline, description, priority, taskAddedTime, title, status } =
    detail || {};
console.log(detail);
  const handleNotification = async () => {
    const notification = await axiosSecure.get(
      `/notification?email=${user?.email}`
    );
    // console.log(notification.data.mostRecentTask);
    setDetail(notification.data.mostRecentTask);
  };

  return (
    <div className="containerSmall my-2 mt-12 flex justify-center items-center  ">
      <div className="flex justify-center items-center flex-col">
        <img className="w-32 h-32 rounded-full" src={user?.photoURL} alt="" />
        <div className="flex items-center justify-center gap-2 mt-3">
          <h2 className="flex justify-center font-bold text-2xl">
            {user?.displayName}
          </h2>

          <Link onClick={handleNotification}>
            <button
              className="flex text-2xl items-center justify-center text-red-700"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <FaBell />
            </button>
          </Link>
        </div>
      </div>
      {/* modal */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-center font-bold text-2xl my-2 border-b-2 pb-4">Your recent task deadline</h2>
          <h3 className="font-bold text-xl text-black">Title: {title}</h3>

          <p className="py-3 font-bold text-xl">
            Deadline: <span className="text-red-600">{new Date(deadline).toLocaleString()}</span>
          </p>
          <p className="py-3 font-bold text-xl">
            Task Created in: <span className="text-green-600">{new Date(taskAddedTime).toLocaleString()}</span>
          </p>

          <p className="py-3 font-bold text-lg">Description: {description}</p>
          <p className="py-3 font-bold text-lg">Task update: In {status} list</p>
          <p className="py-3 font-bold text-lg">
            Priority:
            {priority}
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default UserInfo;
