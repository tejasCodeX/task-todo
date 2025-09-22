import React from "react";
import EditTasking from "../assets/edit-task-logo.svg";

const EditTask = () => {
  return (
    <div className="create-task-section">
      <div className="create-task-card">
        <img src={EditTasking} alt="edit task" width={263} />
        <h1 className="create-task-title-test">Edit Task </h1>
        {/* custom input field for title */}
        {/* custom input field for description */}
        {/* custom input field for date */}
        <div className="add-edit-task-btns">
          <button className="edit-task-btn">Save</button>
          <button className="btn cancel-btn cursor-pointer">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
