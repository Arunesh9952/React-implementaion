import React from "react";


export const UserName = () => {
  const name = "Jane Smith";
  return <p className="text-success">Name: {name}</p>;
};

export const UserAge = () => {
  const age = 28;
  return <p className="text-primary">Age: {age}</p>;
};
