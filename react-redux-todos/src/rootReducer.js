//Imports consts from AC file - this is effective as if we chane the consts in the action creator file it changes everywhere
import {ADD_TODO, REMOVE_TODO} from "./actionCreators.js";


const initalState = {
  todos: [],
  id: 0
};

export default function rootReducer(state = initalState, action) {
  switch(action.type){
    case ADD_TODO:
      //Make a copy of state
      var newState = {...state};
      newState.id++;
      return{
        //Return object with a key of everything from state
        ...newState,
        todos: [...newState.todos, {task: action.task, id:newState.id}]
      }
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val.id !== action.id);
      return {...state, todos};
    default:
      return state;

  }

}
