import React from "react";
import TaskHeader from "./Components/TaskHeader";
import TaskSubHeader from "./Components/TaskSubHeader";
import TaskList from "./Components/TaskList";

const AllTasksContainer = () => {
  return (
    <div className="bg-slate-50 dark:bg-darkBackground w-full p-10 overflow-scroll overflow-x-hidden">
      <TaskHeader />
      <TaskSubHeader />
      <TaskList />
    </div>
  );
};

export default AllTasksContainer;
