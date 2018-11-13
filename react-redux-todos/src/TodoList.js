import React, {Component} from "react";
import Todo from "./Todo";
import NewToDoForm from "./NewToDoForm";
//Connects components to the Redux store
import {connect} from "react-redux";
//Thunks - asynchronous action creators that return a function
import {addTodo, removeTodo, getTodos} from "./actionCreators";
import {Route} from "react-router-dom";

//Connected to Redux (a container)
class TodoList extends Component {
  constructor (props){
    //Used incase we ever want to pass props down
    super(props);
    //Method binding - binds method to component
    this.handleAdd= this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  handleAdd(val){
    this.props.addTodo(val);
  }
  removeTodo(id){
    this.props.removeTodo(id);
  }
  //"<NewToDoForm {...props}" - pass in all props to new todo component, allows us to redirect; removeTodo - passes the removeToDo function to the todo as props
  render(){
    let todos = this.props.todos.map((val, index) => (
    <Todo
      removeTodo={this.removeTodo.bind(this, val.id)}
      task={val.task}
      key={index} />
  ));
    return(
      <div>
        <Route path="/todos/New" component={props => (
          <NewToDoForm {...props} handleSubmit={this.handleAdd}/>
        )} />
        <Route exact path="/todos" component={() => <div><ul>{todos}</ul></div>} />
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
export default connect(mapStateToProps, {addTodo, removeTodo}, getTodos)(TodoList);
