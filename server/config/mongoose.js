var mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.connect("mongodb://localhost/angular-tasks", {
  useNewUrlParser: true
});
