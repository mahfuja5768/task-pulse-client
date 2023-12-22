import React from 'react';
import useAuth from '../hooks/useAuth';

const UserInfo = () => {
    const {user} = useAuth()
    return (
      <div className="containerSmall my-2 mt-12 flex justify-center items-center ">
        <div>
          <img className="w-32 h-32 rounded-full" src={user?.photoURL} alt="" />
          <h2 className='flex justify-center mt-2 font-bold'>{user?.displayName}</h2>
        </div>
      </div>
    );
};

export default UserInfo;