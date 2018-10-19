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
import {BrowserRouter} from "react-router-dom";

//Create the store using the root reducer; "window..." - copied from redux devtools (zalmoxisus)
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//<Provider store={store}> - connects React and Redux, connects React App to Redux Store, wrap app using provider tags; store={store} specifies what store we are connecting to; <BrowserRouter> - Connects React Router to our app
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
