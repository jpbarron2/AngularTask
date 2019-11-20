const Task = require("../models/task");

module.exports = {
  home: (req, res) => {
    Task.find({},(err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },
  find: (req, res) => {
    Task.findOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },
  create: (req, res) => {
    Task.create(req.body, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },
  delete: (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  }
};
