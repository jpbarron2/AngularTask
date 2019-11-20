var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
mongoose.Promise = global.Promise;

const TaskSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: [true, "Task description is required"],
      minlength: [3, "Description must be longer than 3 characters"]
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

TaskSchema.plugin(uniqueValidator);
var Task = mongoose.model("Tasks", TaskSchema);
module.exports = Task;
