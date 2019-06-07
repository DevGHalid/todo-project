const mongoose = require('mongoose');
const { Schema } = mongoose;
const { CODE_ACTIVE } = require('../status');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  computed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status_id: {
    type: Number,
    default: CODE_ACTIVE
  }
});

module.exports.TodoList = mongoose.model('TodoList', schema);
