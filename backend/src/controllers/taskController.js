import Task from "../models/taskModels.js";

const newTask = async (req, res) => {
  try {
    // 1.extract data from the body
    const { title, description, due_date } = req.body;

    // 2.validation on the incoming data
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and Description not found" });
    }
    // create document based on the schema
    const newTask = await Task.create({ title, description, due_date });

    // success response
    res.status(200).json({
      success: true,
      message: "Task Created Successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Failed to Create Task",
    });
  }
};

const getTasks = async (req, res) => {
  try {
    // get all the task from mongodb
    const tasks = await Task.find({});

    res.status(200).json({
      success: true,
      tasks: tasks,
      message: "Fetched All Task Successfully",
    });
  } catch (error) {
    console.error("Failed to fetch task", error);
    res.status(400).json({
      success: false,
      message: "Failed to Fetch Task",
    });
  }
};

const updateTask = async (req, res) => {
  // get the id from params
  // validation on body and id
  // find the document according to the id
  // update the document
  // save the document
  // send a response
  try {
    // get the id from params
    const { id } = req.params;
    // get the data to update, from body
    const { title, description, due_date } = req.body;
    // vlidation on body and id
    if (!id) {
      return res.status(400).json({ message: "Task id required" });
    }
    // find the document according to the id
    const task = await Task.findById(id);

    // update th document
    if (title) task.title = title;
    if (description) task.description = description;
    if (due_date) task.due_date = due_date;
    if (!due_date) task.due_date = null;

    // save th document
    const updatedTask = await task.save();

    // send a response
    res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Failed to update task", error);
    res.status(400).json({
      success: false,
      message: "Failed to Fetch Task",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "No id provided",
      });
    }

    await Task.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    console.error("Error in deleting task", error);
    res.status(400).json({
      success: false,
      message: "Task Deleted Unsuccessfully",
    });
  }
};
export { newTask, getTasks, updateTask, deleteTask };
