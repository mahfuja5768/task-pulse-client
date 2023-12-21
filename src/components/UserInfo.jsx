import React from 'react';
import useAuth from '../hooks/useAuth';

const UserInfo = () => {
    const {user} = useAuth()
    return (
      <div className="containerSmall my-12 flex justify-center items-center ">
        <div>
          <img className="w-52 h-52 rounded-full" src={user?.photoURL} alt="" />
        </div>
      </div>
    );
};

export default UserInfo;