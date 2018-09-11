//Create inital state
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
        //And overwrite the todos property with all current todos; ...newState.todos - saves all current todos in a new array; "{task: action.task," - takes what the user typed in  ("let newTask") and assigns it to the task property; , "id: newState.id}" - takes the incremented id above and assigns it to the "id" property
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      };
    case"REMOVE_TODO":
      //Filters out any todos that dont have the id of the one we want to remove (filter is a pure function and returns a new array)
      let todos = state.todos.filter(val => val.id !== +action.id);
      //This is then added back in as a new state
      return {...state, todos:todos};
    default:
      return state;
  }
}

//2. Redux store - creates store and sends actions to the root Reducer, first time its run it needs an inital state (otherwise state will be undefined, redux sends type:"@@redux/INIT" as the action type)
const store = Redux.createStore(
  rootReducer,
  //Lets us use Redux dev tools Chrome extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//3. JQuery/Action - object, has a key of type and a payload (optional), dispatch to reducer to make changes to store
$(document).ready(function(){
  //Removes todo when the user clicks X - JQuery executes a function
  $("ul").on("click","button", function(event){
    //Dispatches action - Redux dispatches action to Redux store
    store.dispatch({
      type: "REMOVE_TODO",
      id: $(event.target).attr("id")
    });
    //Removes todo - JQuery goes to parent element of the id and removes it (the <li>)
    $(event.target).parent().remove()
  });
  //Event listener - on form submit
  $("form").on("submit", function(event){
    //Stop the page refreshing
    event.preventDefault();
    //Grab what the user typed in - Find the id of task and store its value in newTask (what the user typed in)
    let newTask = $("#task").val()
    //Dispatch an action of "ADD_TODO" and send the value of what the user typed to root Reducer
    store.dispatch({
      type: "ADD_TODO",
      task: newTask
    });
    //Get current state - so we know what the id is for each <li> so we can add it to a button
    let currentState = store.getState();
    //Display what user typed in as an <li> on screen
    let $newLi = $("<li>", {
      text: newTask
    });
    //Create delete button - with text of X and an id of whatever the Redux id is for that todo
    let $newButton = $("<button>", {
      text: "X",
      id: currentState.id
    });
    //Appends button to <li>
    $newLi.append($newButton);
    //Append <li> to todos
    $("#todos").append($newLi);
    //Resets values in form
    $("form").trigger("reset");
  });
});
