const mongoose = require("../mongoose");
const { Schema } = mongoose;
const { STATE_ACTIVE } = require("../state");

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
  stateAt: {
    type: Number,
    default: STATE_ACTIVE
  }
});

schema.methods.getStateActive = () => {
  return mongoose.models.TodoList.find({ stateAt: STATE_ACTIVE });
};

module.exports.TodoList = mongoose.model("TodoList", schema);
