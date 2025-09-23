import React, { useCallback, useEffect, useState } from "react";
import NoTask from "./NoTask";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";
import Loading from "./ui/Loading";
import fetchAPI from "./api/fetchtask";

const TaskMain = () => {
  const [currComponent, setCurrComponent] = useState("loading");
  const [tasks, setTasks] = useState([]);

  const showNoTaskScreen = useCallback(function () {
    setCurrComponent("noTask");
  }, []);
  const showCreateTaskScreen = useCallback(function () {
    setCurrComponent("createTask");
  }, []);
  const showTaskListScreen = useCallback(function () {
    setCurrComponent("taskList");
  }, []);
  const showEditTaskScreen = useCallback(function () {
    setCurrComponent("editTask");
  }, []);
  const showViewtaskScreen = useCallback(function () {
    setCurrComponent("viewTask");
  }, []);

  const handleResponse = useCallback(
    function (responseData) {
      console.log(responseData);
      const extractedTasks = responseData.tasks;
      setTasks(extractedTasks);
      if (extractedTasks.length) {
        showTaskListScreen();
      } else {
        showNoTaskScreen();
      }
    },
    [showTaskListScreen, showNoTaskScreen]
  );
  const handleError = useCallback(function (errorMesg) {
    alert(errorMesg);
    console.log(errorMesg);
  }, []);
  const fetchAllTasks = useCallback(
    function () {
      fetchAPI(handleResponse, handleError);
    },
    [handleResponse, handleError]
  );

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks]);
  return (
    <>
      {currComponent === "loading" && <Loading />}
      <div className="container-div">
        {currComponent === "noTask" && (
          <NoTask showCreateTaskScreen={showCreateTaskScreen} />
        )}
        {currComponent === "taskList" && <TaskList />}
        {currComponent === "createTask" && (
          <CreateTask
            fetchAllTasks={fetchAllTasks}
            showTaskListScreen={showTaskListScreen}
          />
        )}
        {currComponent === "viewTask" && <ViewTask />}
        {currComponent === "editTask" && <EditTask />}
      </div>
    </>
  );
};

export default TaskMain;
