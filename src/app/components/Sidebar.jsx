import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useThemeContext } from "../contextAPI/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BorderAll, Logout, Splitscreen } from "@mui/icons-material";
import { useContextApp } from "../contextApp";

const Sidebar = () => {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useContextApp();
  return (
    <div
      className={`${
        openSideBar
          ? "w-[288px] fixed shadow-xl"
          : "w-[97px] max-[940px]:hidden"
      } h-screen py-8 flex flex-col items-center justify-between border-r bg-white dark:bg-darkBackground dark:border-slate-600 z-[90] transition-all`}
    >
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
};

const Profile = () => {
  const { toggleTheme, theme, setTheme } = useThemeContext();
  return (
    <div className="flex flex-col gap-8">
      <div className="w-7 h-7 rounded-md">
        <button onClick={toggleTheme}>
          {theme == "dark" ? (
            <LightModeIcon className="font-bold" sx={{ fontSize: "35px" }} />
          ) : (
            <DarkModeIcon className="font-bold" sx={{ fontSize: "35px" }} />
          )}
        </button>
      </div>
      <div className="w-7 h-7 rounded-md">
        <AccountCircleIcon className="font-bold" sx={{ fontSize: "35px" }} />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex flex-col gap-6 items-center text-slate-400">
      <BorderAll
        sx={{ fontSize: "27px" }}
        className="text-lightPrimaryColor cursor-pointer"
      />
      <Splitscreen sx={{ fontSize: "25px" }} className="cursor-pointer" />
      <Logout sx={{ fontSize: "25px" }} className="cursor-pointer" />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="w-7 h-7 rounded-md">
      <TaskAltIcon className="font-bold" sx={{ fontSize: "35px" }} />
    </div>
  );
};

export default Sidebar;
