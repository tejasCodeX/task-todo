import React, { useState } from "react";
import NoTask from "./NoTask";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";
import Loading from "./ui/Loading";

const TaskMain = () => {
  const [currComponent, setCurrComponent] = useState("editTask");

  const showNoTaskScreen = function () {
    setCurrComponent("noTask");
  };
  const showCreateTaskScreen = function () {
    setCurrComponent("createTask");
  };
  const showTaskListScreen = function () {
    setCurrComponent("taskList");
  };
  const showEditTaskScreen = function () {
    setCurrComponent("editTask");
  };
  const showViewtaskScreen = function () {
    setCurrComponent("viewTask");
  };
  return (
    <>
      {currComponent === "loading" && <Loading />}
      <div className="container-div">
        {currComponent === "noTask" && <NoTask />}
        {currComponent === "taskList" && <TaskList />}
        {currComponent === "createTask" && <CreateTask />}
        {currComponent === "viewTask" && <ViewTask />}
        {currComponent === "editTask" && <EditTask />}
      </div>
    </>
  );
};

export default TaskMain;
