const { Router } = require("express");
const router = new Router();
const { TodoList } = require("../models/todoList");

router.get("/todos", async (req, res) => {
  const todoList = new TodoList();
  const todoItems = await todoList.getStateActive();

  res.json(todoItems);
});

module.exports = router;
