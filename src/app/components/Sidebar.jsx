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
      } h-screen py-8 flex flex-col items-center justify-between border-r bg-white dark:bg-darkBackground dark:border-slate-600 z-[90] md:z-[80] transition-all`}
    >
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
};

const Profile = () => {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useContextApp();
  const { toggleTheme, theme, setTheme } = useThemeContext();
  return (
    <div className="flex flex-col gap-8">
      <div className="w-7 h-7 rounded-md">
        <button onClick={toggleTheme}>
          {theme == "dark" ? (
            <div className="flex items-center gap-2">
              <LightModeIcon className="font-bold" sx={{ fontSize: "35px" }} />
              {openSideBar && <span className="text-slate-400">Light</span>}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <DarkModeIcon className="font-bold" sx={{ fontSize: "35px" }} />
              {openSideBar && <span className="text-slate-400">Dark</span>}
            </div>
          )}
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-7 h-7 rounded-md flex items-center gap-2">
          <AccountCircleIcon className="font-bold" sx={{ fontSize: "35px" }} />
        </div>
        {openSideBar && (
          <ul>
            <li className="font-bold text-[14px]">Ayush Tiwari</li>
            <li className="text-slate-400 text-[11px]">letsmail@gmail.com</li>
          </ul>
        )}
      </div>
    </div>
  );
};

const Menu = () => {
  const iconMap = {
    1: BorderAll,
    2: Splitscreen,
    3: Logout,
  };

  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sidebarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useContextApp();

  function handleClickedItem(id) {
    const updateMenuSideBar = sideBarMenu.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true };
      }
      return { ...item, isSelected: false };
    });
    setSideBarMenu(updateMenuSideBar);
  }
  return (
    <div className="flex flex-col gap-6 items-center text-slate-400">
      {sideBarMenu.map((menuItem) => {
        const IconComponent = iconMap[menuItem.id.toString()];
        return (
          <div
            onClick={() => {
              if (menuItem.id === 1 || menuItem.id === 2) {
                handleClickedItem(menuItem.id);
              }
            }}
            key={menuItem.id}
            className="flex items-center gap-2 cursor-pointer"
          >
            <IconComponent
              sx={{ fontSize: "25px" }}
              className={`${
                menuItem.isSelected ? "text-orange-500" : "text-slate-300"
              }`}
            />
            {openSideBar && (
              <span
                className={`${
                  menuItem.isSelected ? "text-orange-500" : "text-slate-300"
                }`}
              >
                {menuItem.name}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Logo = () => {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useContextApp();
  return (
    <div className="flex items-center gap-2 justify-center">
      <TaskAltIcon className="font-bold" sx={{ fontSize: "35px" }} />
      {openSideBar && (
        <div className="text-xl flex items-center gap-1 justify-center">
          <span className="font-bold">Project</span>
          <span className="text-slate-600">Pilot</span>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
