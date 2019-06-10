const { Router } = require('express');
const { TodoList } = require('../models/todoList');
const { STATE_NOACTIVE } = require('../state');
const router = new Router();

// create todo to bd
router.post('/add', async (req, res, next) => {
  const data = req.body;
  try {
    if ('title' in data && 'computed' in data) {
      // add new todo
      const todoList = new TodoList(data);
      const response = await todoList.save();

      res.json(response);
    } else {
      const error = new Error('Bad request');
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

// update
router.put('/update', async (req, res, next) => {
  const data = req.body;
  try {
    if ('id' in data && 'payload' in data) {
      const { id, payload } = data;
      const response = await TodoList.updateOne({ _id: id }, { $set: payload });
      const todoItem = await TodoList.findOne({ _id: id });
      res.json(todoItem);
    } else {
      const error = new Error('Bad request');
      error.status = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
});

//delete todo
router.delete('/:id/del', (req, res, next) => {
  if ('id' in req.params) {
    const { id } = req.params;
    TodoList.updateOne({ _id: id }, { $set: { stateAt: STATE_NOACTIVE } })
      .then(data => res.json(data))
      .catch(next);
  }
});

module.exports = router;
