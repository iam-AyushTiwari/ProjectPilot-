"use client";
import Sidebar from "./components/Sidebar";
import ContextAppProvider from "./contextApp";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasks";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins dark:bg-darkBackground bg-lightBackground dark:text-darkPrimaryColor text-lightPrimaryColor duration-200">
      <Sidebar />
      {/* All projects page */}
      <AllProjects />
      {/* <AllTasksContainer /> */}
    </div>
  );
}
