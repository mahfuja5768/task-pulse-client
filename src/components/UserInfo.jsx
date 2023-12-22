import React from "react";
import useAuth from "../hooks/useAuth";
import { FaBell } from "react-icons/fa6";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <div className="containerSmall my-2 mt-12 flex justify-center items-center  ">
      <div className="flex justify-center items-center flex-col">
        <img className="w-32 h-32 rounded-full" src={user?.photoURL} alt="" />
        <div className="flex items-center justify-center gap-2 mt-3">
          <h2 className="flex justify-center font-bold text-2xl">
            {user?.displayName}
          </h2>
          <button className="flex text-2xl items-center justify-center">
            <FaBell />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
