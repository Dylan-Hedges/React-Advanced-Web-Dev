//Brings in Mongoose
const mongoose = require("mongoose");
//Connects to Mongoose
mongoose.connect("mongodb://localhost/todos-backend");
//Log Mongo queries for debugging
mongoose.set("debug", true);
//Use ES2015 promises
mongoose.Promise = Promise;

//Schema
const todoSchema = new mongoose.Schema({
  task: String
});

//Model
const Todo = mongoose.model("Todo", todoSchema);

//Export Model
module.exports = Todo;
