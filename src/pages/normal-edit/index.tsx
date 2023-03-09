import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { editCurrentUser, getCurrentUser } from "../service/edit";

const NormalEdit = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    getCurrentUser().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  const editUserHandler = async () => {
    await editCurrentUser(editValue);
    getCurrentUser().then((res) => {
      setCurrentUser(res);
    });
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1>Current user is: {currentUser}</h1>
      <div className="flex gap-5">
        <input
          type="text"
          value={editValue}
          placeholder="Input new username..."
          className="bg-gray-100 w-64 py-2 px-4 rounded-lg"
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button className="bg-blue-400 text-white hover:bg-blue-600" onClick={editUserHandler}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default NormalEdit;
