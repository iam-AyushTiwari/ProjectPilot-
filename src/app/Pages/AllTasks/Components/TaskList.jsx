import {
  Cached,
  Circle,
  DeleteOutlineOutlined,
  EditOutlined,
} from "@mui/icons-material";
import { Tabs } from "@mui/material";
import React from "react";

const TaskList = () => {
  return (
    <div className="ml-12 mt-11 flex-col flex gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        <SingleTask />
        <SingleTask />
      </div>
    </div>
  );
};

const Task = () => {
  return (
    <div>
      <div>
        <span>On Going Tasks</span>
        <span className="bg-lightPrimaryColor text-white px-2 rounded-md">
          7
        </span>
      </div>
      <div className="text-slate-400 flex gap-2 items-center">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 px-2 rounded-md">8</span>
      </div>
    </div>
  );
};

const SingleTask = () => {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox />
      <div className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-centerb justify-center p-5 py-6">
        <div className="flex gap-3 items-center">
          <div>
            <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
              <List className="text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <span>Create the UI design of the task</span>
            <div className="flex">
              <span className="text-slate-400 text-[13px] p-[2px]">
                Project
              </span>
            </div>
          </div>
        </div>
        {/* status */}
        <div className="flex gap-36 font-bold items-center">
          <div className="flex gap-2 items-center">
            <Cached className="text-[24px] text-slate-400" />
            <span>In Progress</span>
          </div>
        </div>
        {/* Priority */}
        <div className="flex gap-2 items-center">
          <Circle className="text-[10px] text-green-600" />
          <span className="text-[14px] text-slate-400">Low</span>
        </div>
        {/* Action button */}
        <div className="flex gap-2 items-center">
          <div className="rounded-lg p-2 flex items-center justify-center caret-purple-50 bg-orange-200 hover:bg-orange-200 transition-all">
            <EditOutlined
              sx={{ fontSize: "17px" }}
              className="text-lightPrimaryColor"
            />
          </div>
          <div className="rounded-lg p-2 flex items-center justify-center caret-purple-50 bg-orange-200 hover:bg-orange-200 transition-all">
            <DeleteOutlineOutlined
              sx={{ fontSize: "17px" }}
              className="text-slate-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;