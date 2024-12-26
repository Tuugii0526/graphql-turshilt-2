import TodoModel from "../../mongoose/model/todo.js";

export const search = async (_, term) => {
  console.log("TERM:", term);

  try {
    const results = TodoModel.find({
      $or: [
        {
          description: { $regex: String(term), $options: "i" },
        },
        {
          taskName: { $regex: String(term), $options: "i" },
        },
      ],
    });
    return results;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
