var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/angular-tasks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;