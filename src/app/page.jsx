"use client";
import Sidebar from "./components/Sidebar";
import ContextAppProvider, { useContextApp } from "./contextApp";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";

export default function Home() {
  const handleClose = () => {
    setOpenSideBar(!openSideBar);
  };
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sidebarMenuObject: { sideBarMenu, setSideBarMenu },
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
          className="w-full h-full z-50 bg-slate-800/55 fixed opacity-45 backdrop-blur-xl"
          onClick={handleClose}
        ></div>
      )}
      <Sidebar />
      {selectedComponent && selectedComponent}
    </div>
  );
}
