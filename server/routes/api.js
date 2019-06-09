const { Router } = require("express");
const router = new Router();
const { TodoList } = require("../models/todoList");

router.get("/todos", (req, res, next) => {
  const todoList = new TodoList();
  todoList
    .getStateActive()
    .then(item => res.json(item))
    .catch(next);
});

module.exports = router;
