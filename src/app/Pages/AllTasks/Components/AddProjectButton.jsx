"use client";

import { Add, MenuIcon } from "@mui/icons-material";

const AddProjectButton = () => {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useContextApp();

  const toggleSideBar = () => {
    console.log("Before open side bar: ", openSideBar);
    setOpenSideBar(!openSideBar);
    console.log(openSideBar);
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        className="bg-orange-600 text-white px-2 h-9 pr-3 text-[14px] rounded-md flex gap-1 items-center"
        onClick={() => {
          console.log("Something");
        }}
      >
        <Add sx={{ fontSize: "22px" }} className="mt-[2px]" />
        <span className="max-sm:hidden">New Task</span>
      </button>
      <button className="sm:hidden" onClick={toggleSideBar}>
        <MenuIcon className="text-slate-400 h-9 cursor-pointer" />
      </button>
    </div>
  );
};

export default AddProjectButton;
