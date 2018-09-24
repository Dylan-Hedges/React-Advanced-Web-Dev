import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Import the create store functionality
import {createStore} from "redux";
//Import the rootReducer
import rootReducer from "./rootReducer";
//Connects React app with the Redux store - allows React components to dispatch actions, without only the store can dispatch actions
import {Provider} from "react-redux";

//Create the store using the root reducer; "window..." - copied from redux devtools (zalmoxisus)
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//<Provider store={store}> - connects React App with Store, wrap app using provider tags; store={store} specifies what store we are connecting to
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
