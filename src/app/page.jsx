"use client";
import Sidebar from "./components/Sidebar";
import ContextAppProvider, { useContextApp } from "./contextApp";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";

export default function Home() {
  const handleClose = () => {
    setOpenSideBar(!openSideBar);
  };
  const handleCloseProjectWindow = () => {
    setOpenProjectWindow(!openProjectWindow);
  };
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sidebarMenuObject: { sideBarMenu, setSideBarMenu },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useContextApp();

  const componentMap = {
    1: <AllProjects />,
    2: <AllTasksContainer />,
  };

  const componentKey = sideBarMenu.findIndex((item) => item.isSelected);

  const selectedComponent = componentMap[componentKey + 1] || null;

  return (
    <div className="flex w-full h-screen poppins dark:bg-darkBackground bg-lightBackground dark:text-darkPrimaryColor text-lightPrimaryColor duration-200">
      {openSideBar && (
        <div
          className="w-full h-full z-[82] bg-slate-800/85 fixed opacity-45 backdrop-blur-xl"
          onClick={handleClose}
        ></div>
      )}
      {openProjectWindow && (
        <div
          className="w-full h-full z-[82] bg-slate-800/85 fixed opacity-45 backdrop-blur-2xl"
          onClick={handleCloseProjectWindow}
        ></div>
      )}
      <Sidebar />
      {selectedComponent && selectedComponent}
    </div>
  );
}
