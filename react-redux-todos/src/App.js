import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
//Link - make <a> with React Router; Route - add routes; Redirect - so we can redirect users;
import { Link, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the App!</h1>
        <p><Link to="/todos">See my todos!</Link></p>
        <p><Link to="/todos/new">Add a todo!</Link></p>
        <Route path="/todos" component = {TodoList}/>
        <Route exact path="/" render={() => <Redirect to="/todos"/>} />
      </div>
    );
  }
}

export default App;
