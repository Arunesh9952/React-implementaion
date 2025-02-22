import React from "react";
import { UserName, UserAge } from "./UserCom";

const UserProfile = () => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">User Profile</h1>
      <h1 className="">Get ready for IV on Thursday </h1>
      <UserName />
      <UserAge />
    </div>
  );
  
};

export default UserProfile;
