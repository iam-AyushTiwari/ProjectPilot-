import React from "react";

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

const AddProjectButton = () => {
  return (
    <button className="bg-orange-600 text-white px-2 pr-3 text-[14px] rounded-md flex gap-1 items-center">
      <Add sx={{ fontSize: "22px" }} className="mt-[2px]" />
      <span>New Task</span>
    </button>
  );
};

export default TaskHeader;
