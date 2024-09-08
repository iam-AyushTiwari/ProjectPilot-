import React from "react";
import ProjectHeader from "./Components/ProjectHeader";
import ProjectSubHeader from "./Components/ProjectSubHeader";
import AllProjectSection from "./Components/AllProjectSection";
import StatsRightSideBar from "./Components/StatsRightSideBar";

const AllProjects = () => {
  return (
    <div className="bg-slate-50 dark:bg-darkBackground w-full min-h-screen flex">
      <AllProjectArea />
      <StatsRightSideBar />
    </div>
  );
};

const AllProjectArea = () => {
  return (
    <div className="w-[100%] md:w-[78%] p-10 flex flex-col gap-3 border-r dark:border-slate-600">
      <ProjectHeader />
      <ProjectSubHeader />
      <AllProjectSection />
    </div>
  );
};

export default AllProjects;
