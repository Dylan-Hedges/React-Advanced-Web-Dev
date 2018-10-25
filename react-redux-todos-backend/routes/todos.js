const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

//GET all todos route
router.get("/", function(req, res, next){
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => next(err));
});

//CREATE todo route
router.post("/", function(req, res, next){
  Todo.create(req.body)
    .then(todo => res.status(201).send(todo))
    .catch(err => next(err));
});

//DELETE todo route
router.delete("/:id", function(req, res, next){
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});


module.exports = router;
