//Imports consts from action creator file - this is effective as if we chane the consts in the action creator file it changes everywhere
import {ADD_TODO, REMOVE_TODO, GET_TODOS} from "./actionCreators.js";

//We remove "id:0" because mongoose keeps track of ids
const initalState = {
  todos: []
};

export default function rootReducer(state = initalState, action) {
  switch(action.type){
    //GET reducer
    case GET_TODOS:
      return{...state, todos: action.data};
    //ADD reducer - "...state.todos" - return our todos; "action.todo" along with what we got back from the AC
    case ADD_TODO:
      return{...state, todos: [...state.todos, action.todo]};
    //REMOVE reducer - "._id" with mongo ids have an _ at the start
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val._id !== action.id);
      return {...state, todos};
    default:
      return state;
  }
}
