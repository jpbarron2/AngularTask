const Task = require("../models/task");

module.exports = {
  home: (req, res) => {
    Task.find()
      .then(data => res.json(data));
      .catch(err => res.json(err));
  },
  find: (req, res) =>{
    Task.find({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  create: (req, res) =>{
    const newTask = req.body;
    Task.create(newTask)
      console.log('Task successfully added', newTask);
      .then(newTask => res.json(newTask))
      .catch(err => res.json(err))
  },
  delete: (req, res) => {
    Task.findOneAndDelete({_id: req.params.id})
      .then(console.log('Task Deleted'))
      .catch(err => res.json(err))
  }

};
