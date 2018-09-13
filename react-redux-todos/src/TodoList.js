import React, {Component} from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor (props){
    //Used incase we ever want to pass props down
    super(props);
    this.state={
      todos: ["Eat", "Sleep", "Go Home"]
    };
  }
  render(){
    let todos = this.state.todos.map((task, index) => (
    <Todo task={task} key={index} />
  ));
    return(
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}
