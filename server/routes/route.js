const mongoose = require("../mongoose");
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
      res.json(await todoList.getStateActive());
    } else {
      const error = new Error("Bad request");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", (req, res) => {});

module.exports = router;
