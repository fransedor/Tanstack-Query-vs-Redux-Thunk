import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCurrentUser } from "./pages/service/edit";

const Navbar = () => {
	const { data } = useQuery({
		queryKey: ["getCurrentUser"],
		queryFn: getCurrentUser,
	})
  return (
    <nav className="flex h-16 justify-between items-center mb-8 mx-20 border-b">
      <div className="flex gap-20 items-center mx-4">
        <a href="/">Normal Fetch</a>
        <a href="/query-fetch">Query Fetch</a>
        <a href="/normal-edit">Normal Edit</a>
        <a href="/mutation-edit">Mutation Edit</a>
      </div>
			<p className="mx-4">{data || "Guest"}</p>
    </nav>
  );
};

export default Navbar;
