const mongoose = require('mongoose');
const { Schema } = mongoose;

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
  }
});

module.exports.TodoList = mongoose.model('TodoList', schema);
