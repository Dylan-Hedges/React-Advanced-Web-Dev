import React, {Component} from "react";
import Todo from "./Todo";
//Connects components to the Redux store
import {connect} from "react-redux";
import {addTodo, removeTodo} from "./actionCreators";

class TodoList extends Component {
  constructor (props){
    //Used incase we ever want to pass props down
    super(props);
    //Method binding - binds method to component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state={
      task: ""
    };
  }

  handleSubmit(e){
    //Stops page refreshing
    e.preventDefault();
    //Dispatches action
    this.props.addTodo(this.state.task);
    //Resets entire form (previous method reset individually)
    e.target.reset();
    //Sets the field to blank after dispatching action
    // this.setState({
    //   task: ""
    // });
  }
  //Controlled input
  handleChange(e){
    //Displays what the user types in the field - sets the state of the field to the key the user typed, renders the field each time
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  removeTodo(id){
    this.props.removeTodo(id);
  }
  //removeTodo - passes the removeToDo function to the todo as props
  render(){
    let todos = this.props.todos.map((val, index) => (
    <Todo
      removeTodo={this.removeTodo.bind(this, val.id)}
      task={val.task}
      key={index} />
  ));
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
          />
          <button>Add a Todo</button>
        </form>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

//Maps the Redux store to the props of this component - can be named anything but mapStateToProps is standard
function mapStateToProps(reduxState){
  //todos: = a new prop of this component; reduxState.todos = maps our array of todos in the redux store to this component under the prop "todos"
  return {
    todos: reduxState.todos
  };
}



//Connects Redux store to this React component - Move export default down, returns a function with our TodoList inside
export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);
