const express = require("express");
const router = express.Router();
//Bring in Mongoose model
const Todo = require("../models/todo");

//GET all todos route; ".find" = mongoose method
router.get("/", function(req, res, next){
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => next(err));
});

//CREATE todo route; ".create" = mongoose method
router.post("/", function(req, res, next){
  Todo.create(req.body)
    .then(todo => res.status(201).send(todo))
    .catch(err => next(err));
});

//DELETE todo route; ".findByIdAndRemove" = mongoose method
router.delete("/:id", function(req, res, next){
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});


module.exports = router;
