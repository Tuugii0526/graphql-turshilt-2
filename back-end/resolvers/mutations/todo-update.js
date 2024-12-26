import TodoModel from "../../mongoose/model/todo.js";

export const todoUpdate = async (_, { todo, id }) => {
  try {
    const updatedTask = TodoModel.findByIdAndUpdate(id, todo, { new: true });
    return updatedTask;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
