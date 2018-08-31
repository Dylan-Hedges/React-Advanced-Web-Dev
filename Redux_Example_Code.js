//0. Set inital state
var initialState = {
  count: 0
}

//1. Create Reducer - a function that determines what the global state looks like, MUST be a pure function for Redux to work (so you can use time travel to look at previous states, if you mutate it directly it will overwrite the state and you cant look back); creates a new global state (e.g using ...)
function rootReducer(state=initialState, action){
  if(action.type==="INCREMENT"){
    let newState = Object.assign({}, state)
    newState.count++
    return newState
  }
  if(action.type==="DECREMENT"){
    let newState = Object.assign({}, state)
    newState.count--
    return newState
  }
  return state
}

//2. Create Store - creates our global state, "Redux.createStore()" - accepts 1 arguement = the root reducer; Important - the first time a store is created it is important we create a default state
var store = Redux.createStore(rootReducer)

//3a. Dispatch Action - manually, makes changes to state by dispatching actions, every action has to be an object with a key of {type: "VALUE"}
store.dispatch({type: "INCREMENT"})

//3b. Dispatch Action - using a function (AKA Action Creator)
function increment(){
  return {
    type: "INCREMENT"
  }
}
store.dispatch({incremenet()})

//Displays current state, we can use this at any time because we used Redux.createStore we now have a number of methods we can use
store.getState()
