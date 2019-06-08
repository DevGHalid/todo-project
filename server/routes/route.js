const { TodoList } = require("../models/todoList");
const { Router } = require("express");

const router = new Router();

// add todo to bd
router.post("/add", async (req, res, next) => {
  const data = req.body;
  try {
    if ("title" in data && "computed" in data) {
      // add new todo
      const todoList = new TodoList(data);
      await todoList.save();

      // get all lists todo
      const todoItems = await todoList.getStateActive();
      res.json(todoItems);
    } else {
      const error = new Error("Bad request");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

router.post("/update", (req, res, next) => {
  const data = req.body;

  if ("index" in data && "payload" in data) {
    const { index, payload } = data;

    const todoItem = TodoList.updateOne({ _id: index }, { $set: payload })
      .then(data => TodoList.findOne({ _id: index }))
      .then(item => res.json(item))
      .catch(next);
  } else {
    const error = new Error("Bad request");
    error.status = 400;
    next(error);
  }
});

module.exports = router;
