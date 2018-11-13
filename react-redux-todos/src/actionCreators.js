export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

//GET todo - standard action creator that returns an object, gets all todos
function handleTodos(data){
  return {
    type: GET_TODOS,
    data
  };
}

//ADD todo - standard action creator that returns an object, reducer then update state (add)
function handleAdd(todo){
  return {
    type: ADD_TODO,
    task
  };
}

//REMOVE todo - standard action creator that returns an object, reducer then update state (remove)
function handlremoveTodo(id){
  return {
    type: REMOVE_TODO,
    id
  };
}

//GET todos - Action creator that returns a function not an object(applies to ADD and REMOVE) executes an asynchronous action, once completed, dispatch action action creator
export function getTodos(){
  return dispatch => {
    return fetch("http://localhost:3001/api/todos")
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log("SOMETHING WENT WRONG!", err))
  };
}
//ADD todo - return fetch() is an AJAX Call; dispatch(handleAdd(data)) dispatches action creator which then tell reducer to update state; res.json() - convert the response to JSON
export function addTodo(task){
  return dispatch => {
    return fetch("http://localhost:3001/api/todos", {
      method: "POST",
      headers: new Headers ({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
    .then(res => res.json())
    .then(data => dispatch(handleAdd(data)))
    .catch(err => console.log("SOMETHING WENT WRONG!", err))
  };
}

//REMOVE todo
export function removeTodo(id){
  return dispatch => {
    return fetch(`http://localhost:3001/api/todos/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => dispatch(handleRemove(id)))
    .catch(err => console.log("SOMETHING WENT WRONG!", err))
  }
}
