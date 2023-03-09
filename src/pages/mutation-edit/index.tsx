import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { queryClient } from '../../main';
import { editCurrentUser, getCurrentUser } from '../service/edit';

const MutationEdit = () => {
	const [editValue, setEditValue] = useState("");

	const editUserHandler = useMutation({
		mutationKey: ["editUser"],
		mutationFn: editCurrentUser,
		onSuccess: () => queryClient.invalidateQueries(["getCurrentUser"])
	})

	const { data } = useQuery({
		queryKey: ["getCurrentUser"],
		queryFn: getCurrentUser,
	})

	return (
		<div className="flex flex-col items-center gap-10">
      <h1>Current user is: {data || ""}</h1>
      <div className="flex gap-5">
        <input
          type="text"
          value={editValue}
          placeholder="Input new username..."
          className="bg-gray-100 w-64 py-2 px-4 rounded-lg"
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button className="bg-blue-400 text-white hover:bg-blue-600" onClick={() => editUserHandler.mutate(editValue)}>
          Edit
        </button>
      </div>
    </div>
	)
}

export default MutationEdit