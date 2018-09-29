export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//Action Creator - function that returns an object
export function addTodo(task){
  return {
    type: ADD_TODO,
    task
  };
}

export function removeTodo(id){
  return {
    type: REMOVE_TODO,
    id
  };
}
