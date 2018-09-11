
const initalState = {
  todos: [],
  id: 0
};

//1. Reducer - a pure function, defines inital state, takes in actions TYPE keyword, copys state, makes changes, returns new state (dont directly manipulate state)
function rootReducer(state=initalState, action){
  switch (action.type){
    case "ADD_TODO":
      //Create a copy of the state
      var newState = {...state };
      //Increment the id by 1
      newState.id++;
      //Return a new object
      return{
        //With whatever was in the state before (with incremented id)
        ...newState,
        //And a todos property; ...newState.todos - take old todos; {task: action.task, - take what the user typed in  ("let newTask") and assign it to the new state; , id: newState.id} - the incremented id above
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      };
    case"REMOVE_TODO":
    default:
      return state;
  }
}

//2. Redux store - creates store and calls root Reducer, first time its run it needs an inital state (otherwise state will be undefined, redux sends type:"@@redux/INIT" as the action type)
const store = Redux.createStore(rootReducer);

//3. Action - object, has a key of type and a payload (optional), dispatch to reducer to make changes to store
$(document).ready(function(){
  //Event listener - on fourm submit
  $("form").on("submit", function(event){
    //Stop the page refreshing
    event.preventDefault();
    //Find the id of task and store its value in newTask (what the user typed in)
    let newTask = $("#task").val()
    //Dispatch an action and send the value of what the user typed to root Reducer
    store.dispatch({
      type: "ADD_TODO",
      task: newTask
    });
    let currentState = store.getState();
    //Display what user typed in as an <li> on screen
    let $newLi = $("<li>", {
      text: newTask
    });
    $("#todos").append($newLi);
    //Resets values in form
    $("form").trigger("reset");
  });
});
