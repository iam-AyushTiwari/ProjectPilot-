import { KeyboardArrowDown, Search } from "@mui/icons-material";
import React from "react";

const ProjectSubHeader = () => {
  return (
    <div className="mt-20 flex justify-between font-bold items-center">
      <MyProjectText />
      <SortByButton />
    </div>
  );
};

const MyProjectText = () => {
  return (
    <p className="md:text-[26px] text-[17px] text-slate-700 dark:text-darkPrimaryColor font-bold">
      My Projects
    </p>
  );
};

const SortByButton = () => {
  return (
    <div className="flex md:text-[15px] text-[10px] font-semibold gap-3">
      <span className="text-slate-300">Sort by</span>
      <div className="flex gap-1 items-center cursor-pointer">
        <span className="text-slate-800 dark:text-slate-500">
          Recent Project
        </span>
        <KeyboardArrowDown sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
};

export default ProjectSubHeader;
