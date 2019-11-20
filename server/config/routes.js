const controller = require("../controller/tasks");

module.exports = app => {
  app.get("/api/task", controller.home);
  app.get("/api/task/:id", controller.find);
  app.put("/api/task/:id", controller.update);
  app.delete("/api/:id", controller.delete);
  app.post("/api/task", controller.create);
};
