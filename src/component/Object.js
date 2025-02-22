import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    age: 30,
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Profile</h1>
      <p className="text-gray-600">Name: {user.name}</p>
      <p className="text-gray-600">Age: {user.age}</p>
    </div>
  );
};

export default Profile;