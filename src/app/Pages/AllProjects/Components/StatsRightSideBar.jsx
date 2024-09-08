import { Splitscreen } from "@mui/icons-material";
import React from "react";

const StatsRightSideBar = () => {
  return (
    <div className="w-[22%] flex justify-end items-center max-lg:hidden">
      <div className="h-[92%] w-[94%] bg-white dark:bg-[#14213d] rounded-l-3xl p-3 flex flex-col">
        <Header />
        <div className="flex flex-col gap-11 items-center justify-center mt-6">
          <CircularChart />
          <ProjectCompletedLabels />
        </div>
        <ProjectsList />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <h1 className="text-[22px] font-bold text-center mt-7 text-slate-700 dark:text-darkPrimaryColor">
      Projects Completed
    </h1>
  );
};

const CircularChart = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-40 h-40 bg-slate-100 mt-5 rounded-full flex items-center justify-center">
        <div className="w-[86%] flex justify-center items-center h-[86%] bg-white dark:bg-[#14213d] rounded-full">
          <span className="text-xl font-semibold text-lightPrimaryColor">
            90%
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectCompletedLabels = () => {
  return (
    <div className="flex justify-center flex-col gap-1 items-center text-slate-700 dark:text-darkPrimaryColor">
      <p className="font-bold text-[17px]">3 Completed</p>
      <p className="text-[13px] text-slate-400">20 Tasks Done</p>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <ul className="flex flex-col gap-3 mt-16 mx-4 overflow-auto">
      <SingleProject />
      <hr />
      <SingleProject />
      <hr />
      <SingleProject />
    </ul>
  );
};

const SingleProject = () => {
  return (
    <li className="p-3 flex gap-2 items-center">
      <div className="w-8 h-8 bg-lightPrimaryColor rounded-md justify-center items-center flex text-slate-100">
        <Splitscreen sx={{ fontSize: "19px" }} />
      </div>
      <ul className="text-slate-700 dark:text-darkPrimaryColor">
        <li className="text-[14px] font-semibold">Project 1</li>
        <li className="text-[12px] text-slate-400">3 Tasks</li>
      </ul>
    </li>
  );
};

export default StatsRightSideBar;
