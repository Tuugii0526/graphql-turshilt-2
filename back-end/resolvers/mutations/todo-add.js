import TodoModel from "../../mongoose/model/todo.js";

export const todoAdd = async (_, todo) => {
  try {
    const todoInstance = new TodoModel(todo);
    const newCreatedTodo = await todoInstance.save();
    return newCreatedTodo;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
