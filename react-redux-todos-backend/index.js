const express = require("express");
const app = express();
//Allows us to make requests from localhost:3001 (backend) to localhost:3000 (frontend create-react-app)
const cors = require("cors");
//Dels with server-side logging
const morgan = require("morgan");
//Allows us to grab req.body for POST requests
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

//Use morgan, bodyparser and cors in our app
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
//Pre-fix all routes with the string below
app.use("/api/todos", todoRoutes);

//Error handeling logic
app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

//App listens on port 3001
app.listen(3001, function(){
  console.log("Server starting on port 3001")
})
