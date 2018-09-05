
const initalState = {
  count: 0
};

//1. Reducer - a pure function, defines inital state, takes in actions TYPE keyword, copys state, makes changes, returns new state (dont directly manipulate state)
function rootReducer(state=initalState, action){
  switch(action.type){
    case "INCREMENT":
      var newState = {...state}
      newState.count++;
      return newState;
    case "DECREMENT":
      var newState = {...state}
      newState.count--;
      return newState;
    default:
      return state;
  }
}

//2. Redux store - creates store and calls root Reducer, first time its run it needs an inital state (otherwise state will be undefined, redux sends type:"@@redux/INIT" as the action type)
const store = Redux.createStore(rootReducer);

//3. Action - object, has a key of type and a payload (optional), dispatch to reducer to make changes to store
$(document).ready(function(){
  //Sets text to 0 on page load
  let currentState = store.getState();
  $("#counter").text(currentState.count);
  //Increments when clicking button with id "increment" - dispatches an action to reducer
  $("#increment").on("click", function(){
    store.dispatch({
      type: "INCREMENT"
    });
    //Sets on screen text to new number
    let currentState = store.getState();
    $("#counter").text(currentState.count);
  });
  //Decrements when clicking button with id "decrement"
  $("#decrement").on("click", function(){
    store.dispatch({
      type: "DECREMENT"
    });
    let currentState = store.getState();
    $("#counter").text(currentState.count);
  });
});
