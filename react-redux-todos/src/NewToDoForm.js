import React, {Component} from "react";

//Not connected to Redux (not a container) - we pass back the result to TodoList.js for Redux manipulation
export default class NewToDoForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      task: ""
    };
  }

  handleSubmit(e){
    //Stops page refreshing
    e.preventDefault();
    //Dispatches action
    this.props.handleSubmit(this.state.task);
    //Resets entire form (previous method reset individually)
    e.target.reset();
    //Comes from {...props} in TodoList.js component - lets us redirect
    this.props.history.push("/todos");
  }
  //Controlled input
  handleChange(e){
      //Displays what the user types in the field - sets the state of the field to the key the user typed, renders the field each time
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render(){
    return(
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
    );
  }
}
