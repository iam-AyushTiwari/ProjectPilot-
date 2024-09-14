import { useContextApp } from "@/app/contextApp";
import { Add, Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect } from "react";
import AddProjectButton from "./AddProjectButton";

const TaskHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="border-b-2 border-lightPrimaryColor h-[39px] w-11 flex justify-center items-center">
        <Search
          className="text-slate-400 outline-none"
          sx={{ fontSize: "26px" }}
        />
      </div>
      <div className="border-b-2">
        <input
          placeholder="Search a Task..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
};

export default TaskHeader;
