import TodoModel from "../../mongoose/model/todo.js";

export const getAllTasks = async () => {
  try {
    const tasks = await TodoModel.find();
    return tasks;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
