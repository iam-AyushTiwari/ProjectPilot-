import { KeyboardArrowDown, Splitscreen } from "@mui/icons-material";
import React from "react";

const TaskSubHeader = () => {
  return (
    <div className="mt-24 flex justify-between items-center">
      <MyProjectText />
      <SortByButton />
    </div>
  );
};

const MyProjectText = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[41px] -mt-1 flex justify-center items-center h-[44px] rounded-md bg-orange-100">
        <Splitscreen
          sx={{ fontSize: "21px" }}
          className="text-lightPrimaryColor"
        />
      </div>
      <ul className="flex flex-col gap-[7px]">
        <li className="text-[17px] font-semibold flex gap-2 items-center">
          <div className="text-slate-700 dark:text-lightBackground flex gap-2 items-center">
            <span className="text-lg">All Projects</span>
            <span className="bg-slate-700 text-white text-[14px] p-[2px] px-2 rounded-md">
              6
            </span>
          </div>
          <KeyboardArrowDown className="text-slate-600 text-lg" />
        </li>
        <div className="flex gap-1 items-center">
          <li className="text-[12px] h-[4px] w-[220px] bg-slate-200 rounded-md overflow-auto">
            <div className="w-1/2 h-[100%] bg-lightPrimaryColor rounded-r-xl"></div>
          </li>
          <p className="text-[12px] text-slate-400 ml-3">20% Completed</p>
        </div>
      </ul>
    </div>
  );
};

const SortByButton = () => {
  return (
    <div className="flex text-[15px] font-semibold gap-3">
      <span className="text-slate-300">Sort by</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-800 dark:text-slate-500">Recent Task</span>
        <KeyboardArrowDown sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
};

export default TaskSubHeader;
