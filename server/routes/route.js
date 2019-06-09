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
      const response = await todoList.save();

      res.json(response);
    } else {
      const error = new Error("Bad request");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

router.post("/update", async (req, res, next) => {
  const data = req.body;
  try {
    if ("id" in data && "payload" in data) {
      const { id, payload } = data;
      const response = await TodoList.updateOne({ _id: id }, { $set: payload });

      if (response.ok) {
        const todoItem = await TodoList.findOne({ _id: id });
        res.json(todoItem);
      } else {
        res.send(null);
      }
    } else {
      const error = new Error("Bad request");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
