import { useContextApp } from "@/app/contextApp";
import { BorderAll, CloseOutlined, LibraryBooks } from "@mui/icons-material";
import React from "react";

const ProjectWindow = () => {
  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useContextApp();
  return (
    <>
      <div
        className={`${
          openProjectWindow ? "block" : "hidden"
        } w-[48%] max-sm:w-[82%] max-[600]:w-[93%] z-[85] p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 dark:border-slate-700 bg-white dark:bg-[#14213d] rounded-lg shadow-md`}
      >
        <Header />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2 pt-8 px-7 mt-3"
        >
          <ProjectInput />
          <Footer />
        </form>
      </div>
    </>
  );
};

function Header() {
  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useContextApp();
  return (
    <div className="flex justify-between items-center pt-7 px-7">
      <div className="flex items-center gap-2">
        <div className="p-[7px] bg-orange-200 dark:bg-orange-500 rounded-lg flex items-center justify-center">
          <BorderAll
            sx={{ fontSize: "21px" }}
            className="text-orange-600 dark:text-orange-200"
            onClick={() => setOpenProjectWindow(false)}
          />
        </div>
        <span className="font-semibold text-lg text-darkBackground dark:text-lightBackground">
          Add Project
        </span>
      </div>
      <CloseOutlined
        sx={{ fontSize: "18px" }}
        className="text-slate-300 cursor-pointer"
        onClick={() => setOpenProjectWindow(false)}
      />
    </div>
  );
}

function ProjectInput() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] font-medium text-slate-600 dark:text-slate-300">
        Project Name
      </span>
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <input
            placeholder="Enter Project Name..."
            className="p-[10px] text-[13px] w-full rounded-md border dark:border-slate-700 outline-none dark:bg-blue-950"
          />
          <p className="text-[11px] mt-2 text-red-500">Error</p>
        </div>
        <div className="w-12 h-10 text-white flex items-center justify-center bg-orange-600 rounded-lg cursor-pointer">
          <LibraryBooks />
        </div>
      </div>
    </div>
  );
}
function Footer() {
  const {
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useContextApp();
  return (
    <div className="w-[102%] p-[12px] mt-8 mb-4 flex gap-3 justify-end items-center">
      <button
        onClick={() => setOpenProjectWindow(false)}
        className="border border-slate-200 text-slate-400 text-[13px] p-2 px-6 rounded-md hover:border-slate-300 transition-all"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 text-white text-[13px] p-2 px-4 rounded-md transition-all"
      >
        Add Project
      </button>
    </div>
  );
}

export default ProjectWindow;
