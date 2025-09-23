import React, { useCallback, useState } from "react";
import UserIcon from "../assets/user-icon.png";
import TitleImg from "../assets/title-placeholder-img.svg";
import Memo from "../assets/memo.svg";
import InputField from "./ui/InputField";
import { Calendar } from "lucide-react";
import createTaskAPI from "./api/createTask";
import clsx from "clsx";

const CreateTask = ({ fetchAllTasks, showTaskListScreen }) => {
  // 3 states related to our task
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState();
  const [loading, setLoading] = useState(false);

  const handleTitleChange = useCallback(function (event) {
    setTaskTitle(event.target.value);
  }, []);
  const handleDescriptionChange = useCallback(function (event) {
    setTaskDescription(event.target.value);
  }, []);
  const handledateChange = useCallback(function (event) {
    setTaskDueDate(event.target.value);
  }, []);

  // validation
  const validate = useCallback(function (values) {
    const { taskTitle, taskDescription } = values;
    if (taskTitle && taskDescription) {
      return true;
    } else {
      const errorMsg = "Please fill out the title and description";
      console.error(errorMsg);
      return false;
    }
  }, []);

  const handleResponse = useCallback(
    function (responseData) {
      if (responseData.success) {
        fetchAllTasks();
        console.log("Handled Successfully");
      }
    },
    [fetchAllTasks]
  );

  const handleError = useCallback(function (errorMsg) {
    alert(errorMsg);
    console.log(errorMsg);
  }, []);
  const createNewTask = useCallback(
    function (values) {
      createTaskAPI(values, handleResponse, handleError, setLoading);
    },
    [handleError, handleResponse]
  );

  const handleAddTask = useCallback(() => {
    const values = {
      taskTitle,
      taskDescription,
      taskDueDate,
    };
    const isValid = validate(values);

    if (isValid) createNewTask(values);
  }, [createNewTask, taskDescription, taskTitle, taskDueDate, validate]);
  return (
    <div className="content-section create-task-section">
      <div className="create-task-card">
        <img src={UserIcon} alt="" width={263} />
        <h1 className="create-task-title-text">Create New Task</h1>
        {/* custom input field for title */}
        <InputField
          name={"new-task-title"}
          value={taskTitle}
          onChange={handleTitleChange}
          label={"Title"}
          type={"text"}
          inputImg={TitleImg}
          placeholder={"Title"}
        />
        {/* custom input field for description */}
        <InputField
          name={"new-task-description"}
          value={taskDescription}
          onChange={handleDescriptionChange}
          label={"Title"}
          type={"text"}
          inputImg={Memo}
          placeholder={"Description"}
          className={"input-margin"}
        />
        {/* custom input field for due date */}
        <InputField
          name={"new-task-due-date"}
          value={taskDueDate}
          onChange={handledateChange}
          label={"Due Date"}
          type={"date"}
          inputImg={Calendar}
          placeholder={"Description"}
          className={"input-margin"}
        />
        <div className="add-edit-task-btns">
          <button
            className={clsx(
              "btn",
              "add-task-btn",
              loading ? "disable-add-task-btn" : "cursor-pointer"
            )}
            disabled={loading}
            onClick={handleAddTask}
          >
            {loading ? "Adding Task" : "Add Task"}
          </button>
          <button
            className="btn cancel-btn cursor-pointer"
            onClick={showTaskListScreen}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
