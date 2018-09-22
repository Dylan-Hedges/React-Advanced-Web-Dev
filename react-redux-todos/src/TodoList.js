import React, {Component} from "react";
import Todo from "./Todo";
//Connects components to the Redux store
import {connect} from "react-redux";

class TodoList extends Component {
  constructor (props){
    //Used incase we ever want to pass props down
    super(props);
  }
  render(){
    let todos = this.props.todos.map((task, index) => (
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

//Brings Redux state into React component to be used as props - can be named anything but mapStateToProps is standard
function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos
  };
}

//Connects Redux store to this React component - Move export default down, returns a function with our TodoList inside
export default connect(mapStateToProps)(TodoList);
