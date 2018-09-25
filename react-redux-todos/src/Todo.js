import React, {Component} from "react";

//{task} - destructured, take only the prop of task
const Todo = ({task, removeTodo}) =>
  <li>
    {task}
    <button onClick={removeTodo}>X</button>
  </li>



export default Todo;
