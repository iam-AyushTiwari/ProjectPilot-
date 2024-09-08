import { Add, MenuBook, MenuOpen, Search } from "@mui/icons-material";
import { Menu, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
};

const AddProjectButton = () => {
  return (
    <div className="flex gap-3 items-center">
      <button className="bg-orange-600 text-white px-2 h-9 pr-3 text-[14px] rounded-md flex gap-1 items-center">
        <Add sx={{ fontSize: "22px" }} className="mt-[2px]" />
        <span className="max-sm:hidden">New Project</span>
      </button>
      <div className="sm:hidden">
        <MenuIcon className="text-slate-400 h-9 cursor-pointer" />
      </div>
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
      <div className="border-b-2 w-[67%] border-slate-200">
        <input
          placeholder="Search a project..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
