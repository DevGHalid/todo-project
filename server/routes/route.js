const mongoose = require('../mongoose');
const { TodoList } = require('../models/todo');
const { Router } = require('express');
const router = new Router();

router.post('/add', (req, res, next) => {
  console.log(TodoList.model);

  if (req.body.hasOwnProperty('title') && req.body.hasOwnProperty('computed')) {
  } else {
    res.send({ error: 400, message: 'Not property' });
  }
});

module.exports = router;
